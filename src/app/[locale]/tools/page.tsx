'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function ToolsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('tools');

  const tools = [
    {
      href: `/${locale}/tools/unit-converter`,
      title: t('unit.title'),
      description: t('unit.description'),
      icon: '⚖️',
      gradient: 'from-aurora-500 to-cyan-500',
    },
    {
      href: `/${locale}/tools/calendar-converter`,
      title: t('calendar.title'),
      description: t('calendar.description'),
      icon: '📅',
      gradient: 'from-polar-500 to-emerald-500',
    },
    {
      href: `/${locale}/tools/journey-tracker`,
      title: t('journey.title'),
      description: t('journey.description'),
      icon: '✈️',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen aurora-bg">
      <Navigation locale={locale} />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-12 text-center text-glow">
            {t('title')}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.href}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Link href={tool.href}>
                  <div className="card group cursor-pointer h-full">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 aurora-glow`}
                    >
                      <span className="text-4xl">{tool.icon}</span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-aurora-300 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-400">{tool.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
