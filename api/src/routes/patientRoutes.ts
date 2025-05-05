import { FastifyInstance } from "fastify";
import { authMiddleware } from "../middleware/authMiddleware";
import { validateSchema } from "../middleware/validationMiddleware";
import {
  getPatientsHandler,
  getPatientByIdHandler,
  createPatientHandler,
  updatePatientHandler,
  deletePatientHandler,
} from "../controllers/patientController";
import { createPatientSchema, updatePatientSchema } from "../schemas/patientSchemas";

export const patientRoutes = (app: FastifyInstance) => {
  app.get("/patients", { preHandler: [authMiddleware] }, getPatientsHandler);

  app.post<{
    Body: (typeof createPatientSchema)["_output"];
  }>("/patient", { preHandler: [authMiddleware, validateSchema(createPatientSchema)] }, createPatientHandler);

  app.get<{
    Params: { id: number }
  }>("/patient/:id", { preHandler: [authMiddleware] }, getPatientByIdHandler);

  app.put<{
    Params: { id: number };
    Body: (typeof updatePatientSchema)["_output"];
  }>("/patient/:id", { preHandler: [authMiddleware, validateSchema(updatePatientSchema)] }, updatePatientHandler);

  app.delete<{
    Params: { id: number }
  }>("/patient/:id", { preHandler: [authMiddleware] }, deletePatientHandler);
};
