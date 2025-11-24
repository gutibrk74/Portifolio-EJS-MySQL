# 📘 Portfólio Acadêmico — Gustavo Felipe Morais

Aplicação desenvolvida com **Node.js**, **Express** e **EJS**, integrada a um banco de dados **MySQL**.  
O objetivo do projeto é apresentar minha trajetória acadêmica e permitir o gerenciamento de projetos através de operações **CRUD** (Create, Read, Update, Delete).

---

## 🚀 Como executar o projeto

```bash
npm install
npm start
# abra http://localhost:3000
```

Certifique-se de configurar o arquivo **.env** com os dados do seu banco MySQL antes de iniciar.

---

## 📌 Funcionalidades e Rotas

### 🔹 Páginas principais

| **Rota**        | **Descrição**                                   |
|-----------------|-------------------------------------------------|
| `/`             | Página inicial com apresentação pessoal         |
| `/formacao`     | Formação acadêmica e cursos                     |
| `/projetos`     | Lista de projetos + formulário de criação       |
| `/competencias` | Competências técnicas e interpessoais           |
| `/contato`      | Links e informações de contato                  |

---

## 🛠️ CRUD de Projetos

Além da interface web, o módulo de projetos possui endpoints REST.

### **Endpoints disponíveis**

- **GET** `/api/projetos` — retorna todos os projetos em formato JSON  
- **POST** `/projetos` — cria um novo projeto (via formulário)  
- **PUT** `/projetos/:id` — atualiza um projeto existente (`?_method=PUT`)  
- **DELETE** `/projetos/:id` — remove um projeto (`?_method=DELETE`)  

> Os cadastros utilizam **MySQL** como armazenamento.  
> Caso o banco seja recriado, utilize o arquivo **banco.sql** para restaurar a estrutura inicial.

---

## 🧰 Tecnologias utilizadas

- **Node.js**
- **Express**
- **EJS**
- **MySQL**
- **Bootstrap / CSS**
- **Method-Override**

---

## 📄 Sobre o projeto

Este portfólio foi desenvolvido como atividade acadêmica, servindo tanto como apresentação pessoal quanto como demonstração prática de:

- Rotas e controllers  
- Templates EJS  
- CRUD completo  
- Integração com MySQL  
