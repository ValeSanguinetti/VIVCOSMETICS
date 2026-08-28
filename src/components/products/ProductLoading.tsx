import Header from "../layout/Header";
import Footer from "../layout/Footer";

const ProductLoading = () => {
    return (
        <main className="min-h-screen bg-[#131313] text-[#e2e2e2]">

            <Header />

            <div className="max-w-[1280px] mx-auto px-5 md:px-20 pt-40 pb-32">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div className="md:col-span-7">
                        <div className="aspect-[3/4] bg-[#1f1f1f] animate-pulse" />
                    </div>

                    <div className="md:col-span-5 space-y-6 pt-8">

                        <div className="h-4 w-20 bg-[#1f1f1f] animate-pulse" />

                        <div className="h-12 w-3/4 bg-[#1f1f1f] animate-pulse" />

                        <div className="h-8 w-32 bg-[#1f1f1f] animate-pulse" />

                        <div className="h-24 w-full bg-[#1f1f1f] animate-pulse" />

                        <div className="h-14 w-full bg-[#1f1f1f] animate-pulse" />

                    </div>

                </div>

            </div>

            <Footer />

        </main>
    );
};

export default ProductLoading;