import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateOwnUserHandler,
  updateUserByIdHandler,
  deleteUserHandler,
} from "../../controllers/userController";
import * as userService from "../../services/userService";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateUserDTO,
  UpdateUserDTO,
  UpdateUserByIdDTO,
  UserWithoutPassword,
} from "../../types/userTypes";
import { decodeToken } from "../../utils/jwtUtils";

jest.mock("../../services/userService");
jest.mock("../../utils/jwtUtils");

const mockReply = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
  setCookie: jest.fn().mockReturnThis(),
  clearCookie: jest.fn().mockReturnThis(),
} as unknown as FastifyReply;

describe("User Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getUsersHandler", () => {
    it("should return a list of users", async () => {
      const mockUsers: UserWithoutPassword[] = [
        {
          id: 1,
          name: "John",
          username: "john_doe",
          birthDate: new Date("1990-01-01"),
          role: "Admin",
          status: "Active",
          createdAt: new Date(),
        },
      ];
      jest.spyOn(userService, "getAllUsers").mockResolvedValue(mockUsers);

      await getUsersHandler({} as FastifyRequest, mockReply);

      expect(userService.getAllUsers).toHaveBeenCalledTimes(1);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUsers);
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getAllUsers").mockRejectedValue(new Error());

      await getUsersHandler({} as FastifyRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });

  describe("getUserByIdHandler", () => {
    it("should return a user by ID", async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        name: "John",
        username: "john_doe",
        birthDate: new Date("1990-01-01"),
        role: "Admin",
        status: "Active",
        createdAt: new Date(),
      };
      jest.spyOn(userService, "getUserById").mockResolvedValue(mockUser);

      const mockRequest = {
        params: { id: 1 },
      } as FastifyRequest<{ Params: { id: number } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(userService.getUserById).toHaveBeenCalledWith(1);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 404 if user is not found", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue(null);

      const mockRequest = {
        params: { id: 1 },
      } as FastifyRequest<{ Params: { id: number } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());

      const mockRequest = {
        params: { id: 1 },
      } as FastifyRequest<{ Params: { id: number } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });

  describe("createUserHandler", () => {
    it("should create a user", async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        name: "John",
        username: "john_doe",
        birthDate: new Date("1990-01-01"),
        role: "Admin",
        status: "Active",
        createdAt: new Date(),
      };
      jest.spyOn(userService, "createUser").mockResolvedValue(mockUser);

      const mockRequest = {
        body: {
          name: "John",
          username: "john_doe",
          password: "123456",
          birthDate: "01/01/1990",
          role: "Admin",
        },
      } as FastifyRequest<{ Body: CreateUserDTO }>;

      await createUserHandler(mockRequest, mockReply);

      expect(userService.createUser).toHaveBeenCalledWith(mockRequest.body);
      expect(mockReply.status).toHaveBeenCalledWith(201);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 400 for missing fields", async () => {
      const mockRequest = { body: {} } as FastifyRequest<{
        Body: CreateUserDTO;
      }>;

      await createUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "Missing required fields: 'name' and 'username'",
          statusCode: 400,
        },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "createUser").mockRejectedValue(new Error());

      const mockRequest = {
        body: {
          name: "John",
          username: "john_doe",
          password: "123456",
          birthDate: "01/01/1990",
          role: "Admin",
        },
      } as FastifyRequest<{ Body: CreateUserDTO }>;

      await createUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });

  describe("updateOwnUserHandler", () => {
    it("should update the logged-in user's data", async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        name: "John Updated",
        username: "john_doe",
        birthDate: new Date("1990-01-01"),
        role: "Admin",
        status: "Active",
        createdAt: new Date(),
      };

      jest.spyOn(userService, "updateOwnUser").mockResolvedValue(mockUser);
      jest.spyOn(userService, "getUserById").mockResolvedValue(mockUser);
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        body: { name: "John Updated", currentPassword: "oldPassword123" },
      } as unknown as FastifyRequest<{ Body: UpdateUserDTO }>;

      await updateOwnUserHandler(mockRequest, mockReply);

      expect(decodeToken).toHaveBeenCalledWith("validToken");
      expect(userService.getUserById).toHaveBeenCalledWith(1);
      expect(userService.updateOwnUser).toHaveBeenCalledWith(
        1,
        mockRequest.body
      );
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 401 if no token is provided", async () => {
      const mockRequest = {
        cookies: {},
        body: { name: "John Updated" },
      } as unknown as FastifyRequest<{ Body: UpdateUserDTO }>;

      await updateOwnUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(401);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "Unauthorized", statusCode: 401 },
      });
    });

    it("should return 404 if user is not found", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue(null);
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        body: { name: "John Updated" },
      } as unknown as FastifyRequest<{ Body: UpdateUserDTO }>;

      await updateOwnUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should return 400 if password is provided without currentPassword", async () => {
      const mockRequest = {
        cookies: { authToken: "validToken" },
        body: { password: "newPassword123" },
      } as unknown as FastifyRequest<{ Body: UpdateUserDTO }>;

      await updateOwnUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "Current password is required to update the password.",
          statusCode: 400,
        },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        body: { name: "John Updated" },
      } as unknown as FastifyRequest<{ Body: UpdateUserDTO }>;

      await updateOwnUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });

  describe("updateUserByIdHandler", () => {
    it("should update a user by ID if logged-in user is Admin", async () => {
      const mockLoggedUser: UserWithoutPassword = {
        id: 1,
        name: "Admin User",
        username: "admin",
        birthDate: new Date("1990-01-01"),
        role: "Admin",
        status: "Active",
        createdAt: new Date(),
      };

      const mockUpdatedUser: UserWithoutPassword = {
        id: 2,
        name: "Updated User",
        username: "updated_user",
        birthDate: new Date("1992-01-01"),
        role: "Assistencial",
        status: "Active",
        createdAt: new Date(),
      };

      jest
        .spyOn(userService, "getUserById")
        .mockResolvedValueOnce(mockLoggedUser);
      jest
        .spyOn(userService, "updateUserById")
        .mockResolvedValue(mockUpdatedUser);
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        params: { id: 2 },
        body: { name: "Updated User" },
      } as unknown as FastifyRequest<{
        Params: { id: number };
        Body: UpdateUserByIdDTO;
      }>;

      await updateUserByIdHandler(mockRequest, mockReply);

      expect(decodeToken).toHaveBeenCalledWith("validToken");
      expect(userService.updateUserById).toHaveBeenCalledWith(
        2,
        mockRequest.body
      );
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUpdatedUser);
    });

    it("should return 403 if logged-in user is not Admin", async () => {
      const mockLoggedUser: UserWithoutPassword = {
        id: 1,
        name: "Regular User",
        username: "regular_user",
        birthDate: new Date("1990-01-01"),
        role: "Assistencial",
        status: "Active",
        createdAt: new Date(),
      };

      jest.spyOn(userService, "getUserById").mockResolvedValue(mockLoggedUser);
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        params: { id: 2 },
        body: { name: "Updated User" },
      } as unknown as FastifyRequest<{
        Params: { id: number };
        Body: UpdateUserByIdDTO;
      }>;

      await updateUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(403);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "Forbidden: Admin role required", statusCode: 403 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());
      (decodeToken as jest.Mock).mockReturnValue({ id: 1 });

      const mockRequest = {
        cookies: { authToken: "validToken" },
        params: { id: 2 },
        body: { name: "Updated User" },
      } as unknown as FastifyRequest<{
        Params: { id: number };
        Body: UpdateUserByIdDTO;
      }>;

      await updateUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });

  describe("deleteUserHandler", () => {
    it("should delete a user", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue({
        id: 1,
        name: "John",
        username: "john@example.com",
        birthDate: new Date("1990-01-01"),
        status: "Active",
        role: "Admin",
        createdAt: new Date(),
      });

      jest.spyOn(userService, "deleteUser").mockResolvedValue();

      const mockRequest = { params: { id: 1 } } as FastifyRequest<{
        Params: { id: number };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(userService.getUserById).toHaveBeenCalledWith(1);
      expect(userService.deleteUser).toHaveBeenCalledWith(1);
      expect(mockReply.status).toHaveBeenCalledWith(204);
      expect(mockReply.send).toHaveBeenCalledWith(null);
    });

    it("should return 404 if user is not found", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue(null);

      const mockRequest = { params: { id: 1 } } as FastifyRequest<{
        Params: { id: number };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());

      const mockRequest = { params: { id: 1 } } as FastifyRequest<{
        Params: { id: number };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });
});
