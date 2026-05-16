import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/config/database.js";
import "./src/models/usuario.model.js";
import usuarioRoutes from "./src/routes/usuario.route.js";
import helmet from "helmet";
import cors from "cors";
import corsConfig from "./src/config/corsConfig.js";

dotenv.config();
const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors(corsConfig));

const API_PORT = process.env.API_PORT || 3000;

app.get("/health", (req, res) => {
  console.log("API funcionando");
  res.status(200).send("OK");
});

app.use("/usuario", usuarioRoutes);
app.use("/auth", usuarioRoutes);

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
