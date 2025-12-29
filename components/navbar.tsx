"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/buy-la-purrona", label: t("nav.lapurrona") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Fixed image path */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="Dimples Cosmetics"
              width={160}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-[family-name:var(--font-montserrat)] font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "sw" : "en")}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)] text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "SW" : "EN"}</span>
            </button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-6"
            >
              <Link href="https://wa.me/255764939382" target="_blank" rel="noopener noreferrer">
                {t("nav.buyNow")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-background/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-6",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
          )}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => setLanguage(language === "en" ? "sw" : "en")}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]"
            >
              <Globe className="w-5 h-5" />
              <span>{language === "en" ? "Kiswahili" : "English"}</span>
            </button>
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 mt-4"
          >
            <Link href="https://wa.me/255764939382" target="_blank" rel="noopener noreferrer">
              {t("nav.buyNow")}
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
