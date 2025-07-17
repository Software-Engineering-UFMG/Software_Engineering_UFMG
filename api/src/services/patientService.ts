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

export const getPatientsByMedicalRecord = async (
  medicalRecord: string
): Promise<Patient[]> => {
  try {
    const patients = await hospitalPrisma.patient.findMany({
      where: {
        medicalRecord: {
          contains: medicalRecord,
          mode: "insensitive",
        },
      },
    });
    return patients;
  } catch (error) {
    console.error("Error fetching patients by medical record:", error);
    throw new Error("Could not fetch patients by medical record");
  }
};
