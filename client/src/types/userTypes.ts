export interface User {
    id: number;
    name: string;
    username: string;
    password?: string; // Optional since it's not included in the console.log
    status: "Active" | "Inactive";
    birthDate: string; // Changed from `dateOfBirth: Date` to match the string format
    phone: string; // Changed from `cellphone: number` to match the string format
    role: UserRole;
    specialty?: string; // Optional for non-Assistencial users
    createdAt: string; // Added to match the console.log structure
}

export type UserRole = "Admin" | "Assistencial" | "NIR";