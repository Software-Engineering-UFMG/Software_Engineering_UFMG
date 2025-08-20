import { FastifyInstance } from "fastify";
import {
  getPatientByMedicalRecordHandler,
  getPatientsByMedicalRecordHandler,
  getPatientDischargePredictionHandler, // Add this import
} from "../controllers/patientController";

interface GetPatientByMedicalRecordParams {
  medicalRecord: string;
}

export const patientRoutes = (app: FastifyInstance) => {
  app.get<{ Params: GetPatientByMedicalRecordParams }>(
    "/patient/medicalrecord/:medicalRecord",
    getPatientByMedicalRecordHandler
  );
  app.get<{ Params: GetPatientByMedicalRecordParams }>(
    "/patient/medicalrecords/:medicalRecord",
    getPatientsByMedicalRecordHandler
  );
  app.get<{ Params: GetPatientByMedicalRecordParams }>(
    "/patient/discharge-prediction/:medicalRecord",
    getPatientDischargePredictionHandler
  );
};
