"use client"

import Link from "next/link"
import Image from "next/image"

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello I am from Dimples Cosmetics website and i would like to get started with Dimples Cosmetics products",
  )

  return (
    <Link
      href={`http://wa.me/255764939382?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/images/whatsapp-logo.png" alt="WhatsApp" width={40} height={40} className="w-10 h-10" />
    </Link>
  )
}
