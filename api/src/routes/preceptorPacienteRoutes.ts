import { FastifyInstance } from "fastify";
import {
  createPreceptorPacienteHandler,
  getAllPreceptorPacienteWithDetailsHandler,
  updatePreceptorPacienteStatusHandler,
  deletePreceptorPacienteHandler, 
  updatePreceptorPacientePreceptorHandler, 
  getPreceptorPacienteWithDetailsByPreceptorIdHandler, 
  submitQuestionnaireHandler, 
  getTodaysQuestionnaireHandler, 
  deleteAllQuestionnairesForRelationHandler, // <-- add this import
} from "../controllers/preceptorPacienteController";

export const preceptorPacienteRoutes = (app: FastifyInstance) => {
  app.post("/preceptor-paciente", createPreceptorPacienteHandler);
  app.get(
    "/preceptor-paciente/dashboard",
    getAllPreceptorPacienteWithDetailsHandler
  );
  app.post(
    "/preceptor-paciente/:id/status", 
    updatePreceptorPacienteStatusHandler
  );
  app.delete(
    "/preceptor-paciente/:id",
    deletePreceptorPacienteHandler
  );
  app.post(
    "/preceptor-paciente/:id/preceptor",
    updatePreceptorPacientePreceptorHandler
  );
  app.get(
    "/preceptor-paciente/preceptor/:preceptorId",
    getPreceptorPacienteWithDetailsByPreceptorIdHandler
  );

  app.post(
    "/preceptor-paciente/questionnaire",
    submitQuestionnaireHandler
  );

  app.get(
    "/preceptor-paciente/:preceptorPacienteId/questionnaire/today",
    getTodaysQuestionnaireHandler
  );
  app.delete(
    "/preceptor-paciente/:preceptorPacienteId/questionnaires",
    deleteAllQuestionnairesForRelationHandler
  );
};
