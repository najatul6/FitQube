import { motion } from 'framer-motion';
import logo from "/logo.png"
import { MoveRight } from 'lucide-react';

// Pending work for button to choose payment 

const ProPlan = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-10"
      >
        Our Pro Plan
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 rounded-md shadow-xl border'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex justify-center items-center'
        >
          <img src={logo} alt="Pro Plan Logo" className='w-2/3' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='border-l-2 border-amber-400 flex flex-col justify-between'
        >
          <motion.h2 className="text-lg text-zinc-400 px-5">
            Unlock exclusive benefits.
          </motion.h2>
          <div className='px-5'>
            <p>Our coaching plans will help you reach your fitness goals faster!</p>
            <ul>
              <li>Personalised Workout Plans with video demonstrations</li>
              <li>Personalised Meal Plans according to your goals (Veg, Non-veg, Eggetarian, Gluten Free, Lactose Free & Gluten+Lactose Free Diets available)</li>
              <li>More than 10000 Food Options to choose and 100s of Easy to make Recipes</li>
            </ul>
          </div>
            <button className='border-t-2 w-full flex justify-between items-center'>
              <div>
                Starts
                ₹349
                for 1 month
              </div>
              <MoveRight />
            </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProPlan