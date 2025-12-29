"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const testimonials = [
  {
    id: 1,
    name: "Amina Rashid",
    location: "Dar es Salaam",
    rating: 5,
    text: "Dimples Cosmetics has completely transformed my skincare routine. The La Purrona products are absolutely amazing and my skin has never looked better!",
    textSw:
      "Dimples Cosmetics imebadilisha kabisa utaratibu wangu wa utunzaji wa ngozi. Bidhaa za La Purrona ni za ajabu kabisa na ngozi yangu haijawahi kuonekana vizuri zaidi!",
  },
  {
    id: 2,
    name: "Grace Mwakasege",
    location: "Arusha",
    rating: 5,
    text: "I've tried many brands but nothing compares to the quality of Dimples products. The Body Cream keeps my skin moisturized all day long.",
    textSw:
      "Nimejaribu bidhaa nyingi lakini hakuna inayolinganishwa na ubora wa bidhaa za Dimples. Krimu ya Mwili inaweka ngozi yangu unyevu mchana kutwa.",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    location: "Zanzibar",
    rating: 5,
    text: "The customer service is exceptional and the products are delivered quickly. I recommend Dimples Cosmetics to all my friends and family.",
    textSw:
      "Huduma kwa wateja ni bora na bidhaa zinafika haraka. Ninapendekeza Dimples Cosmetics kwa marafiki na familia yangu wote.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t, language } = useLanguage()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
              {t("testimonials.subtitle")}
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light">{t("testimonials.title")}</h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 lg:p-12 shadow-xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 lg:left-12">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl lg:text-2xl font-serif text-center leading-relaxed mb-8 text-foreground/80">
              &ldquo;{language === "en" ? current.text : current.textSw}&rdquo;
            </p>

            <div className="text-center">
              <h4 className="font-serif text-lg">{current.name}</h4>
              <p className="text-sm font-[family-name:var(--font-montserrat)] text-foreground/60">{current.location}</p>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 lg:-mx-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="pointer-events-auto rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="pointer-events-auto rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
