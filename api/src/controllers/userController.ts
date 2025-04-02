import { FastifyReply, FastifyRequest } from "fastify";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/userService";
import { CreateUserDTO, UpdateUserDTO } from "../types/userTypes";
import { sendResponse, sendErrorResponse } from "../utils/responseUtils";

export const getUsersHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await getAllUsers();
    sendResponse(reply, 200, users);
  } catch (error) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const getUserByIdHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
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
  } catch (error) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const createUserHandler = async (
  req: FastifyRequest<{ Body: CreateUserDTO }>,
  reply: FastifyReply
) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return sendErrorResponse(
        reply,
        400,
        "Missing required fields: 'name' and 'email'"
      );
    }

    const newUser = await createUser(req.body);
    sendResponse(reply, 201, newUser);
  } catch (error) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const updateUserHandler = async (
  req: FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>,
  reply: FastifyReply
) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!id || isNaN(Number(id))) {
      return sendErrorResponse(reply, 400, "Invalid or missing 'id' parameter");
    }

    if (!name && !email) {
      return sendErrorResponse(
        reply,
        400,
        "At least one field ('name' or 'email') must be provided"
      );
    }

    const updatedUser = await updateUser(Number(id), req.body);
    if (!updatedUser) {
      return sendErrorResponse(reply, 404, "User not found");
    }
    sendResponse(reply, 200, updatedUser);
  } catch (error) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};

export const deleteUserHandler = async (
  req: FastifyRequest<{ Params: { id: string } }>,
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
  } catch (error) {
    sendErrorResponse(reply, 500, "An unexpected error occurred");
  }
};
