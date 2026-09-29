import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="eternity" className="relative py-28 px-6 md:px-12 sec-scrim border-t border-[rgba(223,231,224,0.07)]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">
          <b className="text-[#e0231c] font-normal">05</b> — Get in Touch
        </span>
        <div className="flex-1 h-[1px] bg-[rgba(223,231,224,0.08)]" />
        <span className="text-xs tracking-[0.24em] uppercase text-[#78837c]">CONNECT</span>
      </div>

      {/* Main Banner Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="font-jp text-xs tracking-[0.4em] text-[#e0231c] uppercase mb-4">
          連 絡 ・ 協 働
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-[#dfe7e0] leading-none mb-6">
          Start a Conversation
        </h2>
        <p className="text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed">
          For a full-stack opportunity, AI/ML role, hackathon collaboration, or technical project discussion — I'd love to hear from you.
        </p>

        {/* Direct Email CTA button */}
        <a
          href={`mailto:${personal.email}`}
          data-cursor
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-[#dfe7e0] text-[#05070a] rounded-full text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#e0231c] hover:text-white transition-all duration-300 shadow-xl"
        >
          <Mail size={16} />
          <span>Send Direct Email</span>
        </a>
      </div>

      {/* Form & Contact Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        {/* Left 5 Cols - Contact Links */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-6">
            Direct Contact & Socials
          </h3>

          <a
            href={`mailto:${personal.email}`}
            data-cursor
            className="flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm group"
          >
            <div className="w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#e0231c] group-hover:bg-[#e0231c] group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c]">Email</span>
              <span className="text-xs font-mono text-[#dfe7e0]">{personal.email}</span>
            </div>
          </a>

          <a
            href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            data-cursor
            className="flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.25)] transition-all rounded-sm group"
          >
            <div className="w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#ff5a3c] group-hover:bg-[#ff5a3c] group-hover:text-white transition-all">
              <Phone size={18} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c]">Phone</span>
              <span className="text-xs font-mono text-[#dfe7e0]">{personal.phone}</span>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] rounded-sm">
            <div className="w-10 h-10 rounded-full bg-[#121820] flex items-center justify-center text-[#c9a24a]">
              <MapPin size={18} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c]">Location</span>
              <span className="text-xs text-[#dfe7e0]">{personal.location}</span>
            </div>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="flex items-center justify-center gap-2 p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all rounded-sm text-xs text-[#dfe7e0] uppercase tracking-wider font-mono"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="flex items-center justify-center gap-2 p-4 bg-[#0a0e12] border border-[rgba(223,231,224,0.08)] hover:border-[rgba(223,231,224,0.3)] transition-all rounded-sm text-xs text-[#dfe7e0] uppercase tracking-wider font-mono"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right 7 Cols - Form */}
        <div className="lg:col-span-7 bg-[#0a0e12] border border-[rgba(223,231,224,0.1)] p-8 rounded-sm">
          <h3 className="text-xs tracking-[0.24em] uppercase text-[#aab4ad] mb-6">
            Send a Direct Message
          </h3>

          {submitted && (
            <div className="mb-6 p-4 bg-[#e0231c]/15 border border-[#e0231c] text-[#dfe7e0] text-xs flex items-center gap-3 rounded-sm">
              <CheckCircle size={18} className="text-[#e0231c]" />
              <span>Thank you! Your message has been received. I will reply shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Mohith B"
                className="w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2">
                Your Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@domain.com"
                className="w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Opportunity / Hackathon / Inquiry"
                className="w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase text-[#78837c] mb-2">
                Message *
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full bg-[#121820] border border-[rgba(223,231,224,0.1)] rounded-sm px-4 py-3 text-xs text-[#dfe7e0] placeholder-[#78837c] focus:outline-none focus:border-[#e0231c] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor
              className="w-full py-3.5 bg-[#e0231c] hover:bg-[#ff5a3c] text-white text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send size={14} />
              <span>Submit Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
