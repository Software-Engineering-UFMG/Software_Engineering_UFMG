import { PrismaClient } from "@prisma/client";
import { hospitalPrisma } from "../config/hospitalPrisma";
import { addMinutes, startOfDay, endOfDay, addHours, addDays } from "date-fns";

const prisma = new PrismaClient();

export const createPreceptorPaciente = async (
  preceptorId: number,
  medicalRecord: string,
  status: string,
  red2green: string
) => {
  return prisma.preceptorPaciente.create({
    data: {
      preceptorId,
      medicalRecord,
      status,
      red2green,
    },
  });
};

export const getAllPreceptorPacienteWithDetails = async () => {
  const relations = await prisma.preceptorPaciente.findMany();
  const results = await Promise.all(
    relations.map(async (rel) => {
      // Query using prontuario (medical record) from real hospital table
      const patientResult = await hospitalPrisma.$queryRaw`
        SELECT 
          p.codigo,
          p.nome,
          TO_CHAR(p.dt_nascimento, 'YYYY-MM-DD') as dt_nascimento,
          p.prontuario,
          p.cpf,
          p.qrt_numero,
          p.unf_seq,
          p.lto_lto_id,
          p.dt_ult_internacao,
          COALESCE(i.dt_prev_alta, p.dt_ult_alta) as discharge_prediction,
          CASE 
            WHEN i.ind_paciente_internado = 'S' THEN 'hospitalized'
            ELSE 'not_hospitalized'
          END as hospitalization_status

        FROM agh.aip_pacientes p
        LEFT JOIN agh.ain_internacoes i ON p.codigo = i.pac_codigo 
          AND i.ind_paciente_internado = 'S'
        WHERE p.prontuario = ${parseInt(rel.medicalRecord)}
        AND p.prnt_ativo = 'A'
      `;
      
      const patient = (patientResult as any[])[0];
      
      // Get preceptor info
      const preceptorResult = await hospitalPrisma.$queryRaw`
        SELECT 
          s.matricula,
          p.nome as nome_completo
        FROM agh.rap_servidores s
        LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
        WHERE s.matricula = ${rel.preceptorId}
        AND s.ind_situacao = 'A' 
        AND s.ind_situacao_servidor = 'P'
      `;
      
      const preceptor = (preceptorResult as any[])[0];
      
      return {
        id: rel.id,
        preceptorName: preceptor?.nome_completo || null,
        patientName: patient?.nome || null,
        birthDate: patient?.dt_nascimento || null, // Now a formatted string
        hospitalbed: patient?.qrt_numero || patient?.lto_lto_id || null,
        entranceDate: patient?.dt_ult_internacao || null,
        dischargingDate: patient?.dt_ult_alta || null, // Maps to frontend
        red2green: rel.red2green,
        status: rel.status,
        medicalRecord: rel.medicalRecord,
        patientCodigo: patient?.codigo || null,
      };
    })
  );
  return results;
};

// Get all relations for a specific preceptor with patient details
export const getPreceptorPacienteWithDetailsByPreceptorId = async (preceptorId: number) => {
  const relations = await prisma.preceptorPaciente.findMany({
    where: { preceptorId }
  });
  const results = await Promise.all(
    relations.map(async (rel) => {
      // Query using prontuario (medical record) from real hospital table
      const patientResult = await hospitalPrisma.$queryRaw`
        SELECT 
          p.codigo,
          p.nome,
          TO_CHAR(p.dt_nascimento, 'YYYY-MM-DD') as dt_nascimento,
          p.prontuario,
          p.cpf,
          p.qrt_numero,
          p.unf_seq,
          p.lto_lto_id,
          p.dt_ult_internacao,
          COALESCE(i.dt_prev_alta, p.dt_ult_alta) as discharge_prediction,
          CASE 
            WHEN i.ind_paciente_internado = 'S' THEN 'hospitalized'
            ELSE 'not_hospitalized'
          END as hospitalization_status

        FROM agh.aip_pacientes p
        LEFT JOIN agh.ain_internacoes i ON p.codigo = i.pac_codigo 
          AND i.ind_paciente_internado = 'S'
        WHERE p.prontuario = ${parseInt(rel.medicalRecord)}
        AND p.prnt_ativo = 'A'
      `;
      
      const patient = (patientResult as any[])[0];
      
      // Get preceptor info
      const preceptorResult = await hospitalPrisma.$queryRaw`
        SELECT 
          s.matricula,
          p.nome as nome_completo
        FROM agh.rap_servidores s
        LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
        WHERE s.matricula = ${rel.preceptorId}
        AND s.ind_situacao = 'A' 
        AND s.ind_situacao_servidor = 'P'
      `;
      
      const preceptor = (preceptorResult as any[])[0];
      
      return {
        id: rel.id,
        preceptorName: preceptor?.nome_completo || null,
        patientName: patient?.nome || null,
        birthDate: patient?.dt_nascimento || null, // Now a formatted string
        hospitalbed: patient?.qrt_numero || patient?.lto_lto_id || null,
        entranceDate: patient?.dt_ult_internacao || null,
        dischargingDate: patient?.dt_ult_alta || null, // Maps to frontend
        red2green: rel.red2green,
        status: rel.status,
        medicalRecord: rel.medicalRecord,
        patientCodigo: patient?.codigo || null,
      };
    })
  );
  return results;
};

