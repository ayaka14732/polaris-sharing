"use client";

export default function Beian() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-panel mx-4 mb-4 rounded-2xl">
      <div className="my-3 text-center">
        <div className="inline-flex items-center space-x-2 text-aurora-400">
          <div className="w-2 h-2 bg-aurora-400 rounded-full"></div>
          <p className="text-sm font-light">
            <a href="https://beian.miit.gov.cn/">粤ICP备2026017752号-1</a>
          </p>
          <div className="w-2 h-2 bg-aurora-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
