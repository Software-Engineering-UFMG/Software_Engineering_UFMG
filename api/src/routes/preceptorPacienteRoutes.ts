import { FastifyInstance } from "fastify";
import {
  createPreceptorPacienteHandler,
  getAllPreceptorPacienteWithDetailsHandler,
} from "../controllers/preceptorPacienteController";

export const preceptorPacienteRoutes = (app: FastifyInstance) => {
  app.post("/preceptor-paciente", createPreceptorPacienteHandler);
  app.get(
    "/preceptor-paciente/dashboard",
    getAllPreceptorPacienteWithDetailsHandler
  );
};
