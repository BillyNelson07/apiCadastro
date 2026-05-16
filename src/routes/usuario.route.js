import Router from "express";
import * as usuarioControllers from "../controllers/usuario.controller.js";
import { limitadorDeLogin } from "../middlewares/loginRateLimit.js";

const usuario = Router();

usuario.post("/cadastrar", usuarioControllers.createUsuario);
usuario.post("/login", limitadorDeLogin, usuarioControllers.login);

export default usuario;
