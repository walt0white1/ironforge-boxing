"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Download, Clock } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { PLANNING } from "@/lib/constants";

const DISCIPLINE_COLORS: Record<string, string> = {
  "Boxe Anglaise": "bg-red/20 text-red border-red/30",
  "Boxe Thaï": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  MMA: "bg-red/20 text-red border-red/30",
  "Prépa Physique": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Cardio Boxing": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Boxe Enfants": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Boxe Ados": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  Sparring: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "Open Sparring": "bg-rose-500/20 text-rose-400 border-rose-500/30",
  "Open Gym": "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

export default function Planning() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="planning" className="relative section-padding bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Planning"
          title="Trouvez votre"
          highlight="créneau."
          subtitle="Plus de 30 cours par semaine. Trouvez l'horaire et la discipline qui vous correspondent."
        />

        {/* Day tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex overflow-x-auto gap-2 mb-10 pb-2 scrollbar-none"
        >
          {PLANNING.map((day, i) => (
            <button
              key={day.jour}
              onClick={() => setActiveDay(i)}
              className={`flex-shrink-0 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeDay === i
                  ? "bg-gradient-red text-white shadow-lg shadow-red/25"
                  : "bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-600"
              }`}
            >
              {day.jour}
            </button>
          ))}
        </motion.div>

        {/* Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {PLANNING[activeDay].cours.map((cours, i) => (
              <motion.div
                key={`${cours.heure}-${cours.discipline}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 bg-dark-card border border-dark-border rounded-xl hover:border-red/30 transition-all duration-300"
              >
                {/* Time */}
                <div className="flex items-center gap-2 min-w-[80px]">
                  <Clock className="w-4 h-4 text-red hidden sm:block" />
                  <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                    {cours.heure}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-dark-border hidden md:block" />

                {/* Discipline */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                        DISCIPLINE_COLORS[cours.discipline] || "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }`}
                    >
                      {cours.discipline}
                    </span>
                    <span className="text-sm text-gray-400">Coach {cours.coach}</span>
                  </div>
                </div>

                {/* Level */}
                <span className="text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-full hidden sm:block">
                  {cours.niveau}
                </span>

                {/* Book button */}
                <a
                  href="#inscription"
                  className="px-4 py-2 text-xs font-semibold text-red border border-red/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red hover:text-white hidden md:block"
                >
                  Réserver
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Download CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:border-red/30 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Télécharger le planning PDF
          </a>
          <a
            href="#inscription"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-red rounded-xl text-sm font-semibold text-white hover:shadow-lg hover:shadow-red/25 transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Réserver ma séance d&apos;essai
          </a>
        </motion.div>
      </div>
    </section>
  );
}
