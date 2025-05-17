"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { MobileMenu } from "./mobile-menu"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Technologistics logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white font-medium text-xl">Technologistics</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <a
            href="/#custom-solutions"
            onClick={scrollToServices}
            className="text-gray-300 hover:text-white transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
          </a>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Contact Us</Button>
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