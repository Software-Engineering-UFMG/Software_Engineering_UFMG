import { FastifyInstance } from "fastify";
import { getPatientByMedicalRecordHandler } from "../controllers/patientController";

interface GetPatientByMedicalRecordParams {
  medicalRecord: string;
}

export const patientRoutes = (app: FastifyInstance) => {
  app.get<{ Params: GetPatientByMedicalRecordParams }>(
    "/patient/medicalrecord/:medicalRecord",
    getPatientByMedicalRecordHandler
  );
};
