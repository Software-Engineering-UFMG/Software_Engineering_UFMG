import { prisma } from "../config/prisma";
import {
  Preceptor,
  CreatePreceptorDTO,
  UpdatePreceptorDTO
} from "../types/preceptorTypes";

export const getAllPreceptors = async (): Promise<Preceptor[]> => {
  return await prisma.preceptor.findMany();
};

export const getPreceptorById = async (id: number): Promise<Preceptor | null> => {
  return await prisma.preceptor.findUnique({ where: { id } });
};

export const createPreceptor = async (data: CreatePreceptorDTO): Promise<Preceptor> => {
  return await prisma.preceptor.create({ data: data });
};

export const updatePreceptor = async (id: number, data: UpdatePreceptorDTO): Promise<Preceptor> => {
  return await prisma.preceptor.update({ where: { id }, data: data });
};

export const deletePreceptor = async (id: number): Promise<void> => {
  await prisma.preceptor.delete({ where: { id } });
};
