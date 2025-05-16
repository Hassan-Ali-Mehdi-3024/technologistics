"use client"

import { motion } from "framer-motion"

function AnimatedLogo() {
  return (
    <div className="relative w-[600px] h-[250px] mx-auto flex items-center justify-center">
      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* PNG Logo */}
      <div className="relative z-10 w-[660px] h-[380px] flex items-center justify-center">
        <img 
          src="/logo.png" 
          alt="Logo"
          className="w-auto h-full object-contain bg-transparent" 
        />
      </div>
    </div>
  )
}

export default AnimatedLogo
