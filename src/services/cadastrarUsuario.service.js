import dotenv from "dotenv";
dotenv.config();

export async function cadastrarUsuario(nome, email, senha) {
  if (!nome || !email || !senha) {
    return "Dados incompletos!";
  }
}
