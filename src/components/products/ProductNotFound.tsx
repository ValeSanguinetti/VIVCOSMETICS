import { Link } from "react-router-dom";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface ProductNotFoundProps {
    message?: string;
}

const ProductNotFound = ({
    message,
}: ProductNotFoundProps) => {
    return (
        <main className="min-h-screen bg-[#131313] text-[#e2e2e2]">

            <Header />

            <div className="min-h-[70vh] flex flex-col items-center justify-center px-5">

                <span className="material-symbols-outlined text-5xl text-[#555] mb-4">
                    inventory_2
                </span>

                <h1 className="text-2xl text-white mb-3">
                    Producto no encontrado
                </h1>

                <p className="text-[#8e9192] mb-8">
                    {message ||
                        "El producto que buscas no existe."}
                </p>

                <Link
                    to="/productos"
                    className="
                        bg-white
                        text-black
                        px-8
                        py-3
                        uppercase
                        tracking-widest
                        text-sm
                        hover:bg-[#e5e2e1]
                        transition-colors
                    "
                >
                    Volver a productos
                </Link>

            </div>

            <Footer />

        </main>
    );
};

export default ProductNotFound;