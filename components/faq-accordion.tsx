"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Code, Database, Clock, Shield, Users, Settings } from "lucide-react"

interface FaqItemProps {
  question: string
  answer: string
  icon: React.ReactNode
}

const faqs: FaqItemProps[] = [
  {
    question: "What services does Technologistics offer?",
    answer:
      "We offer a comprehensive range of digital services including AI development, machine learning solutions, data science & analytics, web development, mobile app development, and AI strategy consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex AI solutions can take 2-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and project goals.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    question: "How do you ensure the security of our data?",
    answer:
      "Data security is our top priority. We implement industry-standard encryption, secure authentication protocols, and regular security audits. All our solutions comply with relevant data protection regulations, and we can sign NDAs before starting any project that involves sensitive information.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages for all our solutions. These include regular updates, bug fixes, performance optimization, and technical support. We can tailor a support plan that meets your specific needs and budget.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    question: "What makes Technologistics different from other agencies?",
    answer:
      "Our unique blend of technical expertise and creative problem-solving sets us apart. We focus on building long-term partnerships rather than one-off projects. Our team stays at the forefront of emerging technologies, ensuring that your solutions are not just current but future-proof.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    question: "How do you approach data science and analytics projects?",
    answer:
      "We follow a structured approach: first understanding your business objectives, then collecting and preparing data, developing and validating models, and finally implementing and monitoring solutions. We emphasize interpretability and actionable insights, ensuring that the analytics we provide drive real business value.",
    icon: <Database className="w-5 h-5" />,
  },
]

function FaqItem({ question, answer, icon }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center">
          <div className="mr-3 text-orange-500">{icon}</div>
          <span className="text-lg font-medium text-white">{question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="py-4 pl-10 pr-4 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-orange-500/10 shadow-lg p-6">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} icon={faq.icon} />
        ))}
      </div>
    </div>
  )
}
