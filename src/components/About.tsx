"use client";

import { motion } from "framer-motion";
import { Shield, Target, Heart, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const VALUES = [
  {
    icon: Shield,
    title: "Discipline",
    description: "La rigueur forge le caractère. Chaque entraînement est un pas vers l'excellence.",
  },
  {
    icon: Target,
    title: "Dépassement",
    description: "Repousser ses limites, jour après jour. Ici, on ne se contente jamais du minimum.",
  },
  {
    icon: Heart,
    title: "Respect",
    description: "Le ring enseigne l'humilité. Respect de l'adversaire, du coach, de soi-même.",
  },
  {
    icon: Flame,
    title: "Passion",
    description: "La flamme qui nous anime. La boxe n'est pas un sport, c'est un mode de vie.",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="relative section-padding bg-dark overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Notre histoire"
          title="Plus qu'un club,"
          highlight="une famille."
          subtitle="Depuis 2018, Iron Forge forme des champions et transforme des vies. Notre mission : rendre la boxe accessible à tous, dans un cadre d'exception."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Left: Image/Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
              {/* Placeholder for gym image */}
              <div className="absolute inset-0 bg-gradient-to-br from-red/20 via-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-8xl font-bold text-white/5">IF</div>
                  <p className="text-sm text-gray-500 mt-2">Photo de la salle</p>
                </div>
              </div>
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)] text-red">8+</div>
              <div className="text-sm text-gray-400 mt-1">Années d&apos;expérience</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold mb-6">
              Là où la <span className="text-gradient">détermination</span> rencontre l&apos;excellence
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Iron Forge est né d&apos;une vision : créer le club de boxe le plus complet et le plus
                exigeant de Lyon. Un lieu où débutants et champions s&apos;entraînent côte à côte,
                dans le respect et la bienveillance.
              </p>
              <p>
                Nos 600m² d&apos;espace d&apos;entraînement sont équipés du matériel haut de gamme :
                ring professionnel, cage MMA, zone de frappe, espace musculation et cardio.
                Chaque détail a été pensé pour votre progression.
              </p>
              <p>
                Que vous cherchiez à vous défouler, perdre du poids, gagner en confiance ou
                préparer une compétition, nos coachs certifiés vous accompagnent avec des
                programmes sur mesure.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-gray-300">
                600m² de salle
              </div>
              <div className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-gray-300">
                Ring professionnel
              </div>
              <div className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-gray-300">
                Cage MMA
              </div>
              <div className="px-4 py-2 bg-dark-card border border-dark-border rounded-full text-sm text-gray-300">
                Vestiaires premium
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              custom={i}
              className="group p-8 bg-dark-card border border-dark-border rounded-2xl card-hover text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-red/10 border border-red/20 flex items-center justify-center group-hover:bg-red/20 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-red" />
              </div>
              <h4 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                {value.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
