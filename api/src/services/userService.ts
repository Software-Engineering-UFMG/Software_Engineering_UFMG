import { PrismaClient } from "@prisma/client";
import {
  CreateUserDTO,
  UpdateUserByIdDTO,
  UpdateUserDTO,
} from "../types/userTypes";
import { UserWithoutPassword } from "../types/userTypes";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<UserWithoutPassword[]> => {
  const users = await prisma.usuario.findMany();
  return users.map(usuario => ({
    id: usuario.id,
    name: usuario.nome_completo,
    username: usuario.login,
    role: usuario.tipo,
    specialty: usuario.especialidade,
    status: usuario.status,
    createdAt: usuario.createdAt,
  })) as UserWithoutPassword[];
};

export const getUserById = async (
  id: number
): Promise<UserWithoutPassword | null> => {
  // Get user from Usuario table (not User table)
  const user = await prisma.usuario.findUnique({ where: { id } });
  if (!user) return null;
  
  return {
    id: user.id,
    name: user.nome_completo,
    username: user.login,
    role: user.tipo,
    specialty: user.especialidade,
    status: user.status,
    createdAt: user.createdAt,
  } as UserWithoutPassword;
};

export const createUser = async (
  data: CreateUserDTO
): Promise<UserWithoutPassword> => {
  // Check if login already exists in Usuario table
  const existingUser = await prisma.usuario.findUnique({
    where: { login: data.username },
  });

  if (existingUser) {
    throw new Error("Username already exists"); // This error is thrown
  }

  // Only creates user if login doesn't exist
  const usuario = await prisma.usuario.create({
    data: {
      nome_completo: data.name,
      login: data.username,
      tipo: data.role,
      especialidade: data.specialty || null,
      status: "Desativado",
    },
  });

  return {
    id: usuario.id,
    name: usuario.nome_completo,
    username: usuario.login,
    role: usuario.tipo,
    specialty: usuario.especialidade,
    status: usuario.status,
    createdAt: usuario.createdAt,
  } as UserWithoutPassword;
};

export const updateOwnUser = async (
  id: number,
  data: UpdateUserDTO
): Promise<UserWithoutPassword> => {
  // Update in Usuario table only
  const updatedUser = await prisma.usuario.update({
    where: { id },
    data: {
      ...(data.name && { nome_completo: data.name }),
      ...(data.role && { tipo: data.role }),
      ...(data.specialty !== undefined && { especialidade: data.specialty }),
      ...(data.status && { status: data.status }),
    },
  });

  return {
    id: updatedUser.id,
    name: updatedUser.nome_completo,
    username: updatedUser.login,
    role: updatedUser.tipo,
    specialty: updatedUser.especialidade,
    status: updatedUser.status,
    createdAt: updatedUser.createdAt,
  } as UserWithoutPassword;
};

export const updateUserById = async (
  id: number,
  data: UpdateUserByIdDTO
): Promise<UserWithoutPassword> => {
  const updatedUser = await prisma.usuario.update({
    where: { id },
    data: {
      ...(data.name && { nome_completo: data.name }),
      ...(data.role && { tipo: data.role }),
      ...(data.specialty !== undefined && { especialidade: data.specialty }),
      ...(data.status && { status: data.status }), // This handles status updates
    },
  });

  return {
    id: updatedUser.id,
    name: updatedUser.nome_completo,
    username: updatedUser.login,
    role: updatedUser.tipo,
    specialty: updatedUser.especialidade,
    status: updatedUser.status,
    createdAt: updatedUser.createdAt,
  } as UserWithoutPassword;
};

export const deleteUser = async (id: number): Promise<void> => {
  // Delete from Usuario table (not User table)
  await prisma.usuario.delete({ where: { id } });
};
