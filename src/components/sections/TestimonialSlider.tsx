"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Mohammed Alami",
    role: "Directeur Général, Mall Express Tanger",
    content:
      "PROPANEL a réalisé l'ensemble de notre signalétique en un temps record. Qualité impeccable, équipe professionnelle et respect total des délais. Je les recommande sans hésitation.",
    rating: 5,
  },
  {
    name: "Fatima Benali",
    role: "Responsable Marketing, Attijariwafa Bank",
    content:
      "Nous faisons confiance à PROPANEL depuis 3 ans pour nos agences dans tout le Maroc. Leur cohérence dans la qualité et leur réactivité font la différence.",
    rating: 5,
  },
  {
    name: "Karim Tazi",
    role: "Gérant, Résidence Jardins du Détroit",
    content:
      "La palissade de chantier réalisée par PROPANEL a transformé notre site de construction en véritable vitrine marketing. Excellent travail !",
    rating: 5,
  },
  {
    name: "Sara Cherkaoui",
    role: "Directrice, Clinique Al Amal",
    content:
      "Le logo en inox et la signalétique directionnelle apportent un aspect vraiment professionnel à notre clinique. Les patients le remarquent à chaque visite.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 to-primary overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white/40 text-xs uppercase tracking-widest font-semibold mb-12">
          Ce que disent nos clients
        </p>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-accent mx-auto mb-6 opacity-60" />
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium mb-8 max-w-3xl mx-auto">
                &ldquo;{TESTIMONIALS[current].content}&rdquo;
              </p>
              <div>
                <p className="text-white font-bold">{TESTIMONIALS[current].name}</p>
                <p className="text-white/50 text-sm mt-1">{TESTIMONIALS[current].role}</p>
                <div className="flex items-center justify-center gap-0.5 mt-3">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-white" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((c) => (c + 1) % TESTIMONIALS.length)}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
