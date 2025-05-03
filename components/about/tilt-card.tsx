"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 400, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 })

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10])
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10])
  const brightness = useTransform(mouseY, [-100, 100], [1.1, 0.9])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(event.clientX - centerX)
    y.set(event.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={`${className} perspective-1000 relative`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        filter: `brightness(${brightness})`,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
