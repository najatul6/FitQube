import {motion} from 'framer-motion'

const ProPlan = () => {
  return (
    <div>
       <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
          >
            Our Pro Plan
          </motion.h2>
    </div>
  )
}

export default ProPlan