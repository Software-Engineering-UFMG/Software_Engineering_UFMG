import { FastifyRequest, FastifyReply } from "fastify";
import { createPreceptorPaciente, getAllPreceptorPacienteWithDetails } from "../services/preceptorPacienteService";

export const createPreceptorPacienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { preceptorId, medicalRecord, status, red2green } = request.body as {
      preceptorId: number;
      medicalRecord: string;
      status: string;
      red2green: string;
    };

    if (
      !preceptorId ||
      !medicalRecord ||
      !status ||
      !red2green
    ) {
      return reply.status(400).send({ message: "Missing required fields" });
    }

    const relation = await createPreceptorPaciente(
      preceptorId,
      medicalRecord,
      status,
      red2green
    );
    reply.status(201).send(relation);
  } catch (error) {
    reply.status(500).send({ message: "Error creating relation" });
  }
};

export const getAllPreceptorPacienteWithDetailsHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const data = await getAllPreceptorPacienteWithDetails();
    reply.send(data);
  } catch (error) {
    reply.status(500).send({ message: "Error fetching dashboard data" });
  }
};
