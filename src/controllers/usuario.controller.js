import * as usuarioServices from "../services/usuario.service.js";

export async function createUsuario(req, res) {
  try {
    const dados = req.body;

    const novoUsuario = await usuarioServices.cadastrarUsuario(dados);

    return res.status(201).json({
      message: "Usuário criado com sucesso!",
      data: novoUsuario,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

export async function login(req, res) {
  try {
    const dados = req.body;
    const usuarioLogado = await usuarioServices.login(dados);
    return res.status(200).json({
      message: "Usuário logado com sucesso!",
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
