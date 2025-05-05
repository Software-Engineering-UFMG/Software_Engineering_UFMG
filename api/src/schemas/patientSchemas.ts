import { z } from "zod";

export const createPatientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  medicalRecord: z.string().min(1, "Medical record is required"),
  hospitalBed: z.string().nullable().optional(),
});

export const updatePatientSchema = z.object({
  name: z.string().optional(),
  medicalRecord: z.string().optional(),
  hospitalBed: z.string().nullable().optional(),
});
