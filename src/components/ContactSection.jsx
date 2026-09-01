"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="w-full bg-custom-light py-24 md:py-32 relative overflow-hidden border-t border-custom-blue/20">
      {/* Background glowing blobs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-custom-blue/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-custom-navy/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div ref={cardRef} className="bg-white/50 backdrop-blur-2xl border border-white rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
          
          {/* Decorative Grid Pattern inside Card */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-custom-blue mb-4 block">
                {t("contactTag") || "What's Next?"}
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-custom-navy mb-6 leading-tight">
                {t("contactTitle") || "Let's Work Together."}
              </h2>
              <p className="text-lg md:text-xl font-medium text-custom-blue/80 max-w-md mx-auto lg:mx-0">
                {t("contactDesc") || "Ready to build something amazing? Whether you have a project in mind or just want to chat about tech, my inbox is always open."}
              </p>
            </div>

            {/* Right Content / Actions */}
            <div className="flex flex-col gap-5 w-full lg:w-[400px] shrink-0">
              <a
                href="gmail:ferdiferdiansyah957@gmail.com"
                className="group relative flex items-center justify-center gap-4 bg-custom-navy text-custom-light px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-custom-navy/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span>{t("contactBtn") || "Get in Touch"}</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <div className="flex gap-5">
                 <a
                    href="https://www.linkedin.com/in/ferry-ferdiansyah-0a9b31332"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/80 border border-custom-blue/20 hover:border-custom-blue text-custom-navy hover:text-custom-blue px-6 py-4 rounded-2xl transition-all font-bold text-sm tracking-widest shadow-sm hover:shadow-md hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://github.com/Ferdiii06"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/80 border border-custom-blue/20 hover:border-custom-blue text-custom-navy hover:text-custom-blue px-6 py-4 rounded-2xl transition-all font-bold text-sm tracking-widest shadow-sm hover:shadow-md hover:-translate-y-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}