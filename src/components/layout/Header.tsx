"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SERVICE_SLUGS, SERVICES_CONFIG } from "@/lib/services";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

type Props = { locale: string };

export default function Header({ locale }: Props) {
  const t = useTranslations("nav");
  const st = useTranslations("services");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg leading-none">P</span>
            </div>
            <div className="leading-tight">
              <div className="font-black text-neutral-900 text-lg tracking-tight">PROPANEL</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:block">
                Signalétique & Publicité
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors underline-animate ${
                  pathname === href
                    ? "text-primary bg-primary/5"
                    : "text-neutral-700 hover:text-primary hover:bg-neutral-50"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors">
                {t("services")}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.14 }}
                    className="absolute top-full mt-1 start-0 w-64 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {SERVICE_SLUGS.map((slug) => {
                        const cfg = SERVICES_CONFIG[slug];
                        return (
                          <Link
                            key={slug}
                            href={`/services/${slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors group"
                          >
                            <span className="text-lg leading-none">{cfg.icon}</span>
                            <span className="text-sm font-medium text-neutral-700 group-hover:text-primary">
                              {st(`${cfg.translationKey}.name`)}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <a
              href="tel:+212600000000"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+212 6 00 00 00 00</span>
            </a>
            <Link
              href="/devis"
              className="px-5 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-dark transition-colors shadow-sm shadow-accent/30"
            >
              {t("quote")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:text-primary"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  {t("services")}
                </p>
                {SERVICE_SLUGS.map((slug) => {
                  const cfg = SERVICES_CONFIG[slug];
                  return (
                    <Link
                      key={slug}
                      href={`/services/${slug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                    >
                      <span>{cfg.icon}</span>
                      <span>{st(`${cfg.translationKey}.name`)}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="pt-2">
                <Link
                  href="/devis"
                  className="block w-full text-center px-5 py-3 bg-accent text-white rounded-xl text-sm font-semibold"
                >
                  {t("quote")}
                </Link>
                <LanguageSwitcher mobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
