export interface RegisterData {
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    rol_id: number;
    rol_nombre: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data?: {
        token?: string;
        user?: User;
    };
}