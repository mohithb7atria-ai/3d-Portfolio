import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Compass, ShieldCheck } from 'lucide-react';

export default function PrinciplesEducation() {
  const { principles, education, certifications, languages } = portfolioData;

  return (
    <section id="lessons" className="relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">
          <b className="text-[#e0231c] font-normal">04</b> — Craft & Credentials
        </span>
        <div className="flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]" />
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">PRINCIPLES & EDUCATION</span>
      </div>

      {/* Engineering Principles */}
      <div className="mb-24">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-tight text-[#dfe7e0] mb-3">
            Craft & Principles
          </h2>
          <p className="text-sm text-[#aab4ad] font-light">
            Where mathematical rigor meets intuitive software craftsmanship and rapid AI iteration.
          </p>
        </div>

        {/* Principles Table/List */}
        <div className="border-t border-[rgba(223,231,224,0.08)]">
          {principles.map((p) => (
            <div
              key={p.num}
              className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-[rgba(223,231,224,0.07)] hover:px-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-sm text-[#78837c] group-hover:text-[#e0231c] transition-colors">
                  {p.num}
                </span>
                <h3 className="text-lg font-normal tracking-tight uppercase text-[#dfe7e0]">
                  {p.title}
                  <em className="not-italic font-jp text-xs text-[#78837c] ml-3 tracking-[0.2em]">
                    {p.kanji}
                  </em>
                </h3>
              </div>

              <p className="text-xs text-[#aab4ad] font-light max-w-md leading-relaxed md:text-right">
                {p.desc}
              </p>

              {/* Hover underline accent */}
              <div className="absolute left-0 bottom-0 h-[1px] w-full bg-[#e0231c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Education (5 Cols) */}
        <div className="lg:col-span-5">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3">
            <GraduationCap size={16} className="text-[#e0231c]" />
            <span>Academic Background</span>
          </h3>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="p-6 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-jp text-[10px] tracking-[0.2em] text-[#78837c]">
                    {edu.kanji}
                  </span>
                  <span className="text-[10px] font-mono text-[#e0231c] bg-[#e0231c]/10 px-2 py-0.5 rounded-full">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-normal uppercase tracking-wide text-[#dfe7e0] mb-1">
                  {edu.degree}
                </h4>

                <p className="text-xs text-[#aab4ad] font-medium mb-3">
                  {edu.institution}, {edu.location}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(223,231,224,0.06)] text-xs">
                  <span className="font-mono text-[#dfe7e0] font-semibold">{edu.grade}</span>
                  <span className="text-[#78837c] text-[11px]">{edu.highlight}</span>
                </div>
              </div>
            ))}

            {/* Languages Card */}
            <div className="p-6 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm">
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3">Languages Spoken</h4>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#121820] text-xs text-[#dfe7e0] border border-[rgba(223,231,224,0.08)] rounded-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications (7 Cols) */}
        <div className="lg:col-span-7">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-8 flex items-center gap-3">
            <Award size={16} className="text-[#ff5a3c]" />
            <span>Certifications & Credentials</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <ShieldCheck size={16} className="text-[#e0231c]" />
                    <span className="text-[10px] font-mono text-[#78837c]">{cert.year}</span>
                  </div>
                  <h4 className="text-xs font-medium uppercase tracking-wide text-[#dfe7e0] mb-2 leading-snug">
                    {cert.name}
                  </h4>
                </div>
                <p className="text-[10px] tracking-wider uppercase text-[#aab4ad] pt-2 border-t border-[rgba(223,231,224,0.06)]">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
