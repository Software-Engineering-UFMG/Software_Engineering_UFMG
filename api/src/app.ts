import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
import { registerRoutes } from "./routes";

const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

const environment = process.env.ENVIRONMENT || "development";

const allowedOriginsDevelopment = [
  "http://localhost:5000",
  "http://localhost:81",
];
const allowedOriginsProduction = [
  "http://135.234.180.253:5000",
  "http://135.234.180.253:81",
];

const allowedOrigins =
  environment === "production"
    ? [...allowedOriginsDevelopment, ...allowedOriginsProduction]
    : allowedOriginsDevelopment;

fastify.register(cors, {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      const errorMessage = `CORS Error: Origin ${origin} is not allowed.`;
      console.error(errorMessage);
      cb(new Error(errorMessage), false);
    }
  },
});

registerRoutes(fastify);

export { fastify, prisma };
