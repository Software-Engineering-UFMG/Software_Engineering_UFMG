import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { preceptorRoutes } from "./preceptorRoutes";

export const registerRoutes = (app: FastifyInstance) => {
  authRoutes(app);
  userRoutes(app);
  preceptorRoutes(app);
};
