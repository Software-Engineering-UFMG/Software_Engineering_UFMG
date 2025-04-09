import { errorHandler } from "../../middleware/errorHandler";
import { sendErrorResponse } from "../../utils/responseUtils";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

jest.mock("../../utils/responseUtils", () => ({
  sendErrorResponse: jest.fn(),
}));

describe("errorHandler", () => {
  const mockReply = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  } as unknown as FastifyReply;

  const mockRequest = {} as FastifyRequest;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should handle errors with a custom status code and message", () => {
    const error: FastifyError = {
      name: "CustomError",
      message: "Custom error message",
      statusCode: 400,
    } as FastifyError;

    errorHandler(error, mockRequest, mockReply);

    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      400,
      "Custom error message"
    );
  });

  it("should handle errors with a default status code and message", () => {
    const error: FastifyError = {
      name: "InternalError",
      message: "",
    } as FastifyError;

    errorHandler(error, mockRequest, mockReply);

    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      500,
      "Internal Server Error"
    );
  });

  it("should handle errors without a message", () => {
    const error: FastifyError = {
      name: "UnknownError",
    } as FastifyError;

    errorHandler(error, mockRequest, mockReply);

    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      500,
      "Internal Server Error"
    );
  });
});
