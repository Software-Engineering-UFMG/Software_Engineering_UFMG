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

  app.put<{
    Params: { id: number };
    Body: (typeof updateUserSchema)["_output"];
  }>(
    "/user/:id",
    {
      preHandler: [authMiddleware, 
      validateSchema(updateUserSchema)],
      // preHandler: [
      //   authMiddleware,
      //   async (req, reply) => {
      //     try {
      //       await validateSchema(updateUserSchema)(req, reply);
      //     } catch (error) {
      //       if (error instanceof Error) {
      //         console.error("Validation error:", error.message); // Log error message
      //       } else {
      //         console.error("Validation error:", error); // Log unknown error
      //       }
      //       throw error;
      //     }
      //   },
      // ],
    },
    updateUserHandler
    // async (req, reply) => {
    //   console.log("Incoming request body for updateUser:", req.body); 
    //   return updateUserHandler(req, reply); 
    // }
  );

  app.delete<{ Params: { id: number } }>(
    "/user/:id",
    {
      preHandler: [authMiddleware],
    },
    deleteUserHandler
  );
};
