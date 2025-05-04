import {
  createUserSchema,
  updateUserByIdSchema,
  updateUserSchema,
} from "../../schemas/userSchemas";

describe("userSchemas", () => {
  describe("createUserSchema", () => {
    it("should validate a valid user creation payload", () => {
      const validPayload = {
        name: "John Doe",
        username: "john_doe",
        password: "password123",
        birthDate: "01/01/1990",
        phone: "123456789",
        role: "Admin",
        specialty: "IT",
      };

      const result = createUserSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date(1990, 0, 1),
      });
    });

    it("should throw an error for missing required fields", () => {
      const invalidPayload = {
        name: "",
        username: "john_doe",
        password: "password123",
        birthDate: "01/01/1990",
        role: "Admin",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Name is required"
      );
    });

    it("should throw an error for invalid birthDate format", () => {
      const invalidPayload = {
        name: "John Doe",
        username: "john_doe",
        password: "password123",
        birthDate: "1990-01-01",
        role: "Admin",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Invalid date format. Use dd/MM/yyyy"
      );
    });

    it("should throw an error for invalid role", () => {
      const invalidPayload = {
        name: "John Doe",
        username: "john_doe",
        password: "password123",
        birthDate: "01/01/1990",
        role: "invalid-role",
      };

      expect(() => createUserSchema.parse(invalidPayload)).toThrow(
        "Invalid enum value. Expected 'NIR' | 'Assistencial' | 'Admin', received 'invalid-role'"
      );
    });

    it("should allow nullable fields for phone and specialty", () => {
      const validPayload = {
        name: "John Doe",
        username: "john_doe",
        password: "password123",
        birthDate: "01/01/1990",
        role: "Admin",
        phone: null,
        specialty: null,
      };

      const result = createUserSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date(1990, 0, 1),
      });
    });
  });

  describe("updateUserSchema", () => {
    it("should validate a valid user update payload", () => {
      const validPayload = {
        name: "John Updated",
        username: "john_updated",
        password: "newpassword123",
        currentPassword: "oldpassword123",
        birthDate: "15/05/1990",
        role: "Assistencial",
        phone: "987654321",
        specialty: "HR",
        status: "Active",
      };

      const result = updateUserSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date(1990, 4, 15),
      });
    });

    it("should allow partial updates", () => {
      const partialPayload = {
        name: "John Updated",
        phone: null,
      };

      const result = updateUserSchema.parse(partialPayload);

      expect(result).toEqual(partialPayload);
    });

    it("should throw an error for invalid role", () => {
      const invalidPayload = {
        role: "invalid-role",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Invalid enum value. Expected 'NIR' | 'Assistencial' | 'Admin', received 'invalid-role'"
      );
    });

    it("should throw an error for invalid status", () => {
      const invalidPayload = {
        status: "invalid-status",
      };

      expect(() => updateUserSchema.parse(invalidPayload)).toThrow(
        "Invalid enum value. Expected 'Active' | 'Inactive', received 'invalid-status'"
      );
    });
  });

  describe("updateUserByIdSchema", () => {
    it("should validate a valid user update by ID payload", () => {
      const validPayload = {
        name: "John Updated",
        username: "john_updated",
        password: "newpassword123",
        birthDate: "15/05/1990",
        role: "Admin",
        phone: "987654321",
        specialty: "HR",
        status: "Inactive",
      };

      const result = updateUserByIdSchema.parse(validPayload);

      expect(result).toEqual({
        ...validPayload,
        birthDate: new Date(1990, 4, 15),
      });
    });

    it("should throw an error for invalid role", () => {
      const invalidPayload = {
        role: "invalid-role",
      };

      expect(() => updateUserByIdSchema.parse(invalidPayload)).toThrow(
        "Invalid enum value. Expected 'NIR' | 'Assistencial' | 'Admin', received 'invalid-role'"
      );
    });

    it("should allow partial updates", () => {
      const partialPayload = {
        name: "John Updated",
        phone: null,
      };

      const result = updateUserByIdSchema.parse(partialPayload);

      expect(result).toEqual(partialPayload);
    });
  });
});
