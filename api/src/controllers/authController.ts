import { FastifyReply, FastifyRequest } from "fastify";
import { loginUser, renewUserToken } from "../services/authService";
import { sendErrorResponse } from "../utils/responseUtils";
import { LoginDTO } from "../types/authTypes";
import { setAuthCookie } from "../utils/cookieUtils";

export const loginHandler = async (
  req: FastifyRequest<{ Body: LoginDTO }>,
  reply: FastifyReply
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return sendErrorResponse(
        reply,
        400,
        "Missing required fields: 'username' or 'password'"
      );
    }

    const result = await loginUser(username, password);

    setAuthCookie(reply, result.token);
    reply.status(200).send(result.user);
  } catch (error: any) {
    if (error.message === "Invalid username or password") {
      return sendErrorResponse(reply, 401, error.message);
    }
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const logoutHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    reply
      .clearCookie("authToken", {
        path: "/",
      })
      .status(200)
      .send({ message: "Logged out successfully" });
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const meHandler = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return sendErrorResponse(reply, 401, "Unauthorized");
    }

    const result = await renewUserToken(token);

    setAuthCookie(reply, result.token);
    reply.status(200).send(result.user);
  } catch (error: any) {
    if (error.message === "User not found") {
      return sendErrorResponse(reply, 404, error.message);
    }
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};
