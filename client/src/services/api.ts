import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.3.25:5050",
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



export default api;