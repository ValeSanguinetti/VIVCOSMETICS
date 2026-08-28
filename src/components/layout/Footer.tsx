
const API_URL =
    import.meta.env.VITE_API_URL;


function Footer() {
    const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/vivcosmetics.uy/",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/people/vivcosmeticsuy/61574430194259/",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/59897400905",
    },
];
    return (
        <footer className="w-full border-t border-white/10 bg-background">
            <div
                className="
                    max-w-[1280px]
                    mx-auto
                    px-margin-mobile
                    md:px-margin-desktop
                    py-16
                    md:py-20
                "
            >
                {/* CONTENIDO PRINCIPAL */}
                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-end
                        md:justify-between
                        gap-12
                    "
                >
                    {/* BRAND */}
              <div>
    <img
        src={API_URL + "/assets/logo.png"}
        alt="VIV Cosmetics"
        className="
            w-28
            h-auto
            mb-5
        "
    />

  <p className=" font-body-md text-body-md text-on-surface-variant max-w-xs " >
     Vibrant Inner Vision. 
     <br /> 
        Cosmética y cuidado personal
        <br />
        para resaltar lo mejor de vos.
    </p>
</div>

                    {/* REDES */}
                    <div className="flex flex-col gap-4">
                        <span
                            className="
                                font-label-sm
                                text-label-sm
                                uppercase
                                tracking-[0.2em]
                                text-primary
                                mb-1
                            "
                        >
                            Seguinos
                        </span>

                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        font-label-sm
                                        text-label-sm
                                        uppercase
                                        tracking-widest
                                        text-outline
                                        hover:text-primary
                                        transition-colors
                                        duration-300
                                    "
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div
                    className="
                        border-t
                        border-white/10
                        mt-12
                        pt-6
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        md:justify-between
                        gap-3
                    "
                >
                    {/* COPYRIGHT */}
                    <p
                        className="
                            text-[10px]
                            uppercase
                            tracking-widest
                            text-on-surface-variant/50
                        "
                    >
                        © {new Date().getFullYear()} VIV COSMETICS ·
                        PAYSANDÚ &amp; SALTO, URUGUAY
                    </p>

                    {/* CRÉDITO */}
                    <p
                        className="
                            text-[10px]
                            tracking-wide
                            text-on-surface-variant/50
                        "
                    >
                        Desarrollado por{" "}
                        <a
                            href="https://www.instagram.com/valeria_sanguinetti_03/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                text-on-surface-variant
                                hover:text-primary
                                transition-colors
                                duration-300
                            "
                        >
                            Valeria Sanguinetti
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;