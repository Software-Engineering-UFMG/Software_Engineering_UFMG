import { FastifyInstance } from "fastify";
import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/userController";
import { validateSchema } from "../middleware/validationMiddleware";
import {
  createUserSchema,
  updateUserSchema,
  idSchema,
} from "../schemas/userSchemas";
import { authMiddleware } from "../middleware/authMiddleware";

export const userRoutes = (app: FastifyInstance) => {
  app.get("/users", { preHandler: authMiddleware }, getUsersHandler);

  app.get<{ Params: { id: string } }>(
    "/user/:id",
    {
      preHandler: [authMiddleware, validateSchema(idSchema, "params")],
    },
    getUserByIdHandler
  );

  app.post<{ Body: (typeof createUserSchema)["_output"] }>(
    "/user",
    {
      preHandler: validateSchema(createUserSchema),
    },
    createUserHandler
  );

  app.put<{
    Params: { id: string };
    Body: (typeof updateUserSchema)["_output"];
  }>(
    "/user/:id",
    {
      preHandler: [
        authMiddleware,
        validateSchema(idSchema, "params"),
        validateSchema(updateUserSchema),
      ],
    },
    updateUserHandler
  );

  app.delete<{ Params: { id: string } }>(
    "/user/:id",
    {
      preHandler: [authMiddleware, validateSchema(idSchema, "params")],
    },
    deleteUserHandler
  );
};
