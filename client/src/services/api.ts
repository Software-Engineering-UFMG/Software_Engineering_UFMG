import axios from "axios";


const api = axios.create({
  baseURL: "200.238.206.119:5050",
  withCredentials: true,
});

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
  console.log("get all users called");
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar usuários", error);
    throw error;
  }
};

export default api;
