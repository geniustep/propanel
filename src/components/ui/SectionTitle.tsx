"use client";

import { motion } from "framer-motion";

type Props = {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  titleAccent,
  subtitle,
  centered = true,
  light = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      {badge && (
        <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-black tracking-tight leading-tight ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
        {titleAccent && (
          <span className="text-accent"> {titleAccent}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-neutral-300" : "text-neutral-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
