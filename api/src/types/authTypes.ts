import { z } from "zod";
import { loginSchema } from "../schemas/authSchemas";

export type LoginDTO = z.infer<typeof loginSchema>;
