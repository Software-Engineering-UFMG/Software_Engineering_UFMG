import { hospitalPrisma } from "../config/hospitalPrisma";
import { Preceptor } from "../../generated/hospital-client";

export const getPreceptorById = async (
  id: number
): Promise<Preceptor | null> => {
  try {
    const preceptor = await hospitalPrisma.preceptor.findUnique({
      where: { id },
    });
    return preceptor;
  } catch (error) {
    console.error("Error fetching preceptor by ID:", error);
    throw new Error("Could not fetch preceptor by ID");
  }
};

export const getPreceptorByName = async (
  name: string
): Promise<Preceptor | null> => {
  try {
    // Assuming you want to find the first match if names are not unique.
    // If names are unique, findUnique could be used with a unique index on name.
    const preceptor = await hospitalPrisma.preceptor.findFirst({
      where: { name: { contains: name, mode: "insensitive" } }, // Case-insensitive partial match
    });
    return preceptor;
  } catch (error) {
    console.error("Error fetching preceptor by name:", error);
    throw new Error("Could not fetch preceptor by name");
  }
};

export const getPreceptorsByName = async (
  name: string
): Promise<Preceptor[]> => {
  try {
    const preceptors = await hospitalPrisma.preceptor.findMany({
      where: { name: { contains: name, mode: "insensitive" } },
    });
    return preceptors;
  } catch (error) {
    console.error("Error fetching preceptors by name:", error);
    throw new Error("Could not fetch preceptors by name");
  }
};

export const getAllPreceptors = async (): Promise<Preceptor[]> => {
  try {
    const preceptors = await hospitalPrisma.preceptor.findMany();
    return preceptors;
  } catch (error) {
    console.error("Error fetching all preceptors:", error);
    throw new Error("Could not fetch all preceptors");
  }
};
