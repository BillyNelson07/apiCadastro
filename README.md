# 🚀 API de Cadastro e Autenticação

Este projeto consiste em uma API REST de cadastro e autenticação de usuários desenvolvida como atividade prática para o curso técnico de **Desenvolvimento de Sistemas do SENAI**.

A aplicação foi estruturada seguindo o padrão de arquitetura em camadas, garantindo uma separação clara entre rotas, controladores, serviços, modelos e middlewares de segurança.

---

## 🛠️ Tecnologias e Bibliotecas

* **Ambiente de Execução:** Node.js
* **Framework Web:** Express (com suporte a ES Modules)
* **Banco de Dados & ORM:** PostgreSQL gerenciado através do Sequelize
* **Segurança:**
  * `bcryptjs`: Criptografia segura (hashing) para o armazenamento de senhas.
  * `helmet`: Configuração de cabeçalhos HTTP para mitigar vulnerabilidades comuns na web.
  * `express-rate-limit`: Proteção de endpoints críticos contra ataques de força bruta.
* **Ferramenta de Desenvolvimento:** `nodemon` (atualização automática do servidor).

---

## 📂 Estrutura do Projeto (src/)

O código está organizado dentro do diretório `src` da seguinte forma (as pastas representam a divisão de responsabilidades):

    src/
    ├── config/       # Configurações de conexão com o banco de dados
    ├── controllers/  # Gerenciamento das requisições HTTP e respostas
    ├── middlewares/  # Interceptadores de segurança e limitadores
    ├── models/       # Modelagem das tabelas do banco de dados (Sequelize)
    ├── routes/       # Definição dos endpoints e mapeamento das rotas
    └── services/     # Camada de lógica de negócio e persistência

---

## 🛣️ Endpoints da API

A API centraliza suas operações na rota de usuários:

### **Usuários**

* **`POST /usuario/cadastrar`**
  * **Descrição:** Realiza o registro de um novo usuário no banco de dados.
  * **Ações internas:** Criptografia da senha antes do armazenamento.

* **`POST /usuario/login`**
  * **Descrição:** Autentica o usuário no sistema.
  * **Segurança integrada:** Possui o middleware `limitadorDeLogin` anexado diretamente à rota.

---

## ⚙️ Como Executar a Aplicação

### Pré-requisitos
Certifique-se de possuir instalado em seu ambiente:
* Node.js (versão LTS)
* PostgreSQL ativo com uma base de dados criada

### Passos para Execução

1. **Clonar o repositório:**

    git clone [https://github.com/BillyNelson07/nome-do-repositorio.git](https://github.com/BillyNelson07/nome-do-repositorio.git)

2. **Instalar as dependências:**

    npm install

3. **Configurar as Variáveis de Ambiente:**
Crie um arquivo chamado `.env` na raiz do projeto e configure as credenciais:

    PORT=3000
    DB_HOST=localhost
    DB_USER=seu_usuario_postgres
    DB_PASS=sua_senha_postgres
    DB_NAME=nome_do_seu_banco

4. **Iniciar o Servidor:**

    npm run dev

---

Feito para a atividade prática do SENAI.
