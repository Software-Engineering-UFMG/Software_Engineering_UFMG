import {
  loginHandler,
  meHandler,
} from "../../controllers/authController";
import { loginUser, renewUserToken } from "../../services/authService";
import { setAuthCookie } from "../../utils/cookieUtils";
import { sendErrorResponse } from "../../utils/responseUtils";
import { FastifyReply, FastifyRequest } from "fastify";

jest.mock("../../services/authService");
jest.mock("../../utils/cookieUtils");
jest.mock("../../utils/responseUtils");

const mockReply = {
  status: jest.fn().mockReturnThis(),
  send: jest.fn(),
  setCookie: jest.fn().mockReturnThis(),
  clearCookie: jest.fn().mockReturnThis(),
} as unknown as FastifyReply;

describe("authController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("loginHandler", () => {
    it("should log in the user and set the auth cookie", async () => {
      const mockRequest = {
        body: { username: "john_doe", password: "password123" },
      } as FastifyRequest<{ Body: { username: string; password: string } }>;

      const mockUser = { id: 1, username: "john_doe", role: "Admin" };
      const mockToken = "mockToken";

      (loginUser as jest.Mock).mockResolvedValue({
        user: mockUser,
        token: mockToken,
      });

      await loginHandler(mockRequest, mockReply);

      expect(loginUser).toHaveBeenCalledWith("john_doe", "password123");
      expect(setAuthCookie).toHaveBeenCalledWith(mockReply, mockToken);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 400 if username or password is missing", async () => {
      const mockRequest = {
        body: { username: "", password: "" },
      } as FastifyRequest<{ Body: { username: string; password: string } }>;

      await loginHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        400,
        "Missing required fields: 'username' or 'password'"
      );
    });

    it("should return 401 if login fails", async () => {
      const mockRequest = {
        body: { username: "john_doe", password: "wrongPassword" },
      } as FastifyRequest<{ Body: { username: string; password: string } }>;

      (loginUser as jest.Mock).mockRejectedValue(
        new Error("Invalid username or password")
      );

      await loginHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        401,
        "Invalid username or password"
      );
    });

    it("should return 500 for unexpected errors", async () => {
      const mockRequest = {
        body: { username: "john_doe", password: "password123" },
      } as FastifyRequest<{ Body: { username: string; password: string } }>;

      (loginUser as jest.Mock).mockRejectedValue(new Error());

      await loginHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        500,
        "An unexpected error occurred"
      );
    });
  });

  describe("meHandler", () => {
    it("should renew the user token and return the user", async () => {
      const mockRequest = {
        cookies: { authToken: "mockToken" },
        log: { error: jest.fn() },
      } as unknown as FastifyRequest;

      const mockUser = { id: 1, username: "john_doe", role: "Admin" };
      const mockNewToken = "newMockToken";

      (renewUserToken as jest.Mock).mockResolvedValue({
        user: mockUser,
        token: mockNewToken,
      });

      await meHandler(mockRequest, mockReply);

      expect(renewUserToken).toHaveBeenCalledWith("mockToken");
      expect(setAuthCookie).toHaveBeenCalledWith(mockReply, mockNewToken);
      expect(mockReply.status).toHaveBeenCalledWith(200);
      expect(mockReply.send).toHaveBeenCalledWith(mockUser);
    });

    it("should return 401 if no token is provided", async () => {
      const mockRequest = {
        cookies: {},
        log: { error: jest.fn() },
      } as unknown as FastifyRequest;

      await meHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        401,
        "Unauthorized"
      );
    });

    it("should return 404 if the user is not found", async () => {
      const mockRequest = {
        cookies: { authToken: "mockToken" },
        log: { error: jest.fn() },
      } as unknown as FastifyRequest;

      (renewUserToken as jest.Mock).mockRejectedValue(
        new Error("User not found")
      );

      await meHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        404,
        "User not found"
      );
    });

    it("should return 500 for unexpected errors", async () => {
      const mockRequest = {
        cookies: { authToken: "mockToken" },
        log: { error: jest.fn() },
      } as unknown as FastifyRequest;

      (renewUserToken as jest.Mock).mockRejectedValue(new Error());

      await meHandler(mockRequest, mockReply);

      expect(sendErrorResponse).toHaveBeenCalledWith(
        mockReply,
        500,
        "An unexpected error occurred"
      );
    });
  });
});
