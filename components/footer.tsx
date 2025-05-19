"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"
import { useRouter, usePathname } from "next/navigation"
import type React from "react"

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    
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
  }

  return (
    <footer className="bg-black/90 text-white relative overflow-hidden">
      {/* Tech circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <pattern id="circuitPattern" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10,50 H40 M60,50 H90 M50,10 V40 M50,60 V90" stroke="#FF6B00" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="3" fill="#FF6B00" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="Technologistics logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold">Technologistics</span>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering cutting-edge web development, AI services, and custom app/software solutions for modern
              businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-500/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/#custom-solutions"
                  onClick={scrollToServices}
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Rest of the footer remains unchanged */}
        </div>
      </div>
    </footer>
  )
}