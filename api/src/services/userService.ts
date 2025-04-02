import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import { CreateUserDTO, UpdateUserDTO } from "../types/userTypes";
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
  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);
  const user = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      birthDate: new Date(data.birthDate),
    },
  });
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const updateUser = async (
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

export const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({ where: { id } });
};
