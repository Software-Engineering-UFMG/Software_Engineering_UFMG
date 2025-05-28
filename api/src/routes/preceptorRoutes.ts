import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import {
  getAllPreceptorsHandler,
  getPreceptorByIdHandler,
  getPreceptorByNameHandler,
} from "../controllers/preceptorController";
// Services are now called by the controller, so direct import might not be needed here
// import {
//   getAllPreceptors,
//   getPreceptorById,
//   getPreceptorByName,
// } from "../services/preceptorService";
// import { preceptorSchema } from "../schemas/preceptorSchemas"; // Not used for validation in these GET routes yet

// Define types for route parameters
interface GetPreceptorByIdParams {
  id: string;
}

interface GetPreceptorByNameParams {
  name: string;
}

export const preceptorRoutes = (app: FastifyInstance) => {
  // GET all preceptors
  app.get("/preceptors", getAllPreceptorsHandler);

  // GET preceptor by ID
  app.get<{ Params: GetPreceptorByIdParams }>(
    "/preceptor/:id",
    getPreceptorByIdHandler
  );

  // GET preceptor by name
  app.get<{ Params: GetPreceptorByNameParams }>(
    "/preceptor/name/:name",
    getPreceptorByNameHandler
  );
};
