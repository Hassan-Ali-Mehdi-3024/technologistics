"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    content:
      "Technologistics transformed our business with their AI solutions. Their team's expertise and dedication to our project exceeded our expectations. The custom solution they built has streamlined our operations and significantly improved our customer experience.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DataFlow",
    content:
      "Working with Technologistics on our web application was a game-changer. Their attention to detail and technical knowledge helped us launch our product ahead of schedule. The responsive design works flawlessly across all devices.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthHub",
    content:
      "The mobile app Technologistics developed for us has received outstanding feedback from our users. Their team was responsive, professional, and delivered exactly what we needed. I highly recommend their services to anyone looking for quality development work.",
  },
  {
    id: 4,
    name: "David Park",
    role: "CEO, InnovateX",
    content:
      "Technologistics helped us implement machine learning solutions that have transformed our data analysis capabilities. Their team took the time to understand our unique challenges and delivered a solution that perfectly addressed our needs.",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToTestimonial = (index: number) => {
    setCurrent(index)
  }

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering])

  return (
    <div
      className="relative overflow-hidden bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/10 shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-4 left-6 text-orange-500 opacity-30">
        <Quote size={48} />
      </div>

      <div className="px-12 py-16 min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg italic mb-8">{testimonials[current].content}</p>
            <div className="flex flex-col items-center">
              <h3 className="text-white font-semibold text-xl">{testimonials[current].name}</h3>
              <p className="text-orange-500">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-orange-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-orange-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-orange-500" : "bg-gray-500"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
