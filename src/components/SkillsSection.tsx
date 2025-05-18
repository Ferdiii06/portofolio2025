"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function SkillsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const validRefs = cardsRef.current.filter((el) => el !== null); // Filter elemen yang valid
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
    <section className="py-12 sm:py-16 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: '💻', title: 'Web Development', description: 'HTML, CSS' },
            { icon: '🎨', title: 'UI/UX Design', description: 'Figma' },
            { icon: '⚛️', title: 'Frontend', description: 'React, Tailwind, Next.js' },
            { icon: '🔧', title: 'Backend', description: 'PHP' },
          ].map((skill, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el; // Tambahkan elemen ke array
                } else {
                  delete cardsRef.current[index]; // Hapus elemen dari array
                }
              }}
              className="bg-white/20 p-4 sm:p-6 rounded-xl backdrop-blur-sm text-center hover:scale-105 transition-transform duration-300"
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