import { FastifyInstance } from "fastify";
import {
  getPatientByMedicalRecordHandler,
  getPatientsByMedicalRecordHandler,
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
};
