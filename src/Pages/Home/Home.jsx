import AboutSection from "@/components/pages/Home/AboutSection";
import HeroSection from "@/components/pages/Home/HeroSection";
import SuccessStories from "@/components/pages/Home/SuccessStories";
import ContentWrapper from "@/context/ContentWrapper";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ContentWrapper>
                <AboutSection />
                <SuccessStories/>
            </ContentWrapper>
        </div>
    )
}

export default Home;