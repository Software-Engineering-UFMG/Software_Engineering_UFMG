import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const login = async (username: string, password: string) => {
  const res = await api.post("/login", { username, password });
  console.log("Response login: ", res);
  return res.data;
};

export const createUser = async (userData: {
  name: string;
  username: string;
  role: "NIR" | "Assistencial" | "Admin";
  specialty?: string;
}) => {
  console.log("API: createUser called");
  try {
    // Only send fields that exist in the Usuario model
    const payload = {
      name: userData.name,
      username: userData.username,
      role: userData.role,
      specialty: userData.specialty,
    };
    const response = await api.post("/user", payload);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter usuário por ID:", error);
    throw error;
  }
};

export const updateUser = async (userData: {
  name?: string;
  birthDate?: string;
  phone?: string;
  username?: string;
  password?: string;
  currentPassword?: string;
  role?: "NIR" | "Assistencial" | "Admin";
  specialty?: string;
  status?: "Active" | "Inactive";
}) => {
  try {
    const response = await api.put("/user", userData);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao atualizar próprio usuário:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateUserById = async (
  id: number,
  userData: {
    name?: string;
    role?: "NIR" | "Assistencial" | "Admin";
    specialty?: string;
    status?: string; // Change from "Active" | "Inactive" to string to match Usuario table
  }
) => {
  try {
    const response = await api.put(`/user/${id}`, userData);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao atualizar usuário por ID:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/logout"); // Call the logout endpoint
    return response.data;
  } catch (error: any) {
    console.error("Erro ao fazer logout:", error);
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await api.get("/me");
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getPatientByMedicalRecord = async (medicalRecord: string) => {
  try {
    const response = await api.get(`/patient/medicalrecord/${medicalRecord}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter paciente por prontuário:", error);
    throw error;
  }
};

export const getPatientsByMedicalRecord = async (medicalRecord: string) => {
  try {
    const response = await api.get(`/patient/medicalrecords/${medicalRecord}`);
    return response.data; // Should be an array
  } catch (error: any) {
    console.error("Erro ao obter pacientes por prontuário:", error);
    throw error;
  }
};

// Replace the existing preceptor functions with these updated ones:

export const getPreceptorByName = async (name: string) => {
  try {
    const response = await api.get(`/preceptor/name/${encodeURIComponent(name)}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter preceptor por nome:", error);
    throw error;
  }
};

export const getPreceptorsByName = async (name: string) => {
  try {
    console.log("DEBUG: Calling getPreceptorsByName with name:", name);
    // Get all preceptors and filter client-side since we don't have a specific search endpoint
    const response = await api.get(`/preceptors`);
    console.log("DEBUG: API response received:", response.data);
    const allPreceptors = response.data;
    
    // Ensure allPreceptors is an array
    if (!Array.isArray(allPreceptors)) {
      console.error("DEBUG: allPreceptors is not an array:", allPreceptors);
      return [];
    }
    
    console.log("DEBUG: Number of preceptors:", allPreceptors.length);
    
    // Filter by name if provided
    if (name.trim()) {
      const filtered = allPreceptors.filter((preceptor: any) => {
        // Add safety checks for the preceptor object
        if (!preceptor || typeof preceptor !== 'object') {
          console.warn("DEBUG: Invalid preceptor object:", preceptor);
          return false;
        }
        
        const nome = preceptor.nome_completo || preceptor.name || '';
        return nome.toLowerCase().includes(name.toLowerCase());
      });
      console.log("DEBUG: Filtered preceptors:", filtered.length);
      return filtered;
    }
    
    return [];
  } catch (error: any) {
    console.error("Erro ao obter preceptores por nome:", error);
    console.error("DEBUG: Error details:", error.response?.data);
    throw error;
  }
};

// Add a new function to get all preceptors
export const getAllPreceptors = async () => {
  try {
    console.log("DEBUG: Calling getAllPreceptors");
    const response = await api.get(`/preceptors`);
    console.log("DEBUG: getAllPreceptors response:", response.data);
    
    // Ensure response.data is an array
    if (!Array.isArray(response.data)) {
      console.error("DEBUG: Response data is not an array:", response.data);
      return [];
    }
    
    console.log("DEBUG: getAllPreceptors response count:", response.data.length);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter todos os preceptores:", error);
    console.error("DEBUG: Error details:", error.response?.data);
    throw error;
  }
};

// Add a function to get preceptor by ID
export const getPreceptorById = async (id: number) => {
  try {
    const response = await api.get(`/preceptor/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter preceptor por ID:", error);
    throw error;
  }
};

export const createPreceptorPaciente = async (data: {
  preceptorId: number;
  medicalRecord: string;
  status: string;
  red2green: string;
}) => {
  try {
    const response = await api.post("/preceptor-paciente", data);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao criar relação preceptor-paciente:", error);
    throw error;
  }
};

export const getAllPreceptorPacienteWithDetails = async () => {
  try {
    const response = await api.get("/preceptor-paciente/dashboard");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter relações preceptor-paciente:", error);
    throw error;
  }
};

export const updatePreceptorPacienteStatus = async (
  id: number,
  status: "Ativado" | "Desativado"
) => {
  try {
    const response = await api.post(`/preceptor-paciente/${id}/status`, { status }); // <-- use post
    console.log("API POST response:", response);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar status da relação preceptor-paciente:", error);
    throw error;
  }
};

// Delete a preceptorPaciente relation by ID
export const deletePreceptorPaciente = async (id: number) => {
  try {
    await api.delete(`/preceptor-paciente/${id}`); // Don't expect response.data for 204
    // No return value needed
  } catch (error: any) {
    console.error("Erro ao deletar relação preceptor-paciente:", error);
    throw error;
  }
};

// Update preceptor in a preceptorPaciente relation
export const updatePreceptorPacientePreceptor = async (
  relationId: number,
  preceptorId: number
) => {
  try {
    const response = await api.post(`/preceptor-paciente/${relationId}/preceptor`, { preceptorId });
    return response.data;
  } catch (error: any) {
    console.error("Erro ao mudar preceptor da relação:", error);
    throw error;
  }
};

// Get all patients linked to a specific preceptor by preceptorId
export const getPreceptorPacienteWithDetailsByPreceptorId = async (preceptorId: number) => {
  try {
    const response = await api.get(`/preceptor-paciente/preceptor/${preceptorId}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter pacientes do preceptor:", error);
    throw error;
  }
};

export const submitQuestionnaire = async (data: {
  preceptorPacienteId: number;
  answers: any;
  red2green: string;
  dischargeConfirmed: boolean;
}) => {
  try {
    const response = await api.post("/preceptor-paciente/questionnaire", data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getTodaysQuestionnaire = async (preceptorPacienteId: number) => {
  try {
    const response = await api.get(`/preceptor-paciente/${preceptorPacienteId}/questionnaire/today`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const deleteAllQuestionnairesForRelation = async (preceptorPacienteId: number) => {
  try {
    await api.delete(`/preceptor-paciente/${preceptorPacienteId}/questionnaires`);
  } catch (error: any) {
    console.error("Erro ao deletar questionários da relação:", error);
    throw error;
  }
};

//Route used to make the LDAP verification

export const checkLdapUser = async (login: string, password: string) => {
  console.log("API: checkLdapUser called");
  try {
    const response = await api.post("/ldap/check-user", { login, password });
    return response.data; // { exists: boolean }
  } catch (error: any) {
    console.error("Erro ao checar usuário LDAP:", error);
    throw error;
  }
};

export const getPatientDischargePrediction = async (medicalRecord: string) => {
  try {
    const response = await api.get(`/patient/discharge-prediction/${medicalRecord}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter previsão de alta do paciente:", error);
    throw error;
  }
};

// Trigger cleanup of scheduled deletions
export const cleanupScheduledDeletions = async () => {
  try {
    const response = await api.post("/preceptor-paciente/cleanup-scheduled");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao limpar relações agendadas para exclusão:", error);
    throw error;
  }
};

export default api;