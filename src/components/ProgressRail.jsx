import React, { useState, useEffect } from 'react';

export default function ProgressRail() {
  const [activeSec, setActiveSec] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Top' },
    { id: 'gate', label: 'About' },
    { id: 'pathways', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'lessons', label: 'Principles' },
    { id: 'eternity', label: 'Connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSec(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
      {sections.map((sec) => {
        const isActive = activeSec === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            aria-label={sec.label}
            className="group relative p-1.5 flex items-center justify-center"
          >
            <span
              className={`block transition-all duration-300 ${
                isActive
                  ? 'w-5 h-[1.5px] bg-[#dfe7e0]'
                  : 'w-3 h-[1px] bg-[rgba(223,231,224,0.25)] group-hover:w-5 group-hover:bg-[#aab4ad]'
              }`}
            />
            <span className="absolute right-7 px-2 py-1 bg-[#0a0e12] border border-[rgba(223,231,224,0.1)] text-[9px] tracking-wider uppercase text-[#dfe7e0] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {sec.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
