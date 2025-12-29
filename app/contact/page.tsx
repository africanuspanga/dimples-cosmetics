"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, MessageCircle, Instagram, Send } from "lucide-react"

const locations = [
  {
    name: "Dar es Salaam - Kariakoo",
    address: "Mafia and Bonde Street",
    phone: "0673899382",
  },
  {
    name: "Dar es Salaam - Mlimani City",
    address: "Near KAKOBE CHURCH",
    phone: "0764939382",
  },
  {
    name: "Dar es Salaam - Goba",
    address: "GOBA CENTER ROUND ABOUT",
    phone: "0673500100",
  },
  {
    name: "Arusha",
    address: "SELIANI EMERGENCY GATE, SERENGETI VIEW Road",
    phone: "0764939382",
  },
]

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp with the message
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/255764939382?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
              {t("contact.subtitle")}
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-6">{t("contact.title")}</h1>
          <p className="text-foreground/70 text-lg font-[family-name:var(--font-montserrat)] font-light max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-lg border border-border/50">
              <h2 className="text-2xl font-serif mb-8">{language === "en" ? "Send us a Message" : "Tutumie Ujumbe"}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-[family-name:var(--font-montserrat)] mb-2 text-foreground/80">
                    {t("contact.form.name")}
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-[family-name:var(--font-montserrat)] mb-2 text-foreground/80">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-[family-name:var(--font-montserrat)] mb-2 text-foreground/80">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-[family-name:var(--font-montserrat)] mb-2 text-foreground/80">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase py-6 rounded-none"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-xl font-serif mb-6">
                  {language === "en" ? "Quick Contact" : "Mawasiliano ya Haraka"}
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+255764939382"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-[family-name:var(--font-montserrat)] text-foreground/60">
                        {t("contact.phone")}
                      </span>
                      <span className="font-serif">+255 764 939 382</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/255764939382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <span className="block text-sm font-[family-name:var(--font-montserrat)] text-foreground/60">
                        {t("contact.whatsapp")}
                      </span>
                      <span className="font-serif">+255 764 939 382</span>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com/dimples_cosmetics_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <span className="block text-sm font-[family-name:var(--font-montserrat)] text-foreground/60">
                        Instagram
                      </span>
                      <span className="font-serif">@dimples_cosmetics_</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border/50">
                <h3 className="text-xl font-serif mb-6">{t("contact.locations")}</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 pb-4 border-b border-border/50 last:border-0 last:pb-0"
                    >
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="block font-serif text-sm">{location.name}</span>
                        <span className="text-sm text-foreground/60 font-[family-name:var(--font-montserrat)]">
                          {location.address}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
