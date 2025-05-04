import { FastifyReply, FastifyRequest } from "fastify";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateOwnUser,
  updateUserById,
} from "../services/userService";
import {
  CreateUserDTO,
  UpdateUserByIdDTO,
  UpdateUserDTO,
} from "../types/userTypes";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils";
import { decodeToken } from "../utils/jwtUtils";

export const getUsersHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await getAllUsers();
    sendResponse(reply, 200, users);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const getUserByIdHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const user = await getUserById(Number(id));
    if (!user) {
      return sendErrorResponse(reply, 404, "User not found");
    }
    sendResponse(reply, 200, user);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const createUserHandler = async (
  req: FastifyRequest<{ Body: CreateUserDTO }>,
  reply: FastifyReply
) => {
  try {
    const { name, username } = req.body;

    if (!name || !username) {
      return sendErrorResponse(
        reply,
        400,
        "Missing required fields: 'name' and 'username'"
      );
    }

    const newUser = await createUser(req.body);
    sendResponse(reply, 201, newUser);
  } catch (error: any) {
    if (error.message === "Username already exists") {
      return sendErrorResponse(reply, 409, error.message);
    }
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const updateOwnUserHandler = async (
  req: FastifyRequest<{ Body: UpdateUserDTO }>,
  reply: FastifyReply
) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return sendErrorResponse(reply, 401, "Unauthorized");
    }

    const { id: userId } = decodeToken(token);

    if (!userId) {
      return sendErrorResponse(reply, 401, "Unauthorized");
    }

    const { currentPassword, password } = req.body;

    if (password && !currentPassword) {
      return sendErrorResponse(
        reply,
        400,
        "Current password is required to update the password."
      );
    }

    const user = await getUserById(userId);

    if (!user) {
      return sendErrorResponse(reply, 404, "User not found");
    }

    const updatedUser = await updateOwnUser(userId, req.body);

    if (!updatedUser) {
      return sendErrorResponse(reply, 404, "User not found");
    }

    sendResponse(reply, 200, updatedUser);
  } catch (error: any) {
    if (error.message === "Current password is incorrect.") {
      return sendErrorResponse(reply, 401, error.message);
    }

    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const updateUserByIdHandler = async (
  req: FastifyRequest<{ Params: { id: number }; Body: UpdateUserByIdDTO }>,
  reply: FastifyReply
) => {
  try {
    const token = req.cookies.authToken;

    if (!token) {
      return sendErrorResponse(reply, 401, "Unauthorized");
    }

    const { id: userId } = decodeToken(token);

    if (!userId) {
      return sendErrorResponse(reply, 401, "Unauthorized");
    }

    const loggedUser = await getUserById(userId);

    if (!loggedUser) {
      return sendErrorResponse(reply, 404, "Logged-in user not found");
    }

    if (loggedUser.role !== "Admin") {
      return sendErrorResponse(reply, 403, "Forbidden: Admin role required");
    }

    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const updatedUser = await updateUserById(Number(id), req.body);

    if (!updatedUser) {
      return sendErrorResponse(reply, 404, "User not found");
    }

    sendResponse(reply, 200, updatedUser);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const deleteUserHandler = async (
  req: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    const user = await getUserById(Number(id));
    if (!user) {
      return sendErrorResponse(reply, 404, "User not found");
    }

    await deleteUser(Number(id));
    sendResponse(reply, 204, null);
  } catch (error: any) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};
