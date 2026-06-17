import AboutHero from "@/components/pages/About/AboutHero"
import AboutStory from "@/components/pages/About/AboutStory"
import MeetTrainer from "@/components/pages/About/MeetTrainer"
import StatsSection from "@/components/pages/About/StatsSection"
import Testimonials from "@/components/pages/About/Testimonials"
import TransformationProcess from "@/components/pages/About/TransformationProcess"
import WhyChooseUs from "@/components/pages/About/WhyChooseUs"
import CTA from "@/components/pages/Home/CTA"
import ContentWrapper from "@/context/ContentWrapper"

const About = () => {
  return (
    <ContentWrapper>
      <div className="space-y-12 pt-5 px-6 lg:px-0">
        <AboutHero />
        <AboutStory />
        <WhyChooseUs />
        <StatsSection />
        <MeetTrainer />
        <TransformationProcess />
        <Testimonials />
        <CTA />
      </div>
    </ContentWrapper>
  )
}

export default About