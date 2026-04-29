"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOCALE_LABELS: Record<string, { label: string; flag: string }> = {
  fr: { label: "Français", flag: "🇫🇷" },
  ar: { label: "العربية", flag: "🇲🇦" },
  en: { label: "English", flag: "🇬🇧" },
  es: { label: "Español", flag: "🇪🇸" },
};

export default function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next as "fr" | "ar" | "en" | "es" });
    setOpen(false);
  }

  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-200">
        {routing.locales.map((l) => (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              l === locale
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            <span>{LOCALE_LABELS[l].flag}</span>
            <span>{LOCALE_LABELS[l].label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-neutral-100 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden md:inline">{LOCALE_LABELS[locale]?.label}</span>
        <span className="md:hidden">{LOCALE_LABELS[locale]?.flag}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full mt-1 end-0 w-40 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden z-50"
          >
            {routing.locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                  l === locale
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <span>{LOCALE_LABELS[l].flag}</span>
                <span>{LOCALE_LABELS[l].label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
