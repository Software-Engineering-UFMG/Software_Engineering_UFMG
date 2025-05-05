import { z } from "zod";
import {
  createPreceptorSchema,
  updatePreceptorSchema
} from "../schemas/preceptorSchemas";

export type Preceptor = {
  id: number;
} & z.infer<typeof createPreceptorSchema>;

export type CreatePreceptorDTO = z.infer<typeof createPreceptorSchema>;
export type UpdatePreceptorDTO = z.infer<typeof updatePreceptorSchema>;
