"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutSection() {
  const columnsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const validRefs = columnsRef.current.filter((el) => el !== null); // Filter elemen yang valid
      if (validRefs.length > 0) {
        gsap.fromTo(
          validRefs,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
      }
    }
  }, []);

  return (
    <section id="about" className="py-16 md:py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {[
            {
              title: 'Who I Am',
              content: `I'm Ferdi, a passionate web developer with expertise in frontend technologies. I love creating beautiful, responsive, and user-friendly websites.`,
            },
            {
              title: 'My Journey',
              content: `Self-taught developer with a passion for web development. Completed multiple freelance projects and continuously learning new technologies.`,
            },
          ].map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  columnsRef.current[index] = el; // Tambahkan elemen ke array
                } else {
                  delete columnsRef.current[index]; // Hapus elemen dari array
                }
              }}
              className="md:w-1/2 w-full bg-white/20 backdrop-blur-md rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{section.title}</h3>
              <p className="text-gray-100 text-sm sm:text-base">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}