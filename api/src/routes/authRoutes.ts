import { FastifyInstance } from "fastify";
import {
  loginHandler,
  logoutHandler,
  meHandler,
} from "../controllers/authController";
import { validateSchema } from "../middleware/validationMiddleware";
import { loginSchema } from "../schemas/authSchemas";
import { authMiddleware } from "../middleware/authMiddleware";

export const authRoutes = (app: FastifyInstance) => {
  
  app.post(
    "/login",
    {
      preHandler: validateSchema(loginSchema),
    },
    loginHandler
  );

  app.post("/logout", logoutHandler);

  app.get("/me", { preHandler: authMiddleware }, meHandler);
};
