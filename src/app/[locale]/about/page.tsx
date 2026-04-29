"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import CTABlock from "@/components/sections/CTABlock";
import { Award, Lightbulb, Shield, Heart, Users, Wrench, TrendingUp, Globe } from "lucide-react";

const VALUE_ICONS = [Award, Lightbulb, Shield, Heart];
const STAT_ICONS = [TrendingUp, Award, Globe, Users];

export default function AboutPage() {
  const t = useTranslations("about");

  const values = [1, 2, 3, 4].map((n, i) => ({
    title: t(`value${n}`),
    desc: t(`value${n}Desc`),
    Icon: VALUE_ICONS[i],
  }));

  const stats = [
    { label: t("stat1"), Icon: STAT_ICONS[0] },
    { label: t("stat2"), Icon: STAT_ICONS[1] },
    { label: t("stat3"), Icon: STAT_ICONS[2] },
    { label: t("stat4"), Icon: STAT_ICONS[3] },
  ];

  const equipment = [
    { name: "Traceur grand format UV", desc: "Impression haute résolution 2,5m de large" },
    { name: "Découpe CNC aluminium", desc: "Précision 0.1mm pour lettres et formes" },
    { name: "Thermoformage", desc: "Façonnage de plastiques et acryliques" },
    { name: "Soudure TIG/MIG", desc: "Assemblage inox et aluminium professionnel" },
    { name: "Laser CO₂", desc: "Découpe et gravure tous matériaux" },
    { name: "Véhicule nacelle", desc: "Intervention en hauteur jusqu'à 18m" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                À Propos
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                {t("title")}
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {t("subtitle")}
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ label, Icon }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm text-center"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-black text-neutral-900 text-lg">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 shadow-2xl shadow-primary/20 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10">
                <div className="text-6xl font-black text-white/20 mb-4">10+</div>
                <div className="text-white font-black text-2xl mb-2">Années d&apos;Excellence</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Depuis notre création à Tanger, nous n&apos;avons cessé de repousser les limites de la signalétique au Maroc.
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { n: "500+", l: "Projets" },
                    { n: "200+", l: "Clients" },
                    { n: "50+", l: "Villes" },
                    { n: "15", l: "Techniciens" },
                  ].map(({ n, l }) => (
                    <div key={l} className="bg-white/10 rounded-xl p-3 text-center">
                      <div className="text-white font-black text-xl">{n}</div>
                      <div className="text-white/60 text-xs">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-neutral-900 mb-4">{t("storyTitle")}</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">{t("storyText")}</p>
              <p className="text-neutral-600 leading-relaxed">{t("storyText2")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title={t("valuesTitle")} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Technologie"
            title={t("equipTitle")}
            subtitle={t("equipSubtitle")}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 bg-neutral-50 rounded-2xl border border-neutral-100"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm mb-1">{eq.name}</h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">{eq.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
