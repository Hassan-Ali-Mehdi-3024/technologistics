"use client"

import { motion } from "framer-motion"

export function TechCircuit() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <motion.path
          d="M0,150 Q250,50 500,150 T1000,150"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M0,100 Q250,200 500,100 T1000,100"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M0,200 Q250,100 500,200 T1000,200"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />

        {/* Connection nodes */}
        {[0, 0.25, 0.5, 0.75, 1].map((pos, i) => (
          <g key={i}>
            <motion.circle
              cx={pos * 1000}
              cy="150"
              r="4"
              fill="#FF6B00"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 1.5 + pos }}
            />
            <motion.circle
              cx={pos * 1000}
              cy="150"
              r="10"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 2 + pos,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
