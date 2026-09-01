"use client";
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CertificationsSection() {
  const { t } = useLanguage();
  const [hoveredCert, setHoveredCert] = useState(null);

  const certifications = [
    { 
      title: "Belajar Dasar Pemrograman Web", 
      issuer: "Dicoding", 
      year: "2026",
      image: "/dicoding1.jpeg" 
    },
    { 
      title: "Bikin Website dari Nol Sampai Online dengan AI", 
      issuer: "Dewabiz & JelajahKode", 
      year: "2026",
      image: "/jelajahcode.jpeg" 
    },
    { 
      title: "Transition to a Modern Supply Chain (Trial Class)", 
      issuer: "TransTRACK Academy", 
      year: "2026",
      image: "/transtrack.jpeg" 
    },
    { 
      title: "Event Online - Cyber Security", 
      issuer: "Dibimbing", 
      year: "2026",
      image: "/hacktiv8.jpeg" 
    },
    { 
      title: "METC Soft Skill Series #2 - Beyond Coding", 
      issuer: "Dicoding", 
      year: "2026",
      image: "/dicoding2.jpeg" 
    },
  ];
 
  return (
    <section id="certifications" className="w-full bg-custom-light py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-custom-navy mb-4">
          {t("certTitle")}
        </h2>
        <div className="w-24 h-1 bg-custom-navy rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group soft-panel soft-panel-hover p-6 md:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center relative cursor-pointer"
            onMouseEnter={() => setHoveredCert(cert.image)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="flex-1">
              <span className="text-xs font-bold text-custom-navy mb-2 block">{cert.year}</span>
              <h3 className="text-2xl font-bold text-custom-navy mb-2 group-hover:text-custom-blue transition-colors">
                {cert.title}
              </h3>
              <p className="font-medium text-custom-blue">{cert.issuer}</p>
            </div>
          </div>
        ))}
        {/* Floating Image Preview (Desktop Only) */}
        {hoveredCert && (
          <div className="hidden md:block pointer-events-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] w-[500px] shadow-sm shadow-custom-blue/50 rounded-3xl overflow-hidden border border-custom-blue/50 transition-opacity duration-300">
            <img src={hoveredCert} alt="Certificate preview" className="w-full h-auto" />
          </div>
        )}
      </div>
    </section>
  );
}
