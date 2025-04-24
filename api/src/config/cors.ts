import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { env } from "./env";

export const registerCors = (app: FastifyInstance) => {
  const allowedOrigins =
    env.ENVIRONMENT === "production"
      ? ["http://135.234.180.253:5000", "http://135.234.180.253:81"]
      : ["http://localhost:5000", "http://localhost:81"];

  app.register(cors, {
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error(`CORS Error: Origin ${origin} is not allowed.`), false);
      }
    },
    credentials:true,
  });
};
