"use client"

import { motion } from "framer-motion"

export function TechIllustration() {
  return (
    <div className="relative w-full h-64 md:h-96">
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: [
            "drop-shadow(0 0 10px rgba(255,107,0,0.5))",
            "drop-shadow(0 0 20px rgba(255,107,0,0.8))",
            "drop-shadow(0 0 10px rgba(255,107,0,0.5))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Central Circle */}
          <motion.circle
            cx="250"
            cy="250"
            r="80"
            fill="url(#orangeGradient)"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Binary code ring */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}>
            {[...Array(24)].map((_, i) => (
              <motion.text
                key={i}
                x={250 + 110 * Math.cos((i * Math.PI) / 12)}
                y={250 + 110 * Math.sin((i * Math.PI) / 12)}
                fill="#FF6B00"
                fontSize="10"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 3,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.text>
            ))}
          </motion.g>

          {/* Orbiting Circles */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <circle cx="400" cy="250" r="15" fill="#FF6B00" />
            <circle cx="250" cy="400" r="15" fill="#FF8C40" />
            <circle cx="100" cy="250" r="15" fill="#FFA76B" />
            <circle cx="250" cy="100" r="15" fill="#FFD1B0" />
          </motion.g>

          {/* Connection Lines */}
          <motion.path
            d="M250 170 L250 100"
            stroke="#FF6B00"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path
            d="M250 330 L250 400"
            stroke="#FF6B00"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.path
            d="M330 250 L400 250"
            stroke="#FF6B00"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          <motion.path
            d="M170 250 L100 250"
            stroke="#FF6B00"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />

          {/* Code symbols */}
          <motion.text
            x="240"
            y="245"
            fill="white"
            fontSize="24"
            fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {"</>"}
          </motion.text>

          {/* Smaller Nodes with data pulses */}
          {[
            { cx: 200, cy: 200, delay: 1.3 },
            { cx: 300, cy: 200, delay: 1.5 },
            { cx: 300, cy: 300, delay: 1.7 },
            { cx: 200, cy: 300, delay: 1.9 },
          ].map((node, i) => (
            <g key={i}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="10"
                fill="#FF6B00"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: node.delay }}
              />

              {/* Data pulse effect */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="10"
                fill="transparent"
                stroke="#FF6B00"
                strokeWidth="2"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                transition={{
                  duration: 2,
                  delay: node.delay + 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              />
            </g>
          ))}

          {/* Gradient Definition */}
          <defs>
            <radialGradient id="orangeGradient" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
              <stop offset="0%" stopColor="#FFAA70" />
              <stop offset="100%" stopColor="#FF6B00" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}
