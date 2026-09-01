"use client";
import { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const expertise = [
    { name: 'React / Next.js', category: 'Frontend', level: 90 },
    { name: 'Tailwind CSS / BootStrap', category: 'Styling', level: 95 },
    { name: 'Laravel / PHP', category: 'Backend', level: 95 },
    { name: 'Flutter / Dart', category: 'Mobile App', level: 85 },
    { name: 'PostgreSQL / MySQL / Laragon', category: 'Database', level: 90 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray('.skill-progress-bar');
      
      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-level') + '%';
        
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
 
  return (
    <section id="skills" ref={sectionRef} className="w-full py-24 bg-custom-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-custom-navy">
            {t("skillsExpertise")} <br />
            <span className="text-custom-blue">
              {t("skillsSkillset")}
            </span>
          </h2>
          <p className="font-medium text-sm text-custom-blue max-w-[250px] md:text-right">
            {t("skillsDesc")}
          </p>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((skill, i) => (
            <div
              key={skill.name}
              className="soft-panel soft-panel-hover p-8 rounded-3xl group flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest bg-custom-blue/10 text-custom-navy px-3 py-1 rounded-full group-hover:bg-custom-blue/20 transition-colors">
                  {skill.category}
                </span>
                <span className="text-xl font-bold text-custom-blue group-hover:text-custom-navy transition-colors">
                  {skill.level}%
                </span>
              </div>
   
              <h3 className="text-xl font-bold text-custom-navy mb-6 group-hover:text-custom-blue transition-colors">
                {skill.name}
              </h3>
   
              <div className="w-full h-2 bg-custom-blue/20 rounded-full overflow-hidden mt-auto">
                <div
                  className="skill-progress-bar h-full bg-custom-navy rounded-full"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}