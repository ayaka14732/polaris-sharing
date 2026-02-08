'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function CalendarConverter({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('calendarConverter');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 简化的农历计算（实际应使用库如 lunar-javascript）
  const getLunarInfo = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // 生肖数组
    const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const zodiac = zodiacs[(year - 4) % 12];

    // 天干地支
    const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    
    const heavenlyStem = heavenlyStems[(year - 4) % 10];
    const earthlyBranch = earthlyBranches[(year - 4) % 12];

    // 简化的农历月日（这只是示例，实际需要复杂的农历算法）
    const lunarMonth = ((month + 1) % 12) + 1;
    const lunarDay = day;

    return {
      year: year,
      month: lunarMonth,
      day: lunarDay,
      zodiac,
      heavenlyStem,
      earthlyBranch,
      ganzhi: `${heavenlyStem}${earthlyBranch}`,
    };
  };

  const lunarInfo = getLunarInfo(selectedDate);

  const chineseMonths = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月'];
  const chineseDays = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十',
    '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'];

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl font-bold mb-8 text-center text-glow">
            {t('title')}
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8"
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-aurora-300">
                {t('solarDate')}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('selectDate')}
                  </label>
                  <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="input-field"
                  />
                </div>

                <div className="pt-6 border-t border-aurora-500/20">
                  <div className="text-center">
                    <div className="text-6xl font-display font-bold text-aurora-300 mb-2">
                      {selectedDate.getDate()}
                    </div>
                    <div className="text-2xl text-gray-300">
                      {selectedDate.getFullYear()}{t('year')} {selectedDate.getMonth() + 1}{t('month')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-8"
            >
              <h2 className="text-2xl font-display font-semibold mb-6 text-polar-300">
                {t('lunarDate')}
              </h2>

              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-5xl font-display font-bold text-polar-300 mb-4">
                    {chineseMonths[lunarInfo.month - 1]}{chineseDays[lunarInfo.day - 1]}
                  </div>
                  <div className="text-xl text-gray-300">
                    {lunarInfo.ganzhi}{t('year')} {lunarInfo.zodiac}{t('year')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-polar-500/20">
                  <div className="bg-night-800/40 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400 mb-1">{t('zodiac')}</div>
                    <div className="text-3xl">{lunarInfo.zodiac}</div>
                  </div>
                  <div className="bg-night-800/40 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400 mb-1">{t('heavenlyStem')}</div>
                    <div className="text-2xl font-display">{lunarInfo.ganzhi}</div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 mt-4">
                  * {locale === 'zh-CN' ? '农历数据为近似值' : locale === 'zh-TW' ? '農曆數據為近似值' : 'Lunar data is approximate'}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
