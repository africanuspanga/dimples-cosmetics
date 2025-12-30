"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, ShoppingCart, Trash2, MessageCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"

function formatPrice(price: number) {
  return `TSh ${price.toLocaleString()}`
}

type PaymentView = "cart" | "payment-options" | "payment-details" | "confirmation-form"
type PaymentMethod = "whatsapp" | "mixx" | "mpesa" | "nmb"

export function CartSidebar() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<PaymentView>("cart")
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    paymentConfirmation: "",
    extraInfo: "",
  })

  const whatsappNumber = "255764939382"

  const getOrderSummary = () => {
    let summary = "🛒 *ORDER SUMMARY*\n\n"
    items.forEach((item) => {
      summary += `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}\n`
    })
    summary += `\n💰 *TOTAL: ${formatPrice(totalPrice)}*`
    return summary
  }

  const handleWhatsAppOrder = () => {
    const message = `Hi! I would like to place an order:\n\n${getOrderSummary()}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    clearCart()
    setView("cart")
    setIsOpen(false)
  }

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method)
    if (method === "whatsapp") {
      handleWhatsAppOrder()
    } else {
      setView("payment-details")
    }
  }

  const handleConfirmationClick = () => {
    setView("confirmation-form")
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const paymentMethodName =
      selectedPayment === "mixx" ? "Mixx By Yas" : selectedPayment === "mpesa" ? "M-Pesa" : "NMB Bank"

    const message = `🧾 *PAYMENT CONFIRMATION*\n\n${getOrderSummary()}\n\n👤 *CUSTOMER DETAILS*\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nLocation: ${formData.location}\n\n💳 *PAYMENT METHOD*: ${paymentMethodName}\n\n📝 *PAYMENT CONFIRMATION*:\n${formData.paymentConfirmation}\n\n📌 *EXTRA INFO*:\n${formData.extraInfo || "None"}`

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    clearCart()
    setView("cart")
    setFormData({ fullName: "", phoneNumber: "", location: "", paymentConfirmation: "", extraInfo: "" })
    setIsOpen(false)
  }

  const paymentDetails = {
    mixx: {
      logo: "/images/payments/mixx-by-yas.png",
      title: "Mixx By Yas",
      number: "43107879",
      name: "Dimples Cosmetics",
    },
    mpesa: {
      logo: "/images/payments/m-pesa.png",
      title: "M-Pesa",
      number: "5563086",
      name: "Dimples Cosmetics",
    },
    nmb: {
      logo: "/images/payments/nmb-bank.jpg",
      title: "NMB Bank",
      number: "22910046475",
      name: "Hilda David Nnko",
    },
  }

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#c49589] hover:bg-[#b38579] text-white p-4 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-900">
              {view === "cart" && "Your Cart"}
              {view === "payment-options" && "Payment Options"}
              {view === "payment-details" && "Payment Details"}
              {view === "confirmation-form" && "Confirm Payment"}
            </h2>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Cart View */}
            {view === "cart" && (
              <>
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <ShoppingCart className="w-16 h-16 mb-4 opacity-30" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-xl">
                        <div className="relative w-20 h-20 bg-[#fdf5f3] rounded-lg overflow-hidden flex-shrink-0">
                          {item.image ? (
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ShoppingCart className="w-8 h-8 text-[#d4a59a]/40" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                          <p className="text-[#c49589] font-bold">{formatPrice(item.price)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Payment Options View */}
            {view === "payment-options" && (
              <div className="space-y-3">
                <button
                  onClick={() => handlePaymentSelect("whatsapp")}
                  className="w-full flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl border-2 border-green-200 transition-colors"
                >
                  <MessageCircle className="w-10 h-10 text-green-600" />
                  <div className="text-left">
                    <h3 className="font-bold text-green-800">WhatsApp Us</h3>
                    <p className="text-sm text-green-600">Send order via WhatsApp</p>
                  </div>
                </button>

                <button
                  onClick={() => handlePaymentSelect("mixx")}
                  className="w-full flex items-center gap-4 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl border-2 border-yellow-200 transition-colors"
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/payments/mixx-by-yas.png"
                      alt="Mixx By Yas"
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">Lipa namba Mixx By Yas</h3>
                    <p className="text-sm text-gray-600">43107879 - Dimples Cosmetics</p>
                  </div>
                </button>

                <button
                  onClick={() => handlePaymentSelect("mpesa")}
                  className="w-full flex items-center gap-4 p-4 bg-red-50 hover:bg-red-100 rounded-xl border-2 border-red-200 transition-colors"
                >
                  <div className="relative w-10 h-10">
                    <Image src="/images/payments/m-pesa.png" alt="M-Pesa" fill className="object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">Lipa namba M-Pesa</h3>
                    <p className="text-sm text-gray-600">5563086 - Dimples Cosmetics</p>
                  </div>
                </button>

                <button
                  onClick={() => handlePaymentSelect("nmb")}
                  className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border-2 border-blue-200 transition-colors"
                >
                  <div className="relative w-10 h-10">
                    <Image src="/images/payments/nmb-bank.jpg" alt="NMB Bank" fill className="object-contain rounded" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800">NMB Bank</h3>
                    <p className="text-sm text-gray-600">22910046475 - Hilda David Nnko</p>
                  </div>
                </button>
              </div>
            )}

            {/* Payment Details View */}
            {view === "payment-details" && selectedPayment && selectedPayment !== "whatsapp" && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={paymentDetails[selectedPayment].logo || "/placeholder.svg"}
                      alt={paymentDetails[selectedPayment].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{paymentDetails[selectedPayment].title}</h3>
                  <div className="bg-white p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-500 mb-1">
                      {selectedPayment === "nmb" ? "Account Number" : "Lipa Namba"}
                    </p>
                    <p className="text-2xl font-bold text-[#c49589]">{paymentDetails[selectedPayment].number}</p>
                    <p className="text-sm text-gray-600 mt-1">{paymentDetails[selectedPayment].name}</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl mt-4">
                    <p className="text-sm text-gray-500 mb-1">Amount to Pay</p>
                    <p className="text-2xl font-bold text-green-600">{formatPrice(totalPrice)}</p>
                  </div>
                </div>

                <button
                  onClick={handleConfirmationClick}
                  className="w-full bg-[#c49589] hover:bg-[#b38579] text-white font-bold py-4 rounded-xl transition-colors"
                >
                  Malipo yamekamilika? Bofya hapa!
                </button>
              </div>
            )}

            {/* Confirmation Form View */}
            {view === "confirmation-form" && (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c49589] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c49589] focus:border-transparent"
                    placeholder="e.g. 0712345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c49589] focus:border-transparent"
                    placeholder="e.g. Mikocheni B, Dar es Salaam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Payment Confirmation *</label>
                  <textarea
                    required
                    value={formData.paymentConfirmation}
                    onChange={(e) => setFormData({ ...formData, paymentConfirmation: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c49589] focus:border-transparent min-h-[100px]"
                    placeholder="Copy and paste your payment confirmation message here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Extra Information</label>
                  <textarea
                    value={formData.extraInfo}
                    onChange={(e) => setFormData({ ...formData, extraInfo: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c49589] focus:border-transparent min-h-[80px]"
                    placeholder="Any additional information (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Submit via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          {view === "cart" && items.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total:</span>
                <span className="text-2xl font-bold text-[#c49589]">{formatPrice(totalPrice)}</span>
              </div>
              <button
                onClick={() => setView("payment-options")}
                className="w-full bg-[#c49589] hover:bg-[#b38579] text-white font-bold py-4 rounded-xl transition-colors"
              >
                PAY NOW
              </button>
            </div>
          )}

          {/* Back Button for other views */}
          {view !== "cart" && (
            <div className="p-4 border-t bg-gray-50">
              <button
                onClick={() => {
                  if (view === "confirmation-form") setView("payment-details")
                  else if (view === "payment-details") setView("payment-options")
                  else setView("cart")
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition-colors"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
