import { faqData } from "@/lib/faqdata";
import { useState } from "react";
import {motion} from "framer-motion"



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section 
    variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      >
      <div className="w-full mx-auto text-center mb-12">
        <motion.h2 variants={itemVariants} className="text-zinc-900 text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </motion.h2>
      </div>

      <div className="w-full mx-auto divide-y divide-zinc-400">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-5">
              {/* Question */}
              <motion.button
                variants={itemVariants}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full cursor-pointer flex justify-between items-center text-lg text-left font-semibold text-zinc-900"
              >
                <span>{item.question}</span>

                <span
                  className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </motion.button>

              {/* Answer (SMOOTH CSS ANIMATION ONLY) */}
              <div
                className={`grid transition-all duration-300 text-lg ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
              >
                <div className="overflow-hidden">
                  <p className="text-zinc-950 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}