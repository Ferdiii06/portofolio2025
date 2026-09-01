'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function SpotifyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  
  useEffect(() => {
    // Initial entrance animation
    gsap.fromTo(widgetRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.5 }
    );
  }, []);

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
      
      {/* Spotify iFrame Container */}
      <div 
        className={`transition-all duration-500 ease-in-out transform origin-bottom-right ${isOpen ? 'translate-x-0 opacity-100 mb-4' : 'translate-x-[120%] opacity-0 mb-0 h-0 overflow-hidden'}`}
      >
        <div className="bg-black/40 backdrop-blur-md p-1 rounded-2xl shadow-2xl border border-white/10 w-[300px]">
          <iframe 
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/5yhG8KUQh3TGdqELR83bzn?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Tombol Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#1DB954] hover:bg-[#1ed760] flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-110 cursor-pointer border-[3px] border-white/20"
        title="Play my coding playlist"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM20.16 9.6C16.44 7.38 9.54 7.14 5.58 8.4c-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.68-1.44 12.48-1.14 16.92 1.5.54.36.72 1.02.42 1.56-.36.6-.96.72-1.5.3z" />
        </svg>
      </button>

    </div>
  );
}
