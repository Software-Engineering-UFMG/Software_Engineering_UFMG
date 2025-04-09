import { loginSchema } from "../../schemas/authSchemas";

describe("authSchemas", () => {
  describe("loginSchema", () => {
    it("should validate a valid login payload", () => {
      const validPayload = {
        username: "john_doe",
        password: "password123",
      };

      const result = loginSchema.parse(validPayload);

      expect(result).toEqual(validPayload);
    });

    it("should throw an error if username is missing", () => {
      const invalidPayload = {
        username: "",
        password: "password123",
      };

      expect(() => loginSchema.parse(invalidPayload)).toThrow(
        "Username is required"
      );
    });

    it("should throw an error if password is missing", () => {
      const invalidPayload = {
        username: "john_doe",
        password: "",
      };

      expect(() => loginSchema.parse(invalidPayload)).toThrow(
        "Password must be at least 6 characters"
      );
    });

    it("should throw an error if password is less than 6 characters", () => {
      const invalidPayload = {
        username: "john_doe",
        password: "12345",
      };

      expect(() => loginSchema.parse(invalidPayload)).toThrow(
        "Password must be at least 6 characters"
      );
    });

    it("should throw an error if username is empty", () => {
      const invalidPayload = {
        username: "",
        password: "password123",
      };

      expect(() => loginSchema.parse(invalidPayload)).toThrow(
        "Username is required"
      );
    });
  });
});
