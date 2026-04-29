"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CLIENT_LOGOS } from "@/lib/services";

export default function ClientLogos() {
  const t = useTranslations("clients");

  return (
    <section className="py-20 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-10"
        >
          {t("title")}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {CLIENT_LOGOS.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 cursor-default"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-black text-xs">{client.abbr}</span>
              </div>
              <span className="text-neutral-600 font-semibold text-sm">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
