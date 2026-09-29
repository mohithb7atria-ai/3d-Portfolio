import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }

      // Active section detection
      const sections = ['gate', 'pathways', 'experience', 'lessons', 'eternity'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSec(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', alt: '技術', href: '#gate', id: 'gate' },
    { name: 'Projects', alt: '作品', href: '#pathways', id: 'pathways' },
    { name: 'Experience', alt: '実績', href: '#experience', id: 'experience' },
    { name: 'Principles', alt: '理念', href: '#lessons', id: 'lessons' },
    { name: 'Connect', alt: '連絡', href: '#eternity', id: 'eternity' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[84px] z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${
        isStuck
          ? 'bg-[#05070a]/75 backdrop-blur-md border-b border-[rgba(223,231,224,0.08)] shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Brand Mark */}
      <a href="#top" className="flex items-center gap-3 group" data-cursor>
        <svg viewBox="0 0 44 44" fill="none" className="w-8 h-8 flex-shrink-0 transition-transform duration-500 group-hover:scale-110">
          <circle cx="22" cy="25" r="8.6" fill="#e0231c" fillOpacity="0.9" />
          <path d="M5 13h34M9 18.4h26M22 8.5v27" stroke="#dfe7e0" strokeWidth="1.5" />
          <path d="M14 35.5h16" stroke="#dfe7e0" strokeWidth="1.2" strokeOpacity="0.6" />
        </svg>
        <span className="flex flex-direction-col flex-col leading-none gap-0.5">
          <b className="text-xs font-semibold tracking-[0.24em] text-[#dfe7e0]">MOHITH B</b>
          <i className="not-italic text-[8px] tracking-[0.32em] text-[#78837c] uppercase">CS & FULL-STACK / AI</i>
        </span>
      </a>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-11">
        {navLinks.map((link) => {
          const isActive = activeSec === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              data-cursor
              className={`relative text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 group py-1 ${
                isActive ? 'text-[#dfe7e0]' : 'text-[#aab4ad] hover:text-[#dfe7e0]'
              }`}
            >
              <span className="block overflow-hidden h-4 leading-4">
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="block text-[#e0231c] tracking-[0.28em] font-jp transition-transform duration-500 translate-y-0 group-hover:-translate-y-full">
                  {link.alt}
                </span>
              </span>
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#e0231c]" />
              )}
            </a>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-[#dfe7e0] p-2 hover:text-[#e0231c] transition-colors"
        aria-label="Toggle menu"
        data-cursor
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[84px] bg-[#05070a]/98 backdrop-blur-xl border-t border-[rgba(223,231,224,0.08)] flex flex-col p-8 md:hidden transition-all duration-500 z-50 ${
          mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3 border-b border-[rgba(223,231,224,0.07)] text-lg tracking-[0.16em] uppercase text-[#dfe7e0] hover:text-[#e0231c]"
            >
              <span>{link.name}</span>
              <span className="font-jp text-xs text-[#78837c]">{link.alt}</span>
            </a>
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-[rgba(223,231,224,0.08)] text-[10px] tracking-[0.2em] text-[#78837c] uppercase">
          <span>Bengaluru, Karnataka, India</span>
          <div className="mt-2 text-[#aab4ad]">mohithb70@email.com</div>
        </div>
      </div>
    </header>
  );
}
