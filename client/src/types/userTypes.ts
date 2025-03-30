export interface User {
    id: number;
    name: string;
    username: string;
    password:string;
    active: 1 | 0;
    dateOfBirth:Date;
    cellphone:number;
}

export interface AdminUser extends User {
    role: "ADMIN";
}

export interface NirUser extends User {
    role: "NIR";
}

export interface AssistencialUser extends User {
    role: "ASSISTENCIAL";
    specialty: string; 
}


export type UserRole = "ADMIN" | "ASSISTENCIAL" | "NIR";

export const RoleConstants = {
    ADMIN: "ADMIN" as UserRole,
    ASSISTENCIAL: "ASSISTENCIAL" as UserRole,
    NIR: "NIR" as UserRole
};