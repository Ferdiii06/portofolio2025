"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SkillsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const validRefs = cardsRef.current.filter((el) => el !== null);
      if (validRefs.length > 0) {
        gsap.fromTo(
          validRefs,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
      }
    }
  }, []);

  return (
    <section className="py-12 sm:py-30 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: '💻', title: 'Web Development', description: 'HTML, CSS, Javascript' },
            { icon: '🎨', title: 'UI/UX Design', description: 'Figma' },
            { icon: '⚛️', title: 'Frontend', description: 'React, Tailwind, Next.js, Vite' },
            { icon: '🔧', title: 'Backend', description: 'PHP, Mongodb' },
          ].map((skill, index) => (
            <div
              key={index}
              ref={el => void (cardsRef.current[index] = el)}
              className="bg-white/20 hover:bg-white/30 transition-colors duration-300 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center shadow-lg border border-white/10 hover:scale-105 transform-gpu"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{skill.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{skill.title}</h3>
              <p className="text-gray-100 text-sm sm:text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}