import React from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#05070a]/90 backdrop-blur-xl transition-all duration-300">
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0e12] border border-[rgba(223,231,224,0.18)] rounded-sm p-6 sm:p-10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          data-cursor
          className="absolute top-6 right-6 p-2 text-[#aab4ad] hover:text-[#e0231c] transition-colors"
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#e0231c]">
            {project.category}
          </span>
          <span className="text-[#78837c]">•</span>
          <span className="font-jp text-xs text-[#aab4ad]">{project.kanji}</span>
          <span className="ml-auto text-[10px] tracking-wider uppercase px-2.5 py-0.5 bg-[#e0231c]/15 text-[#e0231c] border border-[#e0231c]/30 rounded-full">
            {project.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-normal tracking-tight uppercase text-[#dfe7e0] mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[#aab4ad] mb-6 font-light">
          {project.subtitle}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[rgba(223,231,224,0.08)] mb-6" />

        {/* Description */}
        <div className="mb-8">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3">Project Overview</h4>
          <p className="text-sm leading-relaxed text-[#dfe7e0] font-light">
            {project.description}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#78837c] mb-4">Key Engineering Features</h4>
            <div className="space-y-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-[#aab4ad] leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#e0231c] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#78837c] mb-3">Technologies & Frameworks</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#121820] text-[#dfe7e0] border border-[rgba(223,231,224,0.1)] text-xs font-mono rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-[rgba(223,231,224,0.08)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[rgba(223,231,224,0.2)] rounded-full text-xs font-medium tracking-[0.16em] uppercase text-[#dfe7e0] hover:bg-[#dfe7e0] hover:text-[#05070a] transition-all"
            >
              <Github size={14} />
              <span>View Code</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e0231c] text-white rounded-full text-xs font-medium tracking-[0.16em] uppercase hover:bg-[#ff5a3c] transition-all"
            >
              <ExternalLink size={14} />
              <span>Project Details</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
