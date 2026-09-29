import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="pathways" className="relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">
          <b className="text-[#e0231c] font-normal">02</b> — Case Studies & Solutions
        </span>
        <div className="flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]" />
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">THE LIBRARY</span>
      </div>

      {/* Main Headline */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight leading-[1.1] text-[#dfe7e0] mb-4">
          A shelf of possibilities. Five core projects, bound into a collection.
        </h2>
        <p className="text-sm text-[#aab4ad] font-light">
          Explore full-stack platforms, computer vision fall monitoring systems, AI-powered food ordering solutions, and smart mobility concepts. Click any card to inspect full engineering details.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            data-cursor
            className={`group relative cursor-pointer bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all duration-500 overflow-hidden flex flex-col justify-between ${
              idx === 1 ? 'md:translate-y-6' : idx === 2 ? 'lg:translate-y-12' : ''
            }`}
          >
            {/* Top Image Frame Placeholder with Stylized Visual */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-[#121820] via-[#0a0e12] to-[#05070a] border-b border-[rgba(223,231,224,0.08)] overflow-hidden p-6 flex flex-col justify-between">
              {/* Kanji Background Watermark */}
              <span className="absolute -right-2 -bottom-4 font-jp text-7xl font-bold text-[rgba(223,231,224,0.03)] select-none pointer-events-none group-hover:text-[rgba(224,35,28,0.08)] transition-colors duration-500">
                {project.kanji}
              </span>

              {/* Header Badges inside frame */}
              <div className="flex items-center justify-between z-10">
                <span className="font-mono text-xl font-light text-[#dfe7e0] group-hover:text-[#ff5a3c] transition-colors">
                  {project.num}
                </span>
                <span className="text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#121820] text-[#aab4ad] border border-[rgba(223,231,224,0.1)] rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Glowing Center Graphic Element */}
              <div className="my-auto z-10">
                <h3 className="text-xl font-normal uppercase tracking-tight text-[#dfe7e0] group-hover:text-[#e0231c] transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-[#aab4ad] font-light line-clamp-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Hover Ember Light Glow */}
              <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0231c]/15 via-transparent to-transparent" />
            </div>

            {/* Bottom Details Footer */}
            <div className="p-6 bg-[#0a0e12] flex flex-col justify-between flex-1">
              <p className="text-xs text-[#78837c] leading-relaxed line-clamp-3 mb-6 font-light">
                {project.description}
              </p>

              <div>
                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-[#aab4ad] bg-[#121820] px-2 py-0.5 rounded-sm">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[10px] font-mono text-[#78837c] px-1 py-0.5">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Inspect Link */}
                <div className="flex items-center justify-between pt-3 border-t border-[rgba(223,231,224,0.06)] text-[10px] tracking-[0.2em] uppercase text-[#aab4ad] group-hover:text-[#dfe7e0]">
                  <span>Study Case</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#e0231c]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
