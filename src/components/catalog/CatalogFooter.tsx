export default function CatalogFooter() {
    return (
        <footer
            className="
                w-full
                py-16
                bg-[#131313]
                border-t
                border-white/10
                md:pl-64
            "
        >
            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-12
                    gap-6
                    max-w-[1280px]
                    mx-auto
                    px-5
                    md:px-[60px]
                "
            >
                {/* Brand */}
                <div
                    className="
                        md:col-span-4
                        mb-6
                        md:mb-0
                    "
                >
                    <a
                        href="/"
                        className="
                            font-headline-lg
                            text-[48px]
                            text-white
                            mb-2
                            block
                            leading-none
                        "
                    >
                        VIV
                    </a>

                    <p
                        className="
                            font-body-md
                            text-[16px]
                            leading-6
                            text-[#c4c7c8]/80
                            max-w-sm
                            mt-4
                        "
                    >
                        Vibrant Inner Vision.
                        Sophisticated, editorial,
                        and unapologetically bold.
                    </p>
                </div>

                {/* Links */}
                <div
                    className="
                        md:col-span-8
                        flex
                        flex-wrap
                        gap-x-12
                        gap-y-8
                        md:justify-end
                    "
                >
                    {/* Support */}
                    <nav>
                        <h4
                            className="
                                font-label-sm
                                text-[12px]
                                uppercase
                                text-[#8e9192]
                                mb-4
                                tracking-widest
                            "
                        >
                            Support
                        </h4>

                        <ul className="flex flex-col gap-3">
                            {[
                                "Contact Us",
                                "Shipping",
                                "Returns",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="
                                            font-body-md
                                            text-[#8e9192]
                                            hover:text-white
                                            transition-colors
                                        "
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Legal */}
                    <nav>
                        <h4
                            className="
                                font-label-sm
                                text-[12px]
                                uppercase
                                text-[#8e9192]
                                mb-4
                                tracking-widest
                            "
                        >
                            Legal
                        </h4>

                        <ul className="flex flex-col gap-3">
                            {[
                                "Privacy Policy",
                                "Terms of Service",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="
                                            font-body-md
                                            text-[#8e9192]
                                            hover:text-white
                                            transition-colors
                                        "
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Copyright */}
                <div
                    className="
                        md:col-span-12
                        mt-16
                        pt-2
                        border-t
                        border-white/5
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        items-center
                        gap-4
                    "
                >
                    <p
                        className="
                            font-label-sm
                            text-[12px]
                            uppercase
                            text-[#8e9192]
                            tracking-wider
                            text-center
                            md:text-left
                        "
                    >
                        © 2024 VIV COSMETICS.
                        PAYSANDÚ & SALTO, URUGUAY.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="
                                text-[#8e9192]
                                hover:text-white
                                transition-colors
                            "
                        >
                            <span className="material-symbols-outlined">
                                public
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}