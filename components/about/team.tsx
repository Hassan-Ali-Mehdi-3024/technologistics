"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TiltCard } from "./tilt-card"

export default function Team() {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of industry experience, Alex leads our company vision and strategy.",
      delay: 0,
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Sarah oversees all technical aspects and innovations within our organization.",
      delay: 0.1,
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      bio: "Michael ensures our products deliver exceptional user experiences and visual appeal.",
      delay: 0.2,
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      bio: "Priya develops our brand strategy and leads our marketing initiatives.",
      delay: 0.3,
    },
  ]

  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our talented team brings together diverse skills and experiences to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: member.delay }}
            >
              <TiltCard className="h-full bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-500/20 shadow-lg shadow-orange-500/10">
                <div className="relative h-64 w-full bg-gray-800 transform-gpu translate-z-10">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=${member.name.split(" ")[0][0]}${member.name.split(" ")[1][0]}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Tech overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FF6B00" strokeWidth="0.5" opacity="0.3" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 transform-gpu translate-z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>

                  {/* Tech circuit line */}
                  <motion.div
                    className="mt-4 h-0.5 bg-orange-500/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: member.delay + 0.5 }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
