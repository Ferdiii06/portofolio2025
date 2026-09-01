"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import MagneticWrapper from './MagneticWrapper';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
      <nav
        className={`mx-auto max-w-5xl flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'py-3 px-6 rounded-full bg-custom-light/90 backdrop-blur-md border border-custom-blue/50 shadow-sm' 
            : 'py-5 px-6'
        }`}
      >
        {/* Logo */}
        <MagneticWrapper>
          <a
            href="#"
            className={`${scrolled ? 'pl-2' : 'pl-2'} text-2xl font-bold tracking-tight inline-block text-custom-navy`}
          >
            Ferdi<span className="text-custom-blue">.</span>
          </a>
        </MagneticWrapper>

        {/* Nav links */}
        <div className="hidden md:flex gap-10 items-center">
          <MagneticWrapper>
            <a
              href="#about"
              className="text-sm font-medium text-custom-blue hover:text-custom-navy transition-colors inline-block"
            >
              {t("navAbout")}
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a
              href="#skills"
              className="text-sm font-medium text-custom-blue hover:text-custom-navy transition-colors inline-block"
            >
              {t("navExpertise")}
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a
              href="#projects"
              className="text-sm font-medium text-custom-blue hover:text-custom-navy transition-colors inline-block"
            >
              {t("navWork")}
            </a>
          </MagneticWrapper>
          
          {/* Language Toggle */}
          <MagneticWrapper>
            <button
              onClick={toggleLang}
              className="text-sm font-medium text-custom-blue hover:text-custom-navy transition-colors inline-block"
            >
              {lang === 'id' ? 'ID 🇮🇩' : 'EN 🇬🇧'}
            </button>
          </MagneticWrapper>

          {/* Contact CTA */}
          <MagneticWrapper>
            <a
              href="#contact"
              className={`bg-custom-navy text-custom-light text-sm font-medium flex items-center hover:opacity-90 transition-opacity shadow-sm ${
                scrolled ? 'px-6 py-2 rounded-full mr-2' : 'px-8 py-3 rounded-full'
              }`}
            >
              {t("navContact")}
            </a>
          </MagneticWrapper>
        </div>
      </nav>
    </header>
  );
}
 