"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Beian from "@/components/Beian";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-aurora-500 via-polar-500 to-purple-500 rounded-full flex items-center justify-center aurora-glow animate-float">
              <span className="text-6xl">✦</span>
            </div>
          </div>

          <h1 className="font-display text-6xl md:text-7xl font-bold mb-4 text-glow">{t("title")}</h1>
          <p className="text-2xl md:text-3xl text-aurora-300 mb-6 font-light">{t("subtitle")}</p>
        </div>
      </main>

      <Beian locale={locale} />
    </div>
  );
}
