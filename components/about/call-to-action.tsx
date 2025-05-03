"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-900/50 to-orange-600/50 backdrop-blur-sm text-white relative overflow-hidden">
      {/* Tech circuit lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg opacity-90 mb-8">
            We're always looking for new opportunities and partnerships. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white relative overflow-hidden group">
              <span className="relative z-10">Contact Us</span>
              <motion.div
                className="absolute inset-0 bg-orange-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-orange-700/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
