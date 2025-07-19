import { FastifyInstance } from "fastify";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { preceptorRoutes } from "./preceptorRoutes";
import { patientRoutes } from "./patientRoutes";
import { preceptorPacienteRoutes } from "./preceptorPacienteRoutes";
import { ldapRoutes } from "./ldapRoutes";


export const registerRoutes = (app: FastifyInstance) => {
  userRoutes(app);
  authRoutes(app);
  preceptorRoutes(app);
  patientRoutes(app);
  preceptorPacienteRoutes(app);
  ldapRoutes(app);
};


