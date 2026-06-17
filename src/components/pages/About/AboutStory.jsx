import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-4xl overflow-hidden border border-black/10">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                alt="Gym Story"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-black/10 rounded-3xl p-6 shadow-lg">
              <h3 className="text-4xl font-black">10K+</h3>
              <p className="text-sm text-black/60">
                Members Transformed
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block border border-black/10 px-4 py-2 rounded-full text-sm tracking-widest uppercase">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight">
              From Small Garage
              <br />
              To A Fitness Movement
            </h2>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              We started with a simple vision — to make fitness
              accessible, effective, and life-changing for everyone.
              What began as a small training space has grown into a
              community of thousands committed to self-improvement.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed text-lg">
              Our approach focuses on discipline, consistency, and
              personalized coaching that delivers real, lasting
              results — not shortcuts.
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-black">2015</h3>
                <p className="text-sm text-black/60">Founded</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">50+</h3>
                <p className="text-sm text-black/60">Trainers</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">95%</h3>
                <p className="text-sm text-black/60">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;