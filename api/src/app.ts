import Fastify from "fastify";
import { registerCors } from "./config/cors";
import { registerRoutes } from "./routes";
import { errorHandler } from "./middleware/errorHandler";

const fastify = Fastify({ logger: true });

registerCors(fastify);

fastify.setErrorHandler(errorHandler);

fastify.setNotFoundHandler((request, reply) => {
  reply.status(404).send({ error: "Route not found" });
});

registerRoutes(fastify);

export { fastify };
