import api from "../../api";
import { AdminUser, NirUser, AssistencialUser } from "../../../types/userTypes";

export interface LoginParams {
    username: string;
    password: string;
}

export const login = async ({ username, password }: LoginParams) => {
    // Mocked user data
    const mockUsers: (AdminUser | NirUser | AssistencialUser)[] = [
        {
            id: 1,
            name: "Admin User",
            username: "admin",
            password: "admin123",
            role: "ADMIN",
            active: 1,
            dateOfBirth: new Date("1980-01-01"),
            cellphone: 123456789,
        },
        {
            id: 2,
            name: "Assistencial User",
            username: "assistencial",
            password: "assist123",
            role: "ASSISTENCIAL",
            active: 1,
            dateOfBirth: new Date("1990-01-01"),
            cellphone: 987654321,
            specialty: "Cardiology", 
        },
        {
            id: 3,
            name: "NIR User",
            username: "nir",
            password: "nir123",
            role: "NIR",
            active: 1,
            dateOfBirth: new Date("1985-01-01"),
            cellphone: 123123123,
        },
    ];

    // Find the user based on username and password
    const user = mockUsers.find(
        (u) => u.username === username.trim() && u.password === password.trim()
    );

    if (!user) {
        throw new Error("Invalid credentials");
    }

    return user; // Return the user object with the role
};