"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"

const brands = [
  { name: "La Purrona", description: "Premium Skincare", logo: "/images/brands/la-purrona.png" },
  { name: "White Infinite", description: "Brightening Solutions", logo: "/images/brands/white-infinite.png" },
  { name: "Blooming Skin", description: "Natural Beauty", logo: "/images/brands/blooming-skin.png" },
  { name: "Score Touch", description: "Body Care", logo: "/images/brands/score-touch.png" },
  { name: "Elora", description: "Luxury Collection", logo: "/images/brands/elora.png" },
]

export function BrandsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
              {t("brands.subtitle")}
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">{t("brands.title")}</h2>
          <p className="text-foreground/70 text-lg font-[family-name:var(--font-montserrat)] font-light">
            {t("brands.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-card p-6 lg:p-8 rounded-xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-border/50"
            >
              <div className="relative w-full h-20 lg:h-24 mb-4">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
              <h3 className="font-serif text-base lg:text-lg mb-1 group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <p className="text-xs lg:text-sm font-[family-name:var(--font-montserrat)] text-foreground/60">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
