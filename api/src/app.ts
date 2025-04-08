import Fastify from "fastify";
import { registerCors } from "./config/cors";
import { registerRoutes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import fastifyCookie from "@fastify/cookie";
import { env } from "./config/env";

const fastify = Fastify({ logger: true });

fastify.register(fastifyCookie, {
  secret: env.SECRET_KEY,
});

registerCors(fastify);

fastify.setErrorHandler(errorHandler);

fastify.setNotFoundHandler((request, reply) => {
  reply.status(404).send({ error: "Route not found" });
});

registerRoutes(fastify);

export { fastify };
