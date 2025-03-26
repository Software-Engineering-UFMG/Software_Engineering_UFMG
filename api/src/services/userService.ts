import { prisma } from "../app";

export const getAllUsers = async () => {
  let users = await prisma.user.findMany();

  return users;
};

export const createUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: { name, email },
  });
};
