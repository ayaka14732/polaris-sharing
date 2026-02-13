"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Solar } from "lunar-javascript";
import Navigation from "@/components/Navigation";
import Beian from "@/components/Beian";

export default function CalendarConverter({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("calendarConverter");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getLunarInfoFromSolar = (date: Date) => {
    const solar = Solar.fromYmd(date.getFullYear(), date.getMonth() + 1, date.getDate());
    const lunar = solar.getLunar();

    return {
      year: lunar.getYear(),
      month: lunar.getMonth(),
      day: lunar.getDay(),
      zodiac: lunar.getShengxiao(),
      ganzhi: lunar.getYearInGanZhi(),
    };
  };

  const lunarInfo = getLunarInfoFromSolar(selectedDate);

  const chineseMonths = [
    "正月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "冬月",
    "腊月",
  ];
  const chineseDays = [
    "初一",
    "初二",
    "初三",
    "初四",
    "初五",
    "初六",
    "初七",
    "初八",
    "初九",
    "初十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十",
    "廿一",
    "廿二",
    "廿三",
    "廿四",
    "廿五",
    "廿六",
    "廿七",
    "廿八",
    "廿九",
    "三十",
  ];

  const ganzhiToTranslation = (ganzhi: string, locale: string) => {
    if (locale !== "en") return ganzhi;

    const heavenlyStems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const earthlyBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

    const stem = ganzhi[0];
    const branch = ganzhi[1];

    const stemIndex = heavenlyStems.indexOf(stem);
    const branchIndex = earthlyBranches.indexOf(branch);

    if (stemIndex === -1 || branchIndex === -1) {
      return ganzhi; // Return original if not found
    }

    const heavenlyStemsEn = ["Jia", "Yi", "Bing", "Ding", "Wu", "Ji", "Geng", "Xin", "Ren", "Gui"];
    const earthlyBranchesEn = ["Zi", "Chou", "Yin", "Mao", "Chen", "Si", "Wu", "Wei", "Shen", "You", "Xu", "Hai"];

    return heavenlyStemsEn[stemIndex] + earthlyBranchesEn[branchIndex];
  };

  const zodiacToTranslation = (zodiac: string, locale: string) => {
    if (locale !== "en") return zodiac;

    const zodiacMap: { [key: string]: string } = {
      鼠: "Rat",
      牛: "Ox",
      虎: "Tiger",
      兔: "Rabbit",
      龙: "Dragon",
      蛇: "Snake",
      马: "Horse",
      羊: "Goat",
      猴: "Monkey",
      鸡: "Rooster",
      狗: "Dog",
      猪: "Pig",
    } as const;

    return zodiacMap[zodiac] || zodiac;
  };

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl font-bold mb-8 text-center text-glow">{t("title")}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-semibold mb-6 text-aurora-300">{t("solarDate")}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("selectDate")}</label>
                  <input
                    type="date"
                    value={selectedDate.toISOString().split("T")[0]}
                    onChange={e => setSelectedDate(new Date(e.target.value))}
                    className="input-field"
                  />
                </div>

                <div className="pt-6 border-t border-aurora-500/20">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-aurora-300 mb-2">{selectedDate.getDate()}</div>
                    <div className="text-2xl text-gray-300">
                      {locale === "en"
                        ? t("year") + " " + selectedDate.getFullYear()
                        : selectedDate.getFullYear() + " " + t("year")}{" "}
                      {locale === "en"
                        ? t("month") + " " + (selectedDate.getMonth() + 1)
                        : selectedDate.getMonth() + 1 + " " + t("month")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <h2 className="text-2xl font-display font-semibold mb-6 text-polar-300">{t("lunarDate")}</h2>

              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-5xl font-display font-bold text-polar-300 mb-4">
                    {chineseMonths[lunarInfo.month - 1]}
                    {chineseDays[lunarInfo.day - 1]}
                  </div>
                  <div className="text-xl text-gray-300">
                    {ganzhiToTranslation(lunarInfo.ganzhi, locale)}
                    {(locale === "en" ? " " : "") + t("year")} {zodiacToTranslation(lunarInfo.zodiac, locale)}
                    {(locale === "en" ? " " : "") + t("year")}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-polar-500/20">
                  <div className="bg-night-800/40 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400 mb-1">{t("zodiac")}</div>
                    <div className="text-2xl font-display">{zodiacToTranslation(lunarInfo.zodiac, locale)}</div>
                  </div>
                  <div className="bg-night-800/40 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400 mb-1">
                      {t("heavenlyStem") + (locale === "en" ? " and " : "") + t("earthlyBranch")}
                    </div>
                    <div className="text-2xl font-display">{ganzhiToTranslation(lunarInfo.ganzhi, locale)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Beian />
    </div>
  );
}
