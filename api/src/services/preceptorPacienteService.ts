import { PrismaClient } from "@prisma/client";
import { hospitalPrisma } from "../config/hospitalPrisma";

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
      // This fetches the preceptor's details from the hospital database
      const preceptor = await hospitalPrisma.preceptor.findUnique({
        where: { id: rel.preceptorId },
      });
      // This fetches the patient's details from the hospital database
      const patient = await hospitalPrisma.patient.findUnique({
        where: { medicalRecord: rel.medicalRecord },
      });
      return {
        id: rel.id,
        preceptorName: preceptor?.name || null,
        patientName: patient?.name || null,
        birthDate: patient?.birthDate || null,
        hospitalbed: patient?.hospitalbed || null,
        dischargingDate: patient?.dischargingDate || null,
        red2green: rel.red2green,
        status: rel.status,
      };
    })
  );
  return results;
};
