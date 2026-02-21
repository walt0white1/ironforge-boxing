"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { CLUB, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-red rounded-lg group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" />
                  <path d="M6 4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                  <path d="M12 18v-6" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider text-white">
                  {CLUB.name}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 -mt-0.5">
                  {CLUB.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${CLUB.phone}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{CLUB.phone}</span>
              </a>
              <a
                href="#inscription"
                className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-red rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-red/25"
              >
                <span className="relative z-10">Essai gratuit</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white hover:text-red transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#inscription"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 px-10 py-4 bg-gradient-red text-white text-lg font-bold rounded-xl"
              >
                Essai gratuit
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
