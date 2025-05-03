"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb } from "lucide-react"
import { TiltCard } from "./tilt-card"

export default function MissionValues() {
  const values = [
    {
      title: "Our Mission",
      description: "To empower businesses and individuals with innovative solutions that drive growth and success.",
      icon: Target,
      delay: 0,
    },
    {
      title: "Our Vision",
      description: "To be the leading provider of transformative solutions that shape the future of our industry.",
      icon: Lightbulb,
      delay: 0.2,
    },
    {
      title: "Our Values",
      description: "Integrity, excellence, innovation, collaboration, and a deep commitment to customer satisfaction.",
      icon: Heart,
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm relative overflow-hidden">
      {/* Floating binary code */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-500 font-mono text-xs"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mission & Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: value.delay }}
            >
              <TiltCard className="h-full bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20 shadow-lg shadow-orange-500/10">
                <div className="flex justify-center mb-6 transform-gpu translate-z-10">
                  <div className="p-4 bg-orange-500/10 rounded-full relative">
                    <value.icon className="w-8 h-8 text-orange-500" />

                    {/* Pulsing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-orange-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-4 transform-gpu translate-z-10">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-center transform-gpu translate-z-10">{value.description}</p>

                {/* Tech circuit lines */}
                <motion.div
                  className="absolute bottom-4 left-0 w-full h-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: value.delay + 0.5 }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 1">
                    <motion.path
                      d="M0,0.5 H100"
                      stroke="#FF6B00"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: value.delay + 0.7 }}
                    />
                  </svg>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
