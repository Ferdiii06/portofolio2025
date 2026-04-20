"use client";
import { useState } from "react";

const FEATURED = [
  {
    title: "Website Nusamart",
    category: "Website",
    desc: "nusamart adalah platform e-commerce yang menghubungkan petani lokal dengan konsumen, menyediakan akses mudah ke produk segar dan berkualitas langsung dari sumbernya.",
    img: "/project mart.png",
    href: "https://umkm-nusantara-mart-reactvite.vercel.app/",
    year: "2025",
    stack: ["Reactvite", "Tailwind"],
  },
];

const ALL_PROJECTS = [
  {
    title: "Web Desa Suko",
    category: "Frontend",
    desc: "Informasi publik berbasis web dengan manajemen data yang presisi.",
    img: "/project 1.png",
    href: "#",
    year: "2024",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Game Dashboard ",
    category: "Frontend",
    desc: "Dashboard interaktif untuk analisis data game dengan visualisasi dinamis.",
    img: "/project 2.png",
    href: "#",
    year: "2024",
    stack: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Portal Berita",
    category: "Full Stack",
    desc: "Platform belanja online dengan sistem pembayaran terintegrasi.",
    img: "/project 3.png",
    href: "https://portalberita-nextjs.vercel.app/",
    year: "2024",
    stack: ["next.js", "Tailwind", "MYSQL"],
  },
  {
    title: "Web Pemesanan Tiket Kereta Api",
    category: "Full Stack",
    desc: "Sistem pemesanan tiket kereta api dengan fitur pencarian jadwal, pemilihan kursi, dan pembayaran online.",
    img: "/project 4.png",
    href: "#",
    year: "2024",
    stack: ["React", "Express", "MongoDB"],
  },
  {
    title: "FoodHealthCare",
    category: "Frontend",
    desc: "Website rekomendasi makanan sehat.",
    img: "/project foodhealth.png",
    href: "https://food-health-care-vite.vercel.app/",
    year: "2024",
    stack: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Comming Soon",
    category: "-",
    desc: "Proyek baru sedang dalam pengembangan, siap untuk menghadirkan inovasi berikutnya.",
    img: "/",
    href: "#",
    year: "",
    stack: ["", ""],
  },
];

