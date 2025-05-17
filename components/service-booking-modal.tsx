"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, Cpu, Globe, Smartphone, Database, Code, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceBookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ServiceBookingModal({ isOpen, onClose }: ServiceBookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "web-development",
    projectDescription: "",
    contactMethod: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "web-development",
        projectDescription: "",
        contactMethod: "email",
      })
      setIsSubmitted(false)
      setErrors({})
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // Validate phone if contact method is call or whatsapp
    if ((formData.contactMethod === "call" || formData.contactMethod === "whatsapp") && !formData.phone.trim()) {
      newErrors.phone = "Phone number is required for this contact method"
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  setIsSubmitting(true)

  try {
    const response = await fetch('/api/service-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit form');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  } catch (error) {
    console.error("Error submitting form:", error);
    setIsSubmitting(false);
    
    // Show actual error message instead of generic alert
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again later.';
    alert(errorMessage);
  }
}
  const getServiceLabel = (serviceKey: string): string => {
    const services: Record<string, string> = {
      "ai-agents": "AI Agents Development",
      "web-development": "Web Development",
      "mobile-app": "Mobile App Development",
      "ml-data-science": "ML/Data Science",
      "custom-solution": "Custom Solution"
    };
    
    return services[serviceKey] || serviceKey;
  }

  const getServiceIcon = () => {
    switch (formData.service) {
      case "ai-agents":
        return <Cpu className="w-6 h-6 text-orange-500" />
      case "web-development":
        return <Globe className="w-6 h-6 text-orange-500" />
      case "mobile-app":
        return <Smartphone className="w-6 h-6 text-orange-500" />
      case "ml-data-science":
        return <Database className="w-6 h-6 text-orange-500" />
      case "custom-solution":
        return <Code className="w-6 h-6 text-orange-500" />
      default:
        return <Code className="w-6 h-6 text-orange-500" />
    }
  }

  const needsPhoneNumber = formData.contactMethod === "call" || formData.contactMethod === "whatsapp";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-black border border-orange-500/20 rounded-xl shadow-lg shadow-orange-500/10 overflow-hidden"
          >
            {/* Tech circuit decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="90" cy="10" r="2" fill="#FF6B00" />
                <path d="M90,10 L50,50" stroke="#FF6B00" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="50" cy="50" r="3" fill="#FF6B00" />
                <path d="M50,50 L10,90" stroke="#FF6B00" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="10" cy="90" r="2" fill="#FF6B00" />
              </svg>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"
                      />
                      <CheckCircle className="w-16 h-16 text-green-500 relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-300 text-lg mb-8">Our team will reach out to you shortly...</p>
                  <Button onClick={onClose} className="bg-orange-600 hover:bg-orange-700 text-white">
                    Close
                  </Button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 bg-orange-500/10 rounded-full">{getServiceIcon()}</div>
                    <h2 className="text-2xl font-bold text-white">Book a Service</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                          Full Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-gray-900/50 border ${
                            errors.fullName ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50`}
                        />
                        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 bg-gray-900/50 border ${
                            errors.email ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company / Startup Name (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                        Service <span className="text-orange-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                      >
                        <option value="ai-agents">AI Agents</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ml-data-science">ML/Data Science</option>
                        <option value="custom-solution">Custom Solution</option>
                      </select>
                    </div>

                    <div>
                      <p className="block text-sm font-medium text-gray-300 mb-3">
                        Preferred Contact Method <span className="text-orange-500">*</span>
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {["email", "call", "whatsapp"].map((method) => (
                          <label key={method} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={handleChange}
                              className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-700 bg-gray-900"
                            />
                            <span className="text-gray-300 capitalize">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Conditionally show phone field */}
                    <AnimatePresence>
                      {needsPhoneNumber && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="py-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                              Phone Number <span className="text-orange-500">*</span>
                            </label>
                            <div className="flex items-center">
                              <Phone className="w-5 h-5 mr-2 text-orange-500" />
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={formData.contactMethod === "whatsapp" ? "WhatsApp number" : "Phone number"}
                                className={`w-full px-4 py-2 bg-gray-900/50 border ${
                                  errors.phone ? "border-red-500" : "border-gray-700"
                                } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50`}
                              />
                            </div>
                            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-1">
                        Brief About Your Project <span className="text-orange-500">*</span>
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 bg-gray-900/50 border ${
                          errors.projectDescription ? "border-red-500" : "border-gray-700"
                        } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50`}
                      ></textarea>
                      {errors.projectDescription && (
                        <p className="mt-1 text-sm text-red-500">{errors.projectDescription}</p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md transition-colors"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}