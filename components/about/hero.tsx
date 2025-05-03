"use client"

import { motion } from "framer-motion"
import { TechIllustration } from "./tech-illustration"
import { AnimatedLogo } from "./animated-logo"
import { StarField } from "./star-field"

export default function AboutHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Enhanced star field background */}
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/5 blur-3xl" />
      <div
        className="
          absolute 
          bottom-10 
          right-4 
          sm:bottom-1/4 
          sm:right-1/4 
          w-48 h-48 
          sm:w-80 sm:h-80 
          rounded-full 
          bg-gradient-to-r 
          from-orange-600/10 
          to-orange-500/5 
          blur-3xl
          transition-all
        "
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <AnimatedLogo />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-orange-500 mt-4 font-medium"
          >
            VISION TO CODE
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="w-full md:w-1/2 text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're a team of passionate innovators driven by a passion for transforming ideas into impactful digital
              solutions.
            </p>

            <motion.div
              className="mt-8 h-1 w-20 bg-orange-500"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="
              w-full
              md:w-1/2
              mt-12 md:mt-0
              flex justify-center
              min-h-[220px]  /* Ensures visibility on mobile */
            "
          >
            <TechIllustration />
          </motion.div>
        </div>
      </div>

      {/* Tech circuit lines */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] sm:h-[120px] overflow-hidden pointer-events-none">
  <svg
    className="w-full h-full"
    viewBox="0 0 1000 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M0,50 Q250,0 500,50 T1000,50 V100 H0 Z"
      fill="none"
      stroke="#FF6B00"
      strokeWidth="1"
      strokeDasharray="5,5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 2 }}
    />
  </svg>
</div>
    </section>
  )
}