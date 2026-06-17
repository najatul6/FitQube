import { motion } from "framer-motion";
import { ImageCard } from "@/components/shared/ImageCard";
import ContentWrapper from "@/context/ContentWrapper";
import img1 from "@/assets/sliderImages/1.webp"
import img2 from "@/assets/sliderImages/2.webp"
import img3 from "@/assets/sliderImages/3.webp"
import img4 from "@/assets/sliderImages/4.webp"
import img5 from "@/assets/sliderImages/5.webp"
import img6 from "@/assets/sliderImages/6.jpg"

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];

const Gallery = () => {
  return (
    <ContentWrapper>
      <div className="w-full mx-auto pt-5 px-6 lg:px-0 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black"
        >
          Gym Gallery
        </motion.h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Explore our training environment, equipment, and transformation moments.
        </p>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <ImageCard key={i} img={img} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Gallery;