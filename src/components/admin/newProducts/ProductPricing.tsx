interface ProductPricingProps {

    precio: string;

    stock: string;

    onPrecioChange: (
        value: string
    ) => void;

    onStockChange: (
        value: string
    ) => void;

}

function ProductPricing({

    precio,

    stock,

    onPrecioChange,

    onStockChange,

}: ProductPricingProps) {

    return (

        <section className="bg-[#0e0e0e] border border-white/10 p-8 rounded-none">

            <h3 className="text-2xl text-white font-medium mb-6">
                Precio y stock 
            </h3>


            <div className="space-y-6">

                {/* PRICE */}

                <div>

                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                        Precio ($)
                    </label>

                    <div className="relative">

                        <span className="absolute left-0 top-0 text-white text-lg">
                            $
                        </span>

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={precio}
                            onChange={(e) =>
                                onPrecioChange(
                                    e.target.value
                                )
                            }
                            placeholder="0.00"
                            className="w-full bg-transparent border-b border-white/20 pl-6 pb-2 text-white text-lg focus:outline-none focus:border-white transition-colors"
                        />

                    </div>

                </div>


                {/* STOCK */}

                <div className="pt-4 border-t border-white/10">

                    <label className="block text-xs text-[#c4c7c8] uppercase tracking-wider mb-2">
                        Stock
                    </label>

                    <input
                        type="number"
                        min="0"
                        value={stock}
                        onChange={(e) =>
                            onStockChange(
                                e.target.value
                            )
                        }
                        placeholder="0"
                        className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-white transition-colors"
                    />

                    <p className="text-xs text-[#c4c7c8]/50 mt-3">
                        Si el producto tiene variantes, el stock se calculará automáticamente sumando el stock de todas las variantes.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default ProductPricing;