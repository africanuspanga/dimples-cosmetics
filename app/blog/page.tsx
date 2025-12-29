"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/context/language-context"
import { Calendar, ArrowRight, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "morning-skincare-routine",
    image: "/images/blog/whitening-cream.jpeg",
    titleEn: "5 Essential Steps for Your Morning Skincare Routine",
    titleSw: "Hatua 5 Muhimu za Utaratibu Wako wa Asubuhi wa Ngozi",
    excerptEn:
      "Start your day right with these essential skincare steps that will leave your skin glowing all day long.",
    excerptSw: "Anza siku yako vizuri na hatua hizi muhimu za ngozi ambazo zitaacha ngozi yako ikiwaka mchana kutwa.",
    date: "Dec 20, 2025",
    readTime: "5 min",
    category: "Skincare Tips",
  },
  {
    id: 2,
    slug: "natural-ingredients-skincare",
    image: "/images/blog/glowing-skin.jpg",
    titleEn: "The Power of Natural Ingredients in Skincare",
    titleSw: "Nguvu ya Viungo vya Asili katika Utunzaji wa Ngozi",
    excerptEn:
      "Discover why natural ingredients are the key to healthy, radiant skin and how our products harness their power.",
    excerptSw:
      "Gundua kwa nini viungo vya asili ni ufunguo wa ngozi yenye afya na jinsi bidhaa zetu zinavyotumia nguvu yao.",
    date: "Dec 15, 2025",
    readTime: "7 min",
    category: "Ingredients",
  },
  {
    id: 3,
    slug: "african-beauty-melanin-skin",
    image: "/images/blog/body-care.jpg",
    titleEn: "Celebrating African Beauty: Skincare for Melanin-Rich Skin",
    titleSw: "Kusherehekea Uzuri wa Afrika: Utunzaji wa Ngozi yenye Melanini",
    excerptEn: "Understanding the unique needs of melanin-rich skin and how to care for it properly.",
    excerptSw: "Kuelewa mahitaji ya kipekee ya ngozi yenye melanini na jinsi ya kuitunza vizuri.",
    date: "Dec 10, 2025",
    readTime: "6 min",
    category: "Beauty",
  },
  {
    id: 4,
    slug: "anti-aging-retinol-serum",
    image: "/images/blog/retinol-serum.jpeg",
    titleEn: "Anti-Aging Secrets: The Benefits of Retinol Serum",
    titleSw: "Siri za Kupambana na Uzee: Faida za Retinol Serum",
    excerptEn: "Learn how retinol serum can transform your skin and reduce signs of aging effectively.",
    excerptSw: "Jifunze jinsi retinol serum inavyoweza kubadilisha ngozi yako na kupunguza dalili za uzee.",
    date: "Dec 5, 2025",
    readTime: "4 min",
    category: "Anti-Aging",
  },
]

export default function BlogPage() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-[family-name:var(--font-montserrat)] text-sm tracking-[0.2em] uppercase">
              {language === "en" ? "Our Blog" : "Blogu Yetu"}
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-6">
            {language === "en" ? "Beauty & Skincare Tips" : "Vidokezo vya Urembo na Ngozi"}
          </h1>
          <p className="text-foreground/70 text-lg font-[family-name:var(--font-montserrat)] font-light max-w-2xl mx-auto">
            {language === "en"
              ? "Discover expert tips, trends, and insights to help you achieve your best skin ever."
              : "Gundua vidokezo vya wataalam, mitindo, na maarifa kukusaidia kupata ngozi yako bora zaidi."}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={language === "en" ? post.titleEn : post.titleSw}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-[family-name:var(--font-montserrat)] uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-4 text-sm text-foreground/60 font-[family-name:var(--font-montserrat)] mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                    {language === "en" ? post.titleEn : post.titleSw}
                  </h2>
                  <p className="text-foreground/70 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed mb-4">
                    {language === "en" ? post.excerptEn : post.excerptSw}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-[family-name:var(--font-montserrat)] text-sm font-medium hover:underline"
                  >
                    {language === "en" ? "Read More" : "Soma Zaidi"}
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
