"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { CLUB } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding bg-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Venez nous"
          highlight="rencontrer."
          subtitle="Une question ? Passez nous voir, appelez-nous ou remplissez le formulaire."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Left: Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-8"
          >
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Adresse", value: CLUB.address, href: `https://maps.google.com/?q=${encodeURIComponent(CLUB.address)}` },
                { icon: Phone, label: "Téléphone", value: CLUB.phone, href: `tel:${CLUB.phone}` },
                { icon: Mail, label: "Email", value: CLUB.email, href: `mailto:${CLUB.email}` },
                { icon: Clock, label: "Horaires", value: "Lun-Ven 6h-22h", href: "#planning" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-5 bg-dark-card border border-dark-border rounded-xl hover:border-red/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center shrink-0 group-hover:bg-red/20 transition-colors">
                    <Icon className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm text-white font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-dark-card border border-dark-border">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(CLUB.address)}&zoom=15`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Iron Forge Boxing Club"
              />
              {/* Fallback overlay (shown when no API key) */}
              <div className="absolute inset-0 bg-dark-card flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-red mx-auto mb-3" />
                  <p className="text-gray-400 text-sm mb-2">{CLUB.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CLUB.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red text-sm font-semibold hover:underline"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Suivez-nous :</span>
              {[
                { icon: Instagram, href: CLUB.instagram, label: "Instagram" },
                { icon: Facebook, href: CLUB.facebook, label: "Facebook" },
                { icon: Youtube, href: CLUB.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-card border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-red hover:bg-red/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <form
              className="bg-dark-card border border-dark-border rounded-2xl p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
                Envoyez-nous un message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-nom" className="block text-sm text-gray-400 mb-2">Nom *</label>
                  <input
                    id="contact-nom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="contact-prenom" className="block text-sm text-gray-400 mb-2">Prénom *</label>
                  <input
                    id="contact-prenom"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="contact-email" className="block text-sm text-gray-400 mb-2">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-tel" className="block text-sm text-gray-400 mb-2">Téléphone</label>
                <input
                  id="contact-tel"
                  type="tel"
                  className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                  placeholder="06 00 00 00 00"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-sujet" className="block text-sm text-gray-400 mb-2">Sujet *</label>
                <select
                  id="contact-sujet"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white focus:outline-none focus:border-red transition-colors"
                >
                  <option value="">Choisir un sujet</option>
                  <option value="essai">Séance d&apos;essai</option>
                  <option value="inscription">Inscription</option>
                  <option value="tarifs">Question tarifs</option>
                  <option value="competition">Compétition</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-gradient-red text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red/25 transition-all duration-300 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
