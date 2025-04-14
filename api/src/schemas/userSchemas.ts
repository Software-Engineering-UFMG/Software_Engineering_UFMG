import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .transform((date) => new Date(date)),
  phone: z.string().nullable().optional(),
  role: z.enum(["NIR", "Assistencial", "Admin"]),
  specialty: z.string().nullable().optional(),
});

export const updateUserSchema = z.object({
  name: z.string().optional(),
  username: z.string().optional(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .optional(),
  currentPassword: z.string().optional(),
  birthDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .transform((date) => new Date(date))
    .optional(),
  phone: z.string().nullable().optional(),
  role: z.enum(["NIR", "Assistencial", "Admin"]).optional(),
  specialty: z.string().nullable().optional(),
  status: z.enum(["Active", "Inactive"]).optional(),
});

export const idSchema = z
  .number()
  .int()
  .positive("ID must be a positive integer");
