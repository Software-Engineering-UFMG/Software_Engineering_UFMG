import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../../controllers/userController";
import * as userService from "../../services/userService";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateUserDTO,
  UpdateUserDTO,
  UserWithoutPassword,
} from "../../types/userTypes";

jest.mock("../../services/userService");

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
        params: { id: "1" },
      } as FastifyRequest<{ Params: { id: string } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(userService.getUserById).toHaveBeenCalledWith(1);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 400 for invalid ID", async () => {
      const mockRequest = {
        params: { id: "abc" },
      } as FastifyRequest<{ Params: { id: string } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "Invalid or missing 'id' parameter",
          statusCode: 400,
        },
      });
    });

    it("should return 404 if user is not found", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue(null);

      const mockRequest = {
        params: { id: "1" },
      } as FastifyRequest<{ Params: { id: string } }>;

      await getUserByIdHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());

      const mockRequest = {
        params: { id: "1" },
      } as FastifyRequest<{ Params: { id: string } }>;

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
          birthDate: new Date("1990-01-01"),
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
          birthDate: new Date("1990-01-01"),
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

  describe("createUserHandler", () => {
    it("should create a user", async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        name: "John",
        username: "john@example.com",
        birthDate: new Date("1990-01-01"),
        status: "Active",
        role: "Admin",
        createdAt: new Date(),
      };
      jest.spyOn(userService, "createUser").mockResolvedValue(mockUser);

      const mockRequest = {
        body: {
          name: "John",
          username: "john_doe",
          password: "123456",
          birthDate: new Date("1990-01-01"),
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
          birthDate: new Date("1990-01-01"),
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

  describe("updateUserHandler", () => {
    it("should update a user", async () => {
      const mockUser: UserWithoutPassword = {
        id: 1,
        name: "John",
        username: "john@example.com",
        birthDate: new Date("1990-01-01"),
        status: "Active",
        role: "Admin",
        createdAt: new Date(),
      };
      jest.spyOn(userService, "updateUser").mockResolvedValue(mockUser);

      const mockRequest = {
        params: { id: "1" },
        body: {
          name: "John Updated",
        },
      } as FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>;

      await updateUserHandler(mockRequest, mockReply);

      expect(userService.updateUser).toHaveBeenCalledWith(1, mockRequest.body);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 400 for invalid ID", async () => {
      const mockRequest = {
        params: { id: "abc" },
        body: { name: "John Updated" },
      } as FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>;

      await updateUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "Invalid or missing 'id' parameter",
          statusCode: 400,
        },
      });
    });

    it("should return 400 if no fields are provided", async () => {
      const mockRequest = {
        params: { id: "1" },
        body: {},
      } as FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>;

      await updateUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "At least one field ('name' or 'username') must be provided",
          statusCode: 400,
        },
      });
    });

    it("should return 404 if user is not found", async () => {
      jest
        .spyOn(userService, "updateUser")
        .mockResolvedValue(null as unknown as UserWithoutPassword);

      const mockRequest = {
        params: { id: "1" },
        body: { name: "John Updated" },
      } as FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>;

      await updateUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "updateUser").mockRejectedValue(new Error());

      const mockRequest = {
        params: { id: "1" },
        body: { name: "John Updated" },
      } as FastifyRequest<{ Params: { id: string }; Body: UpdateUserDTO }>;

      await updateUserHandler(mockRequest, mockReply);

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

      const mockRequest = { params: { id: "1" } } as FastifyRequest<{
        Params: { id: string };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(userService.getUserById).toHaveBeenCalledWith(1);
      expect(userService.deleteUser).toHaveBeenCalledWith(1);
      expect(mockReply.status).toHaveBeenCalledWith(204);
      expect(mockReply.send).toHaveBeenCalledWith(null);
    });

    it("should return 400 for invalid ID", async () => {
      const mockRequest = {
        params: { id: "abc" },
      } as FastifyRequest<{ Params: { id: string } }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(400);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: {
          message: "Invalid or missing 'id' parameter",
          statusCode: 400,
        },
      });
    });

    it("should return 404 if user is not found", async () => {
      jest.spyOn(userService, "getUserById").mockResolvedValue(null);

      const mockRequest = { params: { id: "1" } } as FastifyRequest<{
        Params: { id: string };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(404);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "User not found", statusCode: 404 },
      });
    });

    it("should handle errors", async () => {
      jest.spyOn(userService, "getUserById").mockRejectedValue(new Error());

      const mockRequest = { params: { id: "1" } } as FastifyRequest<{
        Params: { id: string };
      }>;

      await deleteUserHandler(mockRequest, mockReply);

      expect(mockReply.status).toHaveBeenCalledWith(500);
      expect(mockReply.send).toHaveBeenCalledWith({
        error: { message: "An unexpected error occurred", statusCode: 500 },
      });
    });
  });
});
