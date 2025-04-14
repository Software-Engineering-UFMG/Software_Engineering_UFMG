import { authMiddleware } from "../../middleware/authMiddleware";
import { verifyToken } from "../../utils/jwtUtils";
import { sendErrorResponse } from "../../utils/responseUtils";
import { FastifyReply, FastifyRequest } from "fastify";

jest.mock("../../utils/jwtUtils", () => ({
  verifyToken: jest.fn(),
}));

jest.mock("../../utils/responseUtils", () => ({
  sendErrorResponse: jest.fn(),
}));

describe("authMiddleware", () => {
  const mockReply = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  } as unknown as FastifyReply;

  const mockRequest = {
    cookies: {},
    log: { error: jest.fn() },
  } as unknown as FastifyRequest;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call sendErrorResponse if no token is present", async () => {
    mockRequest.cookies = {};

    await authMiddleware(mockRequest, mockReply);

    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      401,
      "Unauthorized"
    );
  });

  it("should call sendErrorResponse if the token is invalid", async () => {
    mockRequest.cookies = { authToken: "invalidToken" };
    (verifyToken as jest.Mock).mockImplementation(() => {
      throw new Error("Invalid token");
    });

    await authMiddleware(mockRequest, mockReply);

    expect(verifyToken).toHaveBeenCalledWith("invalidToken");
    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      401,
      "Invalid or expired token"
    );
  });

  it("should set req.user if the token is valid", async () => {
    const decodedToken = { id: 1, username: "john_doe", role: "Admin" };
    mockRequest.cookies = { authToken: "validToken" };
    (verifyToken as jest.Mock).mockReturnValue(decodedToken);

    await authMiddleware(mockRequest, mockReply);

    expect(verifyToken).toHaveBeenCalledWith("validToken");
    expect(mockRequest.user).toEqual(decodedToken);
    expect(sendErrorResponse).not.toHaveBeenCalled();
  });
});
