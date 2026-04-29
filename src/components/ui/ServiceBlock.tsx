"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  icon: string;
  name: string;
  short: string;
  slug: string;
  color: string;
  delay?: number;
  learnMoreLabel?: string;
};

export default function ServiceBlock({
  icon,
  name,
  short,
  slug,
  color,
  delay = 0,
}: Props) {
  const t = useTranslations("services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl border border-neutral-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/services/${slug}`} className="block p-6 h-full">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
          style={{ backgroundColor: `${color}15` }}
        >
          {icon}
        </div>
        <h3 className="font-bold text-neutral-900 text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">{short}</p>
        <div
          className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
          style={{ color }}
        >
          {t("learnMore")}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
