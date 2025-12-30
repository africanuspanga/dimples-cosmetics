"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface AddToCartToastProps {
  show: boolean
  productName: string
  onClose: () => void
}

export function AddToCartToast({ show, productName, onClose }: AddToCartToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed top-4 right-4 z-[60] animate-in slide-in-from-top-2 fade-in duration-300">
      <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
        <CheckCircle className="w-6 h-6" />
        <div>
          <p className="font-semibold">Added to cart!</p>
          <p className="text-sm text-green-100">{productName}</p>
        </div>
      </div>
    </div>
  )
}
