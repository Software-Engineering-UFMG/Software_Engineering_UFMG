import { FastifyInstance } from "fastify";
import {
  getUsersHandler,
  createUserHandler,
} from "../controllers/userController";

export const userRoutes = (app: FastifyInstance) => {
  app.get("/user", getUsersHandler);
  app.post("/user", createUserHandler);
};
