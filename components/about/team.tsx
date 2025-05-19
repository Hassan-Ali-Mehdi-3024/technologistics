"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { TiltCard } from "./tilt-card" // Assuming this component exists and is used

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false) // State to track client-side rendering

  // Effect to set isClient to true only on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Responsive slide width calculation
  useEffect(() => {
    const updateSlideWidth = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth
        if (containerWidth === 0) return; 

        let visibleSlides = 4
        if (window.innerWidth < 640) visibleSlides = 1
        else if (window.innerWidth < 1024) visibleSlides = 2
        
        setSlideWidth(containerWidth / visibleSlides)
      }
    }
    // Ensure window is defined before adding event listener or calling updateSlideWidth
    if (typeof window !== 'undefined') {
      updateSlideWidth() // Initial call
      window.addEventListener("resize", updateSlideWidth)
      return () => window.removeEventListener("resize", updateSlideWidth)
    }
  }, []) // Empty dependency array means this runs once on mount and cleans up on unmount

  // Updated team info
  const team = [
    {
      name: "Hassan Ali Mehdi",
      role: "CEO",
      bio: "Founder and visionary, Hassan leads the team with a passion for innovation, business excellence, and empowering others to achieve their best.",
      delay: 0,
      image: "/team/Hassan.jpg", 
    },
    {
      name: "Zainab Hamid",
      role: "CTO", // Corrected "Cheif" to "CTO" or "Chief Technology Officer"
      bio: "Zainab is the technology mastermind, architecting robust solutions and driving the technical strategy forward.",
      delay: 0.1,
      image: "/team/Zainab.jpg", 
    },
    {
      name: "Danial Khalid",
      role: "Marketing Head",
      bio: "Danial crafts compelling campaigns and connects our brand with the world through creative marketing leadership.",
      delay: 0.2,
      image: "/team/Danial.jpg", 
    },
    {
      name: "Mohammad Umair",
      role: "Lead Developer",
      bio: "Umair turns ideas into reality, leading the development team to build scalable and reliable products.",
      delay: 0.3,
      image: "/team/Umair.jpg",
    },
    {
      name: "Momina Abbas",
      role: "Product Manager",
      bio: "Momina bridges the gap between vision and execution, ensuring our products delight and deliver value to users.",
      delay: 0.4,
      image: "/team/Momina.jpg",
    },
    {
      name: "Mohammad Ibrahim",
      role: "AI Research Director",
      bio: "Ibrahim drives our AI initiatives, constantly exploring new frontiers in machine learning and intelligent systems.",
      delay: 0.5,
      image: "/team/Ibrahim.jpg",
    },
    {
      name: "Tauha Ali",
      role: "UX/UI Design Lead",
      bio: "Tauha creates intuitive, delightful experiences, blending aesthetics and usability in every interface.",
      delay: 0.6,
      image: "/team/Tauha.jpg",
    },
  ]

  // Simple circular focus logic
  const getRelativeIndex = (index: number) => {
    let diff = index - currentIndex
    if (diff > team.length / 2) diff -= team.length
    if (diff < -team.length / 2) diff += team.length
    return diff
  }

  // Simple circular navigation
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % team.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length)

  return (
    <section className="py-28 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Floating orange particles - Conditionally render this block */}
      {isClient && (
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
      )}

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our talented team brings together diverse skills and experiences to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative"> 
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0 z-30 pointer-events-none">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-orange-500/40 flex items-center justify-center text-white hover:bg-orange-500/20 transition-all duration-300 shadow-lg pointer-events-auto -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 xl:-ml-12" 
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-orange-500/40 flex items-center justify-center text-white hover:bg-orange-500/20 transition-all duration-300 shadow-lg pointer-events-auto -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-10 xl:-mr-12" 
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden" ref={sliderRef} style={{ minHeight: "500px" }}>
            <div
              className="flex transition-transform duration-700 ease-out" 
              style={{ 
                transform: `translateX(-${currentIndex * (slideWidth || 320)}px)`, 
                minHeight: "470px", 
                alignItems: "center" 
              }}
            >
              {slideWidth > 0 && team.map((member, index) => {
                const relIdx = getRelativeIndex(index)
                const isCenter = relIdx === 0
                const isSide = Math.abs(relIdx) === 1

                return (
                  <motion.div
                    key={member.name + index} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: member.delay }}
                    className="flex justify-center items-center" 
                    style={{ 
                      minWidth: `${slideWidth}px`, 
                      width: `${slideWidth}px`, 
                      height: "430px", 
                      paddingLeft: "12px",  
                      paddingRight: "12px", 
                      boxSizing: "border-box", 
                    }}
                  >
                    <TiltCard 
                      className={` 
                        h-full w-full rounded-xl overflow-hidden border border-orange-500/30 shadow-lg shadow-orange-500/10 flex flex-col
                        bg-black/30 backdrop-blur-md
                        transition-all duration-500
                        ${isCenter ? "z-20" : "z-10"} 
                      `}
                    >
                       <motion.div 
                        className="h-full w-full flex flex-col items-center pt-6" 
                        animate={{
                          scale: isCenter ? 1.08 : isSide ? 0.96 : 0.9,
                          filter: isCenter ? "blur(0px)" : isSide ? "blur(2px)" : "blur(3.5px)",
                          opacity: isCenter ? 1 : 0.7,
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                       >
                        <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden border-2 border-orange-500/40 shadow-md mb-4">
                          <Image
                            src={member.image || `/placeholder.svg?height=150&width=150&text=${member.name.split(" ")[0][0]}${member.name.split(" ")[1]?.[0] || ''}`}
                            alt={member.name}
                            fill
                            className="object-cover" 
                            priority={index === currentIndex} 
                          />
                          <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <pattern id={`grid-circle-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FF6B00" strokeWidth="0.5" opacity="0.3" />
                              </pattern>
                              <rect width="100%" height="100%" fill={`url(#grid-circle-${index})`} />
                            </svg>
                          </div>
                        </div>

                        <div className="p-4 md:p-6 bg-black/40 backdrop-blur-sm flex-1 flex flex-col justify-between w-full text-center">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                            <p className="text-gray-300 text-sm leading-relaxed px-2">{member.bio}</p>
                          </div>
                          <div className="mt-4 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500/80 to-orange-500/20 rounded-full w-full" />
                        </div>
                      </motion.div>
                    </TiltCard>
                  </motion.div>
                )
              })}
            </div>
          </div>
           <div className="flex justify-center mt-12 space-x-2">
            {team.map((_, index) => ( 
              <button
                key={`indicator-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-500/50 w-2 hover:bg-orange-500/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}