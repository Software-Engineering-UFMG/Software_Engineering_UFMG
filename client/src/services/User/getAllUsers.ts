import api from "../api";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getAllUsers = async (): Promise<User[]> => {
  const response = await api.get("/user");
  return response.data;
};
