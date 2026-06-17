import { motion } from "framer-motion";

const MeetTrainer = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1550345332-09e3ac987658"
            className="rounded-[32px] border border-black/10"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="border border-black/10 px-4 py-2 rounded-full text-sm uppercase tracking-widest">
            Head Trainer
          </span>

          <h2 className="mt-6 text-4xl font-black">
            Meet Our Lead Coach
          </h2>

          <p className="mt-6 text-black/60 leading-relaxed">
            With over a decade of experience, our head coach has helped
            thousands transform their bodies with proven training systems.
          </p>

          <p className="mt-4 text-black/60">
            "Fitness is not about perfection — it's about progress and
            consistency."
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:-translate-y-1 transition">
            View Trainers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTrainer;