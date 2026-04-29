import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { motion } from "framer-motion";
import { SERVICE_SLUGS, SERVICES_CONFIG, type ServiceSlug } from "@/lib/services";
import ServicePageClient from "./ServicePageClient";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs: { slug: string }[] = SERVICE_SLUGS.map((s) => ({ slug: s }));
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    return {};
  }

  const cfg = SERVICES_CONFIG[slug as ServiceSlug];
  const t = await getTranslations({ locale, namespace: "services" });
  const name = t(`${cfg.translationKey}.name`);
  const desc = t(`${cfg.translationKey}.description`);

  return {
    title: `${name} | PRO PANEL Maroc`,
    description: desc,
    keywords: [name, "signalétique maroc", "enseigne publicitaire", "tanger", "casablanca"],
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;

  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) {
    notFound();
  }

  const cfg = SERVICES_CONFIG[slug as ServiceSlug];
  const t = await getTranslations({ locale, namespace: "services" });
  const common = await getTranslations({ locale, namespace: "common" });

  const name = t(`${cfg.translationKey}.name`);
  const description = t(`${cfg.translationKey}.description`);
  const short = t(`${cfg.translationKey}.short`);

  const materialsRaw = t.raw(`${cfg.translationKey}.materials`) as string[];
  const useCasesRaw = t.raw(`${cfg.translationKey}.useCases`) as string[];

  const currentIndex = SERVICE_SLUGS.indexOf(slug as ServiceSlug);
  const otherServices = SERVICE_SLUGS.filter((s) => s !== slug).slice(0, 4);

  return (
    <ServicePageClient
      slug={slug as ServiceSlug}
      name={name}
      short={short}
      description={description}
      materials={materialsRaw}
      useCases={useCasesRaw}
      icon={cfg.icon}
      color={cfg.color}
      currentIndex={currentIndex}
      otherServices={otherServices}
      materialsLabel={common("materials")}
      useCasesLabel={common("useCases")}
      galleryLabel={common("gallery")}
      learnMore={t("learnMore")}
    />
  );
}
