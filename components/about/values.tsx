"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Shield } from "lucide-react"

export default function Values() {
  const values = [
    {
      title: "Innovation First",
      icon: Lightbulb,
      delay: 0,
    },
    {
      title: "Human-Centered Design",
      icon: Users,
      delay: 0.2,
    },
    {
      title: "Transparency & Trust",
      icon: Shield,
      delay: 0.4,
    },
  ]

  return (
    <section className="bg-[#FF6B00] py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: value.delay }}
            >
              <div className="flex justify-center mb-6">
                <value.icon className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <div className="h-1 w-12 bg-white mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
