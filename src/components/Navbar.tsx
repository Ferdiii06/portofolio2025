"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  // Close menu on navigation (optional)
  const handleNavClick = () => setOpen(false);

  return (
    <nav ref={navRef} className="bg-white/20 backdrop-blur-sm fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-bold text-black">Ferdi</div>
        {/* Hamburger */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Menu */}
        <ul
          className={`
            flex-col sm:flex-row sm:flex
            ${open ? 'flex' : 'hidden'}
            absolute sm:static top-16 left-0 w-full sm:w-auto bg-white/20 sm:bg-transparent shadow-lg sm:shadow-none
            sm:space-x-8 space-y-4 sm:space-y-0 p-4 sm:p-0 transition-all
          `}
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href} className="hover:scale-110 transition-transform duration-300">
              <Link
                href={item.href}
                className="text-black font-medium sm:font-semibold text-lg sm:text-xl hover:text-gray-800"
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}