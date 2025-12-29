"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ImageIcon } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Body Wash",
    description: "Hydrating & smoothing for all skin types",
    price: 35000,
    image: "/images/la-purrona/body-wash.jpeg",
  },
  {
    id: 2,
    name: "Scrub Cream",
    description: "Gentle exfoliation for smooth skin",
    price: 25000,
    image: "/images/la-purrona/scrub-cream.jpeg",
  },
  {
    id: 3,
    name: "Retinol Serum",
    description: "Anti-aging & skin renewal",
    price: 35000,
    image: "/images/la-purrona/retinol-serum.jpeg",
  },
  {
    id: 4,
    name: "Body Cream (5 Variants)",
    description: "Intense hydrating & brightening",
    price: 35000,
    image: "/images/la-purrona/body-cream.jpeg",
  },
  {
    id: 5,
    name: "Body Therapy Oil",
    description: "Rich in fatty acids & vitamins",
    price: 40000,
    image: "/images/la-purrona/body-therapy.jpeg",
  },
  {
    id: 6,
    name: "Vitamin C Serum",
    description: "Brightens, whitens & softens skin",
    price: 35000,
    image: "/images/la-purrona/vitamin-c-serum.jpeg",
  },
  {
    id: 7,
    name: "Hand Cream",
    description: "Moisturizing with long lasting fragrance",
    price: 15000,
    image: "/images/la-purrona/hand-cream.jpeg",
  },
  {
    id: 8,
    name: "Hair Remover + Soothing Gel",
    description: "Gentle formula with soothing gel",
    price: 35000,
    image: "/images/la-purrona/hair-remover.jpeg",
  },
  {
    id: 9,
    name: "Niacinamide Serum",
    description: "Pore minimizing & brightening",
    price: 35000,
    image: "/images/la-purrona/niacinamide-serum.jpeg",
  },
  {
    id: 10,
    name: "Whitening Face Cream",
    description: "Brightens & evens skin tone",
    price: 25000,
    image: null,
  },
  {
    id: 11,
    name: "Body Lotion",
    description: "Daily moisturizing care",
    price: 30000,
    image: null,
  },
  {
    id: 12,
    name: "Body Splash",
    description: "Refreshing long lasting scent",
    price: 25000,
    image: null,
  },
  {
    id: 13,
    name: "Sunscreen SPF50",
    description: "Ultimate UV protection",
    price: 30000,
    image: null,
  },
  {
    id: 14,
    name: "Face Serum",
    description: "Deep nourishment for face",
    price: 35000,
    image: null,
  },
  {
    id: 15,
    name: "Lip Gloss",
    description: "Hydrating shine for lips",
    price: 10000,
    image: null,
  },
  {
    id: 16,
    name: "Glycolic Acid Serum",
    description: "Exfoliating & brightening",
    price: 35000,
    image: null,
  },
  {
    id: 17,
    name: "Hyaluronic Acid Serum",
    description: "Deep hydration booster",
    price: 35000,
    image: null,
  },
  {
    id: 18,
    name: "Salicylic Acid Serum",
    description: "Acne fighting formula",
    price: 35000,
    image: null,
  },
  {
    id: 19,
    name: "Collagen Serum",
    description: "Firms & plumps skin",
    price: 35000,
    image: null,
  },
  {
    id: 20,
    name: "Argan Oil",
    description: "Pure nourishing oil",
    price: 30000,
    image: null,
  },
  {
    id: 21,
    name: "Whitening Soap",
    description: "Brightening cleanse",
    price: 10000,
    image: null,
  },
  {
    id: 22,
    name: "Rice Soap",
    description: "Gentle rice extract cleanser",
    price: 10000,
    image: null,
  },
  {
    id: 23,
    name: "Turmeric Soap",
    description: "Natural glow enhancer",
    price: 10000,
    image: null,
  },
  {
    id: 24,
    name: "Kojic Soap",
    description: "Skin lightening cleanser",
    price: 10000,
    image: null,
  },
  {
    id: 25,
    name: "Charcoal Soap",
    description: "Deep pore cleansing",
    price: 10000,
    image: null,
  },
  {
    id: 26,
    name: "Soothing Gel",
    description: "Calms & hydrates skin",
    price: 20000,
    image: null,
  },
]

function formatPrice(price: number) {
  return `TSh ${price.toLocaleString()}`
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const whatsappMessage = `Hi! I want to order ${product.name} - ${formatPrice(product.price)}`
  const whatsappUrl = `https://wa.me/255766847448?text=${encodeURIComponent(whatsappMessage)}`

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
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#c49589] hover:bg-[#b38579] text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-200"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  )
}

export default function BuyLaPurronaPage() {
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
            src="/images/purrona-20logs.png"
            alt="La Purrona Logo"
            width={150}
            height={100}
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
