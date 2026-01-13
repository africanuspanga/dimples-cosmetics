"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sw"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.lapurrona": "La Purrona",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.buyNow": "Buy Now",

    // Hero
    "hero.subtitle": "Premium Beauty & Skincare",
    "hero.title": "Your Beauty,",
    "hero.titleHighlight": "Our Commitment",
    "hero.description":
      "Discover the art of radiant skin with our premium collection of skincare products, crafted with love in Tanzania for beauty enthusiasts worldwide.",
    "hero.descriptionShort": "Discover the art of radiant skin with our premium collection of skincare products.",
    "hero.shopNow": "Shop Now",
    "hero.learnMore": "Learn More",

    // About
    "about.subtitle": "Our Story",
    "about.title": "Crafting Beauty Excellence",
    "about.description":
      "Dimples Cosmetics is a beauty and skincare company offering high-quality cosmetic products including La Purrona, White Infinite, Blooming Skin, Score Touch, and Elora. We sell both wholesale and retail, are located in Arusha, Zanzibar, and Dar es Salaam, and deliver worldwide.",
    "about.experience": "Years of Excellence",
    "about.products": "Premium Products",
    "about.customers": "Happy Customers",
    "about.locations": "Store Locations",

    // Products
    "products.subtitle": "Our Collection",
    "products.title": "Premium Skincare Products",
    "products.description":
      "Experience the finest in beauty care with our carefully curated selection of premium skincare products.",
    "products.viewAll": "View All Products",
    "products.bodyCream": "Body Cream",
    "products.facialSerum": "Facial Serum",
    "products.clayMask": "Cleansing Clay Mask",
    "products.cleanser": "Amino Acid Cleanser",

    // Brands
    "brands.subtitle": "Our Brands",
    "brands.title": "Brands We Supply",
    "brands.description":
      "We proudly offer a diverse portfolio of premium beauty brands to meet all your skincare needs.",

    // Testimonials
    "testimonials.subtitle": "Customer Love",
    "testimonials.title": "What Our Customers Say",

    // CTA
    "cta.title": "Ready to Transform Your Skin?",
    "cta.description":
      "Join thousands of satisfied customers who have discovered their perfect skincare routine with Dimples Cosmetics.",
    "cta.button": "Start Your Journey",
    "cta.whatsapp": "Chat on WhatsApp",

    // Footer
    "footer.description": "Your Beauty, Our Commitment. Premium skincare products crafted with love in Tanzania.",
    "footer.quickLinks": "Quick Links",
    "footer.ourBrands": "Our Brands",
    "footer.contact": "Contact Us",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
    "footer.newsletter": "Subscribe to Newsletter",
    "footer.emailPlaceholder": "Enter your email",
    "footer.subscribe": "Subscribe",

    // Stats
    "stats.yearsInBusiness": "Years in Business",
    "stats.happyClients": "Happy Clients",
    "stats.products": "Products",

    // Awards
    "awards.subtitle": "Recognition",
    "awards.title": "Our Awards & Achievements",
    "awards.description": "Recognized for excellence in beauty and skincare across East Africa",
    "awards.bestBrand": "Best Cosmetics Brand of the Year 2025",
    "awards.fastestGrowing": "East Africa's Fastest Growing Cosmetics Brand 2025",
    "awards.youngCEO": "Young CEO of the Year - HILDA NNKO",
    "awards.consumerChoice": "Consumer Choice Top Cosmetics Brand 2025",

    // Contact Page
    "contact.title": "Get In Touch",
    "contact.subtitle": "We'd love to hear from you",
    "contact.description":
      "Have questions about our products or want to place a wholesale order? Reach out to us through any of our channels below.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",
    "contact.locations": "Our Locations",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.social": "Social Media",
  },
  sw: {
    // Navigation
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.lapurrona": "La Purrona",
    "nav.blog": "Blogu",
    "nav.contact": "Wasiliana",
    "nav.buyNow": "Nunua Sasa",

    // Hero
    "hero.subtitle": "Bidhaa za Urembo na Ngozi",
    "hero.title": "Uzuri Wako,",
    "hero.titleHighlight": "Dhamana Yetu",
    "hero.description":
      "Gundua sanaa ya ngozi inayong'ara na mkusanyiko wetu wa bidhaa za ngozi zenye ubora wa hali ya juu, zilizotengenezwa kwa upendo Tanzania kwa wapenzi wa urembo duniani kote.",
    "hero.descriptionShort": "Gundua sanaa ya ngozi inayong'ara na mkusanyiko wetu wa bidhaa za ngozi zenye ubora.",
    "hero.shopNow": "Nunua Sasa",
    "hero.learnMore": "Jifunze Zaidi",

    // About
    "about.subtitle": "Historia Yetu",
    "about.title": "Kuunda Ubora wa Urembo",
    "about.description":
      "Dimples Cosmetics ni kampuni ya uuzaji wa bidhaa za urembo na utunzaji wa ngozi zenye ubora wa hali ya juu. Tunauza bidhaa mbalimbali ikiwemo La Purrona, White Infinite, Blooming Skin, Score Touch na Elora. Tunauza jumla na rejareja, tunapatikana Arusha, Zanzibar na Dar es Salaam, na tunasambaza duniani kote.",
    "about.experience": "Miaka ya Ubora",
    "about.products": "Bidhaa za Ubora",
    "about.customers": "Wateja Wenye Furaha",
    "about.locations": "Maduka",

    // Products
    "products.subtitle": "Mkusanyiko Wetu",
    "products.title": "Bidhaa za Ngozi za Ubora",
    "products.description":
      "Pata uzoefu bora wa utunzaji wa urembo na uchaguzi wetu wa makini wa bidhaa za ngozi za ubora.",
    "products.viewAll": "Tazama Bidhaa Zote",
    "products.bodyCream": "Krimu ya Mwili",
    "products.facialSerum": "Seramu ya Uso",
    "products.clayMask": "Mask ya Usafishaji",
    "products.cleanser": "Kisafishaji cha Amino Acid",

    // Brands
    "brands.subtitle": "Bidhaa Zetu",
    "brands.title": "Bidhaa Tunazouza",
    "brands.description":
      "Tunajivunia kutoa aina mbalimbali za bidhaa za urembo ili kukidhi mahitaji yako yote ya utunzaji wa ngozi.",

    // Testimonials
    "testimonials.subtitle": "Upendo wa Wateja",
    "testimonials.title": "Wateja Wanasema Nini",

    // CTA
    "cta.title": "Uko Tayari Kubadilisha Ngozi Yako?",
    "cta.description":
      "Jiunge na maelfu ya wateja walioridhika ambao wamegundua utaratibu wao bora wa utunzaji wa ngozi na Dimples Cosmetics.",
    "cta.button": "Anza Safari Yako",
    "cta.whatsapp": "Piga Soga WhatsApp",

    // Footer
    "footer.description": "Uzuri Wako, Dhamana Yetu. Bidhaa za ngozi za ubora zilizotengenezwa kwa upendo Tanzania.",
    "footer.quickLinks": "Viungo vya Haraka",
    "footer.ourBrands": "Bidhaa Zetu",
    "footer.contact": "Wasiliana Nasi",
    "footer.followUs": "Tufuate",
    "footer.rights": "Haki zote zimehifadhiwa.",
    "footer.newsletter": "Jiandikishe kwa Jarida",
    "footer.emailPlaceholder": "Weka barua pepe yako",
    "footer.subscribe": "Jiandikishe",

    // Stats
    "stats.yearsInBusiness": "Miaka katika Biashara",
    "stats.happyClients": "Wateja Wenye Furaha",
    "stats.products": "Bidhaa",

    // Awards
    "awards.subtitle": "Utambulisho",
    "awards.title": "Tuzo na Mafanikio Yetu",
    "awards.description": "Imetambuliwa kwa ubora katika urembo na utunzaji wa ngozi Afrika Mashariki",
    "awards.bestBrand": "Chapa Bora ya Vipodozi ya Mwaka 2025",
    "awards.fastestGrowing": "Chapa ya Vipodozi Inayokua Haraka Afrika Mashariki 2025",
    "awards.youngCEO": "Mkurugenzi Mtendaji Mchanga wa Mwaka - HILDA NNKO",
    "awards.consumerChoice": "Chaguo la Wateja Chapa Bora ya Vipodozi 2025",

    // Contact Page
    "contact.title": "Wasiliana Nasi",
    "contact.subtitle": "Tungependa kusikia kutoka kwako",
    "contact.description":
      "Una maswali kuhusu bidhaa zetu au unataka kuweka oda ya jumla? Wasiliana nasi kupitia njia yoyote hapa chini.",
    "contact.form.name": "Jina Lako",
    "contact.form.email": "Barua Pepe",
    "contact.form.phone": "Nambari ya Simu",
    "contact.form.message": "Ujumbe Wako",
    "contact.form.send": "Tuma Ujumbe",
    "contact.locations": "Maeneo Yetu",
    "contact.phone": "Simu",
    "contact.whatsapp": "WhatsApp",
    "contact.social": "Mitandao ya Kijamii",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
