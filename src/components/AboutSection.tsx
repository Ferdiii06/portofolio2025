"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AboutSection() {
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const validRefs = columnsRef.current.filter((el) => el !== null);
      if (validRefs.length > 0) {
        gsap.fromTo(
          validRefs,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
      }
    }
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12 tracking-tight drop-shadow-lg">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {[
            {
              title: 'Who I Am',
              content: `I'm Ferdi, a passionate web developer with expertise in Fullstack technologies. I love creating beautiful, responsive, and user-friendly websites.`,
            },
            {
              title: 'My Journey',
              content: `Self-taught developer with a passion for web development. Completed multiple freelance projects and continuously learning new technologies.`,
            },
          ].map((section, index) => (
            <div
              key={index}
              ref={el => void (columnsRef.current[index] = el)}
              className="md:w-1/2 w-full bg-white/80 dark:bg-slate-800/70 hover:bg-blue-100 dark:hover:bg-indigo-800/80 transition-colors duration-300 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-indigo-700 hover:scale-105 transform-gpu"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-8 bg-gradient-to-b from-sky-400 to-indigo-500 rounded-full mr-2"></span>
                {section.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-100 text-lg sm:text-xl leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}