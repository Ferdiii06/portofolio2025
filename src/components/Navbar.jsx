"use client";
import { useState, useEffect } from 'react';
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`w-full flex items-center justify-between border-b-[6px] border-black bg-[#fdfbf7] transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Logo — flush left */}
        <a
          href="#"
          className="pl-8 text-3xl uppercase tracking-tighter font-black leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
        >
          FERDI<span className="text-[#c5a358]">.</span>
        </a>
 
        {/* Nav links — Contact flush right */}
        <div className="hidden md:flex gap-10 items-center">
          <a
            href="#about"
            className="text-xs font-black uppercase tracking-[0.3em] hover:text-[#c5a358] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-xs font-black uppercase tracking-[0.3em] hover:text-[#c5a358] transition-colors"
          >
            Expertise
          </a>
          <a
            href="#projects"
            className="text-xs font-black uppercase tracking-[0.3em] hover:text-[#c5a358] transition-colors"
          >
            Work
          </a>
          {/* Contact CTA — full height, no right padding */}
          <a
            href="#contact"
            className={`bg-black text-white text-xs font-black uppercase tracking-[0.3em] px-10 flex items-center hover:bg-[#c5a358] transition-colors ${
              scrolled ? 'py-3' : 'py-5'
            }`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
 