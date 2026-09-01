'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import MagneticWrapper from './MagneticWrapper';

export default function HeroSection() {
  const { t } = useLanguage();
  const cvUrl = "/CV Ferry Ferdiansyah.pdf";
  const heroRef = useRef(null);
  const photoWrapperRef = useRef(null);
  const photoRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    // 1. Reveal Animation
    gsap.fromTo(photoWrapperRef.current, 
      { y: 100, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    );

    // 2. Floating Animation for photo
    gsap.to(photoRef.current, {
      y: -15,
      rotation: 1.5,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 1.5
    });

    // 3. Floating Background Code Elements
    elementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: `random(-40, 40)`,
        x: `random(-40, 40)`,
        rotation: `random(-45, 45)`,
        duration: `random(4, 7)`,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: index * 0.3
      });
    });
  }, []);

  const handleResume = () => {
    window.open(cvUrl, "_blank");
  };

  const handleEasterEgg = () => {
    gsap.to(heroRef.current, {
      rotation: 360,
      scale: 0.8,
      duration: 1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(heroRef.current, { clearProps: "all" });
      }
    });
  };

  const floatingSymbols = ['< >', '{ }', '</>', '...', '##', '()', '=>', ';;'];

  return (
    <section id="home" className="min-h-screen flex flex-col pt-[50px] md:pt-[100px] w-full overflow-hidden relative bg-custom-light text-custom-navy" ref={heroRef}>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingSymbols.map((sym, i) => (
          <div 
            key={i}
            ref={el => elementsRef.current[i] = el}
            className="absolute text-3xl md:text-5xl font-mono text-custom-navy/5 font-bold select-none"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
          >
            {sym}
          </div>
        ))}
      </div>

      <div className="flex-1 grid md:grid-cols-2 gap-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 relative z-10">
 
        {/* Kiri: Teks */}
        <div className="py-20 md:py-28 flex flex-col justify-center">
          <span
            onClick={handleEasterEgg}
            className="text-xs font-bold uppercase tracking-widest mb-6 inline-block bg-custom-blue/10 text-custom-navy px-4 py-2 rounded-full self-start cursor-pointer hover:bg-custom-blue/20 transition-colors border border-custom-blue/30"
            title="Click me for a surprise!"
          >
            The Human Behind The Code
          </span>
 
          <h1
            className="leading-tight mb-8 tracking-tight text-custom-navy font-bold"
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
            }}
          >
            Turning coffee into <br />
            <span className="text-custom-blue">
              pixel-perfect interfaces.
            </span>
          </h1>
 
          <p className="text-lg font-medium leading-relaxed max-w-lg mb-10 text-custom-blue">
            {t("heroDesc") || "Hi, I'm Ferdi. You've seen my AI cat at work, but I'm the real fullstack developer crafting these digital experiences."}
          </p>
 
          <div className="flex gap-4 flex-wrap">
            <MagneticWrapper>
              <a
                href="#projects"
                className="inline-block px-8 py-4 rounded-full bg-custom-navy text-custom-light font-bold hover:opacity-90 transition-opacity shadow-lg shadow-custom-navy/10"
              >
                {t("heroBtnWork") || "View My Work"}
              </a>
            </MagneticWrapper>
            <MagneticWrapper>
              <a
                href="/CV terbaru saya.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  handleResume();
                }}
                className="inline-block px-8 py-4 rounded-full bg-white border border-custom-blue text-custom-navy font-bold hover:bg-custom-light transition-colors shadow-sm"
              >
                {t("heroBtnCV") || "Download CV"}
              </a>
            </MagneticWrapper>
          </div>
 
          {/* Stat bar */}
          <div className="mt-16 pt-8 border-t border-custom-blue/30 grid grid-cols-3 gap-6">
            {[
              { num: '2+', label: t("statYearsCode") || "Years Coding" },
              { num: '10+', label: t("statProjects") || "Projects Done" },
              { num: '2+', label: t("statYearsExp") || "Years Exp." },
            ].map((s, i) => (
              <div
                key={i}
                className={`${i > 0 ? 'border-l border-custom-blue/30 pl-6' : ''}`}
              >
                <p
                  className="text-3xl font-bold text-custom-navy leading-none mb-2"
                >
                  {s.num}
                </p>
                <p className="text-xs font-medium text-custom-blue">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        {/* Kanan: Foto full bleed dengan elemen dekoratif */}
        <div ref={photoWrapperRef} className="relative h-full min-h-[400px] md:min-h-[500px] w-full mt-10 md:mt-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-custom-blue/5 rounded-full blur-3xl transform scale-75 z-0" />
          <div ref={photoRef} className="relative z-10 w-4/5 md:w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden soft-panel p-2 border-custom-blue/20 rotate-2">
            <img
              src="/foto formal.jpeg"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 opacity-90"
              alt="Ferdi"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-custom-navy/80 via-transparent to-transparent rounded-2xl" />
            {/* Floating label */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-custom-blue/30 shadow-lg">
                <p className="text-sm font-bold text-custom-navy tracking-wide">
                  Ferry Ferdiansyah
                </p>
                <p className="text-xs font-medium text-custom-blue mt-1">
                  FullStack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}