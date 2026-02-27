"use client";

export default function Beian() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-panel mx-4 mb-4 rounded-2xl">
      <div className="my-3 text-center">
        <div className="inline-flex items-center space-x-2 text-aurora-400">
          <p className="text-sm font-light">
            <span className="w-2 h-2 bg-aurora-400 rounded-full inline-block mx-2"></span>
            <a target="_blank" rel="noopener noreferrer" href="https://beian.miit.gov.cn/">
              粤ICP备2026017752号-1
            </a>
            <span className="w-2 h-2 bg-aurora-400 rounded-full inline-block mx-2"></span>
            <img className="inline-block mr-2 align-bottom" src="/beian-icon.png" width="17" />
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002010819" rel="noreferrer" target="_blank">
              粤公网安备44030002010819号
            </a>
            <span className="w-2 h-2 bg-aurora-400 rounded-full inline-block mx-2"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
