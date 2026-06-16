import TransImage from "@/assets/sliderImages/5.webp";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const TransformYourself = () => {
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
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}>
      <div class="w-full mx-auto">
        <div class="grid justify-center items-center gap-12 lg:grid-cols-2">
          <motion.div variants={itemVariants} class="aspect-19/12 w-full">
            <motion.img variants={itemVariants} src={TransImage} alt="Premium Benefits"
              class="w-full h-full rounded-xl object-cover" />
          </motion.div>
          <motion.div variants={itemVariants} class="max-w-3xl">
            <motion.h2 variants={itemVariants} class="text-3xl text-slate-900 mb-6 md:text-4xl font-display tracking-wide">

              Personalised Diet Plans!
            </motion.h2>
            <motion.p variants={itemVariants} class="text-base text-zinc-950 leading-relaxed">FITQUBE offers tailored diet plans with options for every preference—choose from veg, non-veg, and eggetarian, plus gluten-free, lactose-free, and gluten + lactose-free choices. With over 10,000 foods to explore, you’ll never get bored! We also have a vast database of restaurants and eateries like Dominos, Subway, Pizza Hut, Burger king, McDonald’s and many more so you can track your cheat meals even when you dine out. Enjoy a diet plan that fits your lifestyle and keeps you on track with FITQUBE!</motion.p>

            <motion.div variants={itemVariants} class="flex gap-4 flex-wrap mt-8">
              
              <Link to="/coaching-plans"
                class="py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md inline-block border border-black transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                Learn more</Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default TransformYourself