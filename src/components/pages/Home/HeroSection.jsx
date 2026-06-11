import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/assets/sliderImages/1.webp"
import img2 from "@/assets/sliderImages/2.webp"
import img3 from "@/assets/sliderImages/3.webp"
import img4 from "@/assets/sliderImages/4.webp"
import img5 from "@/assets/sliderImages/5.webp"

const slidesData = [

    {

        id: 1,
        title: "TRANSFORM YOUR BODY, ELEVATE YOUR LIFE",
        subtitle: "Join the ultimate fitness community and unleash your inner beast today.",
        bgImage: img1,
        effect: "slideLeft",
    },

    {
        id: 2,
        title: "PUSH YOUR LIMITS, BREAK THE BARRIERS",
        subtitle: "Expert trainers, premium equipment, and customized workout plans.",
        bgImage: img2,
        effect: "scaleUp",
    },

    {
        id: 3,
        title: "NO PAIN, NO GAIN. SHAPE YOUR DESTINY",
        subtitle: "Get access to 24/7 gym floor, group classes, and nutrition tracking.",
        bgImage: img3,
        effect: "slideUp",
    },

    {
        id: 4,
        title: "FUEL YOUR FUTURE, EMPOWER YOUR LIFE",
        subtitle: "Join a community that supports your fitness journey every step of the way.",
        bgImage: img4,
        effect: "slideLeft",
    },

    {
        id: 5,
        title: "YOUR FITNESS JOURNEY STARTS HERE",
        subtitle: "Experience the difference with our state-of-the-art facilities and expert guidance.",
        bgImage: img5,
        effect: "scaleUp",
    }

];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const getAnimationVariants = (effect) => {

        switch (effect) {
            case "scaleUp":
                return {
                    initial: { scale: 1.15, opacity: 0 },
                    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
                    exit: { opacity: 0, transition: { duration: 0.5 } },
                };

            case "slideUp":
                return {
                    initial: { y: "100%", opacity: 0 },
                    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
                    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5 } },
                };

            default:
                return {
                    initial: { x: "100%", opacity: 0 },
                    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
                    exit: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
                };

        }

    };

    const currentSlideData = slidesData[currentSlide];

    return (
        <div className="relative w-full h-[85vh]  overflow-hidden bg-zinc-950 flex items-center justify-center">
            {/* Dynamic Background Image Slider with Grayscale filter */}
            <div className="absolute inset-0 w-full h-full z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlideData.id}
                        variants={getAnimationVariants(currentSlideData.effect)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 w-full h-full bg-cover bg-center "
                        style={{ backgroundImage: `url('${currentSlideData.bgImage}')` }}
                    />
                </AnimatePresence>

                {/* Strong Dark Overlay for high typography contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-zinc-950" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto select-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlideData.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Tagline: Changed to white with tracking for sleek high-end look */}
                        <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] border-b border-white/40 pb-2 inline-block">
                            Premium Fitness Club
                        </span>

                        {/* Title: Pure solid White */}
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none max-w-3xl mx-auto">
                            {currentSlideData.title}
                        </h1>

                        {/* Subtitle: Soft white/gray to maintain typography hierarchy */}
                        <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto font-light tracking-wide">
                            {currentSlideData.subtitle}
                        </p>

                        {/* Call to Action Buttons: Strict Black & White contrast inversion */}
                        <div className="md:pt-6 flex flex-col md:flex-row justify-center gap-4">
                            <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-wider text-sm rounded-none shadow-2xl hover:bg-zinc-200 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
                                Get Started
                            </button>
                            <button className="px-8 py-4 border border-white/80 text-white font-black uppercase tracking-wider text-sm rounded-none hover:bg-white hover:text-black transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[3px] transition-all duration-300 rounded-none cursor-pointer ${index === currentSlide ? "w-10 bg-white" : "w-4 bg-white/30 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;