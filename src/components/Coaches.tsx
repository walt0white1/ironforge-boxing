"use client";

import { motion } from "framer-motion";
import { Award, Instagram } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { COACHES } from "@/lib/constants";

export default function Coaches() {
  return (
    <section id="coachs" className="relative section-padding bg-dark overflow-hidden">
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="L'équipe"
          title="Des coachs"
          highlight="d'exception."
          subtitle="Anciens champions, certifiés, passionnés. Notre équipe vous accompagne quel que soit votre niveau."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={i}
              className="group relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-800 to-dark overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gray-700/50 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-500">
                      {coach.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Instagram icon on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-red transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                    {coach.name}
                  </h4>
                  <p className="text-red text-sm font-medium mt-1">{coach.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                  {coach.bio}
                </p>
                <div className="space-y-2">
                  {coach.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2 text-xs text-gray-300">
                      <Award className="w-3.5 h-3.5 text-red shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
