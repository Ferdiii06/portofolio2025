export default function SkillsSection() {
  const expertise = [
    { name: 'React / Next.js', category: 'Frontend', level: 90 },
    { name: 'Tailwind CSS', category: 'Styling', level: 95 },
    { name: 'Laravel / PHP', category: 'Backend', level: 85 },
    { name: 'PostgreSQL / MySQL', category: 'Database', level: 80 },
  ];
 
  return (
    <section id="skills" className="w-full py-24 bg-[#fdfbf7] border-b-[6px] border-black">
      {/* Header — flush dengan konten, pakai px */}
      <div className="px-10 md:px-16 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <h2
            className="leading-none text-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(56px, 9vw, 120px)',
              letterSpacing: '0.03em',
            }}
          >
            EXPERTISE <br />
            <span
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#c5a358', fontWeight: 400 }}
            >
              Skillset
            </span>
          </h2>
          <p className="font-bold text-right uppercase text-[10px] tracking-widest max-w-[200px] text-gray-500">
            Keahlian utama yang saya gunakan untuk membangun proyek digital.
          </p>
        </div>
      </div>
 
      {/* Grid cards — full bleed dengan border kiri/kanan dihapus */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-[6px] border-black">
        {expertise.map((skill, i) => (
          <div
            key={skill.name}
            className={`group bg-white p-10 border-b-[6px] border-black hover:-translate-y-1 hover:bg-[#c5a358] transition-all duration-200 ${
              i < expertise.length - 1 ? 'border-r-[6px]' : ''
            } sm:${i % 2 === 0 ? 'border-r-[6px]' : ''} lg:border-r-[6px] last:border-r-0`}
          >
            <div className="flex justify-between items-start mb-10">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-black text-white px-2 py-1 group-hover:bg-white group-hover:text-black transition-colors">
                {skill.category}
              </span>
              <span
                className="text-2xl text-gray-300 group-hover:text-black transition-colors"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              >
                {skill.level}%
              </span>
            </div>
 
            <h3
              className="text-2xl uppercase leading-tight mb-6 group-hover:text-black transition-colors font-black"
            >
              {skill.name}
            </h3>
 
            {/* Progress bar brutalist */}
            <div className="w-full h-3 border-2 border-black bg-gray-100 overflow-hidden group-hover:bg-white group-hover:border-black transition-colors">
              <div
                className="h-full bg-black group-hover:bg-white transition-colors duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}