import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import {
  CreateUserDTO,
  UpdateUserByIdDTO,
  UpdateUserDTO,
} from "../types/userTypes";
import { UserWithoutPassword } from "../types/userTypes";

const SALT_ROUNDS = 10;

export const getAllUsers = async (): Promise<UserWithoutPassword[]> => {
  const users = await prisma.user.findMany();
  return users.map(({ password, ...user }) => user);
};

export const getUserById = async (
  id: number
): Promise<UserWithoutPassword | null> => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return null;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const createUser = async (
  data: CreateUserDTO
): Promise<UserWithoutPassword> => {
  // Check if login already exists in usuario table
  const existingUser = await prisma.usuario.findUnique({
    where: { login: data.username },
  });

  if (existingUser) {
    throw new Error("Username already exists");
  }

  // Insert into usuario table
  const usuario = await prisma.usuario.create({
    data: {
      nome_completo: data.name,
      login: data.username,
      tipo: data.role,
      especialidade: data.specialty || null,
      status: "Ativado",
    },
  });

  // Return a compatible UserWithoutPassword object
  return {
    id: usuario.id,
    name: usuario.nome_completo,
    username: usuario.login,
    role: usuario.tipo,
    specialty: usuario.especialidade,
    status: usuario.status,
    createdAt: usuario.createdAt || new Date(), // fallback if not present
    // birthDate, phone, etc. are not present in this table
  } as UserWithoutPassword;
};

export const updateOwnUser = async (
  id: number,
  data: UpdateUserDTO
): Promise<UserWithoutPassword> => {
  if (data.password) {
    if (!data.currentPassword) {
      throw new Error("Current password is required to update the password.");
    }

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user || !(await bcrypt.compare(data.currentPassword, user.password))) {
      throw new Error("Current password is incorrect.");
    }

    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
    delete data.currentPassword;
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
    },
  });

  const { password, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};

export const updateUserById = async (
  id: number,
  data: UpdateUserByIdDTO
): Promise<UserWithoutPassword> => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
    },
  });

  const { password, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({ where: { id } });
};
