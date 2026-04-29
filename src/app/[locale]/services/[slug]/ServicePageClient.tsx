"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { SERVICES_CONFIG, type ServiceSlug } from "@/lib/services";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

type Props = {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  materials: string[];
  useCases: string[];
  icon: string;
  color: string;
  currentIndex: number;
  otherServices: ServiceSlug[];
  materialsLabel: string;
  useCasesLabel: string;
  galleryLabel: string;
  learnMore: string;
};

const GALLERY_COLORS = [
  "#1e3a8a22",
  "#e6394622",
  "#47556922",
  "#0891b222",
  "#7c3aed22",
  "#05996922",
];

export default function ServicePageClient({
  slug,
  name,
  short,
  description,
  materials,
  useCases,
  icon,
  color,
  otherServices,
  materialsLabel,
  useCasesLabel,
  galleryLabel,
  learnMore,
}: Props) {
  const st = useTranslations("services");
  const nav = useTranslations("nav");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}18 0%, ${color}08 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/services/signaletique" className="hover:text-primary transition-colors">{nav("services")}</Link>
              <span>/</span>
              <span className="text-neutral-700 font-medium">{name}</span>
            </nav>

            <div className="max-w-3xl">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg"
                style={{ backgroundColor: `${color}20` }}
              >
                {icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">{name}</h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">{short}</p>

              <div className="flex flex-wrap gap-4">
                <CTAButton href="/devis" variant="primary" icon>
                  Demander un Devis
                </CTAButton>
                <a
                  href="tel:+212600000000"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neutral-200 text-neutral-700 rounded-xl font-semibold text-sm hover:border-primary hover:text-primary transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-black text-neutral-900 mb-4">
                  Présentation du service
                </h2>
                <p className="text-neutral-600 leading-relaxed text-lg mb-8">{description}</p>

                {/* Use cases */}
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{useCasesLabel}</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-2.5 text-neutral-700">
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color }} />
                      <span className="text-sm font-medium">{uc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{galleryLabel}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {GALLERY_COLORS.map((bg, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: bg, border: `1px solid ${color}30` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Materials */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100"
              >
                <h3 className="font-bold text-neutral-900 mb-4">{materialsLabel}</h3>
                <ul className="space-y-2.5">
                  {materials.map((mat) => (
                    <li key={mat} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      {mat}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl p-6 text-white overflow-hidden relative"
                style={{ backgroundColor: color }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <p className="font-black text-lg mb-2">Besoin d&apos;un devis ?</p>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    Obtenez une proposition personnalisée sous 24h.
                  </p>
                  <Link
                    href="/devis"
                    className="flex items-center justify-center gap-2 bg-white text-neutral-900 rounded-xl px-5 py-3 font-semibold text-sm hover:bg-neutral-100 transition-colors"
                  >
                    Devis Gratuit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-neutral-900 mb-8 text-center">
            Autres Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const cfg = SERVICES_CONFIG[s];
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  className="group flex items-center gap-3 bg-white p-4 rounded-xl border border-neutral-100 hover:border-primary/20 hover:shadow-md transition-all"
                >
                  <span className="text-xl">{cfg.icon}</span>
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-primary transition-colors">
                    {st(`${cfg.translationKey}.name`)}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary ms-auto transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
