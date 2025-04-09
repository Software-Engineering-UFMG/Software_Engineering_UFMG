import { prisma } from "../../config/prisma";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "../../utils/jwtUtils";
import {
  loginUser,
  verifyUserToken,
  renewUserToken,
} from "../../services/authService";

jest.mock("../../config/prisma", () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
  },
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn(),
}));

jest.mock("../../utils/jwtUtils", () => ({
  generateToken: jest.fn(),
  verifyToken: jest.fn(),
}));

describe("authService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("loginUser", () => {
    it("should log in the user and return user data and token", async () => {
      const mockUser = {
        id: 1,
        username: "john_doe",
        password: "hashed_password",
        role: "Admin",
      };
      const mockToken = "mockToken";

      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (generateToken as jest.Mock).mockReturnValue(mockToken);

      const result = await loginUser("john_doe", "password123");

      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { username: "john_doe" },
      });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        "password123",
        "hashed_password"
      );
      expect(generateToken).toHaveBeenCalledWith({
        id: mockUser.id,
        username: mockUser.username,
        role: mockUser.role,
      });
      expect(result).toEqual({
        user: {
          id: 1,
          username: "john_doe",
          role: "Admin",
        },
        token: mockToken,
      });
    });

    it("should throw an error if the user is not found", async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(loginUser("john_doe", "password123")).rejects.toThrow(
        "Invalid username or password"
      );
    });

    it("should throw an error if the password is incorrect", async () => {
      const mockUser = {
        id: 1,
        username: "john_doe",
        password: "hashed_password",
        role: "Admin",
      };

      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(loginUser("john_doe", "wrong_password")).rejects.toThrow(
        "Invalid username or password"
      );
    });
  });

  describe("verifyUserToken", () => {
    it("should verify the token and return user data", async () => {
      const mockDecoded = { id: 1 };
      const mockUser = {
        id: 1,
        username: "john_doe",
        role: "Admin",
        password: "hashed_password",
      };

      (verifyToken as jest.Mock).mockReturnValue(mockDecoded);
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);

      const result = await verifyUserToken("mockToken");

      expect(verifyToken).toHaveBeenCalledWith("mockToken");
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: mockDecoded.id },
      });
      expect(result).toEqual({
        user: {
          id: 1,
          username: "john_doe",
          role: "Admin",
        },
      });
    });

    it("should throw an error if the user is not found", async () => {
      const mockDecoded = { id: 1 };

      (verifyToken as jest.Mock).mockReturnValue(mockDecoded);
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(verifyUserToken("mockToken")).rejects.toThrow(
        "User not found"
      );
    });
  });

  describe("renewUserToken", () => {
    it("should renew the token and return user data and new token", async () => {
      const mockDecoded = { id: 1 };
      const mockUser = {
        id: 1,
        username: "john_doe",
        role: "Admin",
        password: "hashed_password",
      };
      const mockNewToken = "newMockToken";

      (verifyToken as jest.Mock).mockReturnValue(mockDecoded);
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (generateToken as jest.Mock).mockReturnValue(mockNewToken);

      const result = await renewUserToken("mockToken");

      expect(verifyToken).toHaveBeenCalledWith("mockToken");
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { id: mockDecoded.id },
      });
      expect(generateToken).toHaveBeenCalledWith({
        id: mockUser.id,
        username: mockUser.username,
        role: mockUser.role,
      });
      expect(result).toEqual({
        user: {
          id: 1,
          username: "john_doe",
          role: "Admin",
        },
        token: mockNewToken,
      });
    });

    it("should throw an error if the user is not found", async () => {
      const mockDecoded = { id: 1 };

      (verifyToken as jest.Mock).mockReturnValue(mockDecoded);
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(renewUserToken("mockToken")).rejects.toThrow(
        "User not found"
      );
    });
  });
});
