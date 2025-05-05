import { prisma } from "../config/prisma";
import { Patient, CreatePatientDTO, UpdatePatientDTO } from "../types/patientTypes";

export const getAllPatients = async (): Promise<Patient[]> => {
  return await prisma.patient.findMany();
};

export const getPatientById = async (id: number): Promise<Patient | null> => {
  return await prisma.patient.findUnique({ where: { id } });
};

export const createPatient = async (data: CreatePatientDTO): Promise<Patient> => {
  const duplicate = await prisma.patient.findUnique({
    where: { medicalRecord: data.medicalRecord },
  });

  if (duplicate) {
    throw new Error("Medical Record already exists");
  }
  
  return await prisma.patient.create({ data: data });
};

export const updatePatient = async (id: number, data: UpdatePatientDTO): Promise<Patient> => {  
  return await prisma.patient.update({ where: { id }, data: data });
};

export const deletePatient = async (id: number): Promise<void> => {
  await prisma.patient.delete({ where: { id } });
};
