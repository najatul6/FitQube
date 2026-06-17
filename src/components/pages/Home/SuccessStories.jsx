import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import successBeforeMale from "@/assets/successstory/download (1).jfif";
import successBeforeFemale from "@/assets/successstory/download.jfif";
import successAfterMale from "@/assets/successstory/JASON STUART _ Online Dietitian + PT on Instagram_ _.jfif";
import successAfterFemale from "@/assets/successstory/KJ.jfif";
import successAfter1 from "@/assets/successstory/Telegram_ Contact @steriod_supply.jfif";
import successAfter2 from "@/assets/successstory/Трансформация.jfif";
import { motion } from "framer-motion"

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
const slides = [
  {
    id: 1,
    image: successBeforeMale,
  },
  {
    id: 2,
    image: successBeforeFemale,
  },
  {
    id: 3,
    image: successAfterMale,
  },
  {
    id: 4,
    image: successAfterFemale,
  },
  {
    id: 5,
    image: successAfter1,
  },
  {
    id: 6,
    image: successAfter2,
  }
];

const SuccessStories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="">
      <div className="w-full mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display uppercase tracking-wide"
          >
            Our Success Stories
          </motion.h2>

          {/* CUSTOM CONTROLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3">
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
        </div>

        <Swiper

          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
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
          {slides.map((item) => (
            <SwiperSlide className="" key={item.id}>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src={item.image}
                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default SuccessStories;