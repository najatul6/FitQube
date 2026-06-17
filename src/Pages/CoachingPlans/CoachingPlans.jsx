import ContentWrapper from "@/context/ContentWrapper";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Plan",
    price: "$999",
    desc: "Perfect for beginners starting their fitness journey.",
    features: [
      "Basic workout plan",
      "Gym access",
      "Weekly progress check",
    ],
  },
  {
    name: "Pro Plan",
    price: "$1999",
    desc: "Best for serious transformation results.",
    features: [
      "Personalized workout plan",
      "Nutrition guide",
      "3x weekly coaching",
      "Progress tracking",
    ],
  },
  {
    name: "Elite Plan",
    price: "$2999",
    desc: "Full transformation with 1-on-1 coaching.",
    features: [
      "1-on-1 personal trainer",
      "Custom meal plan",
      "Daily monitoring",
      "Priority support",
      "Weekly body analysis",
    ],
  },
];

const CoachingPlans = () => {
  return (
    <ContentWrapper>
      <div className="w-full mx-auto pt-5 px-6 lg:px-0 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black"
        >
          Coaching Plans
        </motion.h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          Choose a plan that fits your fitness goals. Upgrade anytime as you grow stronger.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col justify-between border border-black/10 rounded-3xl p-8 text-left hover:-translate-y-2 transition-all duration-300"
            >
              {/* Plan Name */}
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              {/* Price */}
              <p className="text-4xl font-black mt-4">{plan.price}</p>

              {/* Description */}
              <p className="mt-4 text-black/60">{plan.desc}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-black/70">
                    <span className="mt-1 w-2 h-2 bg-black rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-8 w-full border border-black rounded-full py-3 font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CoachingPlans;