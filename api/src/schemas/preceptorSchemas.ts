import { z } from "zod";

export const preceptorSchema = z.object({
  id: z.number(),
  name: z.string().max(100),
});
