import { FastifyReply, FastifyRequest } from "fastify";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils";
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from "../services/patientService";
import { CreatePatientDTO, UpdatePatientDTO } from "../types/patientTypes";

export const getPatientsHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const patients = await getAllPatients();
    sendResponse(reply, 200, patients);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const getPatientByIdHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const patient = await getPatientById(Number(id));

    return patient
      ? sendResponse(reply, 200, patient)
      : sendErrorResponse(reply, 404, "Patient not found");
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const createPatientHandler = async (
  req: FastifyRequest<{ Body: CreatePatientDTO }>,
  reply: FastifyReply
) => {
  try {
    const { name, medicalRecord } = req.body;

    if (!name || !medicalRecord) {
      return sendErrorResponse(
        reply,
        400,
        "Missing required fields: 'name' and 'medicalRecord'"
      );
    }

    const patient = await createPatient(req.body);
    sendResponse(reply, 201, patient);
  } catch (error: any) {
    if (error.message === "Medical Record already exists") {
      return sendErrorResponse(reply, 409, error.message);
    }
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const updatePatientHandler = async (
  req: FastifyRequest<{ Params: { id: number }; Body: UpdatePatientDTO }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const patient = await updatePatient(Number(id), req.body);
    
    return patient
      ? sendResponse(reply, 200, patient)
      : sendErrorResponse(reply, 404, "Patient not found");
  } catch (error: any) {
    return sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const deletePatientHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const patient = await getPatientById(Number(id));
    if (!patient) {
      return sendErrorResponse(reply, 404, "Patient not found");
    }

    await deletePatient(Number(id));

    sendResponse(reply, 204, null);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};
