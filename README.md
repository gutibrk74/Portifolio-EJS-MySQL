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
- **HTML / CSS**
- **JavaScript**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-aa5500?style=for-the-badge&logo=ejs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-e34f26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=csswizardry&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📄 Sobre o projeto

Este portfólio foi desenvolvido como atividade acadêmica, servindo tanto como apresentação pessoal quanto como demonstração prática de:

- Rotas e controllers  
- Templates EJS  
- CRUD completo  
- Integração com MySQL  


