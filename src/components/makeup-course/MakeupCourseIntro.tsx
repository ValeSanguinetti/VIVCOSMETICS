function MakeupCourseIntro() {
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
                "
            >
                <div className="md:col-span-4">
                    <span
                        className="
                            font-label-sm
                            text-label-sm
                            uppercase
                            tracking-[0.25em]
                            text-primary
                        "
                    >
                        Tu experiencia
                    </span>
                </div>

                <div className="md:col-span-8">
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
                        Aprendé a maquillarte,
                        <span className="text-primary">
                            {" "}a tu manera.
                        </span>
                    </h2>

                    <p
                        className="
                            font-body-lg
                            text-body-lg
                            text-[#c4c7c8]
                            max-w-3xl
                            leading-relaxed
                        "
                    >
                        Este curso está pensado para que descubras
                        técnicas que puedas aplicar en tu día a día
                        y también llevar a looks más especiales.
                        Vas a aprender a conocer tus rasgos,
                        elegir mejor tus productos y potenciar
                        tu propio estilo.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MakeupCourseIntro;