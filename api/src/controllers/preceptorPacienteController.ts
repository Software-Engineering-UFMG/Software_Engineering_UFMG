import { FastifyRequest, FastifyReply } from "fastify";
import {
  createPreceptorPaciente,
  getAllPreceptorPacienteWithDetails,
  updatePreceptorPacienteStatus,
  deletePreceptorPaciente, // <-- add this import
  updatePreceptorPacientePreceptor, // <-- add this import
  getPreceptorPacienteWithDetailsByPreceptorId, // <-- add this import
  submitQuestionnaire,
  getTodaysQuestionnaire,
  deleteAllQuestionnairesForRelation, // <-- add this import
  deleteScheduledPreceptorPacientes, // <-- add this import
} from "../services/preceptorPacienteService";

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

export const updatePreceptorPacienteStatusHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const { status } = request.body as { status: string };

    if (!id || !status) {
      return reply.status(400).send({ message: "Missing id or status" });
    }

    if (status !== "Ativado" && status !== "Desativado") {
      return reply.status(400).send({ message: "Invalid status value" });
    }

    const updated = await updatePreceptorPacienteStatus(Number(id), status);
    // Always send the updated object and status 200
    return reply.status(200).send(updated);
  } catch (error) {
    reply.status(500).send({ message: "Error updating status" });
  }
};

// Handler to delete a preceptorPaciente relation
export const deletePreceptorPacienteHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    if (!id) {
      return reply.status(400).send({ message: "Missing id" });
    }
    await deletePreceptorPaciente(Number(id));
    return reply.status(204).send(); // No Content
  } catch (error) {
    reply.status(500).send({ message: "Error deleting relation" });
  }
};

// Handler to update the preceptor of a relation
export const updatePreceptorPacientePreceptorHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as { id: string };
    const { preceptorId } = request.body as { preceptorId: number };
    if (!id || !preceptorId) {
      return reply.status(400).send({ message: "Missing id or preceptorId" });
    }
    const updated = await updatePreceptorPacientePreceptor(Number(id), preceptorId);
    return reply.status(200).send(updated);
  } catch (error: any) {
    console.error(error);
    if (error.message === "Preceptor not found in hospital database") {
      return reply.status(404).send({ message: error.message });
    }
    // Handle Prisma "Record to update not found" error
    if (error.code === "P2025") {
      return reply.status(404).send({ message: "PreceptorPaciente relation not found" });
    }
    reply.status(500).send({ message: "Error updating preceptor" });
  }
};

// Handler to get all patients for a specific preceptor
export const getPreceptorPacienteWithDetailsByPreceptorIdHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { preceptorId } = request.params as { preceptorId: string };
    if (!preceptorId) {
      return reply.status(400).send({ message: "Missing preceptorId" });
    }
    const data = await getPreceptorPacienteWithDetailsByPreceptorId(Number(preceptorId));
    reply.send(data);
  } catch (error) {
    reply.status(500).send({ message: "Error fetching preceptor's patients" });
  }
};

// Handler to submit a questionnaire
export const submitQuestionnaireHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { preceptorPacienteId, answers, red2green, dischargeConfirmed } = request.body as {
      preceptorPacienteId: number;
      answers: any;
      red2green: string;
      dischargeConfirmed: boolean;
    };
    if (!preceptorPacienteId || !answers || !red2green) {
      return reply.status(400).send({ message: "Missing required fields" });
    }
    const questionnaire = await submitQuestionnaire(
      preceptorPacienteId,
      answers,
      red2green,
      dischargeConfirmed
    );
    reply.status(201).send(questionnaire);
  } catch (error: any) {
    if (error.message === "Questionnaire already submitted today") {
      return reply.status(409).send({ message: error.message });
    }
    reply.status(500).send({ message: "Error submitting questionnaire" });
  }
};

// Handler to check if today's questionnaire exists for a relation
export const getTodaysQuestionnaireHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { preceptorPacienteId } = request.params as { preceptorPacienteId: string };
    if (!preceptorPacienteId) {
      return reply.status(400).send({ message: "Missing preceptorPacienteId" });
    }
    const questionnaire = await getTodaysQuestionnaire(Number(preceptorPacienteId));
    reply.send({ exists: !!questionnaire });
  } catch (error) {
    reply.status(500).send({ message: "Error checking questionnaire" });
  }
};

// Handler to delete all questionnaires for a relation
export const deleteAllQuestionnairesForRelationHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { preceptorPacienteId } = request.params as { preceptorPacienteId: string };
    if (!preceptorPacienteId) {
      return reply.status(400).send({ message: "Missing preceptorPacienteId" });
    }
    await deleteAllQuestionnairesForRelation(Number(preceptorPacienteId));
    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send({ message: "Error deleting questionnaires" });
  }
};

// Handler to delete scheduled relations
export const deleteScheduledPreceptorPacientesHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const deletedCount = await deleteScheduledPreceptorPacientes();
    return reply.status(200).send({ 
      message: `Deleted ${deletedCount} scheduled relations`,
      deletedCount 
    });
  } catch (error) {
    console.error("Error deleting scheduled relations:", error);
    reply.status(500).send({ message: "Error deleting scheduled relations" });
  }
};
