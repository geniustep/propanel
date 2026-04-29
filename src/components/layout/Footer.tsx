import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICE_SLUGS, SERVICES_CONFIG } from "@/lib/services";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const st = useTranslations("services");
  const ct = useTranslations("contact");

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">P</span>
              </div>
              <div>
                <div className="font-black text-white text-lg tracking-tight">PRO PANEL</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
                  Signalétique & Publicité
                </div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">{t("description")}</p>
            <div className="flex items-center gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary transition-colors"
                  aria-label={social}
                >
                  <span className="text-[10px] font-bold">{social.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t("services")}
            </h3>
            <ul className="space-y-2">
              {SERVICE_SLUGS.map((slug) => {
                const cfg = SERVICES_CONFIG[slug];
                return (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {st(`${cfg.translationKey}.name`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t("company")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {nav("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {nav("portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {nav("contact")}
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-sm text-accent hover:text-white transition-colors font-medium">
                  {nav("quote")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <span>{ct("addressValue")}</span>
              </li>
              <li>
                <a
                  href="tel:+212600000000"
                  className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@propanel.ma"
                  className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  contact@propanel.ma
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-neutral-400">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                <span>{ct("hoursValue")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} PRO PANEL. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
