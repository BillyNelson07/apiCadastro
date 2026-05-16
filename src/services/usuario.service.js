import dotenv from "dotenv";
import sequelize from "../config/database.js";
import bcrypt from "bcryptjs";
import Usuario from "../models/usuario.model.js";
dotenv.config();

export async function cadastrarUsuario({ nome, email, senha }) {
  if (!nome || !email || !senha) {
    throw new Error("Dados incompletos!");
  }

  const emailExistente = await Usuario.findOne({ where: { email } });

  if (emailExistente) {
    throw new Error("Email ja existe.");
  }

  const saltRounds = Number(process.env.SALT_ROUNDS);
  const senhaTransformadaEmHash = await bcrypt.hash(senha, saltRounds);
  const usuarioCadastrado = await Usuario.create({
    nome,
    email,
    senha: senhaTransformadaEmHash,
  });

  const usuarioSemSenha = usuarioCadastrado.get({ plain: true });
  delete usuarioSemSenha.senha;

  return usuarioSemSenha;
}

export async function login({ email, senha }) {
  if (!email || !senha) {
    throw new Error("Dados incompletos!");
  }

  const usuarioValido = await Usuario.findOne({ where: { email } });

  if (!usuarioValido) {
    throw new Error("Dados incorretos!");
  }

  const comparacaoDeSenhas = await bcrypt.compare(senha, usuarioValido.senha);

  if (!comparacaoDeSenhas) {
    throw new Error("Dados incorretos!");
  }

  return "Login realizado!";
}
