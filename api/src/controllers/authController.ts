import { FastifyReply, FastifyRequest } from "fastify";
import { loginUser, renewUserToken } from "../services/authService";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils"; // Add sendResponse import
import { LoginDTO } from "../types/authTypes";
import { setAuthCookie } from "../utils/cookieUtils";

export const loginHandler = async (
  req: FastifyRequest<{ Body: { username: string; password: string } }>,
  reply: FastifyReply
) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return sendErrorResponse(reply, 400, "Username and password are required");
    }

    const { user, token } = await loginUser(username, password);

    // Set HTTP-only cookie
    reply.setCookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    sendResponse(reply, 200, user);
  } catch (error: any) {
    console.error("Login error:", error.message); // Add debug log

    if (error.message.includes("Account is deactivated")) {
      return sendErrorResponse(
        reply,
        403,
        "Account is deactivated. Please contact administrator for activation."
      );
    }

    if (error.message.includes("Invalid username or password")) {
      return sendErrorResponse(reply, 401, "Invalid username or password");
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
