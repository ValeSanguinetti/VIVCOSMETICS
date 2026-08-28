function MakeupCourseHero() {
    return (
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeIr3KayNwK_Oa4iKmgMVKB0CnW-9z88GR0tm4RnVTyG0-ao8hJaGJTMBTZ-yzMSDm_qe32it3YY16wUkfJkDjClaUrL-0mETwjUBiHjY1Y3-4DL3gSwOEh4WwcrSoa9FOClafwOhzQU14aMdX8STgzioFMdnKJSqxB8xTr4y6o_GcGYBwImHZnFieY7W5pLaxlFLvwZMRRZ_ff-IZfnYu9r1ujoxuj4K6oXKmYgxkL6QqbvJkv25dA"
                    alt="Curso de automaquillaje VIV Cosmetics"
                    className="w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            <div
                className="
                    relative
                    z-10
                    w-full
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    pb-16
                    md:pb-24
                "
            >
                <div className="max-w-4xl">
                    <span
                        className="
                            block
                            font-label-sm
                            text-label-sm
                            uppercase
                            tracking-[0.3em]
                            text-primary
                            mb-6
                        "
                    >
                        Experiencia VIV Cosmetics
                    </span>

                    <h1
                        className="
                            font-headline-lg
                            text-headline-lg-mobile
                            md:text-[5.5rem]
                            text-white
                            leading-[0.9]
                            tracking-tight
                            mb-8
                        "
                    >
                        Curso de
                        <br />

                        <span className="text-primary">
                            Automaquillaje
                        </span>
                    </h1>

                    <p
                        className="
                            font-body-lg
                            text-body-lg
                            text-[#c4c7c8]
                            max-w-2xl
                            leading-relaxed
                        "
                    >
                        Aprendé a resaltar tu belleza y sentirte
                        segura en cualquier ocasión.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MakeupCourseHero;