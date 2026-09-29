import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1600; // ms
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 700);
          }, 200);
          return 100;
        }
        return Math.min(prev + step + Math.random() * 3, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#05070a] flex items-center justify-center transition-all duration-700 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-[min(420px,78vw)] text-center">
        {/* Brand Mark SVG */}
        <div className="mx-auto mb-6 w-12 h-12 opacity-90 animate-pulse">
          <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
            <circle cx="22" cy="24" r="9.5" stroke="#e0231c" strokeWidth="1.5" />
            <path d="M6 12h32M9.5 17h25M22 8v28" stroke="#dfe7e0" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Japanese Subtitle */}
        <div className="font-jp text-xs tracking-[0.5em] text-[#aab4ad] mb-5">
          知 恵 と 創 造
        </div>

        {/* Progress Bar */}
        <div className="relative h-[1px] bg-[rgba(223,231,224,0.14)] overflow-hidden w-full">
          <div
            className="absolute top-0 left-0 bottom-0 bg-[#dfe7e0] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Metadata */}
        <div className="flex justify-between items-center mt-3 text-[10px] tracking-[0.2em] uppercase text-[#78837c]">
          <span>Initializing neural workspace & 3D realm</span>
          <b className="font-mono text-[#dfe7e0] font-normal">{Math.floor(progress)}%</b>
        </div>
      </div>
    </div>
  );
}
