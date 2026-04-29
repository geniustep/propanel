"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/30 hover:shadow-lg hover:shadow-accent/40",
  secondary:
    "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-primary hover:bg-primary/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  icon = false,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: Props) {
  const base = `inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  const inner = (
    <>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </>
  );

  const MotionWrapper = ({ children: c }: { children: React.ReactNode }) => (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className="inline-block"
    >
      {c}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <MotionWrapper>
          <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
            {inner}
          </a>
        </MotionWrapper>
      );
    }
    return (
      <MotionWrapper>
        <Link href={href} className={base}>
          {inner}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button type={type} onClick={onClick} className={base} disabled={disabled}>
        {inner}
      </button>
    </MotionWrapper>
  );
}
