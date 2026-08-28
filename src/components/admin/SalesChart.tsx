function SalesChart() {

    return (
        <section className="border border-white/15 bg-[#0a0a0a] p-6 h-full">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-semibold">
                    Sales Performance
                </h2>

                <div className="flex gap-2">

                    <button
                        type="button"
                        className="px-3 py-1 bg-white text-black text-xs uppercase tracking-widest"
                    >
                        Weekly
                    </button>

                    <button
                        type="button"
                        className="px-3 py-1 border border-white/20 text-[#c4c7c8] text-xs uppercase tracking-widest"
                    >
                        Monthly
                    </button>

                </div>

            </div>

            <div className="relative h-[300px] border-b border-l border-white/20">

                <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                >

                    <path
                        d="M0,80 L15,60 L30,70 L45,30 L60,40 L75,10 L100,20"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />

                    {[ 
                        [0, 80],
                        [15, 60],
                        [30, 70],
                        [45, 30],
                        [60, 40],
                        [75, 10],
                        [100, 20],
                    ].map(([cx, cy], index) => (

                        <circle
                            key={index}
                            cx={cx}
                            cy={cy}
                            r="3"
                            fill="white"
                        />

                    ))}

                </svg>

            </div>

        </section>
    );
}

export default SalesChart;