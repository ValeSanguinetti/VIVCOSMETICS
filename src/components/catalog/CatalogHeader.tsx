interface CatalogHeaderProps {
    activeCategory: string;
    productCount: number;
}

export default function CatalogHeader({
    activeCategory,
    productCount,
}: CatalogHeaderProps) {
    return (
        <>
            {/* Main header */}
            <header className="mb-16 text-center md:text-left">
                <h1
                    className="
                        font-headline-lg-mobile
                        text-[32px]
                        leading-[40px]
                        md:text-[48px]
                        md:leading-[56px]
                        text-white
                        mb-2
                        tracking-tight
                    "
                >
                    Colecciones
                </h1>

                <p
                    className="
                        font-body-md
                        text-[16px]
                        leading-6
                        text-[#c4c7c8]/80
                        max-w-2xl
                    "
                >
                    Descubre nuestra colección de productos de belleza y cuidado personal, cuidadosamente seleccionados para resaltar tu belleza natural y brindarte una experiencia única.
                </p>
            </header>

            {/* Active category */}
            <div
                className="
                    mb-10
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    pb-4
                "
            >
                <div>
                    <p
                        className="
                            text-[11px]
                            uppercase
                            tracking-widest
                            text-[#8e9192]
                            mb-1
                        "
                    >
                        Mostrando
                    </p>

                    <h2 className="text-xl text-white">
                        {activeCategory}
                    </h2>
                </div>

                <p
                    className="
                        text-xs
                        text-[#8e9192]
                    "
                >
                    {productCount}{" "}
                    {productCount === 1
                        ? "producto"
                        : "productos"}
                </p>
            </div>
        </>
    );
}