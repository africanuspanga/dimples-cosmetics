"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"

export function AwardsSection() {
  const { t } = useLanguage()

  const awards = [
    {
      title: t("awards.bestBrand"),
      titleFallback: "Best Cosmetics Brand of the Year 2025",
    },
    {
      title: t("awards.fastestGrowing"),
      titleFallback: "East Africa's Fastest Growing Cosmetics Brand 2025",
    },
    {
      title: t("awards.youngCEO"),
      titleFallback: "Young CEO of the Year - HILDA NNKO",
    },
    {
      title: t("awards.consumerChoice"),
      titleFallback: "Consumer Choice Top Cosmetics Brand 2025",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#dc8c65] font-medium mb-2 uppercase tracking-wider">
            {t("awards.subtitle") || "Recognition"}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t("awards.title") || "Our Awards & Achievements"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("awards.description") || "Recognized for excellence in beauty and skincare across East Africa"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#dc8c65]/5 to-[#947a66]/5 border border-[#dc8c65]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 relative w-20 h-20">
                <Image src="/images/winner.png" alt="Award" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {award.title || award.titleFallback}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
