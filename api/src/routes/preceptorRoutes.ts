import { FastifyInstance } from "fastify";
import { authMiddleware } from "../middleware/authMiddleware";
import { validateSchema } from "../middleware/validationMiddleware";
import { createPreceptorSchema, updatePreceptorSchema } from "../schemas/preceptorSchemas";
import {
  getPreceptorsHandler,
  getPreceptorByIdHandler,
  createPreceptorHandler,
  updatePreceptorHandler,
  deletePreceptorHandler,
} from "../controllers/preceptorController";

export const preceptorRoutes = (app: FastifyInstance) => {
  app.get("/preceptors", { preHandler: [authMiddleware] }, getPreceptorsHandler);

  app.post<{
    Body: (typeof createPreceptorSchema)["_output"];
  }>("/preceptor", { preHandler: [authMiddleware, validateSchema(createPreceptorSchema)] }, createPreceptorHandler);

  app.get<{
    Params: { id: number };
  }>("/preceptor/:id", { preHandler: [authMiddleware] }, getPreceptorByIdHandler);

  app.put<{
    Params: { id: number };
    Body: (typeof updatePreceptorSchema)["_output"];
  }>("/preceptor/:id", { preHandler: [authMiddleware, validateSchema(updatePreceptorSchema)] }, updatePreceptorHandler);

  app.delete<{
    Params: { id: number };
  }>("/preceptor/:id", { preHandler: [authMiddleware] }, deletePreceptorHandler);
};
