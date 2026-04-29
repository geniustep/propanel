"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { PORTFOLIO_PROJECTS } from "@/lib/services";
import CTABlock from "@/components/sections/CTABlock";
import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin } from "lucide-react";

const FILTER_KEYS = ["all", "signaletique", "facade", "logo", "totem", "impression"] as const;

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Nos Réalisations"
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-neutral-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  filter === key
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {t(`filter.${key}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary/20 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Visual */}
                  <div
                    className="h-56 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}25, ${project.color}45)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl font-black opacity-15" style={{ color: project.color }}>
                        PP
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span
                        className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                        style={{ backgroundColor: project.color }}
                      >
                        {t(`filter.${project.category}`)}
                      </span>
                      <span className="text-white/70 text-xs">{project.year}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="font-medium">{project.client}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTABlock />
    </div>
  );
}
