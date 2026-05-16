import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const corsConfig = {
  origin: process.env.PORT,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // permite cookies e cabeçalho Authorization
};

export default corsConfig;
