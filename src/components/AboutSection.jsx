import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Code2, Eye, Database } from 'lucide-react';

export default function AboutSection() {
  const { personal, stats, skills } = portfolioData;

  const skillCategories = [
    { ...skills.vibeCoding, icon: Cpu, accent: '#e0231c' },
    { ...skills.webDev, icon: Code2, accent: '#ff5a3c' },
    { ...skills.aiMl, icon: Eye, accent: '#c9a24a' },
    { ...skills.tools, icon: Database, accent: '#dfe7e0' }
  ];

  return (
    <section id="gate" className="relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">
          <b className="text-[#e0231c] font-normal">01</b> — About & Philosophy
        </span>
        <div className="flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]" />
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">SYSTEMS</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Headline */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight leading-[1.1] text-[#dfe7e0]">
            I like knowing how things work. Then building them myself.
          </h2>
          <div className="mt-8 font-jp text-xs tracking-[0.4em] text-[#e0231c] uppercase">
            知恵と構造の探求
          </div>
        </div>

        {/* Right Column - Story & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-[#dfe7e0] font-light">
            {personal.summary}
          </p>

          <p className="text-sm leading-relaxed text-[#aab4ad] font-light">
            My development approach combines traditional full-stack craftsmanship with modern <strong className="text-[#dfe7e0] font-normal">Vibe Coding & AI-assisted workflows</strong>. Whether it's training real-time computer vision models with OpenCV & MediaPipe, architecting secure payment-enabled web platforms, or competing in hackathons like Smart India Hackathon 2026, I focus on turning complex technical concepts into intuitive, real-world tools.
          </p>

          <a
            href="#pathways"
            data-cursor
            className="inline-flex items-center gap-3 mt-6 text-xs font-medium tracking-[0.2em] uppercase text-[#dfe7e0] group"
          >
            <span className="w-9 h-9 rounded-full border border-[rgba(223,231,224,0.2)] flex items-center justify-center group-hover:bg-[#dfe7e0] group-hover:text-[#05070a] transition-all duration-300">
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <span className="group-hover:text-[#e0231c] transition-colors">Explore Featured Projects</span>
          </a>
        </div>
      </div>

      {/* Stats Band */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-8 border-t border-[rgba(223,231,224,0.08)]">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 bg-[#0a0e12]/60 border border-[rgba(223,231,224,0.06)] rounded-sm">
            <b className="block text-2xl sm:text-3xl font-light text-[#dfe7e0] tracking-tight font-mono mb-1">
              {stat.value}
            </b>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-[#aab4ad]">
              {stat.label}
            </span>
            <span className="block text-[9px] text-[#78837c] mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Skills Matrix */}
      <div className="mt-24">
        <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-10 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#e0231c] rounded-full" />
          <span>Technical Skills & Core Capabilities</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#0a0e12]/80 border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <IconComp size={20} style={{ color: cat.accent }} />
                    <span className="font-jp text-[10px] tracking-[0.2em] text-[#78837c]">
                      {cat.kanji}
                    </span>
                  </div>

                  <h4 className="text-sm font-medium tracking-wide uppercase text-[#dfe7e0] mb-4 group-hover:text-[#e0231c] transition-colors">
                    {cat.category}
                  </h4>

                  <ul className="space-y-2">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-[#aab4ad] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[rgba(223,231,224,0.3)] rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
