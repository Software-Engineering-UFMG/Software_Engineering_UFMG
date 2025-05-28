import { FastifyReply, FastifyRequest } from "fastify";
import {
  getAllPreceptors,
  getPreceptorById,
  getPreceptorByName,
} from "../services/preceptorService";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils"; // Assuming this path from userController.ts

// Define types for route parameters, similar to userController
interface GetPreceptorByIdParams {
  id: string; // Fastify params are strings initially
}

interface GetPreceptorByNameParams {
  name: string;
}

export const getAllPreceptorsHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  console.log("DEBUG: getAllPreceptorsHandler entered"); // Add this line for debugging
  try {
    const preceptors = await getAllPreceptors();
    sendResponse(reply, 200, preceptors);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "Error fetching preceptors");
  }
};

export const getPreceptorByIdHandler = async (
  request: FastifyRequest<{ Params: GetPreceptorByIdParams }>,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params;
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return sendErrorResponse(reply, 400, "Invalid ID format. ID must be a number.");
    }

    const preceptor = await getPreceptorById(numericId);
    if (!preceptor) {
      return sendErrorResponse(reply, 404, "Preceptor not found");
    }
    sendResponse(reply, 200, preceptor);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "Error fetching preceptor by ID");
  }
};

export const getPreceptorByNameHandler = async (
  request: FastifyRequest<{ Params: GetPreceptorByNameParams }>,
  reply: FastifyReply
) => {
  try {
    const { name } = request.params;

    if (!name || typeof name !== 'string' || name.trim() === "") {
      return sendErrorResponse(reply, 400, "Invalid name format. Name must be a non-empty string.");
    }

    const preceptor = await getPreceptorByName(name);
    if (!preceptor) {
      return sendErrorResponse(reply, 404, `Preceptor with name containing "${name}" not found`);
    }
    sendResponse(reply, 200, preceptor);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "Error fetching preceptor by name");
  }
};
