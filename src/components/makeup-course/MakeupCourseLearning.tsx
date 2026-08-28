const learnItems = [
    {
        number: "01",
        text: "Técnicas paso a paso para un maquillaje social de todos los días.",
    },
    {
        number: "02",
        text: "Cómo lograr looks más intensos y creativos para eventos especiales.",
    },
    {
        number: "03",
        text: "Tips profesionales para elegir y usar tus productos correctamente.",
    },
    {
        number: "04",
        text: "Secretos para adaptar el maquillaje a tu tipo de rostro y piel.",
    },
];

function MakeupCourseLearning() {
    return (
        <section
            className="
                border-y
                border-white/10
                bg-surface-container-low
                py-section-padding
                px-margin-mobile
                md:px-margin-desktop
            "
        >
            <div className="max-w-[1280px] mx-auto">
                <div
                    className="
                        border-b
                        border-white/10
                        pb-stack-md
                        mb-stack-lg
                    "
                >
                    <span
                        className="
                            block
                            font-label-sm
                            text-label-sm
                            uppercase
                            tracking-[0.25em]
                            text-primary
                            mb-3
                        "
                    >
                        En este curso vas a descubrir
                    </span>

                    <h2
                        className="
                            font-headline-lg
                            text-headline-lg-mobile
                            md:text-headline-lg
                            text-white
                        "
                    >
                        Todo lo que necesitás
                    </h2>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-px
                        bg-white/10
                    "
                >
                    {learnItems.map((item) => (
                        <div
                            key={item.number}
                            className="
                                bg-surface-container-low
                                p-8
                                md:p-10
                                min-h-[230px]
                                flex
                                flex-col
                            "
                        >
                            <span
                                className="
                                    font-['Geist']
                                    text-xs
                                    tracking-widest
                                    text-primary
                                    mb-10
                                "
                            >
                                {item.number}
                            </span>

                            <p
                                className="
                                    font-['Manrope']
                                    text-base
                                    md:text-lg
                                    text-[#c4c7c8]
                                    leading-relaxed
                                    max-w-lg
                                "
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MakeupCourseLearning;