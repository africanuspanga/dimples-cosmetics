"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { useLanguage } from "@/context/language-context"
import { MapPin, Users, Heart, Globe, Sparkles } from "lucide-react"

const values = [
  {
    icon: Heart,
    titleEn: "Quality First",
    titleSw: "Ubora Kwanza",
    descEn: "We source only the finest ingredients for our products, ensuring premium quality in every bottle.",
    descSw: "Tunapata viungo bora tu kwa bidhaa zetu, kuhakikisha ubora wa hali ya juu katika kila chupa.",
  },
  {
    icon: Users,
    titleEn: "Customer Care",
    titleSw: "Huduma kwa Wateja",
    descEn: "Your satisfaction is our priority. We go above and beyond to ensure you love your experience.",
    descSw: "Kuridhika kwako ni kipaumbele chetu. Tunajitahidi kuhakikisha unapenda uzoefu wako.",
  },
  {
    icon: Globe,
    titleEn: "Worldwide Delivery",
    titleSw: "Usambazaji Duniani",
    descEn: "From Tanzania to the world, we deliver our premium products to beauty lovers everywhere.",
    descSw: "Kutoka Tanzania hadi duniani, tunasambaza bidhaa zetu kwa wapenzi wa urembo kila mahali.",
  },
  {
    icon: Sparkles,
    titleEn: "Innovation",
    titleSw: "Ubunifu",
    descEn: "We constantly innovate and bring new formulations that cater to diverse skin needs.",
    descSw: "Tunabuni kila wakati na kuleta fomula mpya zinazokidhi mahitaji mbalimbali ya ngozi.",
  },
]

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

export default function AboutPage() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
                  {t("about.subtitle")}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-6 leading-tight">
                {language === "en" ? "Crafting Beauty Excellence in Tanzania" : "Kuunda Ubora wa Urembo Tanzania"}
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed font-[family-name:var(--font-montserrat)] font-light mb-6">
                {t("about.description")}
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed font-[family-name:var(--font-montserrat)] font-light">
                {language === "en"
                  ? "Founded with a passion for enhancing natural beauty, Dimples Cosmetics has grown to become one of Tanzania's most trusted beauty brands. Our journey began with a simple vision: to provide high-quality, accessible skincare products that celebrate African beauty."
                  : "Ilianzishwa kwa shauku ya kuongeza uzuri wa asili, Dimples Cosmetics imekua kuwa moja ya bidhaa za urembo zinazoaminika zaidi Tanzania. Safari yetu ilianza na maono rahisi: kutoa bidhaa za ngozi zenye ubora wa hali ya juu zinazosherehekea uzuri wa Afrika."}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/images/about.jpeg" alt="About Dimples Cosmetics" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <span className="block text-3xl font-serif">5+</span>
                  <span className="text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                    {language === "en" ? "Years" : "Miaka"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
                {language === "en" ? "Our Values" : "Thamani Zetu"}
              </span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light">
              {language === "en" ? "What Drives Us" : "Kinachotusukuma"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-xl bg-card border border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">
                  {language === "en" ? value.titleEn : value.titleSw}
                </h3>
                <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed">
                  {language === "en" ? value.descEn : value.descSw}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
                {language === "en" ? "Our Locations" : "Maeneo Yetu"}
              </span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light">
              {language === "en" ? "Visit Our Stores" : "Tembelea Maduka Yetu"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">{location.name}</h3>
                  <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm mb-2">
                    {location.address}
                  </p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-primary font-[family-name:var(--font-montserrat)] text-sm hover:underline"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
