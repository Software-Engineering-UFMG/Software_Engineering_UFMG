import { z } from "zod";

export const patientSchema = z.object({
  id: z.number(),
  name: z.string().max(100),
  medicalRecord: z.string().max(50),
  hospitalbed: z.string().max(20).nullable(),
  birthDate: z.string(),
  entranceDate: z.string(),
  dischargingDate: z.string().nullable(),
  status: z.string().max(20),
});
