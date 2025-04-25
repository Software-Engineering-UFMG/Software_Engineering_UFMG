import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials:true,
})



export const login = async(username:string,password:string)=>{
  const res = await api.post('/login',{username,password});
  return res.data;
}

export const createUser = async (userData:{
  name:string;
  birthDate:string;
  phone:string;
  username:string;
  password:string;
  role:"NIR" | "Assistencial" | "Admin";
  specialty?:string;
}) =>{
  try{
      const response = await api.post("/user",userData);
      return response.data;
  }catch(error:any){
    console.error("Erro ao criar usuário:",error);
    throw error;
  }
}



export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter usuários:", error);
    throw error;
  }
};

// Get user by ID
export const getUserById = async (id: string) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao obter usuário por ID:", error);
    throw error;
  }
};

// Update user by ID
export const updateUser = async (
  id: string,
  userData: {
    name?: string;
    birthDate?: string;
    phone?: string;
    username?: string;
    password?: string;
    role?: "NIR" | "Assistencial" | "Admin";
    specialty?: string;
    status?: "Active" | "Inactive"; // Added status field
  }
) => {
  try {
    const response = await api.put(`/user/${id}`, userData);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao atualizar usuário:", error);
    throw error;
  }
};

// Delete user by ID
export const deleteUser = async (id: string) => {
  try {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar usuário:", error);
    throw error;
  }
};

export default api;