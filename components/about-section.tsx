"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { value: "5+", label: t("about.experience") },
    { value: "50+", label: t("about.products") },
    { value: "10K+", label: t("about.customers") },
    { value: "4", label: t("about.locations") },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Fixed image path */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image src="/images/about.jpeg" alt="About Dimples Cosmetics" fill className="object-cover" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card p-6 lg:p-8 rounded-xl shadow-2xl max-w-[280px]">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <span className="block text-2xl lg:text-3xl font-serif text-primary">{stat.value}</span>
                    <span className="text-xs font-[family-name:var(--font-montserrat)] text-foreground/60 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
                {t("about.subtitle")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 leading-tight">{t("about.title")}</h2>

            {/* Description */}
            <p className="text-foreground/70 text-lg leading-relaxed mb-8 font-[family-name:var(--font-montserrat)] font-light">
              {t("about.description")}
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {["La Purrona", "White Infinite", "Blooming Skin", "Score Touch", "Elora"].map((brand, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-[family-name:var(--font-montserrat)] text-foreground/80">{brand}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 rounded-none group bg-transparent"
            >
              <Link href="/about">
                {t("hero.learnMore")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
