import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Members" },
  { value: "50+", label: "Trainers" },
  { value: "12+", label: "Years Experience" },
  { value: "95%", label: "Success Rate" },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-24 border-y border-black/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-5xl font-black">{s.value}</h3>
              <p className="text-black/60 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;