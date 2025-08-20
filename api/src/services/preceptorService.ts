import { hospitalPrisma } from "../config/hospitalPrisma";

export const getPreceptorById = async (
  id: number
): Promise<any | null> => {
  try {
    const result = await hospitalPrisma.$queryRaw`
      SELECT 
        s.*,
        p.nome as nome_completo,
        p.cpf
      FROM agh.rap_servidores s
      LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
      WHERE 
        s.matricula = ${id}
        AND s.ind_situacao = 'A' 
        AND s.ind_situacao_servidor = 'P'
    `;
    
    const preceptor = (result as any[])[0];
    if (!preceptor) return null;
    
    // Convert BigInt fields to strings for JSON serialization
    return {
      ...preceptor,
      cpf: preceptor.cpf ? preceptor.cpf.toString() : null,
      matricula: preceptor.matricula ? Number(preceptor.matricula) : null,
      vin_codigo: preceptor.vin_codigo ? Number(preceptor.vin_codigo) : null,
      pes_codigo: preceptor.pes_codigo ? Number(preceptor.pes_codigo) : null,
    };
  } catch (error) {
    console.error("Error fetching preceptor by ID:", error);
    throw new Error("Could not fetch preceptor by ID");
  }
};

export const getPreceptorByName = async (
  name: string
): Promise<any | null> => {
  try {
    const result = await hospitalPrisma.$queryRaw`
      SELECT 
        s.*,
        p.nome as nome_completo,
        p.cpf
      FROM agh.rap_servidores s
      LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
      WHERE 
        s.ind_situacao = 'A'
        AND s.ind_situacao_servidor = 'P'
        AND p.nome ILIKE ${`%${name}%`}
      LIMIT 1
    `;
    
    const preceptor = (result as any[])[0];
    if (!preceptor) return null;
    
    // Convert BigInt fields to strings for JSON serialization
    return {
      ...preceptor,
      cpf: preceptor.cpf ? preceptor.cpf.toString() : null,
      matricula: preceptor.matricula ? Number(preceptor.matricula) : null,
      vin_codigo: preceptor.vin_codigo ? Number(preceptor.vin_codigo) : null,
      pes_codigo: preceptor.pes_codigo ? Number(preceptor.pes_codigo) : null,
    };
  } catch (error) {
    console.error("Error fetching preceptor by name:", error);
    throw new Error("Could not fetch preceptor by name");
  }
};

export const getPreceptorsByName = async (
  name: string
): Promise<any[]> => {
  try {
    let preceptors;
    
    if (name.trim()) {
      // Use parameterized query for safety
      preceptors = await hospitalPrisma.$queryRaw`
        SELECT 
          s.matricula,
          s.vin_codigo,
          s.pes_codigo,
          s.usuario,
          s.ind_situacao,
          s.ind_situacao_servidor,
          p.nome as nome_completo,
          p.cpf
        FROM agh.rap_servidores s
        LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
        WHERE 
          s.ind_situacao = 'A' 
          AND s.ind_situacao_servidor = 'P'
          AND p.nome ILIKE ${`%${name}%`}
        ORDER BY p.nome
      `;
    } else {
      // Return empty array if no name provided
      preceptors = [];
    }
    
    // Convert BigInt fields to strings for JSON serialization
    return (preceptors as any[]).map(preceptor => ({
      ...preceptor,
      cpf: preceptor.cpf ? preceptor.cpf.toString() : null,
      matricula: preceptor.matricula ? Number(preceptor.matricula) : null,
      vin_codigo: preceptor.vin_codigo ? Number(preceptor.vin_codigo) : null,
      pes_codigo: preceptor.pes_codigo ? Number(preceptor.pes_codigo) : null,
    }));
  } catch (error) {
    console.error("Error fetching preceptors by name:", error);
    throw new Error("Could not fetch preceptors by name");
  }
};

export const getAllPreceptors = async (): Promise<any[]> => {
  try {
    const preceptors = await hospitalPrisma.$queryRaw`
      SELECT 
        s.matricula,
        s.vin_codigo,
        s.pes_codigo,
        s.usuario,
        s.ind_situacao,
        s.ind_situacao_servidor,
        p.nome as nome_completo,
        p.cpf
      FROM agh.rap_servidores s
      LEFT JOIN agh.rap_pessoas_fisicas p ON s.pes_codigo = p.codigo
      WHERE 
        s.ind_situacao = 'A' 
        AND s.ind_situacao_servidor = 'P'
      ORDER BY p.nome
    `;
    
    // Convert BigInt fields to strings for JSON serialization
    return (preceptors as any[]).map(preceptor => ({
      ...preceptor,
      cpf: preceptor.cpf ? preceptor.cpf.toString() : null,
      matricula: preceptor.matricula ? Number(preceptor.matricula) : null,
      vin_codigo: preceptor.vin_codigo ? Number(preceptor.vin_codigo) : null,
      pes_codigo: preceptor.pes_codigo ? Number(preceptor.pes_codigo) : null,
    }));
  } catch (error) {
    console.error("Error fetching all preceptors:", error);
    throw new Error("Could not fetch all preceptors");
  }
};