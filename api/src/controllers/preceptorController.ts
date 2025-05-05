import { FastifyReply, FastifyRequest } from "fastify";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils";
import {
  getAllPreceptors,
  getPreceptorById,
  createPreceptor,
  updatePreceptor,
  deletePreceptor,
} from "../services/preceptorService";
import { CreatePreceptorDTO, UpdatePreceptorDTO } from "../types/preceptorTypes";

export const getPreceptorsHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const preceptors = await getAllPreceptors();
    sendResponse(reply, 200, preceptors);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const getPreceptorByIdHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const preceptor = await getPreceptorById(Number(id));

    return preceptor
      ? sendResponse(reply, 200, preceptor)
      : sendErrorResponse(reply, 404, "Preceptor not found");
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const createPreceptorHandler = async (
  req: FastifyRequest<{ Body: CreatePreceptorDTO }>,
  reply: FastifyReply
) => {
  try {
    const preceptor = await createPreceptor(req.body);
    sendResponse(reply, 201, preceptor);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const updatePreceptorHandler = async (
  req: FastifyRequest<{ Params: { id: number }; Body: UpdatePreceptorDTO }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const preceptor = await updatePreceptor(Number(id), req.body);
    
    return preceptor
      ? sendResponse(reply, 200, preceptor)
      : sendErrorResponse(reply, 404, "Preceptor not found");
  } catch (error: any) {
    return sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const deletePreceptorHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const preceptor = await getPreceptorById(Number(id));
    if (!preceptor) {
      return sendErrorResponse(reply, 404, "Preceptor not found");
    }

    await deletePreceptor(Number(id));

    sendResponse(reply, 204, null);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};
