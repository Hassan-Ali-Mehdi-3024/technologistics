"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ServiceBookingModal } from "@/components/service-booking-modal"
import { CalendarPlus } from "lucide-react"

export function BookServiceButton() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="bg-orange-600 hover:bg-orange-700 text-white group relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          <CalendarPlus className="mr-2 h-5 w-5" />
          Book a Service
        </span>
        <span className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>

      <ServiceBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
