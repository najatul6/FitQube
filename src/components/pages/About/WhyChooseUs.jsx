import { motion } from "framer-motion";

const features = [
  "Expert Certified Trainers",
  "Personalized Workout Plans",
  "Science-Based Nutrition",
  "Modern Equipment",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block border border-black/10 px-4 py-2 rounded-full text-sm uppercase tracking-widest"
        >
          Why Choose Us
        </motion.span>

        <h2 className="mt-6 text-4xl md:text-5xl font-black">
          Built For Real Results
        </h2>

        <p className="mt-4 text-black/60 max-w-2xl mx-auto">
          We don’t believe in shortcuts. We believe in discipline, guidance,
          and consistency that actually works.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-black/10 rounded-2xl p-6 hover:-translate-y-2 transition"
            >
              <div className="w-3 h-3 bg-black rounded-full mx-auto mb-4" />
              <p className="font-semibold">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;