import { FastifyReply } from "fastify";

export const setAuthCookie = (reply: FastifyReply, token: string): void => {
  reply.setCookie("authToken", token, {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: "none", // Allows cross-origin requests
    path: "/", // Makes the cookie available for all routes
    maxAge: 60 * 60 * 24 * 7, // Cookie will last for 7 days (in seconds)
  });
};