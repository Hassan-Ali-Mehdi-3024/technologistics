"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [rotate, setRotate] = useState(false)

  useEffect(() => {
    setRotate(true)
  }, [])

  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Orbital ring */}
      <motion.div
        className="absolute inset-0"
        animate={
          rotate
            ? {
                rotate: 360,
              }
            : {}
        }
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse
            cx="100"
            cy="100"
            rx="90"
            ry="30"
            stroke="#FF6B00"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,3"
          />
        </svg>
      </motion.div>

      {/* Shield with code */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg viewBox="0 0 100 120" className="w-3/4 h-3/4">
          {/* Shield */}
          <motion.path
            d="M50 10 L90 30 L90 70 C90 90 70 110 50 110 C30 110 10 90 10 70 L10 30 Z"
            fill="url(#shieldGradient)"
            stroke="#FF6B00"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />

          {/* Code brackets */}
          <motion.path
            d="M35 40 L25 50 L35 60 M65 40 L75 50 L65 60"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />

          {/* Code lines */}
          <motion.path
            d="M40 70 L60 70 M40 80 L55 80"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Glowing dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500 rounded-full"
          style={{
            top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
            left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}

      {/* Particle effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
