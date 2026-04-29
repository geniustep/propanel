"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, Package, Layers, Clock, MapPin, Headphones } from "lucide-react";

const ICONS = [Award, Package, Layers, Clock, MapPin, Headphones];

export default function WhyUs() {
  const t = useTranslations("whyUs");

  const reasons = [1, 2, 3, 4, 5, 6].map((n) => ({
    title: t(`reason${n}Title`),
    desc: t(`reason${n}Desc`),
    Icon: ICONS[n - 1],
  }));

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Nos Avantages"
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-6 border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-neutral-900 text-lg mb-2">{title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
