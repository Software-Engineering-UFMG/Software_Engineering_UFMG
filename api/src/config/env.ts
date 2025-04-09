import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  API_PORT: z.string().regex(/^\d+$/).transform(Number),
  ENVIRONMENT: z.enum(["development", "production"]),
  DATABASE_URL: z.string().url(),
  SECRET_KEY: z.string(),
  JWT_EXPIRATION: z.string(),
});

export const env = envSchema.parse(process.env);
