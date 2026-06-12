import successBeforeMale from "@/assets/successstory/1.png";
import successBeforeFemale from "@/assets/successstory/2.png";
import successAfterMale from "@/assets/successstory/3.png";
import successAfterFemale from "@/assets/successstory/4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  }
];

const SuccessStories = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            Our Success Stories
          </h2>

          {/* TOP RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            <div className="swiper-pagination static! text-sm font-bold text-black" />
            <div className="swiper-button-prev static! text-black" />
            <div className="swiper-button-next static! text-black" />
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
            el: ".swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="">
                <img
                  src={item.image}
                  className="w-full rounded-xl object-cover"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default SuccessStories;