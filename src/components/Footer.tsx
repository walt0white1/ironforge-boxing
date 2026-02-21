"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
import { CLUB, NAV_LINKS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-dark border-t border-dark-border">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center shadow-lg hover:shadow-red/30 hover:scale-110 transition-all duration-300"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-red rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                  <path d="M6 4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                  <path d="M12 18v-6" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider">
                  {CLUB.name}
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 -mt-0.5">
                  {CLUB.tagline}
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Le club de boxe premium de Lyon. Disciplines multiples, coachs d&apos;exception, équipement professionnel. Forgez votre légende.
            </p>
            <div className="flex gap-3">
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
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-red hover:bg-red/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-6 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-6 tracking-wide">
              Horaires
            </h4>
            <ul className="space-y-2.5">
              {Object.entries(CLUB.horaires).map(([jour, heures]) => (
                <li key={jour} className="flex justify-between text-sm">
                  <span className="text-gray-400 capitalize">{jour}</span>
                  <span className="text-white font-medium">{heures}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-6 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(CLUB.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <MapPin className="w-4 h-4 mt-0.5 text-red shrink-0" />
                  <span>{CLUB.address}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CLUB.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-red shrink-0" />
                  <span>{CLUB.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CLUB.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-red shrink-0" />
                  <span>{CLUB.email}</span>
                </a>
              </li>
            </ul>

            {/* Newsletter mini */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Newsletter</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-red text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-red/25 transition-all"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {CLUB.fullName}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
