import { FastifyInstance } from "fastify";
import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserByIdHandler,
  updateOwnUserHandler,
} from "../controllers/userController";
import { validateSchema } from "../middleware/validationMiddleware";
import {
  createUserSchema,
  updateUserByIdSchema,
} from "../schemas/userSchemas";
import { UpdateUserByIdDTO, UpdateUserDTO } from "../types/userTypes"; // Add UpdateUserDTO import
import { authMiddleware } from "../middleware/authMiddleware";

export const userRoutes = (app: FastifyInstance) => {
  app.get("/users", { preHandler: authMiddleware }, getUsersHandler);

  app.get<{ Params: { id: number } }>(
    "/user/:id",
    {
      preHandler: [authMiddleware],
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

  app.delete<{ Params: { id: number } }>(
    "/user/:id",
    {
      preHandler: [authMiddleware],
    },
    deleteUserHandler
  );

  app.put<{ Body: UpdateUserDTO }>(
    "/user",
    { preHandler: [authMiddleware] }, // Remove validation for now to test
    updateOwnUserHandler
  );

  app.put<{
    Params: { id: number };
    Body: UpdateUserByIdDTO;
  }>(
    "/user/:id",
    { preHandler: [authMiddleware] }, // Remove validation for now to test
    updateUserByIdHandler
  );
};
