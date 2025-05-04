import { z } from "zod";
import {
  createUserSchema,
  updateUserByIdSchema,
  updateUserSchema,
} from "../schemas/userSchemas";

export type User = {
  id: number;
  status: "Active" | "Inactive";
  createdAt: Date;
} & z.infer<typeof createUserSchema>;

export type UserWithoutPassword = Omit<User, "password">;

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
export type UpdateUserByIdDTO = z.infer<typeof updateUserByIdSchema>;
