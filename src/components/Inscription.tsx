"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, Calendar, ChevronRight, Check, Flame } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { DISCIPLINES } from "@/lib/constants";

const STEPS = [
  { id: 1, label: "Infos", icon: User },
  { id: 2, label: "Discipline", icon: Flame },
  { id: 3, label: "Créneau", icon: Calendar },
  { id: 4, label: "Confirmation", icon: Check },
];

export default function Inscription() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    discipline: "",
    experience: "",
    creneau: "",
    objectif: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section id="inscription" className="relative section-padding bg-dark overflow-hidden">
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Inscription"
          title="Prêt à entrer dans"
          highlight="le ring ?"
          subtitle="Réservez votre séance d'essai gratuite en 2 minutes. Sans engagement."
        />

        {/* Progress Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 md:gap-4 mb-12"
        >
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2 md:gap-4">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  step >= s.id
                    ? "bg-gradient-red text-white shadow-lg shadow-red/20"
                    : "bg-dark-card border border-dark-border text-gray-500"
                }`}
                onClick={() => s.id < step && setStep(s.id)}
              >
                <s.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-8 md:w-12 h-px transition-colors duration-300 ${step > s.id ? "bg-red" : "bg-dark-border"}`} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
                    Vos informations
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">Dites-nous qui vous êtes.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ins-nom" className="block text-sm text-gray-400 mb-2">Nom *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          id="ins-nom"
                          type="text"
                          value={form.nom}
                          onChange={(e) => update("nom", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                          placeholder="Dupont"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ins-prenom" className="block text-sm text-gray-400 mb-2">Prénom *</label>
                      <input
                        id="ins-prenom"
                        type="text"
                        value={form.prenom}
                        onChange={(e) => update("prenom", e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                        placeholder="Jean"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ins-email" className="block text-sm text-gray-400 mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        id="ins-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                        placeholder="jean@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ins-tel" className="block text-sm text-gray-400 mb-2">Téléphone *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          id="ins-tel"
                          type="tel"
                          value={form.telephone}
                          onChange={(e) => update("telephone", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                          placeholder="06 00 00 00 00"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="ins-dob" className="block text-sm text-gray-400 mb-2">Date de naissance *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          id="ins-dob"
                          type="date"
                          value={form.dateNaissance}
                          onChange={(e) => update("dateNaissance", e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-red transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Discipline */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
                    Choisissez votre discipline
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">Quelle discipline vous attire ?</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {DISCIPLINES.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => update("discipline", d.id)}
                        className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                          form.discipline === d.id
                            ? "border-red bg-red/10 shadow-lg shadow-red/10"
                            : "border-dark-border bg-black/30 hover:border-gray-600"
                        }`}
                      >
                        <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold">
                          {d.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{d.subtitle}</p>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="ins-exp" className="block text-sm text-gray-400 mb-2">
                      Niveau d&apos;expérience
                    </label>
                    <select
                      id="ins-exp"
                      value={form.experience}
                      onChange={(e) => update("experience", e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white focus:outline-none focus:border-red transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="debutant">Débutant complet</option>
                      <option value="initie">Quelques mois de pratique</option>
                      <option value="intermediaire">1-3 ans de pratique</option>
                      <option value="avance">3+ ans / Compétiteur</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Créneau */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
                    Choisissez votre créneau
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Quand souhaitez-vous venir pour votre séance d&apos;essai ?
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {["Lundi 18h", "Lundi 19h30", "Mardi 18h", "Mardi 19h30", "Mercredi 18h", "Mercredi 19h30", "Jeudi 18h", "Jeudi 19h30", "Vendredi 18h", "Samedi 10h30", "Samedi 12h", "Dimanche 10h30"].map(
                      (slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => update("creneau", slot)}
                          className={`p-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                            form.creneau === slot
                              ? "border-red bg-red/10 text-white"
                              : "border-dark-border bg-black/30 text-gray-400 hover:border-gray-600 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      )
                    )}
                  </div>

                  <div>
                    <label htmlFor="ins-objectif" className="block text-sm text-gray-400 mb-2">
                      Votre objectif principal
                    </label>
                    <select
                      id="ins-objectif"
                      value={form.objectif}
                      onChange={(e) => update("objectif", e.target.value)}
                      className="w-full px-4 py-3 bg-black/50 border border-dark-border rounded-xl text-white focus:outline-none focus:border-red transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="forme">Remise en forme</option>
                      <option value="poids">Perte de poids</option>
                      <option value="confiance">Confiance en soi</option>
                      <option value="technique">Apprentissage technique</option>
                      <option value="competition">Préparation compétition</option>
                      <option value="fun">Plaisir et défoulement</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-red flex items-center justify-center animate-pulse-glow">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold">
                    C&apos;est presque fait !
                  </h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Vérifiez vos informations puis confirmez votre inscription.
                    Votre séance d&apos;essai est <strong className="text-white">100% gratuite</strong>.
                  </p>

                  {/* Summary */}
                  <div className="bg-black/50 border border-dark-border rounded-xl p-6 text-left max-w-md mx-auto space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Nom</span>
                      <span className="text-white font-medium">{form.prenom} {form.nom}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Email</span>
                      <span className="text-white font-medium">{form.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Discipline</span>
                      <span className="text-white font-medium capitalize">
                        {DISCIPLINES.find((d) => d.id === form.discipline)?.title || "—"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Créneau</span>
                      <span className="text-white font-medium">{form.creneau || "—"}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-dark-border">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 text-sm font-semibold text-gray-400 border border-dark-border rounded-xl hover:text-white hover:border-gray-600 transition-all"
                >
                  Retour
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-red text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-red/25 transition-all duration-300 group"
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-red text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-red/25 animate-pulse-glow transition-all duration-300"
                >
                  <Check className="w-4 h-4" />
                  Confirmer mon essai gratuit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