export const updatePreceptorPacienteStatus = async (
  id: number,
  status: string
) => {
  return prisma.preceptorPaciente.update({
    where: { id },
    data: { status },
  });
};

// Update the preceptor of a preceptorPaciente relation
export const updatePreceptorPacientePreceptor = async (
  id: number,
  newPreceptorId: number
) => {
  // Check if preceptor exists in hospital DB
  const preceptor = await hospitalPrisma.preceptor.findUnique({
    where: { id: newPreceptorId },
  });
  if (!preceptor) {
    throw new Error("Preceptor not found in hospital database");
  }
  // Update relation
  return prisma.preceptorPaciente.update({
    where: { id },
    data: { preceptorId: newPreceptorId },
  });
};

// Delete a preceptorPaciente relation by ID
export const deletePreceptorPaciente = async (id: number) => {
  try {
    return await prisma.preceptorPaciente.delete({
      where: { id },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      // Record not found
      throw { status: 404, message: "Relation not found" };
    }
    console.error("Error deleting preceptorPaciente with id", id, error);
    throw error;
  }
};

// Helper to get today's window from 00:01 to 23:59:59
function getTodayWindow() {
  const now = new Date();
  const todayStart = addMinutes(startOfDay(now), 1); // 00:01
  const todayEnd = endOfDay(now); // 23:59:59
  return { todayStart, todayEnd };
}

// Submit a questionnaire for a preceptorPaciente relation
export const submitQuestionnaire = async (
  preceptorPacienteId: number,
  answers: any,
  red2green: string,
  dischargeConfirmed: boolean
) => {
  // Use 00:01 as start of day
  const { todayStart, todayEnd } = getTodayWindow();
  const existing = await prisma.questionnaire.findFirst({
    where: {
      preceptorPacienteId,
      createdAt: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
  });
  if (existing) {
    throw new Error("Questionnaire already submitted today");
  }

  // Save questionnaire
  const questionnaire = await prisma.questionnaire.create({
    data: {
      preceptorPacienteId,
      dischargeDate: answers.dischargeDate,
      clinicalCriteria: answers.clinicalCriteria,
      characteristics: answers.characteristics,
      needsAdmission: answers.needsAdmission,
      outpatient: answers.outpatient,
      hospitalDischarge: answers.hospitalDischarge,
      waiting: answers.waiting,
      waitingType: answers.waitingType || [],
      examDetails: answers.examDetails || [],
      dischargeConfirmed,
      red2green,
    },
  });

  // Always update red2green in the relation to match the form
  await prisma.preceptorPaciente.update({
    where: { id: preceptorPacienteId },
    data: { red2green },
  });

  // If dischargeConfirmed, schedule deactivation in 3 minutes (for testing)
  if (dischargeConfirmed) {
    await prisma.preceptorPaciente.update({
      where: { id: preceptorPacienteId },
      data: {
        scheduledDeactivationAt: addMinutes(new Date(), 1), // Change to 1440 for 24h in prod
      },
    });
  }

  return questionnaire;
};

// Set red2green to "À preencher" for relations with no questionnaire today
export const setRed2GreenToApreencherIfNoQuestionnaireToday = async () => {
  const { todayStart, todayEnd } = getTodayWindow();
  // Find all active relations
  const relations = await prisma.preceptorPaciente.findMany({
    where: { status: "Ativado" },
    select: { id: true },
  });

  for (const rel of relations) {
    const questionnaire = await prisma.questionnaire.findFirst({
      where: {
        preceptorPacienteId: rel.id,
        createdAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });
    if (!questionnaire) {
      await prisma.preceptorPaciente.update({
        where: { id: rel.id },
        data: { red2green: "À preencher" },
      });
    }
  }
};

// Function to deactivate relations whose scheduledDeactivationAt is in the past
export const deactivateScheduledPreceptorPacientes = async () => {
  const now = new Date();
  await prisma.preceptorPaciente.updateMany({
    where: {
      scheduledDeactivationAt: {
        lte: now,
      },
      status: "Ativado",
    },
    data: {
      status: "Desativado",
      scheduledDeactivationAt: null,
    },
  });
};

// Get today's questionnaire for a relation
export const getTodaysQuestionnaire = async (preceptorPacienteId: number) => {
  const { todayStart, todayEnd } = getTodayWindow();
  return prisma.questionnaire.findFirst({
    where: {
      preceptorPacienteId,
      createdAt: {
        gte: todayStart,
        lte: todayEnd,
      },
    },
  });
};

export const deleteAllQuestionnairesForRelation = async (preceptorPacienteId: number) => {
  return prisma.questionnaire.deleteMany({
    where: { preceptorPacienteId },
  });
};
