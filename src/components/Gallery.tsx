"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";

const GALLERY_ITEMS = [
  { id: 1, title: "Le Ring", category: "Salle", span: "col-span-2 row-span-2" },
  { id: 2, title: "Entraînement", category: "Training", span: "col-span-1 row-span-1" },
  { id: 3, title: "Sparring", category: "Combat", span: "col-span-1 row-span-1" },
  { id: 4, title: "Cage MMA", category: "Salle", span: "col-span-1 row-span-1" },
  { id: 5, title: "Sac de frappe", category: "Training", span: "col-span-1 row-span-2" },
  { id: 6, title: "Compétition", category: "Événement", span: "col-span-1 row-span-1" },
  { id: 7, title: "Vestiaires", category: "Salle", span: "col-span-1 row-span-1" },
  { id: 8, title: "Équipe", category: "Team", span: "col-span-2 row-span-1" },
];

const FILTERS = ["Tout", "Salle", "Training", "Combat", "Événement"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeFilter === "Tout"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galerie" className="relative section-padding bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Galerie"
          title="L'ambiance"
          highlight="Iron Forge."
          subtitle="Plongez dans l'univers du club. Ring professionnel, équipement haut de gamme, ambiance unique."
        />

        {/* Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-red text-white shadow-lg shadow-red/25"
                  : "bg-dark-card border border-dark-border text-gray-400 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`${item.span} relative group cursor-pointer rounded-xl overflow-hidden bg-dark-card border border-dark-border`}
                onClick={() => setLightbox(item.id)}
              >
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-dark flex items-center justify-center">
                  <span className="text-gray-600 font-[family-name:var(--font-heading)] text-sm">
                    {item.title}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-red text-xs uppercase tracking-wider">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full aspect-video bg-dark-card rounded-2xl border border-dark-border flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-gray-500">
                {GALLERY_ITEMS.find((g) => g.id === lightbox)?.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
