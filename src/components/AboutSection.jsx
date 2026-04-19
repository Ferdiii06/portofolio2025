export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white border-y-[6px] border-black">
      <div className="grid md:grid-cols-12 gap-0">
 
        {/* Label samping vertikal */}
        <div className="md:col-span-1 bg-black text-white flex items-center justify-center py-8 md:py-0 border-b-[6px] md:border-b-0 md:border-r-[6px] border-black">
          <p
            className="uppercase font-black tracking-[0.5em] text-[10px]"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
          >
            Profile — 2024
          </p>
        </div>
 
        {/* Konten */}
        <div className="md:col-span-11 px-10 md:px-20 py-16 md:py-28 bg-[#fdfbf7]">
          <h2
            className="mb-14 leading-[0.9] text-black"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            Membangun{' '}
            <span
              className="not-italic font-black bg-black text-white px-3 py-1 inline-block"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', fontSize: '1.05em' }}
            >
              PRESISI
            </span>{' '}
            <br className="hidden md:block" />
            di tengah kekacauan digital.
          </h2>
 
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <p className="text-xl font-medium text-gray-800 leading-relaxed">
              Sebagai mahasiswa PENS, saya memadukan kekuatan teknis front-end dengan
              estetika minimalis. Desain bukan hanya soal tampilan, tapi soal bagaimana
              fungsi bekerja dengan elegan.
            </p>
 
            <div className="space-y-8">
              <div className="border-l-[6px] border-[#c5a358] pl-8">
                <h4 className="font-black uppercase text-[10px] tracking-widest text-[#c5a358] mb-2">
                  Visi
                </h4>
                <p className="font-bold text-lg text-black">
                  Menciptakan pengalaman digital yang intuitif dan memukau.
                </p>
              </div>
              <div className="border-l-[6px] border-black pl-8">
                <h4 className="font-black uppercase text-[10px] tracking-widest text-black mb-2">
                  Fokus
                </h4>
                <p className="font-bold text-lg text-black">
                  React, flutter, dan optimasi performa.
                </p>
              </div>
              <div className="border-l-[6px] border-black pl-8">
                <h4 className="font-black uppercase text-[10px] tracking-widest text-black mb-2">
                  Institusi
                </h4>
                <p className="font-bold text-lg text-black">
                  Politeknik Elektronika Negeri Surabaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}