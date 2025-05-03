"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface CyclingWordsProps {
  words: string[]
  interval?: number
}

export function CyclingWords({ words, interval = 3000 }: CyclingWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <div className="relative h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute text-orange-500"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
