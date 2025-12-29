import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/context/language-context"

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
  title: "Dimples Cosmetics | Premium Beauty & Skincare Tanzania",
  description:
    "Dimples Cosmetics - Your Beauty, Our Commitment. Premium skincare products including La Purrona, White Infinite, Blooming Skin. Located in Dar es Salaam, Arusha & Zanzibar. Worldwide delivery.",
  keywords: "cosmetics, skincare, beauty, Tanzania, La Purrona, Dimples Cosmetics, Dar es Salaam, Arusha, Zanzibar",
  authors: [{ name: "Dimples Cosmetics" }],
  openGraph: {
    title: "Dimples Cosmetics | Premium Beauty & Skincare Tanzania",
    description: "Your Beauty, Our Commitment. Premium skincare products with worldwide delivery.",
    type: "website",
  },
    generator: 'v0.app'
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
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
