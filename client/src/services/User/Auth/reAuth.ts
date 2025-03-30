import api from "../../api";
import { User } from "../../../types/userTypes";

export const reAuth = async (): Promise<User> => {
  const response = await api.post("/auth/reAuth");

  return response.data;
};
