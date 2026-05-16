import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import "./src/models/usuario.model.js";

dotenv.config();
const app = express();

app.use(express.json());

const API_PORT = process.env.API_PORT || 3000;

app.get("/health", (req, res) => {
  console.log("API funcionando");
  res.status(200).send("OK");
});

const iniciarServidor = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Conexao com banco de dados estabelecida");

    app.listen(API_PORT, () => {
      console.log(`Servidor rodando na porta ${API_PORT}`);
    });
  } catch (error) {
    console.error(
      "Erro ao conectar ao iniciar servidor/conectar ao banco de dados:",
      error,
    );
  }
};

iniciarServidor();
