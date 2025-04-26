import { ZodSchema, ZodError } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { sendErrorResponse } from "../utils/responseUtils";

const formatValidationError = (error: ZodError): string => {
  const firstError = error.errors[0];
  const parameterName = firstError?.path[firstError.path.length - 1];
  return parameterName
    ? `The parameter '${parameterName}' is invalid: ${firstError.message}`
    : firstError.message;
};

export const validateSchema =
  <T extends ZodSchema>(
    schema: T,
    source: "body" | "query" | "params" = "body"
  ) =>
  async (req: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
      req[source] = schema.parse(req[source]) as T["_output"];
    } catch (error) {
      if (error instanceof ZodError) {
        req.log.error(`Validation error: ${JSON.stringify(error.errors)}`);
        sendErrorResponse(reply, 400, formatValidationError(error));
      } else {
        req.log.error(`Unexpected error: ${error}`);
        sendErrorResponse(reply, 500, "Internal Server Error");
      }
    }
  };
