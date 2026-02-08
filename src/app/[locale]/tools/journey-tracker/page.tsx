'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Journey {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  notes: string;
}

export default function JourneyTracker({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('journeyTracker');
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('journeys');
    if (saved) {
      setJourneys(JSON.parse(saved));
    }
  }, []);

  const saveJourneys = (newJourneys: Journey[]) => {
    setJourneys(newJourneys);
    localStorage.setItem('journeys', JSON.stringify(newJourneys));
  };

  const handleAdd = () => {
    if (!formData.destination || !formData.startDate || !formData.endDate) return;

    const newJourney: Journey = {
      id: Date.now().toString(),
      ...formData,
    };

    saveJourneys([...journeys, newJourney]);
    setFormData({ destination: '', startDate: '', endDate: '', notes: '' });
    setIsAdding(false);
  };

  const handleEdit = (id: string) => {
    const journey = journeys.find(j => j.id === id);
    if (journey) {
      setFormData({
        destination: journey.destination,
        startDate: journey.startDate,
        endDate: journey.endDate,
        notes: journey.notes,
      });
      setEditingId(id);
      setIsAdding(true);
    }
  };

  const handleUpdate = () => {
    if (!editingId) return;
    
    const updated = journeys.map(j =>
      j.id === editingId ? { ...j, ...formData } : j
    );
    
    saveJourneys(updated);
    setFormData({ destination: '', startDate: '', endDate: '', notes: '' });
    setIsAdding(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    saveJourneys(journeys.filter(j => j.id !== id));
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-display text-5xl font-bold text-glow">
              {t('title')}
            </h1>
            <button
              onClick={() => {
                setIsAdding(!isAdding);
                setEditingId(null);
                setFormData({ destination: '', startDate: '', endDate: '', notes: '' });
              }}
              className="btn-primary"
            >
              {isAdding ? t('cancel') : t('addJourney')}
            </button>
          </div>

          <AnimatePresence>
            {isAdding && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-panel p-8 mb-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-aurora-300">
                      {t('destination')}
                    </label>
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="input-field"
                      placeholder={t('destination')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-aurora-300">
                      {t('startDate')}
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-aurora-300">
                      {t('endDate')}
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-aurora-300">
                      {t('notes')}
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="input-field"
                      rows={3}
                      placeholder={t('notes')}
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end space-x-4">
                    <button onClick={() => setIsAdding(false)} className="btn-secondary">
                      {t('cancel')}
                    </button>
                    <button
                      onClick={editingId ? handleUpdate : handleAdd}
                      className="btn-primary"
                    >
                      {t('save')}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            {journeys.length === 0 ? (
              <div className="glass-panel p-12 text-center">
                <div className="text-6xl mb-4">✈️</div>
                <p className="text-gray-400 text-lg">{t('noJourneys')}</p>
              </div>
            ) : (
              journeys.map((journey, index) => (
                <motion.div
                  key={journey.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card group"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-semibold mb-2 text-aurora-300">
                        {journey.destination}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400 mb-2">
                        <span>📅 {formatDate(journey.startDate)}</span>
                        <span>→</span>
                        <span>{formatDate(journey.endDate)}</span>
                      </div>
                      {journey.notes && (
                        <p className="text-gray-300 mt-3">{journey.notes}</p>
                      )}
                    </div>
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(journey.id)}
                        className="px-4 py-2 bg-aurora-500/20 hover:bg-aurora-500/30 rounded-lg transition-colors"
                      >
                        {t('edit')}
                      </button>
                      <button
                        onClick={() => handleDelete(journey.id)}
                        className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                      >
                        {t('delete')}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
