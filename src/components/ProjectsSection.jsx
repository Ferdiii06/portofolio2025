"use client";
import { useRef, useEffect } from "react";
import { useLanguage } from '../context/LanguageContext';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const PROJECTS = [
    {
      title: "NusaMart",
      category: "FullStack",
      desc: t("projFeaturedDesc"),
      img: "/project 5.png",
      href: "",
      year: "2025",
      stack: ["Reactvite", "Tailwind, Node.js"],
    },
    {
      title: "Insight News",
      category: "FullStack",
      desc: t("proj3Desc"),
      img: "/project 3.png",
      href: "",
      year: "2024",
      stack: ["next.js", "tailwindcss", "Prisma", "MySQL"],
    },
    {
      title: "InterCity Ticketing System",
      category: "FullStack",
      desc: t("proj4Desc"),
      img: "/project 4.png",
      href: "#",
      year: "2026",
      stack: ["React", "Express", "MongoDB", "GSAP"],
    },
    {
      title: "FoodHealthCare",
      category: "Frontend",
      desc: t("proj5Desc"),
      img: "/project 7.png",
      href: "",
      year: "2025",
      stack: ["Next.js", "Framer Motion", "Tailwind","GSAP"],
    },
    {
      title: "Urban Unit",
      category: "FullStack",
      desc: t("proj6Desc"),
      img: "/project 6.png",
      href: "#",
      year: "2025",
      stack: ["Reactvite", "Tailwindcss", "Mysql"],
    },
  ];

  useEffect(() => {
    // Only run on desktop/tablet to avoid weird issues on small mobile screens
    // But Horizontal scroll can work on mobile too, so we'll enable it universally.
    const ctx = gsap.context(() => {
      const scrollContainer = scrollContainerRef.current;
      
      // Calculate how far we need to move to the left
      // We want the last card to reach the right edge of the screen
      const getScrollAmount = () => -(scrollContainer.scrollWidth - window.innerWidth);
      
      const tween = gsap.to(scrollContainer, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollContainer.scrollWidth}`,
        pin: true,
        animation: tween,
        scrub: 1, // Smooth scrubbing (1 second delay)
        invalidateOnRefresh: true, // Recalculate on resize
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full bg-custom-light text-custom-navy relative"
    >
      {/* 
        Container ini mengambil tinggi layar (h-screen)
        Saat di-pin oleh GSAP, ini yang akan tertahan di layar
      */}
      <div className="h-screen w-full flex flex-col justify-center overflow-hidden py-10">
        
        {/* Header - Tetap diam di posisi saat kartu bergeser */}
        <div className="px-6 md:px-10 max-w-7xl w-full mx-auto mb-10 shrink-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-custom-navy mb-4">
            {t("projSelectedWorks")}
          </h2>
          <div className="w-24 h-1 bg-custom-navy rounded-full" />
        </div>

        {/* Wrapper Horizontal - Ini yang digeser oleh GSAP */}
        <div 
          ref={scrollContainerRef} 
          className="flex flex-row flex-nowrap h-[65vh] md:h-[60vh] gap-8 px-6 md:px-10 will-change-transform"
          style={{ width: "max-content" }}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-full shrink-0 group soft-panel rounded-3xl overflow-hidden flex flex-col shadow-sm border border-custom-blue/50 bg-white"
            >
              {/* Gambar Proyek */}
              <div className="relative h-1/2 md:h-[55%] w-full overflow-hidden bg-custom-light border-b border-custom-blue/50">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Placeholder bila gambar kosong */}
                {!project.img || project.img === "/" ? (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <span className="text-6xl font-bold text-custom-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ) : null}
                <span className="absolute top-4 right-4 z-10 text-xs font-bold bg-white/80 backdrop-blur-md border border-custom-blue/50 text-custom-navy px-3 py-1 rounded-full">
                  {project.year || "Soon"}
                </span>
                <span className="absolute top-4 left-4 z-10 text-xs font-bold bg-custom-navy text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Info Proyek */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-custom-navy uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-custom-navy group-hover:text-custom-blue transition-colors mb-3 truncate">
                  {project.title}
                </h3>
                <p className="font-medium text-custom-blue text-sm mb-6 flex-1 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.filter(s => s).map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium bg-custom-blue/10 border border-custom-blue/30 px-2 py-1 rounded-md text-custom-navy"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-bold text-custom-navy hover:text-custom-blue transition-colors mt-auto"
                  >
                    {t("projView")} →
                  </a>
                )}
              </div>
            </div>
          ))}
          
          {/* Card Ekstra untuk ruang bernapas di ujung */}
          <div className="w-[10vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
