export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-[76px] w-full">
      <div className="flex-1 grid md:grid-cols-2 gap-0 w-full">
 
        {/* Kiri: Teks */}
        <div className="pl-10 pr-10 md:pl-16 py-20 md:py-28 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black flex flex-col justify-center bg-[#fdfbf7]">
          <span
            className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 inline-block bg-black text-white px-4 py-2 self-start"
          >
            Protofolio 2026
          </span>
 
          <h1
            className="leading-[0.88] mb-10 tracking-tighter text-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(80px, 12vw, 100px)',
            }}
          >
            CODE THE NIGHT <br />
            <span
              className="text-[#fdfbf7]"
              style={{
                WebkitTextStroke: '3px #0a0a0a',
              }}
            >
              BUILD THE LIGHT
            </span>
          </h1>
 
          <p className="text-lg font-medium leading-relaxed max-w-sm mb-12 text-black">
            Membangun Website dan App Mobile {' '}
            <span className="text-[#c5a358] font-bold"></span>.
          </p>
 
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="border-[4px] border-black px-10 py-4 bg-[#c5a358] text-black font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all brutal-shadow hover:shadow-none"
            >
              Lihat Karya →
            </a>
            <a
              href="#contact"
              className="border-[4px] border-black px-10 py-4 bg-transparent text-black font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-all"
            >
              Hubungi
            </a>
          </div>
 
          {/* Stat bar */}
          <div className="mt-16 pt-8 border-t-[4px] border-black grid grid-cols-3 gap-0">
            {[
              { num: '2+', label: 'Tahun Coding' },
              { num: '5+', label: 'Proyek Selesai'},
              { num: '3', label: '' },
              
            ].map((s, i) => (
              <div
                key={i}
                className={`pr-6 ${i > 0 ? 'pl-6 border-l-[4px] border-black' : ''}`}
              >
                <p
                  className="text-4xl font-black text-black leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s.num}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
 
        {/* Kanan: Foto full bleed */}
        <div className="relative h-full min-h-[500px] bg-black group overflow-hidden">
          <img
            src="/foto formal.jpeg"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-90"
            alt="Ferdi"
          />
          {/* Gold accent strip */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#c5a358]" />
          {/* Floating label */}
          <div className="absolute bottom-8 left-8 bg-[#c5a358] text-black px-4 py-2">
            <p
              className="text-xs font-black uppercase tracking-widest"
            >
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}