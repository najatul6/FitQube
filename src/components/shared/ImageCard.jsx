import { useState } from "react";
import { motion } from "framer-motion";
import ImageLoader from "./ImageLoader";

export const ImageCard = ({ img }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-black/10 bg-white"
    >
      {/* LOADER CENTER */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <ImageLoader />
        </div>
      )}

      {/* IMAGE */}
      <img
        src={img}
        alt="Gym"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-80 w-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </motion.div>
  );
};