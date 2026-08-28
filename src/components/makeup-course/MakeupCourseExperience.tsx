const benefits = [
    "No necesitás experiencia previa.",
    "Certificado incluido.",
    "Kit de brochas de regalo.",
    "1 hora y 45 minutos de clase.",
];

function MakeupCourseExperience() {
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
                    md:grid-cols-2
                    gap-12
                    md:gap-gutter
                "
            >
                <div>
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
                        Antes de empezar
                    </span>

                    <h2
                        className="
                            font-headline-lg
                            text-headline-lg-mobile
                            md:text-headline-lg
                            text-white
                            leading-tight
                            mb-6
                        "
                    >
                        No necesitás
                        <span className="text-primary">
                            {" "}experiencia.
                        </span>
                    </h2>

                    <p
                        className="
                            font-body-lg
                            text-body-lg
                            text-[#c4c7c8]
                            max-w-xl
                            leading-relaxed
                        "
                    >
                        Solo necesitás ganas de aprender,
                        descubrir nuevas técnicas y potenciar
                        tu estilo.
                    </p>
                </div>

                <div className="border-t border-white/10">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="
                                py-5
                                border-b
                                border-white/10
                                flex
                                items-center
                                gap-4
                            "
                        >
                            <span className="text-primary text-lg">
                                +
                            </span>

                            <p
                                className="
                                    font-['Manrope']
                                    text-base
                                    md:text-lg
                                    text-[#c4c7c8]
                                "
                            >
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MakeupCourseExperience;