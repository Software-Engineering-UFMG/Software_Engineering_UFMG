import { FastifyReply, FastifyRequest } from "fastify";
import { getPatientByMedicalRecord } from "../services/patientService";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils";

interface GetPatientByMedicalRecordParams {
  medicalRecord: string;
}

export const getPatientByMedicalRecordHandler = async (
  request: FastifyRequest<{ Params: GetPatientByMedicalRecordParams }>,
  reply: FastifyReply
) => {
  try {
    const { medicalRecord } = request.params;

    if (!medicalRecord || typeof medicalRecord !== "string" || medicalRecord.trim() === "") {
      return sendErrorResponse(reply, 400, "Invalid medical record format. Must be a non-empty string.");
    }

    const patient = await getPatientByMedicalRecord(medicalRecord);
    if (!patient) {
      return sendErrorResponse(reply, 404, `Patient with medical record "${medicalRecord}" not found`);
    }
    sendResponse(reply, 200, patient);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "Error fetching patient by medical record");
  }
};
