import { motion } from "framer-motion";
import heroImage from "@/assets/sliderImages/5.webp"; 

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full border border-black/10 px-4 py-2 text-sm font-medium tracking-wider uppercase">
              About Our Gym
            </span>

            <h1 className="mt-6 text-5xl font-black leading-none md:text-6xl lg:text-7xl">
              WE DON'T JUST
              <br />
              BUILD BODIES.
              <br />
              <span className="text-black/40">
                WE BUILD CONFIDENCE.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/60">
              Our mission is simple: help people become stronger,
              healthier, and more confident through expert coaching,
              proven training methods, and a supportive fitness
              community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1">
                Join Now
              </button>

              <button className="rounded-full border border-black px-8 py-4 font-semibold transition-all duration-300 hover:bg-black hover:text-white">
                Explore Programs
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-4xl border border-black/10">
              <img
                src={heroImage}
                alt="Gym Training"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-3xl border border-black/10 bg-white p-6 shadow-xl">
              <h3 className="text-4xl font-black">10+</h3>
              <p className="text-sm text-black/60">
                Years of Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <h2 className="text-[150px] font-black uppercase text-black/3 lg:text-[250px]">
          ABOUT US
        </h2>
      </div>
    </section>
  );
};

export default AboutHero;