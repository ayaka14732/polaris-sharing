"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Beian({ locale }: { locale: string }) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-panel mx-4 mb-4 rounded-2xl">
      <div className="my-3 text-center">
        <div className="inline-flex items-center space-x-2 text-aurora-400">
          <div className="w-2 h-2 bg-aurora-400 rounded-full"></div>
          <p className="text-sm font-light">粤ICP备2023041234号</p>
          <div className="w-2 h-2 bg-aurora-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
