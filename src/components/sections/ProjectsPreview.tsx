"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { PORTFOLIO_PROJECTS } from "@/lib/services";
import { MapPin } from "lucide-react";

export default function ProjectsPreview() {
  const t = useTranslations("portfolio");

  const preview = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Réalisations"
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Visual placeholder */}
              <div
                className="h-52 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-6xl font-black opacity-20"
                    style={{ color: project.color }}
                  >
                    PP
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: project.color }}
                  >
                    {t(`filter.${project.category}`)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-neutral-700">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-neutral-900 mb-1.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.client} · {project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/portfolio" variant="outline" icon>
            {t("viewAll")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
