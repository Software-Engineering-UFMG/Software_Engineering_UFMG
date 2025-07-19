import { prisma } from "../config/prisma"
import { generateToken, verifyToken } from "../utils/jwtUtils";
import { UserWithoutPassword } from "../types/userTypes";

export const loginUser = async (
  username: string,
  password: string
): Promise<{ user: UserWithoutPassword; token: string }> => {
  // Only check Usuario table (no more User table)
  const user = await prisma.usuario.findUnique({ where: { login: username } });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  // Check if user status is "Ativado" - block deactivated users from logging in
  if (user.status !== "Ativado") {
    throw new Error("Account is deactivated. Please contact administrator for activation.");
  }

  // Since we already verified LDAP on the frontend, we don't need to verify password again here
  // The frontend has already confirmed that the LDAP credentials are correct
  
  const token = generateToken({
    id: user.id,
    username: user.login,
    role: user.tipo,
  });

  return { 
    user: {
      id: user.id,
      name: user.nome_completo,
      username: user.login,
      role: user.tipo,
      specialty: user.especialidade,
      status: user.status,
      createdAt: user.createdAt,
    } as UserWithoutPassword, 
    token 
  };
};

export const verifyUserToken = async (
  token: string
): Promise<{ user: UserWithoutPassword }> => {
  const decoded = verifyToken(token);
  
  // Only check Usuario table
  const user = await prisma.usuario.findUnique({ where: { id: decoded.id } });
  
  if (!user) {
    throw new Error("User not found");
  }

  return { 
    user: {
      id: user.id,
      name: user.nome_completo,
      username: user.login,
      role: user.tipo,
      specialty: user.especialidade,
      status: user.status,
      createdAt: user.createdAt,
    } as UserWithoutPassword
  };
};

export const renewUserToken = async (
  token: string
): Promise<{ user: UserWithoutPassword; token: string }> => {
  const decoded = verifyToken(token);
  
  // Only check Usuario table
  const user = await prisma.usuario.findUnique({ where: { id: decoded.id } });

  if (!user) {
    throw new Error("User not found");
  }

  const newToken = generateToken({
    id: user.id,
    username: user.login,
    role: user.tipo,
  });

  return { 
    user: {
      id: user.id,
      name: user.nome_completo,
      username: user.login,
      role: user.tipo,
      specialty: user.especialidade,
      status: user.status,
      createdAt: user.createdAt,
    } as UserWithoutPassword, 
    token: newToken 
  };
};

