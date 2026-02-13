import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import "../globals.css";

const locales = ["zh-CN", "zh-TW", "en"];

export const metadata: Metadata = {
  title: "明日北极星个人分享",
  keywords: ["个人网站", "网页小工具", "单位换算", "农历转换", "行程记录"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "5de0c6460ed64472a134a2edfa539023"}'
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
