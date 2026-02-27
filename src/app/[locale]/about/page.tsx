"use client";

import { useTranslations } from "next-intl";
import Navigation from "@/components/Navigation";
import Beian from "@/components/Beian";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("about");

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl font-bold mb-12 text-center text-glow">{t("title")}</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-panel p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-aurora-500 to-polar-500 rounded-full flex items-center justify-center text-3xl">
                  🌍
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold text-aurora-300">{t("location")}</h2>
                  <p className="text-gray-400">Nordic Life</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{t("passion")}</p>
            </div>

            <div className="glass-panel p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                  💻
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold text-purple-300">
                    {locale === "zh-CN" ? "技术爱好者" : locale === "zh-TW" ? "技術愛好者" : "Tech Enthusiast"}
                  </h2>
                  <p className="text-gray-400">Developer & Creator</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{t("description")}</p>
            </div>
          </div>

          <div className="glass-panel p-8 mb-12">
            <h2 className="text-3xl font-display font-semibold mb-6 text-center text-aurora-300">
              {t("article.title")}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">{t("article.paragraph1")}</p>
            <p className="text-gray-300 leading-relaxed mb-4">{t("article.paragraph2")}</p>
            <p className="text-gray-300 leading-relaxed mb-4">{t("article.paragraph3")}</p>
          </div>

          <div className="glass-panel p-8">
            <h2 className="text-3xl font-display font-semibold mb-6 text-center text-polar-300">{t("aurora")}</h2>

            <div className="relative aspect-video bg-gradient-to-br from-polar-900/40 to-aurora-900/40 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-4">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="/videos/aurora.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "🌟",
                  label: locale === "zh-CN" ? "极光之美" : locale === "zh-TW" ? "極光之美" : "Aurora Beauty",
                },
                {
                  icon: "📸",
                  label: locale === "zh-CN" ? "摄影爱好" : locale === "zh-TW" ? "攝影愛好" : "Photography",
                },
                {
                  icon: "❄️",
                  label: locale === "zh-CN" ? "北欧生活" : locale === "zh-TW" ? "北歐生活" : "Nordic Life",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-night-800/40 rounded-xl p-4 text-center hover:bg-night-700/40 transition-colors">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Beian />
    </div>
  );
}
