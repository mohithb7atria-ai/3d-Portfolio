import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { personal, chapterChips } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen px-6 md:px-12 flex flex-col justify-between pt-28 pb-10 overflow-hidden">
      {/* Hero Top Content */}
      <div className="max-w-[620px] z-10">
        {/* Eyebrow with pulsing dot */}
        <div className="flex items-center gap-2.5 mb-6 text-[10px] font-medium tracking-[0.24em] uppercase text-[#aab4ad]">
          <span className="w-2 h-2 rounded-full bg-[#e0231c] animate-pulse shadow-[0_0_10px_#e0231c]" />
          <span>{personal.name} · {personal.location}</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal uppercase tracking-tight leading-[1.08] text-[#dfe7e0] mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#dfe7e0] via-[#aab4ad] to-[#dfe7e0]">
            FULL-STACK DEV.
          </span>
          <span className="block text-[#dfe7e0]">
            AI & VISION.
          </span>
          <span className="block text-[#e0231c]">
            {personal.name}.
          </span>
        </h1>

        {/* Hero Bio */}
        <p className="text-sm sm:text-base leading-relaxed text-[#aab4ad] max-w-lg mb-8 font-light drop-shadow-md">
          {personal.summary}
        </p>

        {/* CTA Button Link */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#pathways"
            data-cursor
            className="inline-flex items-center gap-3 px-6 py-3 border border-[rgba(223,231,224,0.2)] rounded-full text-xs font-medium tracking-[0.2em] uppercase text-[#dfe7e0] hover:text-[#05070a] hover:bg-[#dfe7e0] transition-all duration-300 group"
          >
            <span>Explore The Library</span>
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#eternity"
            data-cursor
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#78837c] hover:text-[#e0231c] transition-colors py-3 px-2"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>

      {/* Floating Library Preview Box (Right side on desktop) */}
      <a
        href="#pathways"
        data-cursor
        className="hidden lg:block absolute right-12 bottom-32 z-10 w-64 p-4 bg-[#0a0e12]/80 backdrop-blur-md border border-[rgba(223,231,224,0.12)] hover:border-[rgba(223,231,224,0.35)] transition-all duration-500 group shadow-2xl"
      >
        <div className="relative aspect-[16/10] bg-gradient-to-br from-[#121820] to-[#05070a] border border-[rgba(223,231,224,0.08)] flex items-center justify-center overflow-hidden mb-3">
          <div className="text-center p-3">
            <span className="block font-jp text-xs tracking-[0.3em] text-[#e0231c] mb-1">作品集</span>
            <span className="block text-[11px] font-semibold tracking-wider text-[#dfe7e0] uppercase">5 CORE PROJECTS</span>
          </div>
          <div className="absolute inset-0 bg-[#e0231c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#aab4ad]">
          <b className="font-normal text-[#dfe7e0]">THE LIBRARY</b>
          <i className="not-italic text-[#78837c] group-hover:text-[#e0231c] transition-colors">EXPLORE ↗</i>
        </div>
      </a>

      {/* Vertical Side Accent Text */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4 pointer-events-none">
        <span className="[writing-mode:vertical-rl] text-[11px] tracking-[0.62em] text-[rgba(223,231,224,0.35)] uppercase">
          {personal.name} · 2026
        </span>
      </div>

      {/* Hero Foot Chapters Index */}
      <div className="z-10 mt-16 pt-6 border-t border-[rgba(223,231,224,0.08)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {chapterChips.map((chip, idx) => (
            <a
              key={chip.num}
              href={`#${['gate', 'pathways', 'experience', 'eternity'][idx]}`}
              data-cursor
              className="flex items-start gap-3 group text-left"
            >
              <span className="text-xl md:text-2xl font-light text-[#dfe7e0] group-hover:text-[#ff5a3c] transition-colors leading-none font-mono">
                {chip.num}
              </span>
              <div className="min-w-0">
                <b className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#aab4ad] group-hover:text-[#dfe7e0] transition-colors mb-1">
                  {chip.title}
                </b>
                <p className="text-[11px] leading-relaxed text-[#78837c] group-hover:text-[#aab4ad] transition-colors line-clamp-2">
                  {chip.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
