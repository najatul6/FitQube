import ContentWrapper from "@/context/ContentWrapper";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "John Carter",
    role: "Head Coach",
    exp: "10+ Years Experience",
    img: "https://images.unsplash.com/photo-1550345332-09e3ac987658",
  },
  {
    name: "Sarah Ahmed",
    role: "Fitness Trainer",
    exp: "6+ Years Experience",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    name: "Mike Tyson Jr",
    role: "Strength Coach",
    exp: "8+ Years Experience",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
  {
    name: "Emily Rose",
    role: "Nutrition Coach",
    exp: "5+ Years Experience",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];

const Trainers = () => {
  return (
    <ContentWrapper>
      <div className="w-full mx-auto pt-5 px-6 lg:px-0 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black"
        >
          Meet Our Trainers
        </motion.h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Certified professionals dedicated to helping you achieve your fitness goals.
        </p>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group border border-black/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="text-black/60">{t.role}</p>

                <p className="mt-2 text-sm text-black/50">{t.exp}</p>

                {/* Button */}
                {/* <button className="mt-6 w-full border border-black rounded-full py-2 font-semibold hover:bg-black hover:text-white transition-all duration-300">
                  View Profile
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Trainers;