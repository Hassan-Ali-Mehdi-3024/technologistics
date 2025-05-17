"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react"
import { DiscordIcon } from "@/components/icons/discord-icon"

export default function Footer() {
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
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Services
                </Link>
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

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-orange-500/30 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
               <motion.a
          href="#"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <DiscordIcon className="w-5 h-5" />
        </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Technologistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}