const CATEGORIES = [
  "All",
  "Web Application",
  "Frontend",
  "Full Stack",
  "Backend",
];

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      <section
        id="projects"
        className="w-full bg-black text-white border-b-[6px] border-black"
      >
        {/* Header */}
        <div className="px-10 md:px-16 pt-24 pb-16 flex justify-between items-end">
          <h2
            className="leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(56px, 9vw, 120px)",
              letterSpacing: "0.03em",
            }}
          >
            SELECTED <br /> WORKS
          </h2>
          <div className="hidden md:block w-24 h-1 bg-[#c5a358] mb-4" />
        </div>

        {/* Featured Projects */}
        <div className="w-full">
          {FEATURED.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row border-t-[6px] border-white/20 hover:border-[#c5a358] transition-colors duration-300"
            >
              <div className="md:w-2/3 h-[400px] md:h-[500px] overflow-hidden border-b-[6px] md:border-b-0 md:border-r-[6px] border-white/20 group-hover:border-[#c5a358] transition-colors">
                <img
                  src={project.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  alt={project.title}
                />
              </div>
              <div className="md:w-1/3 px-10 md:px-14 py-14 flex flex-col justify-between bg-black">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-[#c5a358] uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className="leading-none mb-6 text-white"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(36px, 4vw, 56px)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="font-medium text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] font-black uppercase tracking-widest border border-white/20 px-2 py-1 text-gray-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.href}
                  className="mt-10 border-b-[3px] border-[#c5a358] pb-1 font-black uppercase text-[#c5a358] self-start text-sm tracking-widest hover:text-white hover:border-white transition-all"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects CTA */}
        <div className="px-10 md:px-16 py-12 border-t-[6px] border-white/20 flex items-center justify-between">
          <button
            onClick={() => {
              setModalOpen(true);
              setActiveFilter("All");
            }}
            className="group inline-flex items-center gap-4 border-[4px] border-white px-10 py-4 font-black uppercase tracking-widest text-sm text-white hover:bg-[#c5a358] hover:border-[#c5a358] hover:text-black transition-all"
          >
            All Projects
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">
            {ALL_PROJECTS.length} Total Karya
          </span>
        </div>
      </section>

      {/* ── MODAL: ALL PROJECTS ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/85 overflow-y-auto no-scrollbar p-14 flex flex-col">
          <div className="bg-black max-w-9xl mx-auto w-full shadow-lg">
            {/* Sticky top bar */}
            <div className="z-10 bg-black border-b-[6px] border-white w-full">
              <div className="flex items-center justify-between px-10 md:px-16 py-5">
                <h2
                  className="text-white leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(24px, 3.5vw, 44px)",
                    letterSpacing: "0.05em",
                  }}
                >
                  ALL PROJECTS<span className="text-[#c5a358]">.</span>
                </h2>

                {/* Desktop filter */}
                <div className="hidden md:flex items-center gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`text-[9px] font-black uppercase tracking-widest px-4 py-2 border-[3px] transition-all ${
                        activeFilter === cat
                          ? "bg-[#c5a358] border-[#c5a358] text-black"
                          : "border-white/20 text-gray-500 hover:border-white hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setModalOpen(false)}
                  className="ml-6 w-10 h-10 border-[3px] border-white/30 flex items-center justify-center text-white hover:bg-[#c5a358] hover:border-[#c5a358] hover:text-black transition-all font-black text-lg leading-none"
                  aria-label="Tutup"
                >
                  ✕
                </button>
              </div>

              {/* Mobile filter */}
              <div className="md:hidden flex gap-2 overflow-x-auto px-10 pb-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`whitespace-nowrap flex-shrink-0 text-[9px] font-black uppercase tracking-widest px-4 py-2 border-[3px] transition-all ${
                      activeFilter === cat
                        ? "bg-[#c5a358] border-[#c5a358] text-black"
                        : "border-white/20 text-gray-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Count bar */}
            <div className="px-10 md:px-16 py-5 border-b-[3px] border-white/10 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                Menampilkan{" "}
                <span className="text-[#c5a358]">{filtered.length}</span> dari{" "}
                {ALL_PROJECTS.length} karya
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                Filter: <span className="text-white">{activeFilter}</span>
              </p>
            </div>

            {/* Projects grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <div
                  key={`${project.title}-${i}`}
                  className="group flex flex-col border-b-[4px] border-white/10 hover:border-[#c5a358] md:border-r-[4px] transition-all duration-200"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden border-b-[4px] border-white/10 group-hover:border-[#c5a358] transition-colors bg-[#111]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Placeholder bila gambar belum ada */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <span
                        className="text-white"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "80px",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest bg-black text-white px-2 py-1">
                      {project.year}
                    </span>
                    <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest bg-[#c5a358] text-black px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[9px] font-black text-[#c5a358] uppercase tracking-widest mb-3 block">
                      {project.category}
                    </span>
                    <h3
                      className="leading-none mb-3 text-white group-hover:text-[#c5a358] transition-colors"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(28px, 2.5vw, 40px)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-medium text-gray-500 leading-relaxed text-sm mb-6 flex-1">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[9px] font-black uppercase tracking-widest border border-white/15 group-hover:border-[#c5a358]/40 px-2 py-1 text-gray-600 group-hover:text-[#c5a358] transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      className="border-b-[2px] border-[#c5a358] pb-1 font-black uppercase text-[#c5a358] self-start text-xs tracking-widest hover:text-white hover:border-white transition-all"
                    >
                      View Project ↗
                    </a>
                  </div>
                </div>
              ))}

              {/* Empty state */}
              {filtered.length === 0 && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 py-40 flex flex-col items-center justify-center">
                  <p
                    className="text-gray-800 leading-none mb-4"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "80px",
                    }}
                  >
                    KOSONG
                  </p>
                  <p className="text-gray-600 font-medium text-sm">
                    Belum ada proyek dalam kategori ini.
                  </p>
                </div>
              )}
            </div>

            {/* Footer modal */}
            <div className="px-10 md:px-16 py-8 border-t-[6px] border-white/20 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-700">
                FERDI<span className="text-[#c5a358]">.</span> —{" "}
                {new Date().getFullYear()}
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#c5a358] transition-colors"
              >
                ← Kembali ke Portfolio
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
