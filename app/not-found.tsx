import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f5] relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-primary/5 rounded-full hidden lg:block" />
      
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-block mb-8">
          <Image
            src="/images/logo.png"
            alt="Dimples Cosmetics"
            width={140}
            height={50}
            className="h-12 w-auto mx-auto"
            priority
          />
        </Link>

        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-8xl md:text-9xl font-serif font-light text-primary/20 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-12 h-12 md:w-16 md:h-16 text-primary/40" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground/60 font-[family-name:var(--font-montserrat)] text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved. 
          Let us help you find your way back to radiant skin.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 rounded-none group"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-foreground/30 text-foreground hover:bg-foreground/5 font-[family-name:var(--font-montserrat)] text-sm tracking-wide uppercase px-8 py-6 rounded-none bg-transparent"
          >
            <Link href="/buy-la-purrona">
              Shop Products
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <p className="text-sm text-foreground/50 font-[family-name:var(--font-montserrat)] mb-4 uppercase tracking-wider">
            Popular Pages
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
              About Us
            </Link>
            <Link href="/buy-la-purrona" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
              Shop La Purrona
            </Link>
            <Link href="/quiz" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
              Skin Quiz
            </Link>
            <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
              Contact
            </Link>
            <Link href="/blog" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 font-[family-name:var(--font-montserrat)]">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
