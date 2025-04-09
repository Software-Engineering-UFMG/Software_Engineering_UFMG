import { FastifyInstance } from "fastify";
import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/userController";
import { validateSchema } from "../middleware/validationMiddleware";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas";

export const userRoutes = (app: FastifyInstance) => {
  app.get("/user", getUsersHandler);

  app.get("/user/:id", getUserByIdHandler);

  app.post(
    "/user",
    {
      preHandler: validateSchema(createUserSchema),
    },
    createUserHandler
  );

  app.put(
    "/user/:id",
    {
      preHandler: validateSchema(updateUserSchema),
    },
    updateUserHandler
  );

  app.delete("/user/:id", deleteUserHandler);
};
