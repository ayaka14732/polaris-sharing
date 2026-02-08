'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const tTools = useTranslations('tools');

  const tools = [
    {
      href: `/${locale}/tools/unit-converter`,
      title: tTools('unit.title'),
      description: tTools('unit.description'),
      icon: '⚖️',
      gradient: 'from-aurora-500 to-cyan-500',
    },
    {
      href: `/${locale}/tools/calendar-converter`,
      title: tTools('calendar.title'),
      description: tTools('calendar.description'),
      icon: '📅',
      gradient: 'from-polar-500 to-emerald-500',
    },
    {
      href: `/${locale}/tools/journey-tracker`,
      title: tTools('journey.title'),
      description: tTools('journey.description'),
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
            className="inline-block mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-aurora-500 via-polar-500 to-purple-500 rounded-full flex items-center justify-center aurora-glow animate-float">
              <span className="text-6xl">✦</span>
            </div>
          </motion.div>

          <h1 className="font-display text-6xl md:text-7xl font-bold mb-4 text-glow">
            {t('title')}
          </h1>
          <p className="text-2xl md:text-3xl text-aurora-300 mb-6 font-light">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.href}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Link href={tool.href}>
                <div className="card group cursor-pointer h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{tool.icon}</span>
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-aurora-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-aurora-400 animate-glow">
            <div className="w-2 h-2 bg-aurora-400 rounded-full animate-pulse"></div>
            <p className="text-sm font-light">{t('welcome')}</p>
            <div className="w-2 h-2 bg-aurora-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
