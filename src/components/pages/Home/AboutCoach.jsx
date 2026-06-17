import { motion } from "framer-motion";
import { Award, Dumbbell, Users } from "lucide-react";
import { Link } from "react-router-dom";
import CoachImg from "@/assets/sliderImages/2.webp";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AboutCoach = () => {
  return (
    <section className="">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="w-full mx-auto "
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-zinc-100 rounded-3xl rotate-6"></div>

            <img
              src={CoachImg}
              alt="Coach"
              className="relative z-10 rounded-3xl shadow-2xl w-full max-w-md object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
           

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900"
            >
              Transform Your Body,
              <span className="block text-zinc-500">
                Elevate Your Life
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-600 leading-relaxed"
            >
              I'm a certified fitness coach helping people build strength,
              lose fat, and develop sustainable healthy habits through
              personalized training and nutrition strategies.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-zinc-50 border text-center"
              >
                <Users className="mx-auto mb-2" />
                <h3 className="font-black text-2xl">500+</h3>
                <p className="text-sm text-zinc-500">Clients</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-zinc-50 border text-center"
              >
                <Dumbbell className="mx-auto mb-2" />
                <h3 className="font-black text-2xl">8+</h3>
                <p className="text-sm text-zinc-500">Years</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="p-5 rounded-2xl bg-zinc-50 border text-center"
              >
                <Award className="mx-auto mb-2" />
                <h3 className="font-black text-2xl">100%</h3>
                <p className="text-sm text-zinc-500">Commitment</p>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10">
              <Link to="/coaching-plans" className=" px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold hover:scale-105 transition-all duration-300">
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCoach;