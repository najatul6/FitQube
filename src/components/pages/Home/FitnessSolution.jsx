import { motion } from "framer-motion";
import {
  Dumbbell,
  Utensils,
  HeartPulse,
  BarChart3,
  Clock3,
  MessageCircle,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const solutions = [
  {
    icon: Dumbbell,
    title: "Workout Plans",
    description:
      "Personalized workout programs designed around your goals, fitness level, and lifestyle.",
  },
  {
    icon: Utensils,
    title: "Nutrition Guidance",
    description:
      "Custom meal plans with flexible food choices that fit your preferences and goals.",
  },
  {
    icon: HeartPulse,
    title: "Health Tracking",
    description:
      "Monitor progress, body measurements, habits, and overall fitness improvements.",
  },
  {
    icon: BarChart3,
    title: "Progress Reviews",
    description:
      "Regular assessments and plan adjustments to ensure continuous improvement.",
  },
  {
    icon: Clock3,
    title: "Flexible Scheduling",
    description:
      "Train at your own pace with plans tailored to your daily routine.",
  },
  {
    icon: MessageCircle,
    title: "Coach Support",
    description:
      "Get expert guidance, motivation, and accountability throughout your journey.",
  },
];

const FitnessSolution = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        >
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white border text-sm font-semibold text-zinc-700 mb-4">
              Complete Personalised Fitness Solution
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
              Everything You Need To
              <span className="block text-zinc-500">
                Reach Your Fitness Goals
              </span>
            </h2>

            <p className="mt-5 text-lg text-zinc-600">
              From customized workouts and nutrition plans to expert coaching
              and progress tracking, everything is designed to help you achieve
              sustainable results.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-zinc-900" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FitnessSolution;