import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROPANEL – Signalétique & Enseignes Publicitaires au Maroc",
  description:
    "PROPANEL, expert en signalétique, enseignes, logos 3D et impression grand format au Maroc. Solution clé en main.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
