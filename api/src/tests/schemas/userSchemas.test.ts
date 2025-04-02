import {
  createUserSchema,
  updateUserSchema,
  idSchema,
} from "../../schemas/userSchemas";

describe("userSchemas", () => {
  describe("createUserSchema", () => {
    it("should validate a valid user creation payload", () => {
      const validPayload = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        birthDate: "1990-01-01",
        role: "user",
      };

      const result = createUserSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date("1990-01-01"),
      });
    });

    it("should throw an error for missing required fields", () => {
      const invalidPayload = {
        email: "john.doe@example.com",
        password: "password123",
        birthDate: "1990-01-01",
        role: "user",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow("Required");
    });

    it("should throw an error for invalid email format", () => {
      const invalidPayload = {
        name: "John Doe",
        email: "invalid-email",
        password: "password123",
        birthDate: "1990-01-01",
        role: "user",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Invalid email format"
      );
    });

    it("should throw an error for short passwords", () => {
      const invalidPayload = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "123",
        birthDate: "1990-01-01",
        role: "user",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Password must be at least 6 characters"
      );
    });

    it("should throw an error for invalid birthDate format", () => {
      const invalidPayload = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        birthDate: "invalid-date",
        role: "user",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Invalid date format"
      );
    });

    it("should throw an error for invalid role", () => {
      const invalidPayload = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        birthDate: "1990-01-01",
        role: "invalid-role",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Role must be one of: admin, user"
      );
    });
  });

  describe("updateUserSchema", () => {
    it("should validate a valid user update payload", () => {
      const validPayload = {
        name: "John Updated",
        email: "john.updated@example.com",
        password: "newpassword123",
        currentPassword: "oldpassword123",
        birthDate: "1990-01-01",
        role: "admin",
      };

      const result = updateUserSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date("1990-01-01"),
      });
    });

    it("should allow partial updates", () => {
      const partialPayload = {
        name: "John Updated",
      };

      const result = updateUserSchema.parse(partialPayload);

      expect(result).toEqual(partialPayload);
    });

    it("should throw an error for invalid email format", () => {
      const invalidPayload = {
        email: "invalid-email",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Invalid email format"
      );
    });

    it("should throw an error for short passwords", () => {
      const invalidPayload = {
        password: "123",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Password must be at least 6 characters"
      );
    });

    it("should throw an error for invalid birthDate format", () => {
      const invalidPayload = {
        birthDate: "invalid-date",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Invalid date format"
      );
    });

    it("should throw an error for invalid role", () => {
      const invalidPayload = {
        role: "invalid-role",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Invalid enum value. Expected 'admin' | 'user', received 'invalid-role'"
      );
    });
  });

  describe("idSchema", () => {
    it("should validate a valid ID", () => {
      const validId = 1;

      const result = idSchema.parse(validId);

      expect(result).toBe(validId);
    });

    it("should throw an error for negative IDs", () => {
      const invalidId = -1;

      expect(() => idSchema.parse(invalidId)).toThrow(
        "ID must be a positive integer"
      );
    });

    it("should throw an error for non-integer IDs", () => {
      const invalidId = 1.5;

      expect(() => idSchema.parse(invalidId)).toThrow(
        "Expected integer, received float"
      );
    });

    it("should throw an error for non-numeric IDs", () => {
      const invalidId = "abc";

      expect(() => idSchema.parse(invalidId)).toThrow(
        "Expected number, received string"
      );
    });
  });
});
