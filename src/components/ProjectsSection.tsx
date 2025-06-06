"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function ProjectsSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Pastikan animasi hanya dijalankan di sisi klien
    if (typeof window !== 'undefined') {
      const validRefs = cardsRef.current.filter((el) => el !== null); // Filter elemen yang valid
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
    <section id="projects" className="py-12 sm:py-20 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 dark:from-slate-800 dark:via-indigo-900 dark:to-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              src: '/project 1.png',
              title: 'Portal Desa',
              description: 'Website resmi Desa Suko yang menampilkan informasi tentang desa, keunggulan, dan  Dirancang untuk memudahkan warga desa dan pengunjung mendapatkan informasi dengan cepat.',
              link: 'https://github.com/Ferdiii06/TugasWebDesa.git', // URL untuk Portal Desa Suko
            },
            {
              src: '/project 2.png',
              title: 'Permainan Interaktif',
              description: 'Permainan berbasis web yang melatih refleks pengguna dengan gameplay sederhana namun menarik. Cocok untuk hiburan sekaligus meningkatkan konsentrasi.',
              link: 'https://github.com/Ferdiii06/gamesimple.git', // URL untuk Permainan Interaktif
            },
            {
              src: '/project 3.png',
              title: 'Portal Berita',
              description: 'Sebuah portal berita yang memungkinkan pengguna untuk membaca dan mengelola berita dengan antarmuka yang sederhana dan responsif.',
              link: 'https://github.com/Ferdiii06/portalberita.git', // URL untuk Portal Berita
            },
            {
              src: '/project 4.png',
              title: 'Pemesanan Tiket Kereta Api',
              description: 'Sistem pemesanan tiket kereta api yang memudahkan pengguna untuk mencari dan memesan tiket secara online. Didesain untuk kenyamanan pengguna.',
              link: 'https://github.com/Ferdiii06/WebTiketKereta.git', // URL untuk Portal Berita
            },
          ].map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el; // Tambahkan elemen ke array
                } else {
                  cardsRef.current[index] = null; // Hapus elemen jika tidak ada
                }
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image 
                src={project.src} 
                alt={project.title} 
                width={400} 
                height={192} 
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
                <p className="text-gray-100 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-blue-500  transition-colors duration-300"
                >
                  Kunjungi Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}