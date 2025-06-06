"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav ref={navRef} className="bg-white/20 backdrop-blur-sm fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-bold text-black">Ferdi</div>
        <ul className="flex space-x-4 sm:space-x-8">
          <li className="hover:scale-110 transition-transform duration-300">
            <Link href="#home" className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800">
              Home
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link href="#about" className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800">
              About
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link href="#skills" className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800">
              Skills
            </Link>
            </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link href="#projects" className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800">
              Projects
            </Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link href="#contact" className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}