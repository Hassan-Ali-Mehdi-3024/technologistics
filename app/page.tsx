"use client"
import AnimatedLogo from "@/components/animated-logo"
import { ServiceCard } from "@/components/service-card"
import { TechCircuit } from "@/components/tech-circuit"
import { StarField } from "@/components/star-field"
import { BookServiceButton } from "@/components/book-service-button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Cpu, Smartphone, Database, Code, Brain } from "lucide-react"
import { motion } from "framer-motion"
import { TestimonialCarousel } from "@/components/testimonial-slider"
import { FaqSection } from "@/components/faq-accordion"

export default function Home() {
  const services = [
    {
      title: "AI Agents Development",
      items: ["Build task-specific intelligent agents for automation & real-time assistance."],
      icon: <Cpu className="w-8 h-8" />,
      delay: 0.1,
    },
    {
      title: "Machine Learning",
      items: ["End-to-end ML systems: prediction, classification, NLP, CV."],
      icon: <Brain className="w-8 h-8" />,
      delay: 0.2,
    },
    {
      title: "Data Science & Analytics",
      items: ["Turn raw data into insights using analytics, dashboards, and modeling."],
      icon: <Database className="w-8 h-8" />,
      delay: 0.3,
    },
    {
      title: "Web Development",
      items: ["Modern, responsive, and scalable websites for every industry."],
      icon: <Monitor className="w-8 h-8" />,
      delay: 0.4,
    },
    {
      title: "Mobile App Development",
      items: ["Flutter and React Native apps with performance-focused UI."],
      icon: <Smartphone className="w-8 h-8" />,
      delay: 0.5,
    },
    {
      title: "AI Strategy & Consulting",
      items: ["Expert guidance to bring AI into your workflows."],
      icon: <Code className="w-8 h-8" />,
      delay: 0.6,
    },
  ]

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 z-0">
        <StarField />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8">
              <AnimatedLogo />
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl text-orange-500 mt-4 font-medium"
            >
              VISION TO CODE
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-4xl md:text-5xl font-bold text-white mt-4"
            >
              Technologistics helps you launch boldly in the digital age.
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="custom-solutions" className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-12">
              <div className="h-0.5 w-12 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-white">
                Custom <span className="text-orange-500">Solutions</span> for your business
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  items={service.items}
                  icon={service.icon}
                  delay={service.delay}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <BookServiceButton />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 relative">
          <TechCircuit />

          <div className="container mx-auto px-6">
            <div className="flex items-center mb-8">
              <div className="h-0.5 w-12 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-white">
                About <span className="text-orange-500">us</span>
              </h2>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-orange-500/10 shadow-lg">
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are a team of innovators driven by a passion for transforming ideas into impactful digital solutions.
                From strategic digital marketing and cutting-edge web and app development to dynamic desktop software
                and creative graphic design, we deliver results that inspire growth. By blending creativity with
                technology, we craft personalized solutions that empower businesses to lead in the digital era.
              </p>

              <Link href="/about">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-8">
              <div className="h-0.5 w-12 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-white">
                Client <span className="text-orange-500">Testimonials</span>
              </h2>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Why Technologistics Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-end mb-8">
              <h2 className="text-2xl font-bold text-white">
                Why <span className="text-orange-500">Technologistics?</span>
              </h2>
              <div className="h-0.5 w-12 bg-orange-500 ml-4"></div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-orange-500/10 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 text-orange-500">•</div>
                  <div>
                    <span className="text-white">We create </span>
                    <span className="text-orange-500">tailored digital solutions</span>
                    <span className="text-white"> with precision and excellence.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-orange-500">•</div>
                  <div>
                    <span className="text-white">Our expertise ensures </span>
                    <span className="text-orange-500">outstanding results</span>
                    <span className="text-white">, every time.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-orange-500">•</div>
                  <div>
                    <span className="text-white">Trust </span>
                    <span className="text-orange-500">Technologistics</span>
                    <span className="text-white"> to deliver innovative solutions that go beyond expectations.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 text-orange-500">•</div>
                  <div>
                    <span className="text-white">We offer </span>
                    <span className="text-orange-500">unique, cutting-edge services</span>
                    <span className="text-white"> that set us apart from the rest.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-12">
              <div className="h-0.5 w-12 bg-orange-500 mr-4"></div>
              <h2 className="text-2xl font-bold text-white">
                Frequently <span className="text-orange-500">Asked Questions</span>
              </h2>
              <div className="h-0.5 w-12 bg-orange-500 ml-4"></div>
            </div>

            <FaqSection />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}