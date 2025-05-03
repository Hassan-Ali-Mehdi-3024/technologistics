"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CircuitBoard } from "./circuit-board"
import { CodeSnippet } from "./code-snippet"

export default function OurStory() {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm relative">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-orange-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent z-10" />
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Our+Story"
                alt="Our company story"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Tech overlay */}
              <div className="absolute inset-0 bg-black/30 z-20 flex items-end">
                <CodeSnippet />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Founded in 2015, our company began with a simple mission: to create solutions that make a difference. What
              started as a small team of three in a garage has grown into a thriving organization with offices across
              the country.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Through the years, we've remained committed to our core values of innovation, integrity, and customer
              satisfaction. Our journey has been defined by continuous learning, adaptation, and a relentless pursuit of
              excellence.
            </p>

            {/* Animated underline */}
            <motion.div
              className="mt-8 h-1 bg-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Enhanced circuit board illustration */}
      <div className="absolute right-0 bottom-0 opacity-20 w-full h-64 overflow-hidden pointer-events-none">
        <CircuitBoard />
      </div>
    </section>
  )
}