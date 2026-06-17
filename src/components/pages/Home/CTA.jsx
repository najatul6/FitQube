import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-r from-gray-100 via-white to-gray-100 border border-gray-200 p-8 md:p-16 text-center shadow-xl"
        >
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600"
          >
            Transform Your Body Today
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
          >
            Stronger Every Day,
            <br />
            <span className="text-orange-500">Healthier For Life</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-600"
          >
            Join our fitness community and get personalized training,
            nutrition guidance, and world-class equipment to achieve your
            dream physique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-white font-semibold transition-all hover:bg-orange-600 hover:scale-105">
              Join Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all hover:border-orange-500 hover:text-orange-500">
              View Programs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <span>✓ Expert Trainers</span>
            <span>✓ Modern Equipment</span>
            <span>✓ Flexible Membership</span>
            <span>✓ Nutrition Plans</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;