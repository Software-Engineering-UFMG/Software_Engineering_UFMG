import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";

export const registerRoutes = (app: FastifyInstance) => {
  authRoutes(app);
  userRoutes(app);
};
