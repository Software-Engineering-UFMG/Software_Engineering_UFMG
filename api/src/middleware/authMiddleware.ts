import { FastifyReply, FastifyRequest } from "fastify";
import { verifyToken } from "../utils/jwtUtils";
import { sendErrorResponse } from "../utils/responseUtils";

export const authMiddleware = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const token = req.cookies.authToken;

  if (!token) {
    return sendErrorResponse(reply, 401, "Unauthorized");
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
  } catch (error) {
    return sendErrorResponse(reply, 401, "Invalid or expired token");
  }
};
