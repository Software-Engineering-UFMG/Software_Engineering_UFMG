import { z } from "zod";

export const createPreceptorSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export const updatePreceptorSchema = z.object({
  name: z.string().optional(),
});
