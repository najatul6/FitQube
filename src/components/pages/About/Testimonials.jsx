import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import { useRef } from "react";

const testimonials = [
    {
        name: "John Doe",
        text: "Best gym experience I've ever had. Real results!",
        rating: 5,
    },
    {
        name: "Sarah Khan",
        text: "Amazing trainers and perfect guidance system.",
        rating: 5,
    },
    {
        name: "Mike Ahmed",
        text: "I transformed my body in just 3 months!",
        rating: 5,
    },
    {
        name: "Alex Roy",
        text: "Clean environment and highly professional coaches.",
        rating: 5,
    },
    {
        name: "Nusrat Jahan",
        text: "Best decision of my life joining this gym!",
        rating: 5,
    },
];



const Stars = ({ count }) => {
    return (
        <div className="flex gap-1 text-black">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}>★</span>
            ))}
        </div>
    );
};

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section className="bg-white py-24 border-t border-black/10">
            <div className="container mx-auto px-4 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-black"
                >
                    What Google Reviews Say
                </motion.h2>

                <p className="mt-3 text-black/60">
                    Real feedback from our members on Google Maps
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-end gap-3">
                    <button
                        ref={prevRef}
                        className="cursor-pointer p-2 border rounded-full hover:bg-black hover:text-white transition"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        ref={nextRef}
                        className="cursor-pointer p-2 border rounded-full bg-black text-white transition"
                    >
                        <ChevronRight size={18} />
                    </button>
                </motion.div>

                <div className="mt-16">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        
                        onBeforeInit={(swiper) => {
                            // attach custom buttons
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current, }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="border border-black/10 rounded-2xl p-8 h-full text-left hover:-translate-y-1 transition"
                                >
                                    {/* Google badge */}
                                    <div className="text-xs text-black/50 mb-3">
                                        Google Review
                                    </div>

                                    {/* Stars */}
                                    <Stars count={t.rating} />

                                    {/* Text */}
                                    <p className="mt-4 text-black/70 leading-relaxed">
                                        "{t.text}"
                                    </p>

                                    {/* Name */}
                                    <h4 className="mt-6 font-bold">{t.name}</h4>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;