import aboutImg from "@/assets/sliderImages/2.webp";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const fullStory = `FITQUBE - World’s Most Affordable Fitness Coaching Platform – where fitness meets simplicity and results! Whether you're a beginner or a seasoned fitness enthusiast, FITQUBE offers a personalized approach to your fitness journey, making it feel like you have a personal coach in your pocket.

Start your fitness journey quickly with fully personalized workout and meal plans tailored to your goals. Track your progress by logging workouts, recording meals, updating check-ins, and connecting your fitness band & health kit. FITQUBE is packed with features to help you achieve your fitness goals. Begin your journey today!

How to Start with FITQUBE: Step-by-Step Guide

Welcome to FITQUBE! We're excited to help you embark on your fitness journey. Follow these simple steps to get started:
Step 1: Download the FITQUBE App

On this Website: Click on the “Download Now” button located at the top of the header. This will direct you to a screen where you can choose to either scan a QR code or be redirected to the app stores.

•⁠  ⁠For Apple Users: Visit the Apple Store on your device and type “FITQUBE” in the search bar. Look for our white background icon with the FitQube logo and download the app.

•⁠  ⁠For Android Users: Go to the Google Play Store and search for “FITQUBE.” Find our logo and download the app.

Step 2: Choose Your Plan

•⁠  ⁠In the App: Once downloaded, you can make your payment directly in the app. 

•⁠  ⁠On the Website: Alternatively, you can purchase your plan here on the website. Simply go to the Plans section where you'll find three options:
- ₹249 per month
- ₹349 for three months
- ₹399 for six months

•⁠  ⁠Payment Options: We offer both subscription and one-time payment options. You can choose the one that fits your needs.

Step 3: Activate Your Plan

•⁠  ⁠Automatic Activation: After making your payment, your chosen plan will be automatically activated as soon as you enter the app. No additional steps are needed. In case your plan is not activated just text us through in app messenger with your email ID and payment screenshot. The team will activate you plan within 24 to 48 hours after verification.

Step 4: Get Started with FITQUBE

•⁠  ⁠Once inside the app, our expert coaches will be there to guide you through in app messenger. Explore the features, start your personalized fitness plan, and begin your journey to becoming the fittest version of yourself!

Need Help?

If you encounter any issues or have any questions, feel free to reach out to us through the messaging feature in the app itself or drop us a mail at contact@fitqube.com. We’re here to help you succeed!

Ready to Begin?

Click  “Download Now” to get started with FITQUBE. Your fitness journey awaits!`;
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className=" bg-white text-black flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content Area */}
        <div className="space-y-6 order-2 md:order-1">
          <motion.span
            variants={itemVariants} className="text-zinc-800 text-xs md:text-sm font-black uppercase tracking-[0.3em] border-l-2 border-black pl-3 block">
            Who We Are
          </motion.span>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
            Welcome to FITQUBE
          </motion.h2>

          <motion.div variants={itemVariants} className="text-zinc-950 font-light space-y-4 leading-relaxed tracking-wide text-sm md:text-base">
            <p>
              FITQUBE - World's Most Affordable Fitness Coaching Platform -
              where fitness meets simplicity and results! Whether you're a
              beginner or a seasoned fitness enthusiast, FITQUBE offers a
              personalized approach...
            </p>
          </motion.div>

          {/* Radix UI Dialog / Modal Trigger Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsOpen(true)}
            className="text-zinc-800 text-sm font-black uppercase tracking-wider border-b-2 border-b-zinc-400 pb-1 hover:text-zinc-800 hover:border-zinc-950 hover:border-b-3 transition-all cursor-pointer inline-block"
          >
            Read Full Story &rarr;
          </motion.button>
        </div>

        {/* Right Side: Visual/Video Thumbnail Area */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }} className="relative order-1 md:order-2 group cursor-pointer overflow-hidden rounded-xl aspect-video  max-h-[550px]">
          {/* Grayscale Background Image to match B&W profile */}
          <div
            className="w-full h-full bg-cover bg-center  transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${aboutImg}')` }}
          />
        </motion.div>

      </div>

      {/* ================= Radix UI Responsive Modal Section ================= */}
      {/* ================= Animated Radix Modal ================= */}
<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
  <AnimatePresence>
    {isOpen && (
      <Dialog.Portal forceMount>
        {/* Overlay */}
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
        </Dialog.Overlay>

        {/* Modal */}
        <Dialog.Content asChild>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-10 z-50 text-white focus:outline-none shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Dialog.Title className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    Our Legacy & Vision
                  </Dialog.Title>

                  <Dialog.Description className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                    The Full FitQube Story
                  </Dialog.Description>
                </motion.div>

                <Dialog.Close asChild>
                  <button
                    className="p-2 hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-400 hover:text-white"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>

              {/* Story */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-zinc-300 font-light text-sm md:text-base leading-relaxed tracking-wide whitespace-pre-line"
              >
                {fullStory}
              </motion.div>

              {/* Footer */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-8 pt-6 border-t border-zinc-800 flex justify-end"
              >
                <Dialog.Close asChild>
                  <button className="px-6 py-3 bg-white text-black font-black uppercase tracking-wider text-xs hover:bg-zinc-200 transition-colors cursor-pointer">
                    Close Story
                  </button>
                </Dialog.Close>
              </motion.div>
            </motion.div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    )}
  </AnimatePresence>
</Dialog.Root>
    </motion.section>
  );
};

export default AboutSection;