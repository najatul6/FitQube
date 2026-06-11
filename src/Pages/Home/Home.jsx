import AboutCoach from "@/components/pages/Home/AboutCoach";
import AboutSection from "@/components/pages/Home/AboutSection";
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
                <AboutSection />
                <SuccessStories/>
                <TransformYourself/>
                <ProPlan/>
                <AboutCoach/>
                <FitnessSolution/>
            </ContentWrapper>
        </div>
    )
}

export default Home;