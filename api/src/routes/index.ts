import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";

export const registerRoutes = (app: FastifyInstance) => {
  app.log.info("Registrando rotas...");
  userRoutes(app);
  app.log.info("Rotas registradas com sucesso.");
};
