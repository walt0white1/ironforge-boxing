"use client";

import { motion } from "framer-motion";
import { Flame, Swords, Dumbbell, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { DISCIPLINES } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "boxing-glove": ({ className, style }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
      <path d="M6 4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <path d="M12 18v-6" />
      <path d="M9 12h6" />
    </svg>
  ),
  flame: Flame,
  swords: Swords,
  dumbbell: Dumbbell,
};

export default function Disciplines() {
  return (
    <section id="disciplines" className="relative section-padding bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Nos disciplines"
          title="Choisissez votre"
          highlight="combat."
          subtitle="Quatre disciplines, une philosophie commune : l'excellence. Trouvez celle qui vous correspond."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {DISCIPLINES.map((discipline, i) => {
            const Icon = ICONS[discipline.icon];
            return (
              <motion.div
                key={discipline.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                custom={i}
                className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden card-hover"
              >
                {/* Top color accent */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${discipline.color}, transparent)` }}
                />

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ background: `${discipline.color}15`, border: `1px solid ${discipline.color}30` }}
                        >
                          {Icon && <Icon className="w-6 h-6" style={{ color: discipline.color }} />}
                        </div>
                        <div>
                          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                            {discipline.title}
                          </h3>
                          <p className="text-xs uppercase tracking-widest" style={{ color: discipline.color }}>
                            {discipline.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    {discipline.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {discipline.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#inscription"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:gap-3"
                    style={{ color: discipline.color }}
                  >
                    Essayer ce cours
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
