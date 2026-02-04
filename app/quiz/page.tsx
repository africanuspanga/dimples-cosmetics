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
    <div className="w-full max-w-md mx-auto mb-6 sm:mb-8">
      <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-2">
        <span>
          {current + 1} / {total}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
      transition={{ duration: 0.3, delay: index * 0.08 }}
      onClick={onClick}
      className={`
        relative w-full p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all duration-300
        border-2 group active:scale-[0.98]
        ${
          isSelected
            ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
            : "bg-card border-border hover:border-primary/50 active:border-primary/50"
        }
      `}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {option.icon && <span className="text-2xl sm:text-3xl">{option.icon}</span>}
        <span
          className={`
          text-base sm:text-lg font-medium transition-colors flex-1
          ${isSelected ? "text-primary" : "text-foreground"}
        `}
        >
          {option.label}
        </span>
        <div
          className={`
          flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all
          ${isSelected ? "bg-primary border-primary" : "border-muted-foreground/30"}
        `}
        >
          {isSelected && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}>
              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col group"
    >
      {/* Match indicator */}
      {product.score >= 30 && (
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 sm:px-3 rounded-full flex items-center gap-1">
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
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-base sm:text-lg leading-tight">{name}</h3>
        <p className="text-muted-foreground text-sm mt-1 mb-3 sm:mb-4 line-clamp-2">{description}</p>

        {/* Price */}
        <p className="text-lg sm:text-xl font-bold text-primary mt-auto mb-3 sm:mb-4">{formatPrice(product.price)}</p>

        {/* Buy Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onAddToCart}
          className="w-full bg-primary active:bg-primary/90 text-primary-foreground font-semibold py-3 sm:py-3.5 px-4 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Dimples Cosmetics" width={120} height={40} className="h-10 sm:h-12 w-auto" />
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
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-4">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="max-w-xl mx-auto"
            >
              {/* Progress */}
              <ProgressBar current={currentStep} total={questions.length} />

              {/* Question */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-6 sm:mb-10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h1 className="text-xl sm:text-3xl font-bold text-foreground text-balance px-2">
                  {currentQuestion.question}
                </h1>
                {currentStep === 0 && (
                  <p className="text-muted-foreground mt-2 sm:mt-3 text-sm sm:text-base">
                    {language === "sw"
                      ? "Tukusaidie kupata bidhaa zinazokufaa"
                      : "Let us help you find your perfect skincare routine"}
                  </p>
                )}
              </motion.div>

              {/* Options */}
              <div className="space-y-2.5 sm:space-y-3">
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
                  transition={{ delay: 0.4 }}
                  className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8"
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
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto"
            >
              {/* Results Header */}
              <div className="text-center mb-8 sm:mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4 sm:mb-6"
                >
                  <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-4xl font-bold text-foreground mb-2 sm:mb-3"
                >
                  {messages.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto px-4"
                >
                  {messages.subtitle}
                </motion.p>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12">
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
              >
                <button
                  onClick={handleRetake}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-border active:border-primary/50 text-foreground font-medium transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                  {messages.retake}
                </button>
                <Link
                  href="/buy-la-purrona"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary active:bg-primary/90 text-primary-foreground font-semibold transition-colors"
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
