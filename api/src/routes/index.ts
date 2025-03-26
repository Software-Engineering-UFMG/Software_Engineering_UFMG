import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";

export const registerRoutes = (app: FastifyInstance) => {
  userRoutes(app);
};
