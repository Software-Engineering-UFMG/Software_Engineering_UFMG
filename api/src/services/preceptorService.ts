import { hospitalPrisma } from "../config/hospitalPrisma";

export const getPreceptorById = async (
  id: number
): Promise<any | null> => {
  try {
    const servidor = await hospitalPrisma.rap_servidores.findFirst({
      where: { 
        matricula: id,
        ind_situacao: "A", // Only active employees
        ind_situacao_servidor: "P" // Only professors
      }
    });
    return servidor;
  } catch (error) {
    console.error("Error fetching preceptor by ID:", error);
    throw new Error("Could not fetch preceptor by ID");
  }
};

export const getPreceptorByName = async (
  name: string
): Promise<any | null> => {
  try {
    const preceptor = await hospitalPrisma.rap_servidores.findFirst({
      where: { 
        ind_situacao: "A",
        ind_situacao_servidor: "P"
      }
    });
    return preceptor;
  } catch (error) {
    console.error("Error fetching preceptor by name:", error);
    throw new Error("Could not fetch preceptor by name");
  }
};

export const getPreceptorsByName = async (
  name: string
): Promise<any[]> => {
  try {
    const preceptors = await hospitalPrisma.rap_servidores.findMany({
      where: { 
        ind_situacao: "A",
        ind_situacao_servidor: "P"
      }
    });
    return preceptors;
  } catch (error) {
    console.error("Error fetching preceptors by name:", error);
    throw new Error("Could not fetch preceptors by name");
  }
};

export const getAllPreceptors = async (): Promise<any[]> => {
  try {
    const preceptors = await hospitalPrisma.rap_servidores.findMany({
      where: { 
        ind_situacao: "A",
        ind_situacao_servidor: "P"
      }
    });
    return preceptors;
  } catch (error) {
    console.error("Error fetching all preceptors:", error);
    throw new Error("Could not fetch all preceptors");
  }
};
