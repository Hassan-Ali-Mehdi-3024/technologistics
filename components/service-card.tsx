"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  items: string[]
  icon: ReactNode
  delay?: number
}

export function ServiceCard({ title, items, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-[#1A1A1A] rounded-lg p-6 border border-orange-500/10 shadow-lg shadow-orange-500/5 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(255, 107, 0, 0.1)" }}
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FF6B00" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64">
          <path d="M0 0 L64 0 L64 64" fill="none" stroke="#FF6B00" strokeWidth="1" strokeDasharray="4,4" />
        </svg>
      </motion.div>

      {/* Icon */}
      <div className="absolute bottom-4 right-4 text-orange-500/30">{icon}</div>
    </motion.div>
  )
}
