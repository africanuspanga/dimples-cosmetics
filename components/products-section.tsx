"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const products = [
  {
    id: 1,
    image: "/images/la-purrona/body-wash.jpeg",
    name: "Body Wash",
    price: "TSh 35,000",
    category: "La Purrona",
  },
  {
    id: 2,
    image: "/images/la-purrona/scrub-cream.jpeg",
    name: "Scrub Cream",
    price: "TSh 25,000",
    category: "La Purrona",
  },
  {
    id: 3,
    image: "/images/la-purrona/retinol-serum.jpeg",
    name: "Retinol Serum",
    price: "TSh 35,000",
    category: "La Purrona",
  },
  {
    id: 4,
    image: "/images/la-purrona/body-cream.jpeg",
    name: "Body Cream",
    price: "TSh 35,000",
    category: "La Purrona",
  },
  {
    id: 5,
    image: "/images/la-purrona/vitamin-c-serum.jpeg",
    name: "Vitamin C Serum",
    price: "TSh 35,000",
    category: "La Purrona",
  },
  {
    id: 6,
    image: "/images/la-purrona/hand-cream.jpeg",
    name: "Hand Cream",
    price: "TSh 15,000",
    category: "La Purrona",
  },
]

export function ProductsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
              {t("products.subtitle")}
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">{t("products.title")}</h2>
          <p className="text-foreground/70 text-lg font-[family-name:var(--font-montserrat)] font-light">
            {t("products.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quick Action */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Button
                    asChild
                    className="w-full bg-card/95 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-montserrat)] text-xs tracking-wide uppercase"
                  >
                    <Link href="/buy-la-purrona">
                      <ShoppingBag className="mr-2 w-4 h-4" />
                      {t("nav.buyNow")}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs font-[family-name:var(--font-montserrat)] text-primary uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif mt-1 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <span className="text-foreground/80 font-[family-name:var(--font-montserrat)] font-medium">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - links to /buy-la-purrona */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-10 py-6 rounded-none group bg-transparent"
          >
            <Link href="/buy-la-purrona">
              {t("products.viewAll")}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
