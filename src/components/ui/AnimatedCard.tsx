"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
};

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden ${hover ? "hover:shadow-xl hover:border-primary/20 transition-shadow duration-300" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}
