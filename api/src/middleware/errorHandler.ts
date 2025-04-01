import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { sendErrorResponse } from "../utils/responseUtils";

export const errorHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  sendErrorResponse(reply, statusCode, message);
};
