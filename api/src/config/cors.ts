import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { env } from "./env";

export const registerCors = (app: FastifyInstance) => {
  const allowedOrigins =
    env.ENVIRONMENT === "development"
      ? ["http://135.234.180.253:5000", "http://135.234.180.253:81"]
      : ["http://localhost:5000", "http://localhost:81","http://10.36.0.200:5000","http://10.36.0.200:81","http://localhost:5050"];

  app.register(cors, {
    origin : true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
  });
};
