import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    id: 1,
    title: "TRANSFORM YOUR BODY, ELEVATE YOUR LIFE",
    subtitle: "Join the ultimate fitness community and unleash your inner beast today.",
    bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop",
    effect: "slideLeft",
  },
  {
    id: 2,
    title: "PUSH YOUR LIMITS, BREAK THE BARRIERS",
    subtitle: "Expert trainers, premium equipment, and customized workout plans.",
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    effect: "scaleUp",
  },
  {
    id: 3,
    title: "NO PAIN, NO GAIN. SHAPE YOUR DESTINY",
    subtitle: "Get access to 24/7 gym floor, group classes, and nutrition tracking.",
    bgImage: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920&auto=format&fit=crop",
    effect: "slideUp",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect (Every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Different animation variants based on slide settings
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
      default: // slideLeft
        return {
          initial: { x: "100%", opacity: 0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
          exit: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
        };
    }
  };

  const currentSlideData = slidesData[currentSlide];

  return (
    <div className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Dynamic Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideData.id}
            variants={getAnimationVariants(currentSlideData.effect)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${currentSlideData.bgImage}')` }}
          />
        </AnimatePresence>
        {/* Dark Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Content Layer (Title & Subtitle) */}
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
            {/* Tagline */}
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm md:text-base border-b-2 border-amber-500 pb-1">
              Premium Fitness Club
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none max-w-3xl mx-auto drop-shadow-md">
              {currentSlideData.title}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              {currentSlideData.subtitle}
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex justify-center gap-4">
              <button className="px-6 py-3 bg-amber-500 text-black font-extrabold uppercase rounded shadow-lg hover:bg-amber-400 transition-all cursor-pointer transform hover:scale-105 active:scale-95 duration-200">
                Get Started
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-extrabold uppercase rounded hover:bg-white hover:text-black transition-all cursor-pointer transform hover:scale-105 active:scale-95 duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide ? "w-8 bg-amber-500" : "w-2 bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;