"use client"

import { useLanguage } from "@/context/language-context"
import { TrendingUp, Users, Package } from "lucide-react"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: TrendingUp,
      value: "10+",
      label: t("stats.yearsInBusiness"),
      labelFallback: "Years in Business",
    },
    {
      icon: Users,
      value: "2.1M+",
      label: t("stats.happyClients"),
      labelFallback: "Happy Clients",
    },
    {
      icon: Package,
      value: "25+",
      label: t("stats.products"),
      labelFallback: "Products",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-[#dc8c65]/10 to-[#947a66]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-[#dc8c65]/20 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#dc8c65] to-[#947a66] flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-serif font-bold text-[#dc8c65] mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label || stat.labelFallback}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
