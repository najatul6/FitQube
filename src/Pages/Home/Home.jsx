import AboutCoach from "@/components/pages/Home/AboutCoach";
import AboutSection from "@/components/pages/Home/AboutSection";
import CTA from "@/components/pages/Home/CTA";
import FAQ from "@/components/pages/Home/FAQ";
import FitnessSolution from "@/components/pages/Home/FitnessSolution";
import HeroSection from "@/components/pages/Home/HeroSection";
import ProPlan from "@/components/pages/Home/ProPlan";
import SuccessStories from "@/components/pages/Home/SuccessStories";
import TransformYourself from "@/components/pages/Home/TransformYourself";
import ContentWrapper from "@/context/ContentWrapper";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ContentWrapper>
                <div className="space-y-12 pt-5 px-6 lg:px-0">
                <AboutSection />
                <SuccessStories/>
                <TransformYourself/>
                <ProPlan/>
                <AboutCoach/>
                <FitnessSolution/>
                <FAQ/>
                <CTA/>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Home;