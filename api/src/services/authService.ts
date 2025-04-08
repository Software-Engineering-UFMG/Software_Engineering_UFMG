import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../utils/jwtUtils";
import { UserWithoutPassword } from "../types/userTypes";

export const loginUser = async (
  username: string,
  password: string
): Promise<{ user: UserWithoutPassword; token: string }> => {
  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid username or password");
  }

  const token = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
  });

  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token };
};

export const verifyUserToken = async (
  token: string
): Promise<{ user: UserWithoutPassword }> => {
  const decoded = verifyToken(token);
  const user = await prisma.user.findUnique({ where: { id: decoded.id } });

  if (!user) {
    throw new Error("User not found");
  }

  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword };
};

export const renewUserToken = async (
  token: string
): Promise<{ user: UserWithoutPassword; token: string }> => {
  const decoded = verifyToken(token);
  const user = await prisma.user.findUnique({ where: { id: decoded.id } });

  if (!user) {
    throw new Error("User not found");
  }

  const newToken = generateToken({
    id: user.id,
    username: user.username,
    role: user.role,
  });

  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword, token: newToken };
};
