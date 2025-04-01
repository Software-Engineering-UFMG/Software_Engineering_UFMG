import { z } from "zod";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas";

export type User = {
  id: number;
} & z.infer<typeof createUserSchema>;

export type UserWithoutPassword = Omit<User, "password">;

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
