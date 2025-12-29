"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Dimples Cosmetics Hero"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.3em] uppercase">
              {t("hero.subtitle")}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-6">
            <span className="block text-foreground">{t("hero.title")}</span>
            <span className="block text-primary italic font-medium">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 font-[family-name:var(--font-montserrat)] font-light max-w-xl">
            <span className="md:hidden">{t("hero.descriptionShort")}</span>
            <span className="hidden md:inline">{t("hero.description")}</span>
          </p>

          {/* CTAs - Shop Now now goes to /la-purrona */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 rounded-none group"
            >
              <Link href="/la-purrona">
                {t("hero.shopNow")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/5 font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 rounded-none group bg-transparent"
            >
              <Link href="/about">
                <Play className="mr-2 w-4 h-4" />
                {t("hero.learnMore")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3">
        <span className="text-foreground/40 font-[family-name:var(--font-montserrat)] text-xs tracking-widest uppercase rotate-90 origin-center translate-x-6">
          Scroll
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Floating Badge */}
      <div className="absolute top-1/4 right-8 lg:right-20 hidden md:block">
        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-pulse">
          <div className="text-center">
            <span className="block text-2xl lg:text-3xl font-serif text-primary">100%</span>
            <span className="text-[10px] lg:text-xs font-[family-name:var(--font-montserrat)] text-foreground/70 uppercase tracking-wider">
              Natural
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
