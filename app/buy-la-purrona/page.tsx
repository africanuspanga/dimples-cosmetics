"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { AddToCartToast } from "@/components/add-to-cart-toast"
import { CartProvider, useCart } from "@/context/cart-context"
import { ImageIcon, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Cleansing Clay Mask",
    description: "Deep cleansing for all skin types",
    price: 25000,
    image: "/images/la-purrona/cleansing-clay-mask.jpeg", // added image
  },
  {
    id: 2,
    name: "Anti Acne Cream",
    description: "Effective acne treatment",
    price: 35000,
    image: "/images/la-purrona/anti-acne-cream.jpeg",
  },
  {
    id: 3,
    name: "Amino Acid Facial Cleanser",
    description: "Gentle daily cleanser with 4% Benzoyl Peroxide",
    price: 40000,
    image: "/images/la-purrona/amino-acid-cleanser.jpeg",
  },
  {
    id: 4,
    name: "Body Wash",
    description: "Hydrating & smoothing for all skin types",
    price: 45000,
    image: "/images/la-purrona/body-wash.jpeg",
  },
  {
    id: 5,
    name: "Baby Set",
    description: "Baby Wash & Baby Lotion set",
    price: 35000,
    image: "/images/la-purrona/baby-set.jpeg",
  },
  {
    id: 6,
    name: "Deodorant",
    description: "Long lasting freshness",
    price: 20000,
    image: "/images/la-purrona/deodorant.jpeg", // added image
  },
  {
    id: 7,
    name: "Potato Cleanser",
    description: "Advanced gentle foaming facial cleaning",
    price: 35000,
    image: "/images/la-purrona/potato-deep-cleanser.jpeg",
  },
  {
    id: 8,
    name: "Hand Cream",
    description: "Moisturizing with long lasting fragrance",
    price: 20000,
    image: "/images/la-purrona/hand-cream.jpeg",
  },
  {
    id: 9,
    name: "Small Body Cream",
    description: "Intense hydrating & brightening - 300g",
    price: 35000,
    image: "/images/la-purrona/small-body-cream.jpeg",
  },
  {
    id: 10,
    name: "Large Body Cream",
    description: "Intense hydrating & brightening - 500g",
    price: 50000,
    image: "/images/la-purrona/large-body-cream.jpeg",
  },
  {
    id: 11,
    name: "Whitening Serum",
    description: "Super whitening for radiant skin",
    price: 35000,
    image: "/images/la-purrona/super-whitening-serum.jpeg",
  },
  {
    id: 12,
    name: "Body Therapy",
    description: "Rich in fatty acids & vitamins",
    price: 40000,
    image: "/images/la-purrona/body-therapy.jpeg",
  },
  {
    id: 13,
    name: "Vanilla Scrub",
    description: "Gentle exfoliation for smooth skin",
    price: 35000,
    image: "/images/la-purrona/scrub-cream.jpeg",
  },
  {
    id: 14,
    name: "Whitening Face Cream",
    description: "Brightens & evens skin tone",
    price: 45000,
    image: "/images/la-purrona/whitening-face-cream.jpeg",
  },
  {
    id: 15,
    name: "Vitamin C Serum",
    description: "Brightens, whitens & softens skin",
    price: 40000,
    image: "/images/la-purrona/vitamin-c-serum.jpeg",
  },
  {
    id: 16,
    name: "Retinol Serum",
    description: "Anti-aging & skin renewal",
    price: 50000,
    image: "/images/la-purrona/retinol-serum.jpeg",
  },
  {
    id: 17,
    name: "Niacinamide Serum",
    description: "Pore minimizing & brightening",
    price: 40000,
    image: "/images/la-purrona/niacinamide-serum.jpeg",
  },
  {
    id: 18,
    name: "Hyaluronic Serum",
    description: "Deep hydration booster",
    price: 45000,
    image: "/images/la-purrona/hyaluronic-serum.jpeg", // added image
  },
  {
    id: 19,
    name: "Facial Serum",
    description: "Deep nourishment for face",
    price: 40000,
    image: null,
  },
  {
    id: 20,
    name: "Strawberry Soap",
    description: "Cleansing, exfoliating & brightening",
    price: 20000,
    image: "/images/la-purrona/strawberry-soap.jpeg",
  },
  {
    id: 21,
    name: "Hair Remover",
    description: "Gentle formula with soothing gel",
    price: 30000,
    image: "/images/la-purrona/body-hair-remover.jpeg",
  },
  {
    id: 22,
    name: "Salicylic Soap",
    description: "Acne fighting cleanser",
    price: 25000,
    image: "/images/la-purrona/salicylic-soap.jpeg",
  },
  {
    id: 23,
    name: "Glycolic Toner",
    description: "Instantly brightens & soothes thirsty skin",
    price: 40000,
    image: "/images/la-purrona/glycolic-acid-toner.jpeg",
  },
  {
    id: 24,
    name: "Lip Therapy",
    description: "Hydrating shine for lips",
    price: 15000,
    image: null,
  },
  {
    id: 25,
    name: "Sunscreen Protection",
    description: "SPF 50+ PA++++ High UV Protection",
    price: 35000,
    image: "/images/la-purrona/sunscreen-protection.jpeg",
  },
  {
    id: 26,
    name: "Elora Advanced Beauty Cream",
    description: "Luxurious purple jar for radiant skin",
    price: 40000,
    image: "/images/other-brands/elora-cream.jpeg",
  },
  {
    id: 27,
    name: "Score Touch Face Cream",
    description: "Keep calm bring beauty - 50g",
    price: 50000,
    image: "/images/other-brands/score-touch-cream.jpeg",
  },
  {
    id: 28,
    name: "White Infinite Face Cream",
    description: "Brightening face cream - 50g",
    price: 40000,
    image: "/images/other-brands/white-infinite-cream.jpeg",
  },
]

