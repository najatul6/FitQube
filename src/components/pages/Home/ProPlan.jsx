import { motion } from 'framer-motion';
import logo from "/logo.png"
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Pending work for button to choose payment 

const ProPlan = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section variants={containerVariants}
      initial="hidden"
      whileInView="show">
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl uppercase tracking-wide mb-10 font-display"
      >
        Our Pro Plan
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 rounded-md shadow-xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
        <motion.div
          variants={itemVariants}
          className='flex justify-center items-center'
        >
          <img src={logo} alt="Pro Plan Logo" className=' md:w-2/3 h-[250px] md:h-auto' />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className='border-t-2 md:border-t-0 md:border-l-2 border-zinc-950 flex flex-col justify-between'
        >
          <div className='flex flex-col justify-center items-start gap-4'>
            <motion.h2 variants={itemVariants} className="text-2xl font-bold capitalize text-zinc-950 px-5 py-2">
              Unlock exclusive benefits.
            </motion.h2>
            <div className='px-5'>
              <motion.p variants={itemVariants} className=' text-base text-zinc-950 leading-relaxed'>Our coaching plans will help you reach your fitness goals faster!</motion.p>
              <motion.div variants={containerVariants}>
                <ul className="list-disc pl-5 space-y-2 text-base text-zinc-950 leading-relaxed">
                  <motion.li variants={itemVariants}>Personalised Workout Plans with video demonstrations</motion.li>
                  <motion.li variants={itemVariants}>Personalised Meal Plans according to your goals (Veg, Non-veg, Eggetarian, Gluten Free, Lactose Free & Gluten+Lactose Free Diets available)</motion.li>
                  <motion.li variants={itemVariants}>More than 10000 Food Options to choose and 100s of Easy to make Recipes</motion.li>
                </ul>
              </motion.div>
            </div>
          </div>
          <Link to="/contact" className='border-t-2 border-zinc-950 group w-full '>
            <motion.div variants={itemVariants} className='p-5 flex justify-between items-center font-bold'>
              <div className='flex justify-baseline items-baseline gap-1 group-hover:animate-bounce'>
                <span className='text-gray-600'>Starts</span>
                <span className='font-black text-[20px]'>$299</span>
                <span className='text-gray-600'>for 1 month</span>
              </div>
              <div className='relative font-black'>
                <MoveRight size={28} className='' />
                <MoveRight size={28} className='absolute top-0 group-hover:animate-ping' />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProPlan