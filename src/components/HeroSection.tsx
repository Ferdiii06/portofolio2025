"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
  }, []);

  return (
    <section
      id="home"
      className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between pt-32 pb-20 md:py-20 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500"
    >
      <div ref={textRef} className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          Hi, I&apos;m <span className="text-blue-400">Ferdi</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-6 sm:mb-8 font-semibold">Web Frontend</p>
        <p className="text-lg sm:text-xl text-gray-100 mb-8 sm:mb-10 max-w-xl">
          Welcome to my creative portfolio website where ideas come to life!
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
          <Link
            href="#contact"
            className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300"
          >
            Hire Me
          </Link>
          <Link
            href="#projects"
            className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            My Projects
          </Link>
        </div>
      </div>
      <div ref={imageRef} className="md:w-1/2 flex justify-center">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border-4 border-white/30 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 shadow-2xl flex items-center justify-center transition-all duration-300 hover:ring-4 hover:ring-blue-300/40">
          <Image
            src="/foto formal portofolio.jpg"
            alt="Ferdi's Profile"
            width={320}
            height={320}
            className="rounded-full w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}