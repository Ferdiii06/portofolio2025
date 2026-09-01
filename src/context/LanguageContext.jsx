"use client";

import { createContext, useContext, useState, useEffect } from "react";

const dictionary = {
  id: {
    // Navbar
    navHome: "Beranda",
    navAbout: "Tentang",
    navExpertise: "Keahlian",
    navWork: "Karya",
    navContact: "Kontak",

    // Hero Section
    heroLabel: "Portofolio 2026",
    heroTitleLine1: "CODE THE NIGHT",
    heroTitleLine2: "BUILD THE LIGHT",
    heroDesc: "Saya seorang Fullstack Developer yang juga terjun ke pengembangan aplikasi mobile, dengan keahlian di React untuk frontend, Laravel untuk backend, dan Flutter untuk mobile. Saya percaya performa dan kesederhanaan desain adalah kunci — setiap aplikasi yang saya bangun dirancang untuk memberikan pengalaman yang cepat, intuitif, dan memukau, dari frontend hingga backend.",
    heroBtnWork: "Lihat Karya →",
    heroBtnCV: "Lihat CV",
    statYearsCode: "Tahun Coding",
    statProjects: "Proyek Selesai",
    statYearsExp: "Tahun Pengalaman",
    heroRole: "Fullstack Developer",

    // About Section
    aboutProfile: "Profile — 2024",
    aboutTitle1: "Membangun ",
    aboutTitleHighlight: "PRESISI",
    aboutTitle2: " di tengah kekacauan digital.",
    aboutDesc: "Sebagai mahasiswa PENS, saya memadukan kemampuan teknis dalam pengembangan web dan mobile dengan pendekatan desain yang minimalis. Bagi saya, desain yang baik bukan sekadar tampilan yang indah, melainkan bagaimana fungsi dapat bekerja secara elegan dan efisien.",
    aboutVisionTitle: "Visi",
    aboutVisionDesc: "Menciptakan pengalaman digital yang intuitif dan memukau.",
    aboutFocusTitle: "Fokus",
    aboutFocusDesc: "Pengembangan aplikasi web dan mobile dengan pendekatan desain yang minimalis.",
    aboutInstTitle: "Institusi",
    aboutInstDesc: "Politeknik Elektronika Negeri Surabaya.",

    // Skills Section
    skillsExpertise: "EXPERTISE",
    skillsSkillset: "Skillset",
    skillsDesc: "Keahlian utama yang saya gunakan untuk membangun proyek digital.",

    // Contact Section
    contactTag: "Selanjutnya?",
    contactTitle: "Mari Bekerja Sama.",
    contactDesc: "Siap membangun sesuatu yang luar biasa? Baik Anda memiliki ide proyek atau hanya ingin berdiskusi tentang teknologi, kotak masuk saya selalu terbuka.",
    contactBtn: "Hubungi Saya",
    contactLabel: "— Mulai Percakapan",
    contactLet: "LET'S",
    contactTalk: "Talk",
    contactEmail: "Email Me",

    // Projects Section
    projFeaturedDesc: "NusaMart adalah platform e-commerce revolusioner yang memotong rantai pasok dengan menghubungkan petani lokal langsung ke tangan konsumen, memastikan kesegaran produk dan harga yang adil.",
    proj1Desc: "Informasi publik berbasis web dengan manajemen data yang presisi.",
    proj2Desc: "Dashboard interaktif untuk analisis data game dengan visualisasi dinamis.",
    proj3Desc: "Portal berita digital modern yang menyajikan informasi terkini dengan antarmuka yang bersih dan tipografi yang nyaman dibaca, dirancang untuk pengalaman membaca yang imersif.",
    proj4Desc: "Aplikasi pemesanan tiket kereta api antarkota berbasis web dengan fitur pelacakan jadwal real-time, pemilihan kursi interaktif, dan integrasi gerbang pembayaran yang aman.",
    proj5Desc: "Aplikasi cerdas yang memberikan rekomendasi pola makan sehat dan nutrisi harian yang dipersonalisasi, dirancang untuk membantu pengguna mencapai tujuan kebugaran mereka.",
    proj6Desc: "Urban Unit Furniture adalah platform e-commerce berdesain minimalis yang menyediakan katalog perabotan modern untuk hunian urban. Dilengkapi dengan fitur manajemen produk, keranjang belanja interaktif, dan proses checkout yang mulus.",
    projSelectedWorks: "SELECTED WORKS",
    projView: "View Project ↗",
    projAllBtn: "All Projects",
    projTotalWorks: "Total Karya",
    projAllProjects: "ALL PROJECTS",
    projShowing: "Menampilkan",
    projFrom: "dari",
    projWorks: "karya",
    projEmpty: "KOSONG",
    projEmptyDesc: "Belum ada proyek dalam kategori ini.",
    projBack: "← Kembali ke Portfolio",

    // Certifications Section
    certTitle: "CERTIFICATIONS",
    certSubtitle: "Awards & Achievements",
    certDesc: "Pengakuan atas dedikasi dan keterampilan dalam bidang teknologi.",

    // Sandbox Section
    sandboxTitle: "LATE NIGHT CODING.",
    sandboxSubtitle: "Tempat keajaiban terjadi",
    sandboxCategory: "Ruang Kerja",
    sandboxDesc: "Beberapa eksperimen kode dan komponen interaktif.",
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About",
    navExpertise: "Expertise",
    navWork: "Work",
    navContact: "Contact",

    // Hero Section
    heroLabel: "Portfolio 2026",
    heroTitleLine1: "CODE THE NIGHT",
    heroTitleLine2: "BUILD THE LIGHT",
    heroDesc: "I am a passionate frontend developer with experience in React, Flutter, and performance optimization. I believe good design should be simple yet effective, and I always strive to create intuitive and stunning digital experiences.",
    heroBtnWork: "View Work →",
    heroBtnCV: "View CV",
    statYearsCode: "Years Coding",
    statProjects: "Projects Done",
    statYearsExp: "Years Exp.",
    heroRole: "Fullstack Developer",

    // About Section
    aboutProfile: "Profile — 2024",
    aboutTitle1: "Building ",
    aboutTitleHighlight: "PRECISION",
    aboutTitle2: " amidst digital chaos.",
    aboutDesc: "As a PENS student, I blend front-end technical strength with minimalist aesthetics. Design is not just about looks, but about how functions work elegantly.",
    aboutVisionTitle: "Vision",
    aboutVisionDesc: "Creating intuitive and stunning digital experiences.",
    aboutFocusTitle: "Focus",
    aboutFocusDesc: "React, Flutter, and performance optimization.",
    aboutInstTitle: "Institution",
    aboutInstDesc: "Electronic Engineering Polytechnic Institute of Surabaya.",

    // Skills Section
    skillsExpertise: "EXPERTISE",
    skillsSkillset: "Skillset",
    skillsDesc: "The main skills I use to build digital projects.",

    // Contact Section
    contactTag: "What's Next?",
    contactTitle: "Let's Work Together.",
    contactDesc: "Ready to build something amazing? Whether you have a project in mind or just want to chat about tech, my inbox is always open.",
    contactBtn: "Get in Touch",
    contactLabel: "— Start a Conversation",
    contactLet: "LET'S",
    contactTalk: "Talk",
    contactEmail: "Email Me",

    // Projects Section
    projFeaturedDesc: "NusaMart is a revolutionary e-commerce platform that disrupts the supply chain by connecting local farmers directly with consumers, ensuring fresh produce and fair pricing.",
    proj1Desc: "Web-based public information with precise data management.",
    proj2Desc: "Interactive dashboard for game data analysis with dynamic visualization.",
    proj3Desc: "A modern digital news portal delivering the latest stories with a clean interface and highly readable typography, designed for an immersive reading experience.",
    proj4Desc: "A web-based intercity train ticketing application featuring real-time schedule tracking, interactive seat selection, and secure payment gateway integration.",
    proj5Desc: "A smart application providing personalized healthy diet and daily nutrition recommendations, designed to help users achieve their wellness and fitness goals.",
    proj6Desc: "Urban Unit Furniture is a minimalist e-commerce platform offering a curated catalog of modern furniture for urban living. It features seamless product management, an interactive shopping cart, and a streamlined checkout process.",
    projSelectedWorks: "SELECTED WORKS",
    projView: "View Project ↗",
    projAllBtn: "All Projects",
    projTotalWorks: "Total Works",
    projAllProjects: "ALL PROJECTS",
    projShowing: "Showing",
    projFrom: "of",
    projWorks: "works",
    projEmpty: "EMPTY",
    projEmptyDesc: "No projects in this category yet.",
    projBack: "← Back to Portfolio",

    // Certifications Section
    certTitle: "CERTIFICATIONS",
    certSubtitle: "Awards & Achievements",
    certDesc: "Recognition of dedication and skills in the technology field.",

    // Sandbox Section
    sandboxTitle: "LATE NIGHT CODING.",
    sandboxSubtitle: "Where the magic happens",
    sandboxCategory: "Workspace",
    sandboxDesc: "Some code experiments and interactive components.",
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage for language preference
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "id" ? "en" : "id";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key) => dictionary[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, mounted }}>
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.2s' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
