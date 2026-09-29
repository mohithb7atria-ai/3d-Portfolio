import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, Briefcase, ChevronRight, Check } from 'lucide-react';

export default function ExperienceSection() {
  const { sihHackathon, experience, achievements } = portfolioData;

  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">
          <b className="text-[#e0231c] font-normal">03</b> — Industry & Hackathons
        </span>
        <div className="flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]" />
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">ACHIEVEMENTS</span>
      </div>

      {/* SIH 2026 Feature Banner */}
      <div className="mb-20 p-8 md:p-12 bg-gradient-to-r from-[#0a0e12] via-[#121820] to-[#0a0e12] border border-[rgba(223,231,224,0.15)] rounded-sm relative overflow-hidden">
        {/* Kanji watermark */}
        <span className="absolute right-6 top-4 font-jp text-6xl font-bold text-[rgba(223,231,224,0.03)] select-none pointer-events-none">
          {sihHackathon.kanji}
        </span>

        <div className="flex items-center gap-3 mb-6">
          <Trophy size={20} className="text-[#e0231c]" />
          <span className="text-xs font-semibold tracking-[0.26em] uppercase text-[#e0231c]">
            NATIONAL RECOGNITION · {sihHackathon.event}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-normal uppercase tracking-tight text-[#dfe7e0] mb-8 max-w-xl">
          Selected in Top 10 for Both Hardware & Software Tracks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sihHackathon.tracks.map((t, idx) => (
            <div key={idx} className="p-6 bg-[#05070a]/80 border border-[rgba(223,231,224,0.08)] rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-[#ff5a3c] uppercase tracking-wider">
                  {t.track}
                </span>
                <span className="text-[10px] font-mono text-[#78837c] bg-[#121820] px-2 py-0.5 rounded-sm">
                  {t.code}
                </span>
              </div>
              <h4 className="text-sm font-medium text-[#dfe7e0] uppercase tracking-wide mb-3">
                {t.title}
              </h4>
              <p className="text-xs text-[#aab4ad] font-light leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Internship & Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left 7 Columns - WebStack Academy Internship */}
        <div className="lg:col-span-7">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3">
            <Briefcase size={16} className="text-[#e0231c]" />
            <span>Work Experience</span>
          </h3>

          {experience.map((exp, idx) => (
            <div key={idx} className="p-8 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-lg font-medium text-[#dfe7e0] uppercase tracking-wide">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-[#e0231c] tracking-wider uppercase mt-0.5">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#78837c] bg-[#121820] px-3 py-1 border border-[rgba(223,231,224,0.08)] rounded-full">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3 mt-6">
                {exp.points.map((pt, ptIdx) => (
                  <div key={ptIdx} className="flex items-start gap-3 text-xs text-[#aab4ad] leading-relaxed">
                    <ChevronRight size={14} className="text-[#e0231c] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right 5 Columns - Hackathons & Leadership List */}
        <div className="lg:col-span-5">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3">
            <Award size={16} className="text-[#c9a24a]" />
            <span>Honors & Leadership</span>
          </h3>

          <div className="space-y-4">
            {achievements.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.2)] transition-all rounded-sm">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#c9a24a]/10 border border-[#c9a24a]/30 flex items-center justify-center flex-shrink-0 text-[#c9a24a] text-xs font-mono">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#dfe7e0] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#e0231c] tracking-wider uppercase mb-1">
                      {item.org}
                    </p>
                    <p className="text-xs text-[#78837c] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
