import { FastifyReply, FastifyRequest } from "fastify";
import {
  getAllPreceptors,
  getPreceptorById,
  getPreceptorsByName, // <-- use plural
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
  console.log("DEBUG: getAllPreceptorsHandler entered");
  try {
    const preceptors = await getAllPreceptors();
    console.log("DEBUG: Preceptors fetched successfully, count:", preceptors.length);
    console.log("DEBUG: First preceptor sample:", preceptors[0]);
    sendResponse(reply, 200, preceptors);
  } catch (error: any) {
    console.error("DEBUG: Error in getAllPreceptorsHandler:", error);
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
  request: FastifyRequest<{ Params: { name: string } }>,
  reply: FastifyReply
) => {
  try {
    const { name } = request.params;
    console.log("DEBUG: Searching preceptors by name:", name);

    if (!name || typeof name !== 'string' || name.trim() === "") {
      return sendErrorResponse(reply, 400, "Invalid name format. Name must be a non-empty string.");
    }

    const preceptors = await getPreceptorsByName(name);
    console.log("DEBUG: Preceptors found by name, count:", preceptors.length);
    sendResponse(reply, 200, preceptors);
  } catch (error: any) {
    console.error("DEBUG: Error in getPreceptorByNameHandler:", error);
    sendErrorResponse(reply, 500, "Error fetching preceptors by name");
  }
};
