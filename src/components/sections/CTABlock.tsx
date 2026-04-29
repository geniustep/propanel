"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABlock() {
  const t = useTranslations("cta");

  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">{t("subtitle")}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/devis"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold text-sm hover:bg-neutral-50 transition-colors shadow-xl"
              >
                {t("button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <span className="text-white/40 text-sm">{t("or")}</span>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="tel:+212600000000"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t("buttonSecondary")}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
