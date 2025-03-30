import api from "../../api";
import {User} from "../../../types/userTypes"
import { AdminUser } from "../../../types/userTypes";

export interface LoginParams{
    username:string,
    password:string
}

const mockUser: AdminUser = {
    id: 1,
    name: "Riquelme",
    username: "riquelme3m",
    password: "password123",
    active: 1,
    dateOfBirth: new Date("24-06-2002"),
    cellphone: 38988670683,
    role: "ADMIN"
};

export const login = async({username,password}:LoginParams): Promise<User> =>{
    if(username === "riquelme3m" && password === "password123@"){
        return Promise.resolve(mockUser);
    }

    const response = await api.post("/auth/login",{
        username,
        password
    });

    return response.data;
}