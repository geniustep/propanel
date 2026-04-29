"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
  ];

  const features = [
    "Fabrication sur mesure",
    "Installation professionnelle",
    "Matériaux premium",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/40 pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-neutral-900"
            >
              {t("title")}{" "}
              <span className="text-primary relative">
                {t("titleAccent")}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </span>
              <br />
              {t("titleEnd")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-lg"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-5 flex flex-col gap-2"
            >
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-200"
              >
                {t("ctaSecondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right – Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Hero visual – premium placeholder */}
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 shadow-2xl shadow-primary/30 overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Mock sign visual */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                  <div className="w-full max-w-xs bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-white text-4xl font-black tracking-tighter text-center">PROPANEL</div>
                    <div className="text-white/60 text-xs text-center mt-1 tracking-widest uppercase">Signalétique</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                    {["Logo 3D", "Totem", "Façade", "Inox", "Impression", "LED"].map((s) => (
                      <div key={s} className="bg-white/10 rounded-lg py-2 px-1 text-center text-white text-xs font-medium border border-white/10">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.4 }}
                  className={`absolute bg-white rounded-xl shadow-xl border border-neutral-100 px-4 py-3 text-center min-w-[90px] ${
                    i === 0
                      ? "-top-4 -left-4"
                      : i === 1
                      ? "-bottom-4 left-1/4"
                      : "-bottom-4 -right-4"
                  }`}
                >
                  <div className="text-xl font-black text-primary">{stat.value}</div>
                  <div className="text-[10px] text-neutral-500 font-medium leading-tight mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row – mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 lg:hidden"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-primary">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-neutral-300 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-neutral-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
