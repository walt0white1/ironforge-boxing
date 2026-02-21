"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-dark via-red to-red-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23000%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/90 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            Offre limitée — Première séance gratuite
          </div>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Votre transformation
            <br />
            commence <span className="underline decoration-4 underline-offset-4">maintenant.</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Rejoignez plus de 500 membres qui ont fait le choix de se dépasser.
            Votre première séance est offerte, sans engagement.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#inscription"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-red font-bold text-lg rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              Rejoindre le ring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+33472000000"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Appeler le club
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
