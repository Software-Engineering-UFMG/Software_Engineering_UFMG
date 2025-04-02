import { FastifyReply } from "fastify";

export const sendErrorResponse = (
  reply: FastifyReply,
  statusCode: number,
  message: string
) => {
  reply.status(statusCode).send({
    error: {
      message,
      statusCode,
    },
  });
};

export const sendResponse = (
  reply: FastifyReply,
  statusCode: number,
  data: any
) => {
  reply.status(statusCode).send(data);
};
