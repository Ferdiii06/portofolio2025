export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#fdfbf7] border-b-[6px] border-black">
      <div className="flex flex-col md:flex-row w-full">
 
        {/* Kiri: Heading */}
        <div className="px-10 md:px-16 py-20 md:w-1/2 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black flex flex-col justify-center bg-[#fdfbf7]">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 text-[#c5a358]">
            — Mulai Percakapan
          </span>
          <h2
            className="leading-none mb-6 text-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(64px, 10vw, 140px)',
              letterSpacing: '0.03em',
            }}
          >
            LET'S <br />
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#c5a358', fontWeight: 400, fontSize: '0.95em' }}>
              Talk
            </span>
            <span className="text-black">.</span>
          </h2>
          <p className="font-medium text-gray-600 text-lg max-w-sm">
            Terbuka untuk kolaborasi projek atau sekadar diskusi teknologi.
          </p>
        </div>
 
        {/* Kanan: Actions */}
        <div className="md:w-1/2 bg-black flex flex-col">
          <a
            href="ferdiferdiansyah957@gmail.com"
            className="flex-1 flex items-center justify-between px-10 md:px-14 py-14 border-b-[4px] border-white/20 hover:bg-[#c5a358] hover:border-[#c5a358] group transition-all"
          >
            <span className="font-black uppercase tracking-widest text-white group-hover:text-black">
              Email Me
            </span>
            <span className="text-3xl text-white/30 group-hover:text-black transition-colors">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ferry-ferdiansyah-0a9b31332"
            className="flex-1 flex items-center justify-between px-10 md:px-14 py-14 border-b-[4px] border-white/20 hover:bg-white group transition-all"
          >
            <span className="font-black uppercase tracking-widest text-white group-hover:text-black">
              LinkedIn
            </span>
            <span className="text-3xl text-white/30 group-hover:text-black transition-colors">↗</span>
          </a>
          <a
            href="https://github.com/ferdiii06"
            className="flex-1 flex items-center justify-between px-10 md:px-14 py-14 hover:bg-[#c5a358] group transition-all"
          >
            <span className="font-black uppercase tracking-widest text-white group-hover:text-black">
              GitHub
            </span>
            <span className="text-3xl text-white/30 group-hover:text-black transition-colors">↗</span>
          </a>
        </div>
 
      </div>
    </section>
  );
}
 