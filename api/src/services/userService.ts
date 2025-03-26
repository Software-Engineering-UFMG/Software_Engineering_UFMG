import { prisma } from "../app";

export const getAllUsers = async () => {
  let users = await prisma.user.findMany();

  if (users.length === 0) {
    const defaultUsers = [
      { name: "Usuário 1", email: "user1@example.com" },
      { name: "Usuário 2", email: "user2@example.com" },
    ];

    for (const user of defaultUsers) {
      await createUser(user.name, user.email);
    }

    users = await prisma.user.findMany();
  }

  return users;
};

export const createUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: { name, email },
  });
};
