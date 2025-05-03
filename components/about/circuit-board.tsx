"use client"

import { motion } from "framer-motion"

export function CircuitBoard() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main horizontal and vertical lines */}
      <motion.path
        d="M0 200 H800"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="10,10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.2 }}
      />
      <motion.path
        d="M400 0 V400"
        stroke="#FF6B00"
        strokeWidth="1"
        strokeDasharray="10,10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.4 }}
      />

      {/* Horizontal lines */}
      <motion.path
        d="M0 100 H300 M500 100 H800"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.6 }}
      />
      <motion.path
        d="M0 300 H300 M500 300 H800"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Vertical lines */}
      <motion.path
        d="M200 0 V150 M200 250 V400"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.0 }}
      />
      <motion.path
        d="M600 0 V150 M600 250 V400"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 1.2 }}
      />

      {/* Additional circuit paths */}
      <motion.path
        d="M300 100 C350 100, 350 200, 400 200"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      />

      <motion.path
        d="M500 100 C550 100, 550 200, 600 200"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.6 }}
      />

      <motion.path
        d="M300 300 C350 300, 350 200, 400 200"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      />

      <motion.path
        d="M500 300 C550 300, 550 200, 600 200"
        stroke="#FF6B00"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 2.0 }}
      />

      {/* Connection nodes with pulse animations */}
      {[
        { cx: 200, cy: 100, delay: 1.4 },
        { cx: 400, cy: 100, delay: 1.6 },
        { cx: 600, cy: 100, delay: 1.8 },
        { cx: 200, cy: 200, delay: 2.0 },
        { cx: 400, cy: 200, delay: 2.2 },
        { cx: 600, cy: 200, delay: 2.4 },
        { cx: 200, cy: 300, delay: 2.6 },
        { cx: 400, cy: 300, delay: 2.8 },
        { cx: 600, cy: 300, delay: 3.0 },
      ].map((node, i) => (
        <g key={i}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="#FF6B00"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.5, delay: node.delay }}
          />

          {/* Pulse effect */}
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="5"
            fill="transparent"
            stroke="#FF6B00"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: node.delay + Math.random() * 2,
            }}
          />
        </g>
      ))}

      {/* Binary code elements */}
      {[...Array(12)].map((_, i) => (
        <motion.text
          key={i + "binary"}
          x={100 + i * 50}
          y={350}
          fill="#FF6B00"
          fontSize="8"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.text>
      ))}
    </svg>
  )
}
