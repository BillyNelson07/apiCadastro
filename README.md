# 🚀 API de Cadastro e Autenticação

Este projeto consiste em uma API REST de cadastro e autenticação de usuários desenvolvida como atividade prática para o curso técnico de **Desenvolvimento de Sistemas do SENAI**. 

A aplicação foi estruturada seguindo o padrão de arquitetura em camadas, garantindo uma separação clara entre rotas, controladores, serviços, modelos e middlewares de segurança.

---

## 🛠️ Tecnologias e Bibliotecas

* **Ambiente de Execução:** [Node.js](https://nodejs.org/)
* **Framework Web:** [Express](https://expressjs.com/) (com suporte a ES Modules/`import`)
* **Banco de Dados & ORM:** [PostgreSQL](https://www.postgresql.org/) gerenciado através do [Sequelize](https://sequelize.org/)
* **Segurança:**
  * `bcryptjs`: Criptografia segura (hashing) para o armazenamento de senhas.
  * `helmet`: Configuração de cabeçalhos HTTP para mitigar vulnerabilidades comuns na web.
  * `express-rate-limit`: Proteção de endpoints críticos contra ataques de força bruta.
* **Ferramenta de Desenvolvimento:** `nodemon` (atualização automática do servidor durante o desenvolvimento).

---

## 📂 Estrutura do Projeto (`src/`)

O código está organizado dentro do diretório `src` da seguinte forma:

```text
src/
├── config/       # Configurações de conexão com o banco de dados e variáveis de ambiente
├── controllers/  # Gerenciamento das requisições HTTP e respostas da API
├── middlewares/  # Interceptadores de segurança (ex: limitadores de requisições)
├── models/       # Modelagem das tabelas do banco de dados utilizando Sequelize
├── routes/       # Definição dos endpoints e mapeamento das rotas
└── services/     # Camada de lógica de negócio e persistência de dados
🛣️ Endpoints da API
A API centraliza suas operações na rota de usuários, contando com proteção ativa no fluxo de autenticação:

Usuários
POST /usuario/cadastrar

Descrição: Realiza o registro de um novo usuário no banco de dados.

Ações internas: Criptografia da senha antes do armazenamento.

POST /usuario/login

Descrição: Autentica o usuário no sistema.

Segurança integrada: Possui o middleware limitadorDeLogin (express-rate-limit) anexado diretamente à rota, bloqueando tentativas excessivas de login para mitigar ataques de força bruta.

⚙️ Como Executar a Aplicação
Pré-requisitos
Certifique-se de possuir instalado em seu ambiente:

Node.js (versão LTS)

PostgreSQL ativo com uma base de dados criada

Passos para Execução
Clonar o repositório:

Bash
git clone https://github.com/BillyNelson07/nome-do-repositorio.git
cd nome-do-repositorio
Instalar as dependências:

Bash
npm install
Configurar as Variáveis de Ambiente:
Crie um arquivo .env na raiz do projeto e configure as credenciais do seu banco de dados local:

Snippet de código
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario_postgres
DB_PASS=sua_senha_postgres
DB_NAME=nome_do_seu_banco
Iniciar o Servidor:
Para rodar o projeto utilizando o nodemon em ambiente de desenvolvimento:

Bash
npm run dev
O servidor estará ativo em: http://localhost:3000

Feito com 💻 por BillyNelson07 para a atividade prática do SENAI.
