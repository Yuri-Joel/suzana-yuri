"use client"

import { useState, useEffect } from "react"
import { Heart, Stars, Sparkles } from "lucide-react"
import Image from "next/image"
import ys from "@/assets/ys.jpg";
import yurisuza from "@/assets/yurisuza.jpg";
import tempos from "@/assets/tempos.jpg";
import yuri from "@/assets/yuri.jpg";
import suza from "@/assets/suza.jpg";
import suzana2 from "@/assets/suzana2.jpg";
import suzana3 from "@/assets/suzana3.jpg";
import ssy from "@/assets/ssy.jpg";
import suzana from "@/assets/suzana.jpg";

export default function LovePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)

  const loveQuotes = [
    "Amar não é olhar um para o outro, é olhar juntos na mesma direção.",
    "O amor é a única coisa que cresce à medida que se reparte.",
    "Cada dia ao seu lado é um dia especial na minha vida.",
    "Você ilumina meus dias como ninguém mais poderia fazer.",
    "Meu coração bate mais forte quando estou com você.",
  ]

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, []);
  const images = [
    "/assets/ys.jpg",
    "/assets/yurisuza.jpg",
    "/assets/tempos.jpg",
    "/assets/yuri.jpg",
    "/assets/suza.jpg",
    "/assets/suzana2.jpg",
    "/assets/suzana3.jpg",
    "/assets/ssy.jpg",
    "/assets/antigas.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 overflow-hidden">
      {/* Header with floating hearts */}
      <header className="relative h-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-400 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6 + Math.random() * 0.4,
                transform: `scale(${0.5 + Math.random()})`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        <h1 className="text-3xl font-bold text-rose-700 z-10 animate-fade-in-up">Para o Meu Amor</h1>
      </header>

      {/* Hero section with name */}
      <section
        className={`py-16 px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-3xl mx-auto">
          <div className="relative inline-block group">
            <Sparkles className="absolute -top-8 -left-8 text-amber-400 h-8 w-8 animate-spin-slow" />
            <Stars className="absolute -top-6 -right-8 text-amber-400 h-8 w-8 animate-pulse-slow" />

            <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6 hover:scale-105 transition-transform duration-300">
              <div className="">
                <Heart className="h-12 w-12 text-rose-500 fill-rose-500 animate-heart-beat hover:scale-150 transition-transform" />
              </div>
              Suzana Celina Mawonso
              <div className="flex justify-end">
                <Heart className="h-12 w-12 text-rose-500 fill-rose-500 animate-heart-beat hover:scale-150 transition-transform" />
              </div>
            </h1>
            <h4 className="text-md md:text-5xl font-bold text-rose-600 mb-6 hover:scale-105 transition-transform duration-300">
              Yuri Gomes
            </h4>
            <Sparkles className="absolute -bottom-8 -right-8 text-amber-400 h-8 w-8 animate-spin-slow" />
            <Stars className="absolute -bottom-6 -left-8 text-amber-400 h-8 w-8 animate-pulse-slow" />
          </div>
          <p className="text-xl md:text-2xl text-rose-700 mt-6 animate-fade-in">
            A brilhar cenas em dia e tudo mais...
          </p>
          <div className="h-16 flex items-center justify-center mt-8">
            <p className="text-lg italic text-rose-600 transition-all duration-500 animate-fade-in hover:scale-105">
              {loveQuotes[currentQuote]}
            </p>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-12 px-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-3xl font-bold text-center text-rose-700 mb-10 hover:scale-105 transition-transform">
          Nossos Momentos Especiais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:rotate-2 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="p-2">
                <div className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`Foto ${i + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-300/20 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-bounce-slow">
            Ver Mais Fotos
          </button>
        </div>
      </section>

      {/* Love message */}
      <section
        className="py-16 px-4 bg-white/50 backdrop-blur-sm animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-rose-700 mb-8 hover:scale-105 transition-transform">
            Minha Declaração de Amor
          </h2>
          <div className="bg-white/80 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group">
            <p className="text-lg text-rose-800 leading-relaxed group-hover:scale-105 transition-transform">
              Suzana, desde o primeiro momento em que te vi, soube que havia algo especial em você. Seu sorriso ilumina
              meus dias, sua voz acalma meu coração, e seu amor me faz querer ser uma pessoa melhor a cada dia. Você é
              meu sol, minha lua e todas as estrelas do céu.
            </p>
            <p className="text-lg text-rose-800 leading-relaxed mt-4 group-hover:scale-105 transition-transform">
              Cada momento ao seu lado é um tesouro que guardo com carinho. Seu brilho é incomparável, sua beleza é de
              tirar o fôlego, e seu coração é o mais puro que já conheci. Obrigado por fazer parte da minha vida e por
              me permitir fazer parte da sua.
            </p>
            <p className="text-lg text-rose-800 leading-relaxed mt-4 group-hover:scale-105 transition-transform">
              Te amo hoje, amanhã e para sempre.
            </p>
            <div className="mt-6 flex justify-center">
              <Heart className="h-12 w-12 text-rose-500 fill-rose-500 animate-heart-beat hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-rose-700 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <p className="hover:scale-105 transition-transform">Com todo meu amor, hoje e sempre.</p>
        <p className="mt-2 hover:scale-105 transition-transform">{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

