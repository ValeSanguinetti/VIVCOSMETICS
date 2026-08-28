export default function ProductSkeleton() {
    return (
        <div className="animate-pulse">
            <div
                className="
                    aspect-[3/4]
                    bg-[#1f1f1f]
                    mb-2
                "
            />

            <div
                className="
                    h-6
                    bg-[#1f1f1f]
                    w-2/3
                    mb-2
                "
            />

            <div
                className="
                    h-4
                    bg-[#1f1f1f]
                    w-1/2
                "
            />
        </div>
    );
}