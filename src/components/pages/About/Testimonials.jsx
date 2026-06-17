import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    text: "Best gym experience I've ever had. Real results!",
  },
  {
    name: "Sarah Khan",
    text: "Amazing trainers and perfect guidance system.",
  },
  {
    name: "Mike Ahmed",
    text: "I transformed my body in just 3 months!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-black">What Members Say</h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border border-black/10 rounded-2xl p-8"
            >
              <p className="text-black/60">"{t.text}"</p>
              <h4 className="mt-6 font-bold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;