function formatPrice(price: number) {
  return `TSh ${price.toLocaleString()}`
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: (typeof products)[0]
  onAddToCart: (product: (typeof products)[0]) => void
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#fdf5f3]">
        {product.image ? (
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-[#d4a59a]/40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1 mb-3">{product.description}</p>

        {/* Price */}
        <p className="text-xl font-bold text-[#c49589] mt-auto mb-3">{formatPrice(product.price)}</p>

        {/* Buy Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#c49589] hover:bg-[#b38579] text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-200"
        >
          BUY NOW
        </button>
      </div>
    </div>
  )
}

function BuyLaPurronaContent() {
  const { addItem } = useCart()
  const [showToast, setShowToast] = useState(false)
  const [toastProductName, setToastProductName] = useState("")

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setToastProductName(product.name)
    setShowToast(true)
  }

  return (
    <main className="min-h-screen bg-[#fffaf8]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/la-purrona/hero.jpeg"
          alt="La Purrona - Where Beauty Begins"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Image
            src="/images/la-purrona/logo.png"
            alt="La Purrona Logo"
            width={180}
            height={120}
            className="mb-6 brightness-0 invert"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Where Beauty Begins</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">Premium skincare for radiant, glowing skin</p>
          <Link
            href="#shop"
            className="bg-[#c49589] hover:bg-[#b38579] text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200"
          >
            BUY NOW
          </Link>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our premium collection of skincare products
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#c49589]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We are here to help you find the perfect skincare products for your needs. Reach out to us today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-[#c49589] font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />

      {/* Cart Sidebar instead of WhatsApp Button */}
      <CartSidebar />

      {/* Toast notification */}
      <AddToCartToast show={showToast} productName={toastProductName} onClose={() => setShowToast(false)} />
    </main>
  )
}

export default function BuyLaPurronaPage() {
  return (
    <CartProvider>
      <BuyLaPurronaContent />
    </CartProvider>
  )
}
