import { FastifyReply } from "fastify";

export const setAuthCookie = (reply: FastifyReply, token: string): void => {
  reply.setCookie("authToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
  });
};