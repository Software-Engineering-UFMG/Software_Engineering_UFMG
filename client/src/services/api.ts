import axios from "axios";



const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials:true,
})



export const login = async (username: string, password: string) => {
  const res = await api.post("/login", { username, password });
  console.log("Response login: ",res);
  return res.data;
};

export const createUser = async (userData: {
  name: string;
  birthDate: string;
  phone: string;
  username: string;
  password: string;
  role: "NIR" | "Assistencial" | "Admin";
  specialty?: string;
}) => {
  try {
    const response = await api.post("/user", userData);
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


export const updateUser = async (
  id: number,
  userData: {
    name: string;
    birthDate: string;
    phone: string;
    username: string;
    password?: string;
    currentPassword?: string; 
    role: "NIR" | "Assistencial" | "Admin";
    specialty?: string;
    status?: "Active" | "Inactive";
  }
) => {
  try {
    const response = await api.put(`/user/${id}`, userData); // Ensure correct payload
    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar usuário:", error.response?.data || error.message); // Log detailed error
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

export default api;
