import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  role: z.enum(["NIR", "Assistencial", "Admin"]),
  specialty: z.string().nullable().optional(),
});

export const updateUserByIdSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  role: z.enum(["NIR", "Assistencial", "Admin"]).optional(),
  specialty: z.string().nullable().optional(),
  status: z.string().optional(),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  role: z.enum(["NIR", "Assistencial", "Admin"]).optional(),
  specialty: z.string().nullable().optional(),
});

