import { z } from "zod";
import { createPatientSchema, updatePatientSchema } from "../schemas/patientSchemas";

export type Patient = {
	id: number;
} & z.infer<typeof createPatientSchema>;

export type CreatePatientDTO = z.infer<typeof createPatientSchema>;
export type UpdatePatientDTO = z.infer<typeof updatePatientSchema>;
