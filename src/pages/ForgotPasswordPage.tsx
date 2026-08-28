
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!email) {
            setError("Ingresa tu correo electrónico.");
            return;
        }

        try {
            setLoading(true);

            await AuthService.forgotPassword(email);

            setSuccess(
                "Si el correo existe, recibirás un enlace para restablecer tu contraseña."
            );

            setEmail("");

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(
                    "No se pudo procesar la solicitud."
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#131313] text-[#e2e2e2] min-h-screen flex flex-col antialiased selection:bg-white selection:text-[#131313]">

            {/* CONTENIDO PRINCIPAL */}

            <div className="flex-1 flex items-center justify-center px-5 md:px-20 py-24 md:py-[120px]">

                <div className="w-full max-w-md space-y-16">

                    {/* LOGO */}

                    <div className="flex justify-center">
                        <img
                            src={`${import.meta.env.VITE_API_URL}/assets/logo.png`}
                            alt="VIV Cosmetics"
                            className="w-32 h-32 object-contain mix-blend-screen opacity-90"
                        />
                    </div>

                    {/* CONTENIDO */}

                    <div className="space-y-8 relative z-10">

                        {/* TÍTULO */}

                        <div className="text-center space-y-3">

                            <p className="font-['Geist'] text-xs uppercase tracking-[0.2em] text-[#c4c7c8]">
                                Seguridad de cuenta
                            </p>

                            <h1 className="font-['Hanken_Grotesk'] text-4xl md:text-5xl font-semibold tracking-tight text-white">
                                Recuperar contraseña
                            </h1>

                            <p className="font-['Manrope'] text-base text-[#c4c7c8] leading-relaxed">
                                Ingresa tu correo electrónico y te
                                enviaremos un enlace para crear una
                                nueva contraseña.
                            </p>

                        </div>

                        {/* FORMULARIO */}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* EMAIL */}

                            <div className="space-y-2 relative group">

                                <label
                                    htmlFor="email"
                                    className="block font-['Geist'] text-xs uppercase tracking-wider text-[#c4c7c8]"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="tu@email.com"
                                    autoComplete="email"
                                    disabled={loading || !!success}
                                    className="
                                        w-full
                                        bg-transparent
                                        border-0
                                        border-b
                                        border-white/20
                                        px-0
                                        py-3
                                        text-white
                                        font-['Manrope']
                                        focus:ring-0
                                        focus:border-white
                                        transition-colors
                                        duration-300
                                        placeholder-white/30
                                        outline-none
                                        disabled:opacity-50
                                    "
                                />

                            </div>

                            {/* ERROR */}

                            {error && (
                                <div className="border border-red-400/20 bg-red-400/5 px-4 py-3">

                                    <p className="text-sm text-red-300 font-['Manrope']">
                                        {error}
                                    </p>

                                </div>
                            )}

                            {/* SUCCESS */}

                            {success && (
                                <div className="border border-green-400/20 bg-green-400/5 px-4 py-3">

                                    <p className="text-sm text-green-300 font-['Manrope']">
                                        {success}
                                    </p>

                                    <p className="text-xs text-green-300/70 mt-2">
                                        Revisa también la carpeta de
                                        spam o correo no deseado.
                                    </p>

                                </div>
                            )}

                            {/* BOTÓN */}

                            <div className="pt-2">

                                <button
                                    type="submit"
                                    disabled={loading || !!success}
                                    className="
                                        w-full
                                        bg-white
                                        text-[#131313]
                                        font-['Geist']
                                        text-sm
                                        uppercase
                                        tracking-widest
                                        py-4
                                        rounded-none
                                        hover:bg-[#c6c6c7]
                                        transition-colors
                                        duration-300
                                        flex
                                        justify-center
                                        items-center
                                        gap-2
                                        group
                                        disabled:opacity-50
                                        disabled:cursor-not-allowed
                                    "
                                >

                                    {loading
                                        ? "Enviando..."
                                        : "Enviar enlace"
                                    }

                                    {!loading && !success && (
                                        <span
                                            className="
                                                material-symbols-outlined
                                                text-[18px]
                                                opacity-0
                                                -translate-x-2
                                                group-hover:opacity-100
                                                group-hover:translate-x-0
                                                transition-all
                                            "
                                        >
                                            arrow_forward
                                        </span>
                                    )}

                                </button>

                            </div>

                        </form>

                        {/* VOLVER */}

                        <div className="text-center pt-2">

                            <Link
                                to="/login"
                                className="
                                    font-['Geist']
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    text-white/60
                                    hover:text-white
                                    transition-colors
                                "
                            >
                                ← Volver a iniciar sesión
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

            {/* FOOTER */}

            <footer className="bg-[#131313] border-t border-white/10 w-full py-10">

                <div className="max-w-[1280px] mx-auto px-5 md:px-20 text-center">

                    <p className="font-['Manrope'] text-sm text-[#8e9192]">
                        © 2026 VIV COSMETICS. PAYSANDÚ & SALTO, URUGUAY.
                    </p>

                </div>

            </footer>

        </main>
    );
};

export default ForgotPasswordPage;
