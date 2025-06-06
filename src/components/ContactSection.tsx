"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Animasi untuk form
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
      }

      // Animasi untuk links
      const validLinks = linksRef.current.filter((el) => el !== null);
      if (validLinks.length > 0) {
        gsap.fromTo(
          validLinks,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
      }
    }
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Ferdi"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Ferdi@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Your Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                placeholder="Hello Ferdi, I'd like to talk about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-500   transition-colors duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 sm:mt-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Or reach me directly</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { href: 'mailto:ferdi@example.com', label: '✉️ Email' },
                { href: 'https://www.linkedin.com/in/ferry-ferdiansyah-0a9b31332/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FkHENSvuQP%2BJ22DT1Dg9Ag%3D%3D', label: '🔗 LinkedIn' },
                { href: 'https://github.com/Ferdiii06', label: '💻 GitHub' },
                { href: 'https://instagram.com/Ferdiii_f', label: '📷 Instagram' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => {
                    if (el) {
                      linksRef.current[index] = el; // Tambahkan elemen ke array
                    } else {
                      delete linksRef.current[index]; // Hapus elemen dari array
                    }
                  }}
                  className="text-white hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}