
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="
            relative
            min-h-screen
            flex
            items-center
            justify-center
            pt-20
            px-margin-mobile
            md:px-margin-desktop
            overflow-hidden
        ">

            {/* IMAGEN */}
            <div className="absolute inset-0 z-0">

                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN1VB5wvQsY3oVsmORpME9-tmLh9Cr0ODdoN184MgqRq0KmRbt1jEM6n8xf5ClZVp9jDgK-yLg1gpYVS_t0pugXPxtYBjFqguzl48xxI4yQZvjC_mzdYaCLFxpEy74bM0vb1ONLKORiXQb2n4wNwhUSTMTR2t94N9lltlPkOEFyFzGr3qHMoyEdysKRJrlbvEqVod6nfkkl4fMSq0GDEoFEYS4-V93wHtT06QgdWGCun5MkDYGkcYtvw"
                    alt="VIV Cosmetics"
                    className="
                        w-full
                        h-full
                        object-cover
                        opacity-60
                    "
                />

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-background
                    via-background/30
                    to-background/20
                " />

            </div>


            {/* CONTENIDO */}
            <div className="
                relative
                z-10
                text-center
                max-w-4xl
                mx-auto
                flex
                flex-col
                items-center
            ">

                <span className="
                    font-label-sm
                    text-label-sm
                    uppercase
                    tracking-[0.35em]
                    text-primary
                    mb-5
                ">
                    VIV Cosmetics
                </span>

<h1
    className="
        font-display-lg
        text-display-lg
        text-white
        tracking-tighter
        leading-none
        uppercase
        mb-stack-md
    "
>
    Vibrant Inner
    <br />
    Vision.
</h1>

                <p className="
                    font-body-lg
                    text-body-lg
                    text-on-surface-variant
                    max-w-xl
                    mx-auto
                    mb-stack-lg
                ">
                    Cosmética, maquillaje y experiencias pensadas
                    para acompañarte a descubrir tu propio estilo.
                </p>


                {/* BOTONES */}
                <div className="
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                    gap-4
                ">

                    <Link
                        to="/productos"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            bg-primary
                            text-background
                            font-label-lg
                            text-label-lg
                            uppercase
                            tracking-widest
                            px-8
                            py-4
                            hover:bg-surface-variant
                            hover:text-primary
                            transition-all
                            duration-300
                        "
                    >
                        Explorar productos

                        <span className="
                            material-symbols-outlined
                            text-[18px]
                            ml-2
                        ">
                            arrow_forward
                        </span>
                    </Link>


                    <Link
                        to="/curso-automaquillaje"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            border
                            border-white/30
                            text-white
                            font-label-lg
                            text-label-lg
                            uppercase
                            tracking-widest
                            px-8
                            py-4
                            hover:bg-white
                            hover:text-background
                            transition-all
                            duration-300
                        "
                    >
                        Curso de automaquillaje
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default Hero;