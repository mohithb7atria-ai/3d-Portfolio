import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-12 bg-[#05070a] border-t border-[rgba(223,231,224,0.08)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
        {/* Brand Col (2 cols wide) */}
        <div className="lg:col-span-2">
          <a href="#top" className="flex items-center gap-3 mb-4 group" data-cursor>
            <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8">
              <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity="0.9" />
              <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5" />
            </svg>
            <span className="text-sm font-semibold tracking-[0.24em] text-[#dfe7e0]">
              {personal.name}
            </span>
          </a>
          <p className="text-xs text-[#78837c] font-light leading-relaxed max-w-sm">
            Computer Science & Engineering student at Atria Institute of Technology. Architecting intelligent full-stack platforms, AI vision applications, and rapid Vibe Coding solutions.
          </p>
        </div>

        {/* Nav Links */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs text-[#aab4ad]">
            <li><a href="#gate" className="hover:text-[#dfe7e0] transition-colors">Systems & Tech</a></li>
            <li><a href="#pathways" className="hover:text-[#dfe7e0] transition-colors">Featured Projects</a></li>
            <li><a href="#experience" className="hover:text-[#dfe7e0] transition-colors">Experience & SIH</a></li>
            <li><a href="#lessons" className="hover:text-[#dfe7e0] transition-colors">Craft & Principles</a></li>
            <li><a href="#eternity" className="hover:text-[#dfe7e0] transition-colors">Get in Touch</a></li>
          </ul>
        </div>

        {/* Capabilities */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4">
            Capabilities
          </h4>
          <ul className="space-y-2 text-xs text-[#aab4ad]">
            <li>Full-Stack Web Dev</li>
            <li>Computer Vision & MediaPipe</li>
            <li>Vibe Coding Workflows</li>
            <li>AI/ML Fundamentals</li>
            <li>Google Cloud & AppSheet</li>
          </ul>
        </div>

        {/* Profiles */}
        <div>
          <h4 className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#78837c] mb-4">
            Profiles & Socials
          </h4>
          <ul className="space-y-2 text-xs text-[#aab4ad]">
            <li>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#e0231c] transition-colors">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#e0231c] transition-colors">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${personal.email}`} className="hover:text-[#e0231c] transition-colors">
                Email Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Base row */}
      <div className="pt-8 border-t border-[rgba(223,231,224,0.06)] flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.16em] uppercase text-[#78837c]">
        <span>© {new Date().getFullYear()} MOHITH B. ALL RIGHTS RESERVED.</span>
        <span>BENGALURU, KARNATAKA, INDIA</span>
        <a href="#top" className="hover:text-[#dfe7e0] transition-colors">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
