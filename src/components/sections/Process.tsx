"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import { MessageSquare, Palette, Wrench, HardHat, CheckCheck } from "lucide-react";

const STEP_ICONS = [MessageSquare, Palette, Wrench, HardHat, CheckCheck];

export default function Process() {
  const t = useTranslations("process");

  const steps = [1, 2, 3, 4, 5].map((n) => ({
    title: t(`step${n}Title`),
    desc: t(`step${n}Desc`),
    Icon: STEP_ICONS[n - 1],
  }));

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Comment ça marche"
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-16 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-neutral-200 z-0">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white rounded-full flex items-center justify-center text-xs font-black">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-neutral-900 text-base mb-2">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
