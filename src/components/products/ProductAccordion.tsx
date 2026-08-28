import type { ReactNode } from "react";

interface ProductAccordionProps {
    title: string;
    id: string;
    openAccordion: string | null;
    toggleAccordion: (id: string) => void;
    children: ReactNode;
}

const ProductAccordion = ({
    title,
    id,
    openAccordion,
    toggleAccordion,
    children,
}: ProductAccordionProps) => {

    const isOpen = openAccordion === id;

    return (
        <div className="border-b border-white/10">

            <button
                type="button"
                className="
                    w-full
                    py-4
                    flex
                    justify-between
                    items-center
                    group
                "
                onClick={() => toggleAccordion(id)}
            >
                <span
                    className="
                        text-sm
                        uppercase
                        tracking-widest
                        text-white
                        group-hover:opacity-70
                        transition-opacity
                    "
                >
                    {title}
                </span>

                <span
                    className="
                        material-symbols-outlined
                        text-[#8e9192]
                    "
                >
                    {isOpen ? "remove" : "add"}
                </span>
            </button>

            <div
                className={`
                    overflow-hidden
                    transition-all
                    duration-300

                    ${
                        isOpen
                            ? "max-h-[500px] opacity-100 pb-4"
                            : "max-h-0 opacity-0"
                    }
                `}
            >
                <div
                    className="
                        text-[#c4c7c8]
                        text-base
                        leading-6
                    "
                >
                    {children}
                </div>
            </div>

        </div>
    );
};

export default ProductAccordion;