
import { Link } from "react-router-dom";

function MakeupCourse() {
    return (
        <section
            className="
                relative
                overflow-hidden
                border-y
                border-white/10
                bg-surface-container-low
            "
        >

            {/* IMAGEN */}

            <div className="absolute inset-0">

                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeIr3KayNwK_Oa4iKmgMVKB0CnW-9z88GR0tm4RnVTyG0-ao8hJaGJTMBTZ-yzMSDm_qe32it3YY16wUkfJkDjClaUrL-0mETwjUBiHjY1Y3-4DL3gSwOEh4WwcrSoa9FOClafwOhzQU14aMdX8STgzioFMdnKJSqxB8xTr4y6o_GcGYBwImHZnFieY7W5pLaxlFLvwZMRRZ_ff-IZfnYu9r1ujoxuj4K6oXKmYgxkL6QqbvJkv25dA"
                    alt="Curso de automaquillaje VIV Cosmetics"
                    className="
                        w-full
                        h-full
                        object-cover
                        opacity-40
                        md:opacity-50
                        transition-transform
                        duration-1000
                        hover:scale-105
                    "
                />

                {/* GRADIENTE */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-background
                        via-background/80
                        to-background/30
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-background
                        via-transparent
                        to-transparent
                        md:hidden
                    "
                />

            </div>


            {/* CONTENIDO */}

            <div
                className="
                    relative
                    z-10
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    py-24
                    md:py-32
                "
            >

                <div className="max-w-2xl">

                    {/* LABEL */}

                    <span
                        className="
                            block
                            font-label-sm
                            text-label-sm
                            uppercase
                            tracking-[0.25em]
                            text-primary
                            mb-5
                        "
                    >
                        Experiencia VIV
                    </span>


                    {/* TÍTULO */}

                    <h2
                        className="
                            font-headline-lg
                            text-headline-lg-mobile
                            md:text-headline-lg
                            text-white
                            leading-[0.95]
                            tracking-tight
                            mb-6
                        "
                    >
                        Aprendé a maquillarte.
                        <br />
                        <span className="text-primary">
                            A tu manera.
                        </span>
                    </h2>


                    {/* DESCRIPCIÓN */}

                    <p
                        className="
                            font-body-lg
                            text-body-lg
                            text-[#c4c7c8]
                            max-w-xl
                            leading-relaxed
                            mb-8
                        "
                    >
                        Un espacio pensado para que conozcas tu rostro,
                        aprendas nuevas técnicas y encuentres una forma
                        de maquillarte que realmente se sienta tuya.
                    </p>


                    {/* CTA */}

                    <Link
                        to="/curso-automaquillaje"
                        className="
                            inline-flex
                            items-center
                            gap-3
                            bg-white
                            text-[#131313]
                            font-['Geist']
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            px-7
                            py-4
                            hover:bg-[#c6c6c7]
                            transition-colors
                            duration-300
                            group
                        "
                    >
                        Ver el curso

                        <span
                            className="
                                material-symbols-outlined
                                text-[18px]
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        >
                            arrow_forward
                        </span>
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default MakeupCourse;
