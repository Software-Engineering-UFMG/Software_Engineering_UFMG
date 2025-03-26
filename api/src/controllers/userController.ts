import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, getAllUsers } from "../services/userService";

const handleError = (reply: FastifyReply, error: unknown, message: string) => {
  console.error(message, error);
  reply.status(500).send({ error: message });
};

export const getUsersHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await getAllUsers();
    reply.send(users);
  } catch (error) {
    handleError(reply, error, "Erro ao buscar usuários");
  }
};

export const createUserHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { name, email } = req.body as { name: string; email: string };

    if (!name || !email) {
      return reply.status(400).send({ error: "Nome e email são obrigatórios" });
    }

    const newUser = await createUser(name, email);
    reply.status(201).send(newUser);
  } catch (error) {
    handleError(reply, error, "Erro ao criar usuário");
  }
};
