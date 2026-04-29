import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ClientLogos from "@/components/sections/ClientLogos";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import CTABlock from "@/components/sections/CTABlock";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        ar: "/ar",
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <Process />
      <ProjectsPreview />
      <TestimonialSlider />
      <ClientLogos />
      <CTABlock />
    </>
  );
}
