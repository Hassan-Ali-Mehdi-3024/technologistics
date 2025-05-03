"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import type React from "react"
import { MobileMenu } from "./mobile-menu"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault()
    const servicesSection = document.getElementById("custom-solutions")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 100 120" className="w-full h-full">
              {/* Outer Shield */}
              <path
                d="M50 10 L90 30 L90 70 C90 90 70 110 50 110 C30 110 10 90 10 70 L10 30 Z"
                fill="none"
                stroke="#FF6B00"
                strokeWidth="3"
              />

              {/* Inner Shield */}
              <path
                d="M50 20 L80 35 L80 65 C80 80 65 95 50 95 C35 95 20 80 20 65 L20 35 Z"
                fill="none"
                stroke="#FF6B00"
                strokeWidth="2"
              />

              {/* Code brackets */}
              <path
                d="M35 40 L25 50 L35 60 M65 40 L75 50 L65 60"
                fill="none"
                stroke="#FF6B00"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Code lines */}
              <path
                d="M40 70 L60 70 M35 80 L65 80 M40 90 L60 90"
                fill="none"
                stroke="#FF6B00"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-white font-medium text-xl">Technologistics</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <a
            href="#custom-solutions"
            onClick={scrollToServices}
            className="text-gray-300 hover:text-white transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Book Now</Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
    </Link>
  )
}
