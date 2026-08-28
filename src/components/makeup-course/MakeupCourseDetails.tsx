const courseDetails = [
    {
        label: "Duración",
        value: "1h 45 min",
    },
    {
        label: "Incluye",
        value: "Certificado",
    },
    {
        label: "Regalo",
        value: "Kit de brochas",
    },
    {
        label: "Nivel",
        value: "Sin experiencia",
    },
];

function MakeupCourseDetails() {
    return (
        <section
            className="
                border-y
                border-white/10
                bg-surface-container-low
            "
        >
            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    py-16
                "
            >
                <div
                    className="
                        grid
                        grid-cols-2
                        md:grid-cols-4
                        gap-8
                    "
                >
                    {courseDetails.map((detail) => (
                        <div key={detail.label}>
                            <span
                                className="
                                    block
                                    font-['Geist']
                                    text-xs
                                    uppercase
                                    tracking-widest
                                    text-primary
                                    mb-3
                                "
                            >
                                {detail.label}
                            </span>

                            <p
                                className="
                                    font-['Hanken_Grotesk']
                                    text-xl
                                    md:text-2xl
                                    text-white
                                "
                            >
                                {detail.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MakeupCourseDetails;