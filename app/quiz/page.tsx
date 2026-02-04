"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Sparkles, Check, ShoppingBag, RotateCcw, ImageIcon } from "lucide-react"
import { CartProvider, useCart } from "@/context/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { AddToCartToast } from "@/components/add-to-cart-toast"
import { quizQuestions, getRecommendations, resultMessages, products } from "@/lib/quiz-data"

type Language = "en" | "sw"

function formatPrice(price: number) {
  return `TSh ${price.toLocaleString()}`
}

// Confetti component for celebration
function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; color: string }>>([])

  useEffect(() => {
    const colors = ["#dc8c65", "#947a66", "#f5d5c8", "#e8b4a0", "#c4a98f"]
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
          }}
          initial={{ y: -20, opacity: 1, scale: 1 }}
          animate={{
            y: "100vh",
            opacity: 0,
            scale: 0,
            rotate: 360,
          }}
          transition={{
            duration: 2.5,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

// Progress bar component
function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>
          {current + 1} / {total}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

// Quiz option button
function QuizOption({
  option,
  isSelected,
  onClick,
  index,
}: {
  option: { value: string; label: string; icon?: string }
  isSelected: boolean
  onClick: () => void
  index: number
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className={`
        relative w-full p-5 rounded-2xl text-left transition-all duration-300
        border-2 group
        ${
          isSelected
            ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
            : "bg-card border-border hover:border-primary/50 hover:shadow-md"
        }
      `}
    >
      <div className="flex items-center gap-4">
        {option.icon && <span className="text-3xl">{option.icon}</span>}
        <span
          className={`
          text-lg font-medium transition-colors
          ${isSelected ? "text-primary" : "text-foreground group-hover:text-primary"}
        `}
        >
          {option.label}
        </span>
        <div
          className={`
          ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
          ${isSelected ? "bg-primary border-primary" : "border-muted-foreground/30"}
        `}
        >
          {isSelected && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}>
              <Check className="w-4 h-4 text-primary-foreground" />
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  )
}

// Product card for results
function ProductCard({
  product,
  language,
  onAddToCart,
  index,
}: {
  product: (typeof products)[0] & { score: number }
  language: Language
  onAddToCart: () => void
  index: number
}) {
  const name = language === "sw" ? product.nameSwahili : product.name
  const description = language === "sw" ? product.descriptionSwahili : product.description
  const messages = resultMessages[language]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Match indicator */}
      {product.score >= 30 && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {language === "sw" ? "Inakufaa!" : "Great Match!"}
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square bg-accent overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-muted-foreground/40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm mt-1 mb-4">{description}</p>

        {/* Price */}
        <p className="text-xl font-bold text-primary mt-auto mb-4">{formatPrice(product.price)}</p>

        {/* Buy Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-4 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          {messages.buyNow}
        </motion.button>
      </div>
    </motion.div>
  )
}

function QuizContent() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [language, setLanguage] = useState<Language>("en")
  const [showResults, setShowResults] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastProductName, setToastProductName] = useState("")

  const { addItem } = useCart()

  const questions = quizQuestions[language]
  const currentQuestion = questions[currentStep]
  const messages = resultMessages[language]

  const handleOptionSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)

    // Handle language selection
    if (currentQuestion.id === "language") {
      setLanguage(value as Language)
    }

    // Auto advance after selection with a small delay for visual feedback
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Show results
        setShowConfetti(true)
        setTimeout(() => {
          setShowResults(true)
          setShowConfetti(false)
        }, 1500)
      }
    }, 400)
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRetake = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: language === "sw" ? product.nameSwahili : product.name,
      price: product.price,
      image: product.image,
    })
    setToastProductName(language === "sw" ? product.nameSwahili : product.name)
    setShowToast(true)
  }

  const recommendations = showResults ? getRecommendations(answers) : []

  return (
    <main className="min-h-screen bg-background">
      {showConfetti && <Confetti />}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Dimples Cosmetics" width={40} height={40} className="rounded-full" />
            <span className="font-semibold text-foreground hidden sm:block">Dimples Cosmetics</span>
          </Link>

          {!showResults && currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">{language === "sw" ? "Rudi" : "Back"}</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              {/* Progress */}
              <ProgressBar current={currentStep} total={questions.length} />

              {/* Question */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
                  {currentQuestion.question}
                </h1>
                {currentStep === 0 && (
                  <p className="text-muted-foreground mt-3">
                    {language === "sw"
                      ? "Tukusaidie kupata bidhaa zinazokufaa"
                      : "Let us help you find your perfect skincare routine"}
                  </p>
                )}
              </motion.div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <QuizOption
                    key={option.value}
                    option={option}
                    isSelected={answers[currentQuestion.id] === option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    index={index}
                  />
                ))}
              </div>

              {/* Skip hint for first question */}
              {currentStep === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-sm text-muted-foreground mt-8"
                >
                  {language === "sw"
                    ? "Maswali 8 tu - Dakika 2"
                    : "Only 8 questions - Takes 2 minutes"}
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {/* Results Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-foreground mb-3"
                >
                  {messages.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg max-w-xl mx-auto"
                >
                  {messages.subtitle}
                </motion.p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {recommendations.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    language={language}
                    onAddToCart={() => handleAddToCart(product)}
                    index={index}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={handleRetake}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-border hover:border-primary/50 text-foreground font-medium transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  {messages.retake}
                </button>
                <Link
                  href="/buy-la-purrona"
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                >
                  {messages.viewAll}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Toast */}
      <AddToCartToast show={showToast} productName={toastProductName} onClose={() => setShowToast(false)} />
    </main>
  )
}

export default function QuizPage() {
  return (
    <CartProvider>
      <QuizContent />
    </CartProvider>
  )
}
