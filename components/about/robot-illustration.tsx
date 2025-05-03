"use client"

import { motion } from "framer-motion"

export function RobotIllustration() {
  return (
    <div className="relative w-full h-64 md:h-96">
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
            "drop-shadow(0 0 20px rgba(255,255,255,0.8))",
            "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            d="M100 30C89.5 30 81 38.5 81 49V70H119V49C119 38.5 110.5 30 100 30Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.rect
            x="70"
            y="75"
            width="60"
            height="80"
            rx="10"
            fill="white"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.circle
            cx="85"
            cy="95"
            r="5"
            fill="#FF6B00"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.circle
            cx="115"
            cy="95"
            r="5"
            fill="#FF6B00"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.path
            d="M85 120C85 120 92.5 130 100 130C107.5 130 115 120 115 120"
            stroke="#FF6B00"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.rect
            x="60"
            y="100"
            width="10"
            height="30"
            fill="white"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 60, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.rect
            x="130"
            y="100"
            width="10"
            height="30"
            fill="white"
            initial={{ x: 110, opacity: 0 }}
            animate={{ x: 130, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.rect
            x="85"
            y="155"
            width="10"
            height="20"
            fill="white"
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 155, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.rect
            x="105"
            y="155"
            width="10"
            height="20"
            fill="white"
            initial={{ y: 140, opacity: 0 }}
            animate={{ y: 155, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.circle
            cx="100"
            cy="60"
            r="3"
            fill="#FF6B00"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
