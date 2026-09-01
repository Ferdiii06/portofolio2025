# 100 Ide & Fitur Portofolio React/Next.js 2025

Daftar 100 fitur, teknik, dan konsep untuk portofolio modern yang luar biasa di tahun 2025:

## 🟢 GSAP & Animasi Inti (1-30)
1. **`gsap.to()`** - Menganimasikan elemen menuju nilai tertentu.
2. **`gsap.from()`** - Menganimasikan elemen dari nilai tertentu ke keadaan awalnya.
3. **`gsap.fromTo()`** - Kontrol penuh dari nilai A ke nilai B.
4. **`gsap.set()`** - Mengatur properti CSS secara instan tanpa animasi.
5. **`gsap.timeline()`** - Menggabungkan banyak animasi agar berjalan berurutan.
6. **Timeline Labels** - Memberi penanda pada timeline untuk sinkronisasi kompleks.
7. **ScrollTrigger: Pinning** - Menempelkan/mengunci elemen di layar saat di-scroll.
8. **ScrollTrigger: Scrubbing** - Mengikat progres animasi langsung dengan pergerakan scroll bar.
9. **ScrollTrigger: toggleActions** - Mengontrol animasi (play, pause, reverse, reset) saat masuk/keluar viewport.
10. **ScrollTrigger: Callbacks** - Menjalankan fungsi spesifik (`onEnter`, `onLeave`) berbasis scroll.
11. **Stagger** - Menganimasikan sekumpulan elemen (misal daftar skill) secara bergantian dengan jeda.
12. **Easing (Power1-4)** - Mengatur kurva percepatan animasi (halus, cepat di awal, dll).
13. **Easing (Elastic, Bounce, Back)** - Efek memantul atau melampaui batas untuk kesan dinamis.
14. **CustomEase** - Membuat kurva animasi buatan sendiri secara presisi.
15. **`useGSAP()` hook** - Cara standar dan aman menggunakan GSAP di dalam komponen React.
16. **`gsap.matchMedia()`** - Animasi responsif (berbeda untuk mobile dan desktop).
17. **SplitText** - Memecah teks menjadi karakter/kata untuk efek mesin tik atau *reveal*.
18. **Flip Plugin** - Transisi layout mulus (misal: saat memfilter daftar proyek).
19. **MorphSVG** - Mengubah bentuk SVG (ikon A menjadi ikon B).
20. **DrawSVG** - Efek seolah-olah menggambar garis SVG secara langsung.
21. **Draggable** - Membuat elemen (seperti slider galeri) bisa ditarik dengan mouse/sentuhan.
22. **Observer Plugin** - Mendeteksi interaksi scroll/touch tanpa benar-benar men-scroll halaman.
23. **ScrollToPlugin** - Menggulir halaman ke elemen tertentu dengan animasi halus.
24. **MotionPathPlugin** - Membuat elemen bergerak mengikuti garis/jalur buatan.
25. **`gsap.context()`** - Pembersihan (*cleanup*) otomatis animasi di React (mencegah memory leak).
26. **Yoyo effect** - Animasi bolak-balik terus menerus.
27. **Repeat (-1)** - Animasi yang berulang tanpa batas (*infinite loop*).
28. **Delay** - Menunda dimulainya sebuah animasi.
29. **`onComplete` callback** - Menjalankan fungsi setelah animasi selesai.
30. **`onStart` callback** - Menjalankan fungsi tepat saat animasi dimulai.

## ⚛️ React & Next.js Core (31-50)
31. **Next.js App Router** - Struktur folder modern (`app/`) untuk routing.
32. **React Server Components (RSC)** - Komponen dirender di server untuk performa ekstra cepat.
33. **Client Components (`"use client"`)** - Digunakan khusus untuk komponen yang butuh interaksi/animasi.
34. **`useRef()`** - Menghubungkan elemen DOM langsung ke GSAP.
35. **`useState()` & `useEffect()`** - Mengelola state dan siklus hidup komponen.
36. **`next/image`** - Optimasi ukuran dan format gambar secara otomatis (WebP).
37. **`next/link`** - Perpindahan halaman instan tanpa *full reload*.
38. **`next/font`** - Memuat font lokal tanpa layout shift (tanpa kedipan font).
39. **Metadata API** - Konfigurasi SEO dan judul halaman yang dinamis.
40. **Dynamic Routing (`[slug]`)** - Membuat halaman detail proyek secara otomatis.
41. **Loading UI (`loading.jsx`)** - Tampilan skeleton/spinner saat memuat data.
42. **Error Handling (`error.jsx`)** - Menangkap error tanpa merusak seluruh web.
43. **Custom Hooks** - Membuat fungsi *reusable* (seperti `useMousePosition`).
44. **Context API / Zustand** - Manajemen state global (misal untuk tema gelap/terang).
45. **Suspense Boundaries** - Menampilkan *fallback* sambil menunggu komponen berat dimuat.
46. **Lazy Loading** - Memuat komponen hanya saat terlihat di layar (menghemat data).
47. **Server Actions** - Memproses form kontak langsung di server (fitur Next.js terbaru).
48. **Static Site Generation (SSG)** - Halaman dirender saat proses *build* (sangat cepat).
49. **Environment Variables (`.env`)** - Menyimpan API key (misal untuk EmailJS) dengan aman.
50. **Route Handlers** - Membuat API endpoint kustom di dalam Next.js.

