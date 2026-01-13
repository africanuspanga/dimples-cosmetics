import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"
import { ScrollToTop } from "@/components/scroll-to-top"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dimplescosmetics.com"),
  title: "Dimples Cosmetics | La Purrona Products | Premium Skincare Tanzania",
  description:
    "Shop La Purrona face cream, body cream, serums & skincare products at Dimples Cosmetics Tanzania. La Purrona niacinamide serum, retinol, body therapy & more. Premium beauty products in Dar es Salaam, Arusha & Zanzibar. 10+ years, 2.1M+ happy clients.",
  keywords:
    "la purrona, la purrona face cream, la purrona body cream, la purrona products, la purrona face cream ingredients, la purrona face cream reviews, la purrona lotion benefits, la purrona body cream ingredients, la purrona face cream benefits, la purrona face cream price, la purrona niacinamide serum, la purrona body cream benefits, la purrona body cream reviews, la purrona body therapy, la purrona body oil, la purrona body cream price, la purrona body therapy benefits, la purrona cream, Dimples Cosmetics, Tanzania cosmetics, skincare Tanzania, beauty products Tanzania, Dar es Salaam cosmetics, Arusha beauty, Zanzibar skincare",
  authors: [{ name: "Dimples Cosmetics Tanzania" }],
  openGraph: {
    title: "Dimples Cosmetics | La Purrona Premium Skincare Tanzania",
    description:
      "Shop La Purrona face cream, body cream, serums & premium skincare. 10+ years, 2.1M+ happy clients. Locations in Dar es Salaam, Arusha & Zanzibar.",
    type: "website",
    url: "https://www.dimplescosmetics.com",
    siteName: "Dimples Cosmetics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Dimples Cosmetics - Premium Beauty & Skincare Tanzania",
      },
    ],
    locale: "en_TZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimples Cosmetics | La Purrona Premium Skincare Tanzania",
    description: "Shop La Purrona face cream, body cream, serums & premium skincare. 10+ years, 2.1M+ happy clients.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc8c65",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ScrollToTop />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
