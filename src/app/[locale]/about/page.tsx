'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('about');

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
          <h1 className="font-display text-5xl font-bold mb-12 text-center text-glow">
            {t('title')}
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-aurora-500 to-polar-500 rounded-full flex items-center justify-center text-3xl">
                  🌍
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold text-aurora-300">
                    {t('location')}
                  </h2>
                  <p className="text-gray-400">Northern Europe</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('passion')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl">
                  💻
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold text-purple-300">
                    {locale === 'zh-CN' ? '技术爱好者' : locale === 'zh-TW' ? '技術愛好者' : 'Tech Enthusiast'}
                  </h2>
                  <p className="text-gray-400">Developer & Creator</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('description')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-panel p-8"
          >
            <h2 className="text-3xl font-display font-semibold mb-6 text-center text-polar-300">
              {t('aurora')}
            </h2>
            
            <div className="relative aspect-video bg-gradient-to-br from-polar-900/40 to-aurora-900/40 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl animate-float">🌌</div>
                <p className="text-gray-400 text-lg">
                  {locale === 'zh-CN' 
                    ? '在这里放置您拍摄的极光视频' 
                    : locale === 'zh-TW' 
                    ? '在這裡放置您拍攝的極光視頻' 
                    : 'Place your aurora video here'}
                </p>
                <p className="text-gray-500 text-sm">
                  {locale === 'zh-CN'
                    ? '将视频文件放在 /public/videos/aurora.mp4'
                    : locale === 'zh-TW'
                    ? '將視頻文件放在 /public/videos/aurora.mp4'
                    : 'Place video file at /public/videos/aurora.mp4'}
                </p>
                {/* 如果有视频文件，取消注释以下代码：
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/aurora.mp4" type="video/mp4" />
                </video>
                */}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '🌟', label: locale === 'zh-CN' ? '极光之美' : locale === 'zh-TW' ? '極光之美' : 'Aurora Beauty' },
                { icon: '📸', label: locale === 'zh-CN' ? '摄影爱好' : locale === 'zh-TW' ? '攝影愛好' : 'Photography' },
                { icon: '❄️', label: locale === 'zh-CN' ? '北欧生活' : locale === 'zh-TW' ? '北歐生活' : 'Nordic Life' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="bg-night-800/40 rounded-xl p-4 text-center hover:bg-night-700/40 transition-colors"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-sm text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-3 text-aurora-400">
              <div className="w-2 h-2 bg-aurora-400 rounded-full animate-pulse"></div>
              <p className="text-sm font-light">
                {locale === 'zh-CN'
                  ? '感谢您的访问'
                  : locale === 'zh-TW'
                  ? '感謝您的訪問'
                  : 'Thank you for visiting'}
              </p>
              <div className="w-2 h-2 bg-aurora-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