## ✨ UI, UX & Interaksi (51-70)
51. **Smooth Scrolling (Lenis)** - Scroll mulus berbasis inersia.
52. **Magnetic Button** - Tombol yang "menempel" ke arah kursor saat didekati.
53. **Custom Cursor** - Kursor berupa titik/lingkaran yang mengikuti mouse dan berubah bentuk.
54. **Page Transitions** - Layar bertransisi (misal memudar atau menggeser) saat pindah halaman.
55. **Dark / Light Mode** - Toggle tema dengan transisi warna yang mulus.
56. **Parallax Effect** - Elemen background bergerak lebih lambat daripada foreground saat di-scroll.
57. **Infinite Marquee** - Teks berjalan terus-menerus secara horizontal (sering dipakai untuk list skill).
58. **Horizontal Scroll Section** - Scroll ke bawah tetapi konten bergerak ke samping.
59. **Text Reveal on Scroll** - Teks muncul dari bawah garis semu (*masking*) saat di-scroll.
60. **Image Hover Reveal** - Menampilkan gambar pratinjau proyek saat kursor mengarah ke nama proyek.
61. **3D Tilt Card** - Kartu proyek yang miring 3D mengikuti posisi mouse.
62. **Glassmorphism** - Desain UI dengan efek kaca buram (*backdrop-filter blur*).
63. **Full-screen Overlay Menu** - Hamburger menu yang membuka layar penuh dengan animasi bertahap.
64. **Sticky Navbar** - Navigasi yang menyembunyi saat scroll turun dan muncul saat scroll naik.
65. **Scroll Progress Bar** - Garis tipis di atas layar yang menunjukkan progres bacaan/scroll.
66. **Back to Top Button** - Tombol melayang untuk kembali ke atas halaman.
67. **Project Filter** - Tombol kategori (UI/UX, Frontend, Backend) yang menyortir proyek secara instan.
68. **Modal / Lightbox** - Menampilkan detail atau gambar besar proyek tanpa pindah halaman.
69. **Toast Notifications** - Notifikasi kecil ("Pesan terkirim!") di pojok layar.
70. **Hover Micro-interactions** - Animasi kecil di ikon atau tautan saat disentuh kursor.

## 🎨 Styling & CSS Tingkat Lanjut (71-85)
71. **Tailwind CSS** - *Utility classes* untuk mempercepat proses styling.
72. **CSS Variables** - Menyimpan warna utama agar mudah diubah (theming).
73. **CSS Grid** - Membuat tata letak galeri portofolio yang kompleks (misal bento box layout).
74. **Flexbox** - Tata letak fleksibel untuk perataan elemen (centering).
75. **Responsive Breakpoints** - Tampilan sempurna di HP, Tablet, dan Desktop (`sm:`, `md:`, `lg:`).
76. **`mix-blend-mode: difference`** - Membuat kursor otomatis berubah warna kontras saat melewati teks hitam/putih.
77. **`clip-path`** - Memotong elemen dengan bentuk geometris unik.
78. **Gradient Text** - Teks dengan warna gradasi berkilau (`background-clip: text`).
79. **Aspect-ratio** - Menjaga proporsi gambar portofolio agar tidak gepeng.
80. **CSS Modules** - Styling lokal untuk komponen agar kelas CSS tidak bertabrakan.
81. **Container Queries** - Elemen merespons ukuran pembungkusnya, bukan sekadar ukuran layar.
82. **CSS Scroll Snap** - Membuat halaman otomatis berhenti/melekat di tiap bagian (*section*) saat di-scroll.
83. **Focus Rings** - Cincin fokus yang terlihat estetik saat navigasi menggunakan tombol *Tab*.
84. **Text Outline (Stroke)** - Gaya font transparan dengan garis pinggir saja.
85. **Backdrop-filter** - Digunakan di Navbar agar latar belakang yang dilewati terlihat blur.

## 🚀 Performa, SEO & Integrasi (86-100)
86. **Lighthouse Score 100/100** - Target optimasi kecepatan, aksesibilitas, dan SEO.
87. **Semantic HTML5** - Penggunaan tag `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` yang benar.
88. **Web Accessibility (a11y)** - Atribut ARIA agar situs bisa dibaca oleh *screen reader* tunanetra.
89. **Keyboard Navigation** - Situs sepenuhnya bisa dijelajahi hanya dengan keyboard.
90. **Open Graph Tags (OG)** - Gambar *preview* keren yang muncul saat link portofolio Anda dibagikan di WhatsApp/LinkedIn.
91. **Twitter Card** - Integrasi meta tag khusus untuk tampilan link di Twitter/X.
92. **Favicon & Apple Touch Icon** - Ikon website yang muncul di tab browser atau layar HP.
93. **Sitemap.xml** - Peta situs agar Google lebih cepat mengindeks portofolio Anda.
94. **Robots.txt** - Mengontrol halaman mana yang boleh dirayapi mesin pencari.
95. **EmailJS / Web3Forms** - Integrasi pengiriman pesan email dari form kontak tanpa server backend.
96. **reCAPTCHA / Honeypot** - Mencegah pesan spam masuk ke email Anda melalui form kontak.
97. **Vercel / Google Analytics** - Memantau berapa banyak orang yang mengunjungi portofolio Anda.
98. **Vercel Deployment** - Proses *hosting* otomatis setiap kali Anda melakukan *push* ke GitHub.
99. **ESLint & Prettier** - Menjaga kode tetap rapi, konsisten, dan minim bug.
100. **Custom 404 Page** - Halaman "Tidak Ditemukan" yang tetap estetik, interaktif, dan memiliki animasi!
