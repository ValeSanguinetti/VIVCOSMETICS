
const API_URL = import.meta.env.VITE_API_URL;

import type {
    RegisterData,
    LoginData,
    AuthResponse,
} from "../types/auth.type";

class AuthService {

    // --------------------------------------------------
    // REGISTER
    // --------------------------------------------------

    static async register(
        data: RegisterData
    ): Promise<AuthResponse> {

        const response = await fetch(
            `${API_URL}/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo crear la cuenta."
            );
        }

        return result;
    }


    // --------------------------------------------------
    // LOGIN
    // --------------------------------------------------

    static async login(
        data: LoginData
    ): Promise<AuthResponse> {

        const response = await fetch(
            `${API_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "Credenciales inválidas."
            );
        }

        return result;
    }


    // --------------------------------------------------
    // FORGOT PASSWORD
    // --------------------------------------------------

    static async forgotPassword(
        email: string
    ): Promise<{ message: string }> {

        const response = await fetch(
            `${API_URL}/auth/forgot-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo procesar la solicitud."
            );
        }

        return result;
    }


    // --------------------------------------------------
    // RESET PASSWORD
    // --------------------------------------------------

    static async resetPassword(
        token: string,
        password: string
    ): Promise<{ message: string }> {

        const response = await fetch(
            `${API_URL}/auth/reset-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    password,
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(
                result.message ||
                "No se pudo cambiar la contraseña."
            );
        }

        return result;
    }
}

export default AuthService;
