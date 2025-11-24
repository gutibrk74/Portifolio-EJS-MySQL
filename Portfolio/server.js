const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
require("dotenv").config();
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3000;

// --- Conexão MySQL ---
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// --- Middlewares ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// --- View Engine ---
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// --- Perfil (fixo) ---
const perfil = {
  nome: "Gustavo Felipe Morais",
  email: "gutibrk74@gmail.com",
  local: "Caçapava - SP",
  bio: "Olá! sou o Gustavo Felipe...",
  fotoUrl: "/img/MyPhoto.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavo-felipe-morais-a6517b327/",
    github: "https://github.com/gutibrk74"
  },
  formacao: [
    {
      titulo: "Técnico em Tecnologia da Informação",
      instituicao: "Colegio Comercial de Caçapava — Caçapava",
      link: "https://colegiocomercialcpv.com.br/",
      periodo: "Concluído"
    },
    {
      titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      instituicao: "FATEC Prof. Jessen Vidal",
      link: "https://fatecsjc-prd.azurewebsites.net/",
      periodo: "Cursando"
    }
  ],
  cursos: [
    { nome: "HTML & CSS (intermediário)" },
    { nome: "JavaScript (intermediário)" },
    { nome: "Node.js (intermediário)" }
  ],
  competenciasTecnicas: [
    "HTML", "CSS", "JavaScript", "Node.js"
  ],
  competenciasInterpessoais: [
    "Criatividade", "Comunicação", "Trabalho em equipe"
  ]
};

// ---------------------- ROTAS PÁGINAS ----------------------
app.get("/", (req, res) => {
  res.render("index", { perfil, pagina: "inicio" });
});

app.get("/formacao", (req, res) => {
  res.render("formacao", { perfil, pagina: "formacao" });
});

app.get("/competencias", (req, res) => {
  res.render("competencias", { perfil, pagina: "competencias" });
});

// ---------------------- PROJETOS (MySQL) ----------------------

// Página de projetos (carrega do MySQL)
app.get("/projetos", async (req, res) => {
  try {
    const [projetos] = await pool.query(
      "SELECT * FROM projects ORDER BY id DESC"
    );
    res.render("projetos", { perfil, pagina: "projetos", projetos });
  } catch (err) {
    console.error(err);
    res.render("projetos", { perfil, pagina: "projetos", projetos: [] });
  }
});

// API JSON
app.get("/api/projetos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM projects ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar projetos" });
  }
});

// Criar projeto
app.post("/projetos", async (req, res) => {
  try {
    const { titulo, descricao, tecnologias, link } = req.body;

    await pool.query(
      "INSERT INTO projects (titulo, descricao, tecnologias, link) VALUES (?, ?, ?, ?)",
      [titulo, descricao, tecnologias || "", link || ""]
    );

    res.redirect("/projetos");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar projeto");
  }
});

// Atualizar projeto
app.put("/projetos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, descricao, tecnologias, link } = req.body;

    await pool.query(
      "UPDATE projects SET titulo=?, descricao=?, tecnologias=?, link=? WHERE id=?",
      [titulo, descricao, tecnologias || "", link || "", id]
    );

    res.redirect("/projetos");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar projeto");
  }
});

// Deletar projeto
app.delete("/projetos/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await pool.query("DELETE FROM projects WHERE id=?", [id]);

    res.redirect("/projetos");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir projeto");
  }
});

// ---------------------- SERVER ----------------------
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
