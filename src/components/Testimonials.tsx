"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section id="avis" className="relative section-padding bg-dark overflow-hidden">
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Témoignages"
          title="Ils ont choisi"
          highlight="Iron Forge."
          subtitle="Plus de 200 avis 5 étoiles. Découvrez ce que nos membres disent de leur expérience."
        />

        {/* Carousel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative max-w-4xl mx-auto"
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-red/10 flex items-center justify-center">
            <Quote className="w-7 h-7 text-red" />
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 pt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed italic max-w-2xl mx-auto">
                  &ldquo;{TESTIMONIALS[active].text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red to-red-dark flex items-center justify-center text-white font-bold text-sm">
                    {TESTIMONIALS[active].name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{TESTIMONIALS[active].name}</p>
                    <p className="text-sm text-gray-400">{TESTIMONIALS[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-red transition-all"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? "w-8 bg-red" : "w-2 bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Avis ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-red transition-all"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Google rating */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>4.9/5 sur Google — 200+ avis</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
