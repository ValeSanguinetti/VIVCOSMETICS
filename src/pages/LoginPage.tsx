import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
   
const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
        setError("Completa todos los campos.");
        return;
    }

    try {
        setLoading(true);

        const result = await AuthService.login({
            email,
            password,
        });

        // Guardamos el token
        if (result.data?.token) {
            localStorage.setItem(
                "token",
                result.data.token
            );
        }

        // Guardamos el usuario
        if (result.data?.user) {
            const user = result.data.user;

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            // Avisamos a la aplicación que cambió la autenticación
            window.dispatchEvent(
                new Event("auth-changed")
            );

            // Redirección según el rol
            if (user.rol_id === 1) {
                navigate("/admin");
                return;
            }

            if (user.rol_id === 2) {
                navigate("/");
                return;
            }
        }

        setError(
            "No se pudo determinar el rol del usuario."
        );

    } catch (error) {
        if (error instanceof Error) {
            setError(error.message);
        } else {
            setError("No se pudo iniciar sesión.");
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


                    {/* LOGIN */}

                    <div className="space-y-6 relative z-10">

                        {/* TÍTULO */}

                        <div className="text-center space-y-2">

                            <h1 className="font-['Hanken_Grotesk'] text-4xl md:text-5xl font-semibold tracking-tight text-white">
                                Iniciar sesión
                            </h1>

                            <p className="font-['Manrope'] text-base text-[#c4c7c8]">
                                Ingresa tus datos para acceder a tu cuenta.
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tu@email.com"
                                    required
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
                                    "
                                />

                            </div>


                            {/* PASSWORD */}

                            <div className="space-y-2 relative group pt-2">

                                <div className="flex justify-between items-center">

                                    <label
                                        htmlFor="password"
                                        className="block font-['Geist'] text-xs uppercase tracking-wider text-[#c4c7c8]"
                                    >
                                        Contraseña
                                    </label>

                                    <button
    type="button"
    onClick={() => navigate("/forgot-password")}
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
    ¿Olvidaste tu contraseña?
</button>
                                </div>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
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
                                    "
                                />

                            </div>
                            {error && (
    <div className="border border-red-400/20 bg-red-400/5 px-4 py-3">
        <p className="text-sm text-red-300">
            {error}
        </p>
    </div>
)}

                            {/* BOTÓN */}

                            <div className="pt-2">

                           <button
    type="submit"
    disabled={loading}
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
    {loading ? "Ingresando..." : "Iniciar sesión"}

    {!loading && (
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


                        {/* REGISTRO */}

                        <div className="text-center pt-2 border-t border-white/10 mt-6">

                            <p className="font-['Manrope'] text-base text-[#c4c7c8]">

                                ¿No tienes una cuenta?{" "}
                            
                            <Link
                                to="/registro"
                                className="text-white hover:underline underline-offset-4 transition-all"
                            >
                                Crear una cuenta
                            </Link>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
};

export default LoginPage;