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
    { preHandler: [authMiddleware] },
    updateUserByIdHandler
  );
};
          console.log("🔍 DEBUG: PUT /user/:id route hit");
          console.log("🔍 DEBUG: Params:", request.params);
          console.log("🔍 DEBUG: Body:", request.body);
          console.log("🔍 DEBUG: User from auth:", (request as any).user);
          console.log("🔍 DEBUG: User ID from params:", request.params.id);
          console.log("🔍 DEBUG: User ID type:", typeof request.params.id);
          console.log("🔍 DEBUG: Authenticated user ID:", (request as any).user?.id);
          console.log("🔍 DEBUG: Authenticated user role:", (request as any).user?.role);
          console.log("🔍 DEBUG: Is same user?", (request as any).user?.id === parseInt(request.params.id));
          console.log("🔍 DEBUG: Headers:", {
            authorization: request.headers.authorization,
            cookie: request.headers.cookie,
            'content-type': request.headers['content-type'],
          });
        }
      ]
    },
    async (request, reply) => {
      console.log("🎯 CONTROLLER: updateUserByIdHandler called");
      console.log("🎯 CONTROLLER: About to call updateUserByIdHandler");
      try {
        const result = await updateUserByIdHandler(request, reply);
        console.log("🎯 CONTROLLER: updateUserByIdHandler completed successfully");
        return result;
      } catch (error) {
        console.error("🎯 CONTROLLER: updateUserByIdHandler failed:", error);
        throw error;
      }
    }
  );
};
