import { hospitalPrisma } from "../config/hospitalPrisma";
import { Patient } from "../../generated/hospital-client";

export const getPatientByMedicalRecord = async (
  medicalRecord: string
): Promise<Patient | null> => {
  try {
    const patient = await hospitalPrisma.patient.findUnique({
      where: { medicalRecord },
    });
    return patient;
  } catch (error) {
    console.error("Error fetching patient by medical record:", error);
    throw new Error("Could not fetch patient by medical record");
  }
};
