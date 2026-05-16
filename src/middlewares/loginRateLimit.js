import rateLimit from "express-rate-limit";

export const limitadorDeLogin = rateLimit({
  windowMs: 60000, //milisegundos / 1 minuto
  max: 3,
  message: {
    erro: "Muitas requisições. Tente novamente em 1 minuto.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
