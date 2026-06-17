import { motion } from "framer-motion";

const steps = [
  "Fitness Assessment",
  "Custom Training Plan",
  "Nutrition Guidance",
  "Transformation Tracking",
];

const TransformationProcess = () => {
  return (
    <section className="bg-white py-24 border-t border-black/10">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-black">Your Transformation Journey</h2>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-black/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-black">{`0${i + 1}`}</h3>
              <p className="mt-4 text-black/60">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationProcess;