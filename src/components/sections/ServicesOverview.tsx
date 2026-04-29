import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceBlock from "@/components/ui/ServiceBlock";
import { SERVICE_SLUGS, SERVICES_CONFIG } from "@/lib/services";
import CTAButton from "@/components/ui/CTAButton";

export default function ServicesOverview() {
  const t = useTranslations("services");
  const nav = useTranslations("nav");

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Nos Expertises"
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_SLUGS.map((slug, i) => {
            const cfg = SERVICES_CONFIG[slug];
            return (
              <ServiceBlock
                key={slug}
                icon={cfg.icon}
                name={t(`${cfg.translationKey}.name`)}
                short={t(`${cfg.translationKey}.short`)}
                slug={slug}
                color={cfg.color}
                delay={i * 0.06}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <CTAButton href="/services/signaletique" variant="outline" icon>
            {nav("allServices")}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
