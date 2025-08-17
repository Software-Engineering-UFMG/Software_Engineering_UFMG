import { PrismaClient } from "@prisma/client";
import { hospitalPrisma } from "../config/hospitalPrisma";
import { addMinutes, startOfDay, endOfDay, addHours, addDays } from "date-fns";

const prisma = new PrismaClient();

// Brazil timezone offset (UTC-3, or UTC-2 during daylight saving time)
// For simplicity, we'll use UTC-3. In production, you might want to handle DST
const BRAZIL_TIMEZONE_OFFSET = -3; // hours

// Helper to get Brazil local time
function getBrazilTime() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (BRAZIL_TIMEZONE_OFFSET * 3600000));
}

// Helper to convert Brazil time to UTC for database storage
function brazilTimeToUtc(brazilDate: Date) {
  return new Date(brazilDate.getTime() - (BRAZIL_TIMEZONE_OFFSET * 3600000));
}

export const createPreceptorPaciente = async (
  preceptorId: number,
  medicalRecord: string,
  status: string,
  red2green: string
) => {
  const brazilNow = getBrazilTime();
  return prisma.preceptorPaciente.create({
    data: {
      preceptorId,
      medicalRecord,
      status,
      red2green,
      createdAt: brazilTimeToUtc(brazilNow),
      updatedAt: brazilTimeToUtc(brazilNow),
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
          COALESCE(i.qrt_numero, p.qrt_numero) as qrt_numero,
          p.unf_seq,
          COALESCE(i.lto_lto_id, p.lto_lto_id) as lto_lto_id,
          i.dthr_internacao as admission_date,
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
        birthDate: patient?.dt_nascimento || null,
        hospitalbed: patient?.qrt_numero || patient?.lto_lto_id || null,
        entranceDate: patient?.admission_date || null, // Now from ain_internacoes
        dischargingDate: patient?.dt_ult_alta || null,
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
          COALESCE(i.qrt_numero, p.qrt_numero) as qrt_numero,
          p.unf_seq,
          COALESCE(i.lto_lto_id, p.lto_lto_id) as lto_lto_id,
          i.dthr_internacao as admission_date,
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
        birthDate: patient?.dt_nascimento || null,
        hospitalbed: patient?.qrt_numero || patient?.lto_lto_id || null,
        entranceDate: patient?.admission_date || null, // Now from ain_internacoes
        dischargingDate: patient?.dt_ult_alta || null,
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
  const brazilNow = getBrazilTime();
  const utcTime = brazilTimeToUtc(brazilNow);
  
  // If deactivating, schedule deletion in 2 minutes
  // If reactivating, cancel scheduled deletion
  let scheduledDeletionAt = null;
  if (status === "Desativado") {
    const deletionTime = addMinutes(brazilNow, 2); // Schedule deletion in 2 minutes
    scheduledDeletionAt = brazilTimeToUtc(deletionTime);
  }
  // If reactivating (status === "Ativado"), scheduledDeletionAt will be null, canceling the deletion
  
  return prisma.preceptorPaciente.update({
    where: { id },
    data: { 
      status,
      updatedAt: utcTime,
      scheduledDeletionAt: scheduledDeletionAt
    },
  });
};

// Update the preceptor of a preceptorPaciente relation
export const updatePreceptorPacientePreceptor = async (
  id: number,
  newPreceptorId: number
) => {
  // Check if preceptor exists in hospital DB using the correct query
  const preceptorResult = await hospitalPrisma.$queryRaw`
    SELECT 
      s.matricula,
      p.nome as nome_completo
    FROM agh.rap_servidores s
    LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
    WHERE s.matricula = ${newPreceptorId}
    AND s.ind_situacao = 'A' 
    AND s.ind_situacao_servidor = 'P'
  `;
  
  const preceptor = (preceptorResult as any[])[0];
  if (!preceptor) {
    throw new Error("Preceptor not found in hospital database");
  }
  
  const brazilNow = getBrazilTime();
  const utcTime = brazilTimeToUtc(brazilNow);
  
  // Update relation in internal database
  return prisma.preceptorPaciente.update({
    where: { id },
    data: { 
      preceptorId: newPreceptorId,
      updatedAt: utcTime
    },
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

// Helper to get today's window from 00:01 to 23:59:59 in Brazil timezone
function getTodayWindow() {
  const nowInBrazil = getBrazilTime();
  const todayStartBrazil = addMinutes(startOfDay(nowInBrazil), 1); // 00:01 Brazil time
  const todayEndBrazil = endOfDay(nowInBrazil); // 23:59:59 Brazil time
  
  // Convert to UTC for database queries
  const todayStart = brazilTimeToUtc(todayStartBrazil);
  const todayEnd = brazilTimeToUtc(todayEndBrazil);
  
  return { todayStart, todayEnd };
}

// Submit a questionnaire for a preceptorPaciente relation
export const submitQuestionnaire = async (
  preceptorPacienteId: number,
  answers: any,
  red2green: string,
  dischargeConfirmed: boolean
) => {
  // Use Brazil timezone for today's window
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

  const brazilNow = getBrazilTime();
  
  // Save questionnaire with Brazil local time converted to UTC
  const questionnaire = await prisma.questionnaire.create({
    data: {
      preceptorPacienteId,
      dischargeDate: brazilTimeToUtc(new Date(answers.dischargeDate)),
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
      createdAt: brazilTimeToUtc(brazilNow),
    },
  });

  // Always update red2green in the relation to match the form
  await prisma.preceptorPaciente.update({
    where: { id: preceptorPacienteId },
    data: { 
      red2green,
      updatedAt: brazilTimeToUtc(brazilNow)
    },
  });

  // If dischargeConfirmed, schedule deactivation in 1 minute (for testing) in Brazil time
  if (dischargeConfirmed) {
    const scheduledTime = addMinutes(brazilNow, 1); // Change to 1440 for 24h in prod
    await prisma.preceptorPaciente.update({
      where: { id: preceptorPacienteId },
      data: {
        scheduledDeactivationAt: brazilTimeToUtc(scheduledTime),
        updatedAt: brazilTimeToUtc(brazilNow)
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
        data: { 
          red2green: "À preencher",
          updatedAt: brazilTimeToUtc(getBrazilTime())
        },
      });
    }
  }
};

// Function to deactivate relations whose scheduledDeactivationAt is in the past
export const deactivateScheduledPreceptorPacientes = async () => {
  const nowUtc = brazilTimeToUtc(getBrazilTime());
  await prisma.preceptorPaciente.updateMany({
    where: {
      scheduledDeactivationAt: {
        lte: nowUtc,
      },
      status: "Ativado",
    },
    data: {
      status: "Desativado",
      scheduledDeactivationAt: null,
      updatedAt: nowUtc,
    },
  });
};

// Function to delete relations whose scheduledDeletionAt is in the past
export const deleteScheduledPreceptorPacientes = async () => {
  const brazilNow = getBrazilTime();
  const nowUtc = brazilTimeToUtc(brazilNow);
  
  // Find relations scheduled for deletion
  const relationsToDelete = await prisma.preceptorPaciente.findMany({
    where: {
      scheduledDeletionAt: {
        lte: nowUtc,
      },
      status: "Desativado",
    },
    select: { id: true }
  });

  // Delete questionnaires and relations
  for (const rel of relationsToDelete) {
    try {
      // Delete all questionnaires for this relation first
      await prisma.questionnaire.deleteMany({
        where: { preceptorPacienteId: rel.id },
      });
      
      // Then delete the relation
      await prisma.preceptorPaciente.delete({
        where: { id: rel.id },
      });
      
      console.log(`Deleted scheduled relation ${rel.id}`);
    } catch (error) {
      console.error(`Error deleting scheduled relation ${rel.id}:`, error);
    }
  }
  
  return relationsToDelete.length;
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
