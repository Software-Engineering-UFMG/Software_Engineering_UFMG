import { validateSchema } from "../../middleware/validationMiddleware";
import { sendErrorResponse } from "../../utils/responseUtils";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

jest.mock("../../utils/responseUtils", () => ({
  sendErrorResponse: jest.fn(),
}));

describe("validationMiddleware", () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.number().min(18, "Age must be at least 18"),
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should validate and pass the request when the schema is valid", async () => {
    const mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;

    const mockRequest = {
      log: { error: jest.fn() },
      body: { name: "John", age: 25 },
    } as unknown as FastifyRequest;

    const middleware = validateSchema(schema, "body");
    const done = jest.fn();

    await middleware(mockRequest, mockReply, done);

    expect(done).toHaveBeenCalled();
    expect(mockRequest.body).toEqual({ name: "John", age: 25 });
  });

  it("should return a validation error for invalid data", async () => {
    const mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;

    const mockRequest = {
      log: { error: jest.fn() },
      body: { name: "", age: 17 },
    } as unknown as FastifyRequest;

    const middleware = validateSchema(schema, "body");
    const done = jest.fn();

    await middleware(mockRequest, mockReply, done);

    expect(mockRequest.log.error).toHaveBeenCalledWith(
      expect.stringContaining("Validation error")
    );
    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      400,
      "The parameter 'name' is invalid: Name is required"
    );
    expect(done).not.toHaveBeenCalled();
  });

  it("should return a validation error for missing fields", async () => {
    const mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;

    const mockRequest = {
      log: { error: jest.fn() },
      body: {},
    } as unknown as FastifyRequest;

    const middleware = validateSchema(schema, "body");
    const done = jest.fn();

    await middleware(mockRequest, mockReply, done);

    expect(mockRequest.log.error).toHaveBeenCalledWith(
      expect.stringContaining("Validation error")
    );
    expect(sendErrorResponse).toHaveBeenCalledWith(
      mockReply,
      400,
      "The parameter 'name' is invalid: Required"
    );
    expect(done).not.toHaveBeenCalled();
  });

  it("should validate query parameters", async () => {
    const mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;

    const mockRequest = {
      log: { error: jest.fn() },
      query: { name: "John", age: 25 },
    } as unknown as FastifyRequest;

    const middleware = validateSchema(schema, "query");
    const done = jest.fn();

    await middleware(mockRequest, mockReply, done);

    expect(done).toHaveBeenCalled();
    expect(mockRequest.query).toEqual({ name: "John", age: 25 });
  });

  it("should validate route parameters", async () => {
    const mockReply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;

    const mockRequest = {
      log: { error: jest.fn() },
      params: { name: "John", age: 25 },
    } as unknown as FastifyRequest;

    const middleware = validateSchema(schema, "params");
    const done = jest.fn();

    await middleware(mockRequest, mockReply, done);

    expect(done).toHaveBeenCalled();
    expect(mockRequest.params).toEqual({ name: "John", age: 25 });
  });
});
