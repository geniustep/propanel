import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: { template: "%s | PRO PANEL", default: t("title") },
    description: t("description"),
    metadataBase: new URL("https://propanel.ma"),
    openGraph: {
      siteName: "PRO PANEL",
      locale: locale === "ar" ? "ar_MA" : locale === "fr" ? "fr_MA" : locale === "es" ? "es_ES" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "ar" | "en" | "es")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        lang={locale}
        dir={isRTL ? "rtl" : "ltr"}
        className="min-h-screen flex flex-col"
      >
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton />
      </div>
    </NextIntlClientProvider>
  );
}
