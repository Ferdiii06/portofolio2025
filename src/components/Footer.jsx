export default function Footer() {
  const year = new Date().getFullYear();
 
  return (
    <footer className="w-full bg-black text-white border-t-[6px] border-black">
      <div className="flex flex-col md:flex-row items-stretch">
 
        {/* Brand block */}
        <div className="px-10 md:px-16 py-10 md:border-r-[6px] border-b-[6px] md:border-b-0 border-white/20 flex flex-col justify-center">
          <h2
            className="text-white leading-none mb-1"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '48px',
              letterSpacing: '0.05em',
            }}
          >
            FERDI<span className="text-[#c5a358]">.</span>
          </h2>
          <p className="font-bold text-gray-400 text-sm">Frontend Developer — 2024</p>
        </div>
 
        {/* Nav links */}
        <div className="px-10 md:px-16 py-10 flex flex-wrap items-center gap-8 flex-1">
          {['Home', 'About', 'Expertise', 'Work', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-black uppercase text-xs tracking-[0.3em] text-gray-400 hover:text-[#c5a358] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
 
        {/* Gold accent strip on right */}
        <div className="hidden md:block w-2 bg-[#c5a358]" />
      </div>
 
      {/* Bottom bar */}
      <div className="border-t-[3px] border-white/10 px-10 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
          © {year} Ferdi Portfolio. All rights reserved.
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
 