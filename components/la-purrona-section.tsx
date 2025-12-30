"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, Star, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LaPurronaSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fdf8f5] to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/la-purrona/brand-section.jpeg"
                alt="La Purrona Beauty Products"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#e8998d]" />
                  <span className="text-sm font-semibold text-foreground">#1 in East Africa</span>
                </div>
              </motion.div>

              {/* Product count badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 bg-[#e8998d] text-white rounded-2xl px-5 py-3 shadow-lg"
              >
                <div className="text-2xl font-bold font-serif">25+</div>
                <div className="text-xs uppercase tracking-wider">Premium Products</div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e8998d]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#dc8c65]/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/images/la-purrona/logo.png"
                alt="La Purrona Logo"
                width={180}
                height={80}
                className="h-20 w-auto"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8998d]/10 text-[#dc8c65] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Where Beauty Begins</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Tanzania&apos;s Fastest Growing
              <span className="text-[#e8998d]"> Beauty Brand</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              La Purrona has become the most sought-after skincare brand in Tanzania and East Africa. With over{" "}
              <strong className="text-foreground">25 premium products</strong> crafted for African skin, we deliver
              exceptional results that our customers love. From serums to body care, each product is designed to enhance
              your natural beauty.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="text-3xl font-bold font-serif text-[#e8998d]">25+</div>
                <div className="text-xs text-muted-foreground mt-1">Products</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="text-3xl font-bold font-serif text-[#dc8c65]">10K+</div>
                <div className="text-xs text-muted-foreground mt-1">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-border/50">
                <div className="flex justify-center gap-0.5 text-[#e8998d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-1">5-Star Rated</div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["Dermatologist Approved", "Natural Ingredients", "Made for African Skin"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2"
                >
                  <Award className="w-4 h-4 text-[#e8998d]" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/buy-la-purrona">
              <Button
                size="lg"
                className="bg-[#e8998d] hover:bg-[#dc8c65] text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                SHOP LA PURRONA
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
