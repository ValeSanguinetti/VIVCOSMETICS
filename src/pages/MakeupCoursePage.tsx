import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import MakeupCourseHero from "../components/makeup-course/MakeupCourseHero";
import MakeupCourseIntro from "../components/makeup-course/MakeupCourseIntro";
import MakeupCourseLearning from "../components/makeup-course/MakeupCourseLearning";
import MakeupCourseExperience from "../components/makeup-course/MakeupCourseExperience";
import MakeupCourseDetails from "../components/makeup-course/MakeupCourseDetails";
import MakeupCourseCTA from "../components/makeup-course/MakeupCorseCTA";
function MakeupCoursePage() {
    return (
        <div className="bg-background text-on-surface antialiased overflow-x-hidden">
            <Header />

            <main>
                <MakeupCourseHero />

                <MakeupCourseIntro />

                <MakeupCourseLearning />

                <MakeupCourseExperience />

                <MakeupCourseDetails />

                <MakeupCourseCTA />
            </main>

            <Footer />
        </div>
    );
}

export default MakeupCoursePage;