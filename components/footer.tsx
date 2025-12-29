"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone, MapPin, Mail, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/la-purrona", label: t("nav.lapurrona") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const brands = ["La Purrona", "White Infinite", "Blooming Skin", "Score Touch", "Elora"]

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/dimples_cosmetics_", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/dimples_cosmetics_", label: "Facebook" },
  ]

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Dimples Cosmetics"
              width={150}
              height={60}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary font-[family-name:var(--font-montserrat)] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-serif text-xl mb-6">{t("footer.ourBrands")}</h4>
            <ul className="space-y-3">
              {brands.map((brand, index) => (
                <li key={index}>
                  <span className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm">{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm">
                  <p className="font-medium text-background mb-1">Call Us</p>
                  <p>+255 764 939 382</p>
                  <p>+255 673 899 382</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm">
                  <p className="font-medium text-background mb-1">WhatsApp</p>
                  <Link
                    href="http://wa.me/255764939382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    +255 764 939 382
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm">
                  <p className="font-medium text-background mb-1">Email Us</p>
                  <Link href="mailto:info@dimplescosmetics.co.tz" className="hover:text-primary transition-colors">
                    info@dimplescosmetics.co.tz
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 font-[family-name:var(--font-montserrat)] text-sm">
                  <p className="font-medium text-background mb-1">Our Locations</p>
                  <p>Dar es Salaam (Kariakoo, Mlimani, Goba)</p>
                  <p>Arusha</p>
                  <p>Zanzibar</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 font-[family-name:var(--font-montserrat)] text-sm">
              © {new Date().getFullYear()} Dimples Cosmetics. {t("footer.rights")}
            </p>
            <p className="text-background/60 font-[family-name:var(--font-montserrat)] text-sm">
              Made with love in Tanzania
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
