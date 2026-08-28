interface MetricCardProps {
    title: string;
    value: string;
}

function MetricCard({
    title,
    value,
}: MetricCardProps) {

    return (
        <article className="border border-white/15 p-6 bg-[#0a0a0a] flex flex-col justify-between h-40">

            <p className="font-label-sm uppercase tracking-widest text-[#c4c7c8]">
                {title}
            </p>

            <p className="font-display-lg text-5xl font-bold text-white">
                {value}
            </p>

        </article>
    );
}

export default MetricCard;