import { motion } from "framer-motion";
import { ImageCard } from "@/components/shared/ImageCard";
import ContentWrapper from "@/context/ContentWrapper";

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
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