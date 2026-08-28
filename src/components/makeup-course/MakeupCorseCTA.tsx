function MakeupCourseCTA() {
    const whatsappUrl =
        "https://wa.me/59897400905?text=Hola%20%2C%20quiero%20reservar%20un%20lugar%20para%20el%20curso%20de%20automaquillaje";

    return (
        <section
            className="
                relative
                overflow-hidden
                bg-background
            "
        >
            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    py-24
                    md:py-32
                    text-center
                "
            >
                <span
                    className="
                        block
                        font-label-sm
                        text-label-sm
                        uppercase
                        tracking-[0.3em]
                        text-primary
                        mb-5
                    "
                >
                    Tu momento
                </span>

                <h2
                    className="
                        font-headline-lg
                        text-headline-lg-mobile
                        md:text-[4.5rem]
                        text-white
                        leading-none
                        tracking-tight
                        mb-8
                    "
                >
                    Aprendé.
                    <br />

                    <span className="text-primary">
                        Potenciá tu estilo.
                    </span>
                </h2>

                <p
                    className="
                        font-body-lg
                        text-body-lg
                        text-[#8e9192]
                        max-w-xl
                        mx-auto
                        mb-10
                    "
                >
                    Reservá tu lugar y empezá a descubrir
                    una nueva forma de maquillarte.
                </p>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                        px-8
                        py-4
                        hover:bg-[#c6c6c7]
                        transition-colors
                        duration-300
                        group
                    "
                >
                    Reservar mi lugar

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
                </a>
            </div>
        </section>
    );
}

export default MakeupCourseCTA;