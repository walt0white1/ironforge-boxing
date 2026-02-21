"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { TARIFS } from "@/lib/constants";

export default function Tarifs() {
  return (
    <section id="tarifs" className="relative section-padding bg-dark overflow-hidden">
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tarifs"
          title="Investissez en"
          highlight="vous."
          subtitle="Des formules adaptées à chaque profil. Séance d'essai gratuite pour tous."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {TARIFS.map((tarif, i) => (
            <motion.div
              key={tarif.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={i}
              className={`relative group rounded-2xl overflow-hidden card-hover ${
                tarif.highlight
                  ? "bg-gradient-to-b from-red/10 to-dark-card border-2 border-red/40"
                  : "bg-dark-card border border-dark-border"
              }`}
            >
              {/* Popular badge */}
              {tarif.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="flex items-center justify-center gap-1.5 py-2 bg-gradient-red text-white text-xs font-bold uppercase tracking-wider">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className={`p-8 ${tarif.popular ? "pt-14" : ""}`}>
                {/* Name */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-1">
                  {tarif.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{tarif.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold">
                    {tarif.price}
                  </span>
                  {tarif.period && (
                    <span className="text-gray-400 text-lg ml-1">{tarif.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tarif.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-red mt-0.5 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#inscription"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    tarif.highlight
                      ? "bg-gradient-red text-white hover:shadow-lg hover:shadow-red/25"
                      : "bg-white/5 border border-white/10 text-white hover:bg-red hover:border-red"
                  }`}
                >
                  {tarif.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 text-center text-sm text-gray-500"
        >
          Tous nos tarifs incluent l&apos;accès aux vestiaires et douches. Certificat médical requis.
          Engagement annuel = 2 mois offerts.
        </motion.p>
      </div>
    </section>
  );
}
