import api from "../../api";

export const logOutUser = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};
