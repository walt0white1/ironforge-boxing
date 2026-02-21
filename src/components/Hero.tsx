"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Trophy, Users, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-boxing.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark to-black" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-red" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
              Club de boxe premium — Lyon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            Forgez votre
            <br />
            <span className="text-gradient">légende</span>
            <span className="text-red">.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light"
          >
            Boxe anglaise · Muay Thaï · MMA · Préparation physique.
            <br className="hidden sm:block" />
            Rejoignez le club qui transforme les vies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#inscription"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-red rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red/25 hover:scale-[1.02]"
            >
              <span className="relative z-10">Commencer le combat</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#disciplines"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <Play className="w-5 h-5 group-hover:text-red transition-colors" />
              Découvrir le club
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-16 flex flex-wrap gap-8 sm:gap-12"
          >
            {[
              { icon: Users, value: "500+", label: "Membres actifs" },
              { icon: Trophy, value: "15", label: "Titres remportés" },
              { icon: Clock, value: "7j/7", label: "Ouvert tous les jours" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-red" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-[family-name:var(--font-heading)]">{value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </motion.div>

      {/* Side decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gray-600" />
        <span className="text-xs text-gray-500 tracking-widest rotate-90 origin-center whitespace-nowrap">
          EST. 2018
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
