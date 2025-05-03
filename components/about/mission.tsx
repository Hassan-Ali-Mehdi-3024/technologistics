"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Mission() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Team working together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're a passionate startup building AI-powered tools to reshape how research is shared. Our mission is to
              simplify, speed up, and smarten the journey from paper to impact.
            </p>
            <div className="mt-8 h-1 w-20 bg-[#FF6B00]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
