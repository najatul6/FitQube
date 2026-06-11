import AboutSection from "@/components/pages/Home/AboutSection";
import HeroSection from "@/components/pages/Home/HeroSection";
import ContentWrapper from "@/context/ContentWrapper";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ContentWrapper>
                <AboutSection />
            </ContentWrapper>
        </div>
    )
}

export default Home;