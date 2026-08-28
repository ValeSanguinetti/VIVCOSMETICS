
function AboutBrand() {
    return (
        <section
            className="
                py-section-padding
                px-margin-mobile
                md:px-margin-desktop
                max-w-[1280px]
                mx-auto
            "
        >

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-10
                    md:gap-gutter
                    items-start
                "
            >

                {/* LABEL */}

                <div className="md:col-span-3">

                    <span
                        className="
                            font-label-sm
                            text-label-sm
                            uppercase
                            tracking-[0.25em]
                            text-primary
                        "
                    >
                        Sobre VIV
                    </span>

                </div>


                {/* CONTENIDO */}

                <div className="md:col-span-9 max-w-4xl">

                    <h2
                        className="
                            font-headline-lg
                            text-headline-lg-mobile
                            md:text-headline-lg
                            text-white
                            leading-tight
                            tracking-tight
                            mb-8
                        "
                    >
                        Belleza sin fórmulas.
                        <br />
                        <span className="text-primary">
                            Elegida por vos.
                        </span>
                    </h2>


                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-8
                        "
                    >

                        <p
                            className="
                                font-body-lg
                                text-body-lg
                                text-[#c4c7c8]
                                leading-relaxed
                            "
                        >
                            En VIV creemos que el maquillaje y el cuidado
                            personal no tienen que seguir reglas. Son una
                            forma de expresión, de experimentar y de
                            encontrar aquello que te hace sentir bien.
                        </p>


                        <p
                            className="
                                font-body-lg
                                text-body-lg
                                text-[#8e9192]
                                leading-relaxed
                            "
                        >
                            Seleccionamos productos y experiencias pensados
                            para acompañarte en ese proceso, desde tu rutina
                            diaria hasta esos momentos en los que querés
                            algo diferente.
                        </p>

                    </div>


                    {/* DIVISOR */}

                    <div
                        className="
                            mt-12
                            pt-6
                            border-t
                            border-white/10
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            gap-4
                        "
                    >

                        <span
                            className="
                                font-['Geist']
                                text-xs
                                uppercase
                                tracking-widest
                                text-[#8e9192]
                            "
                        >
                            VIV Cosmetics
                        </span>

                        <span
                            className="
                                font-['Geist']
                                text-xs
                                uppercase
                                tracking-widest
                                text-[#8e9192]
                            "
                        >
                            Paysandú · Salto · Uruguay
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutBrand;
