import { hospitalPrisma } from "../config/hospitalPrisma";

export const getPatientByMedicalRecord = async (
  medicalRecord: string
): Promise<any | null> => {
  try {
    const result = await hospitalPrisma.$queryRaw`
      SELECT 
        p.codigo,
        p.nome,
        p.dt_nascimento,
        p.prontuario,
        p.cpf,
        p.nome_mae,
        p.sexo,
        COALESCE(i.qrt_numero, p.qrt_numero) as qrt_numero,
        p.unf_seq,
        COALESCE(i.lto_lto_id, p.lto_lto_id) as lto_lto_id,
        p.dt_ult_internacao,
        p.prnt_ativo
      FROM agh.aip_pacientes p
      LEFT JOIN agh.ain_internacoes i ON p.codigo = i.pac_codigo 
        AND i.ind_paciente_internado = 'S'
      WHERE p.prontuario = ${parseInt(medicalRecord)}
        AND p.prnt_ativo = 'A'
    `;
    
    const patient = (result as any[])[0];
    if (!patient) return null;
    
    // Convert BigInt fields and format response
    return {
      codigo: patient.codigo,
      name: patient.nome,
      birthDate: patient.dt_nascimento,
      medicalRecord: patient.prontuario?.toString(),
      cpf: patient.cpf ? patient.cpf.toString() : null,
      motherName: patient.nome_mae,
      gender: patient.sexo,
      hospitalbed: patient.qrt_numero || patient.lto_lto_id || null,
      entranceDate: patient.dt_ult_internacao,
      isActive: patient.prnt_ativo === 'A'
    };
  } catch (error) {
    console.error("Error fetching patient by medical record:", error);
    throw new Error("Could not fetch patient by medical record");
  }
};

export const getPatientsByMedicalRecord = async (
  medicalRecord: string
): Promise<any[]> => {
  try {
    const searchTerm = medicalRecord.trim();
    if (!searchTerm) return [];
    
    const result = await hospitalPrisma.$queryRaw`
      SELECT 
        p.codigo,
        p.nome,
        TO_CHAR(p.dt_nascimento, 'YYYY-MM-DD') as dt_nascimento,
        p.prontuario,
        p.cpf,
        p.nome_mae,
        p.sexo,
        COALESCE(i.qrt_numero, p.qrt_numero) as qrt_numero,
        p.unf_seq,
        COALESCE(i.lto_lto_id, p.lto_lto_id) as lto_lto_id,
        p.dt_ult_internacao,
        p.prnt_ativo
      FROM agh.aip_pacientes p
      LEFT JOIN agh.ain_internacoes i ON p.codigo = i.pac_codigo 
        AND i.ind_paciente_internado = 'S'
      WHERE p.prontuario::text ILIKE ${`%${searchTerm}%`}
        AND p.prnt_ativo = 'A'
        AND p.prontuario IS NOT NULL
      ORDER BY p.prontuario
      LIMIT 10
    `;
    
    // Convert BigInt fields and format response
    return (result as any[]).map(patient => ({
      codigo: patient.codigo,
      name: patient.nome,
      birthDate: patient.dt_nascimento, // Now formatted as YYYY-MM-DD string
      medicalRecord: patient.prontuario?.toString(),
      cpf: patient.cpf ? patient.cpf.toString() : null,
      motherName: patient.nome_mae,
      gender: patient.sexo,
      hospitalbed: patient.qrt_numero || patient.lto_lto_id || null,
      entranceDate: patient.dt_ult_internacao,
      isActive: patient.prnt_ativo === 'A'
    }));
  } catch (error) {
    console.error("Error fetching patients by medical record:", error);
    throw new Error("Could not fetch patients by medical record");
  }
};

export const getPatientDischargePrediction = async (
  medicalRecord: string
): Promise<{ isHospitalized: boolean; dischargePrediction: string | null }> => {
  try {
    const result = await hospitalPrisma.$queryRaw`
      SELECT 
        p.codigo,
        p.nome,
        p.prontuario,
        i.dt_prev_alta,
        i.ind_paciente_internado
      FROM agh.aip_pacientes p
      LEFT JOIN agh.ain_internacoes i ON p.codigo = i.pac_codigo 
        AND i.ind_paciente_internado = 'S'
      WHERE p.prontuario = ${parseInt(medicalRecord)}
        AND p.prnt_ativo = 'A'
    `;
    
    const patient = (result as any[])[0];
    
    if (!patient) {
      return { isHospitalized: false, dischargePrediction: null };
    }
    
    const isHospitalized = patient.ind_paciente_internado === 'S';
    const dischargePrediction = patient.dt_prev_alta ? 
      new Date(patient.dt_prev_alta).toISOString().split('T')[0] : null;
    
    return {
      isHospitalized,
      dischargePrediction
    };
  } catch (error) {
    console.error("Error fetching patient discharge prediction:", error);
    throw new Error("Could not fetch patient discharge prediction");
  }
};
