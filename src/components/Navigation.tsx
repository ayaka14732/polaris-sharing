"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navigation({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/tools`, label: t("tools") },
    { href: `/${locale}/about`, label: t("about") },
  ];

  const languages = [
    { code: "zh-CN", label: "简体" },
    { code: "zh-TW", label: "繁體" },
    { code: "en", label: "EN" },
  ];

  const currentPath = pathname.replace(`/${locale}`, "");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel mx-4 mt-4 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`}>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-aurora-500 to-polar-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✦</span>
              </div>
              <span className="font-display text-xl font-bold text-glow">
                {locale === "zh-CN"
                  ? "明日北极星个人分享"
                  : locale === "zh-TW"
                    ? "明日北極星個人分享"
                    : "Polaris of Tomorrow Personal Sharing"}
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-2">
              {links.map(link => (
                <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? "active" : ""}`}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-1 bg-night-800/60 rounded-lg p-1">
              {languages.map(lang => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}${currentPath || ""}`}
                  className={`px-3 py-1 rounded-md text-sm transition-all duration-300 ${
                    locale === lang.code ? "bg-aurora-500/30 text-aurora-300" : "hover:bg-night-700/60"
                  }`}>
                  {lang.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
