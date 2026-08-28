interface ProductQuantityProps {
    quantity: number;
    maxQuantity: number;
    updateQuantity: (change: number) => void;
}

const ProductQuantity = ({
    quantity,
    maxQuantity,
    updateQuantity,
}: ProductQuantityProps) => {
    return (
        <div className="space-y-6 mb-8">

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/10
                    py-4
                "
            >
                <span
                    className="
                        text-xs
                        uppercase
                        tracking-widest
                        text-[#8e9192]
                    "
                >
                    Cantidad
                </span>

                <div className="flex items-center gap-4">

                    {/* RESTAR */}
                    <button
                        type="button"
                        onClick={() => updateQuantity(-1)}
                        disabled={quantity <= 1}
                        className="
                            text-[#c4c7c8]
                            hover:text-white
                            disabled:opacity-30
                            transition-colors
                        "
                    >
                        <span className="material-symbols-outlined">
                            remove
                        </span>
                    </button>

                    {/* CANTIDAD */}
                    <span
                        className="
                            text-xl
                            text-white
                            w-8
                            text-center
                        "
                    >
                        {quantity}
                    </span>

                    {/* SUMAR */}
                    <button
                        type="button"
                        onClick={() => updateQuantity(1)}
                        disabled={quantity >= maxQuantity}
                        className="
                            text-[#c4c7c8]
                            hover:text-white
                            disabled:opacity-30
                            transition-colors
                        "
                    >
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </button>

                </div>
            </div>

        </div>
    );
};

export default ProductQuantity;