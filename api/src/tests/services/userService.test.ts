import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userService";

jest.mock("../../config/prisma", () => ({
  prisma: {
    user: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
}));

jest.mock("bcrypt", () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

describe("User Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllUsers", () => {
    it("should return all users without passwords", async () => {
      const mockUsers = [
        { id: 1, name: "John", email: "john@example.com", password: "hashed" },
      ];
      (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

      const result = await getAllUsers();

      expect(result).toEqual([
        { id: 1, name: "John", email: "john@example.com" },
      ]);
      expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe("getUserById", () => {
    it("should return a user without password", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        email: "john@example.com",
        password: "hashed",
      };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const result = await getUserById(1);

      expect(result).toEqual({
        id: 1,
        name: "John",
        email: "john@example.com",
      });
      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it("should return null if user is not found", async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await getUserById(1);

      expect(result).toBeNull();
    });
  });

  describe("createUser", () => {
    it("should create a user and return it without password", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        email: "john@example.com",
        password: "hashed",
      };
      (bcrypt.hash as jest.Mock).mockResolvedValue("hashed");
      (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

      const result = await createUser({
        name: "John",
        email: "john@example.com",
        password: "password123",
        birthDate: new Date("1990-01-01"),
        role: "user",
      });

      expect(result).toEqual({
        id: 1,
        name: "John",
        email: "john@example.com",
      });
      expect(bcrypt.hash).toHaveBeenCalledWith("password123", 10);
      expect(prisma.user.create).toHaveBeenCalled();
    });
  });

  describe("updateUser", () => {
    it("should update a user and return it without password", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        email: "john@example.com",
        password: "hashed",
      };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (bcrypt.hash as jest.Mock).mockResolvedValue("newHashed");

      // Ajuste no mock para refletir a atualização
      (prisma.user.update as jest.Mock).mockResolvedValue({
        ...mockUser,
        name: "John Updated", // Atualização aplicada
        password: "newHashed",
      });

      const result = await updateUser(1, {
        name: "John Updated",
        currentPassword: "password123",
        password: "newPassword123",
      });

      expect(result).toEqual({
        id: 1,
        name: "John Updated",
        email: "john@example.com",
      });
      expect(bcrypt.compare).toHaveBeenCalledWith("password123", "hashed");
      expect(bcrypt.hash).toHaveBeenCalledWith("newPassword123", 10);
      expect(prisma.user.update).toHaveBeenCalled();
    });

    it("should throw an error if current password is incorrect", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        email: "john@example.com",
        password: "hashed",
      };
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        updateUser(1, {
          currentPassword: "wrongPassword",
          password: "newPassword123",
        })
      ).rejects.toThrow("Current password is incorrect.");
    });

    it("should throw an error if current password is missing when updating password", async () => {
      await expect(
        updateUser(1, {
          password: "newPassword123",
        })
      ).rejects.toThrow("Current password is required to update the password.");
    });
  });

  describe("deleteUser", () => {
    it("should delete a user", async () => {
      (prisma.user.delete as jest.Mock).mockResolvedValue({});

      await deleteUser(1);

      expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
});
