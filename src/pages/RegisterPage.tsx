import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import AuthService from "../services/AuthService";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");

        if (
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("Completa todos los campos.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

       
try {
    await AuthService.register({
        email: formData.email,
        password: formData.password,
    });

    navigate("/login");

} catch (error) {
    if (error instanceof Error) {
        setError(error.message);
    } else {
        setError("Ocurrió un error al crear la cuenta.");
    }
} 
    };

    return (
        <main className="min-h-screen bg-[#131313] text-[#e2e2e2] flex flex-col antialiased">

            {/* =========================================================
                CONTENIDO
            ========================================================= */}

            <div className="flex-grow flex items-center justify-center px-5 md:px-20 py-24 md:py-[120px]">

                <div className="w-full max-w-md mx-auto">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="text-center mb-16">

                        {/* LOGO */}

                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-white/10 flex items-center justify-center bg-[#1b1b1b] mb-8">

                            <img
                                src={`${import.meta.env.VITE_API_URL}/assets/logo.png`}
                                alt="VIV Cosmetics"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                            Crear cuenta
                        </h1>

                        <p className="text-base text-[#c4c7c8]/60">
                            Únete al universo VIV.
                        </p>

                    </div>


                    {/* =================================================
                        FORMULARIO
                    ================================================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        {/* EMAIL */}

                        <div className="space-y-2">

                            <label
                                htmlFor="email"
                                className="block text-xs uppercase tracking-widest text-[#c4c7c8]/60"
                            >
                                Correo electrónico
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@example.com"
                                autoComplete="email"
                                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white focus:ring-0 px-0 py-3 text-base text-white placeholder-white/20 transition-colors duration-300"
                            />

                        </div>


                        {/* CONTRASEÑA */}

                        <div className="space-y-2">

                            <label
                                htmlFor="password"
                                className="block text-xs uppercase tracking-widest text-[#c4c7c8]/60"
                            >
                                Contraseña
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white focus:ring-0 px-0 py-3 text-base text-white placeholder-white/20 transition-colors duration-300"
                            />

                        </div>


                        {/* CONFIRMAR CONTRASEÑA */}

                        <div className="space-y-2">

                            <label
                                htmlFor="confirmPassword"
                                className="block text-xs uppercase tracking-widest text-[#c4c7c8]/60"
                            >
                                Confirmar contraseña
                            </label>

                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                autoComplete="new-password"
                                className="w-full bg-transparent border-0 border-b border-white/20 focus:border-white focus:ring-0 px-0 py-3 text-base text-white placeholder-white/20 transition-colors duration-300"
                            />

                        </div>


                        {/* ERROR */}

                        {error && (
                            <div className="border border-red-400/20 bg-red-400/5 px-4 py-3">
                                <p className="text-sm text-red-300">
                                    {error}
                                </p>
                            </div>
                        )}


                        {/* BOTÓN */}

                        <div className="pt-6">

                            <button
                                type="submit"
                                className="w-full bg-white text-[#131313] uppercase tracking-widest py-4 rounded-none hover:bg-[#e2e2e2] transition-colors duration-300 active:scale-[0.99]"
                            >
                                Crear cuenta
                            </button>

                        </div>

                    </form>


                    {/* =================================================
                        LOGIN
                    ================================================= */}

                    <div className="text-center mt-8">

                        <p className="text-base text-[#c4c7c8]/60">

                            ¿Ya tienes una cuenta?{" "}

                            <Link
                                to="/login"
                                className="text-white hover:underline underline-offset-4 transition-all"
                            >
                                Iniciar sesión
                            </Link>

                        </p>

                    </div>

                </div>

            </div>


            {/* =========================================================
                FOOTER
            ========================================================= */}

        <Footer />

        </main>
    );
};

export default RegisterPage;