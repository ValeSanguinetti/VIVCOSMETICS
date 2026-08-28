import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import AboutBrand from "../components/AboutBrand";
import MakeupCourse from "../components/MakeupCourse";
import FeaturedProducts from "../components/FeacturedProducts";

function HomePage() {
    return (
        <div className="bg-background text-on-surface antialiased overflow-x-hidden">

            <Header />

            <main>

                <Hero />

                <FeaturedProducts />

                <MakeupCourse />

                <AboutBrand />

            </main>

            <Footer />

        </div>
    );
}

export default HomePage;