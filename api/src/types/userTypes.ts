import { z } from "zod";
import {
  createUserSchema,
  updateUserByIdSchema,
  updateUserSchema,
} from "../schemas/userSchemas";

// Remove the old User type, keep only Usuario-based types
export type UserWithoutPassword = {
  id: number;
  name: string;
  username: string;
  role: "NIR" | "Assistencial" | "Admin";
  specialty?: string | null;
  status: string;
  createdAt: Date;
};

export type CreateUserDTO = z.infer<typeof createUserSchema>;

export interface UpdateUserDTO {
  name?: string;
  role?: "NIR" | "Assistencial" | "Admin";
  specialty?: string | null;
  status?: string; 
}

export interface UpdateUserByIdDTO {
  name?: string;
  role?: "NIR" | "Assistencial" | "Admin";
  specialty?: string | null;
  status?: string; 
}
  
