"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    onClose()
    
    setTimeout(() => {
      if (pathname === "/" || pathname === "") {
        // Already on home page, just scroll
        const servicesSection = document.getElementById("custom-solutions")
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        // On another page, navigate to home with hash
        router.push("/#custom-solutions")
      }
    }, 300)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[80vh]">
            <nav className="flex flex-col items-center space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link
                  href="/"
                  className="text-2xl font-bold text-white hover:text-orange-500 transition-colors relative group"
                  onClick={onClose}
                >
                  Home
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link
                  href="/about"
                  className="text-2xl font-bold text-white hover:text-orange-500 transition-colors relative group"
                  onClick={onClose}
                >
                  About Us
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <a
                  href="/#custom-solutions"
                  className="text-2xl font-bold text-white hover:text-orange-500 transition-colors relative group"
                  onClick={scrollToServices}
                >
                  Services
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link
                  href="/contact"
                  className="text-2xl font-bold text-white hover:text-orange-500 transition-colors relative group"
                  onClick={onClose}
                >
                  Contact
                  <motion.span
                    className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
                onClick={onClose}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Tech circuit decoration */}
          <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden opacity-20">
            <svg viewBox="0 0 1000 100" className="w-full h-full">
              <path
                d="M0,50 Q250,0 500,50 T1000,50"
                stroke="#FF6B00"
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}