"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's build the future of research together.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold px-8 py-6 text-lg rounded-full"
          >
            Join Our Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
