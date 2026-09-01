"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SandboxSection() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const containerRef = useRef(null);

  const LIVE_CODING_DEMO = {
    title: t("sandboxSubtitle") || "Where the magic happens",
    category: t("sandboxCategory") || "Workspace",
  };

  const catFrames = [
`     /\\_/\\    🌙
    ( o.o )
     > ^ <`,
`     /\\_/\\      🌙
    ( o.o )/
     > ^ <`,
`     /\\_/\\       🌙
    ( >.< )/
     > ^ <`,
`     /\\_/\\     🌙
    ( ^.^ )/
     > ^ <`,
`     /\\_/\\   🌙
    ( o.o )/
     > ^ <`,
`     /\\_/\\ 🌙
    ( ^.^ )
     > ^ <`,
`     /\\_/\\
    ( -.- )🌙
     > ^ <`,
`     /\\_/\\
    ( -.- )🌙
     > ^ <`,
`     /\\_/\\ 🌙
    ( ^.^ )
     > ^ <`,
`     /\\_/\\   🌙
    ( o.o )/
     > ^ <`
  ];

  const baseText = `
> AI_CAT: CATMOON_V2
> STACK: REACT | TAILWIND | NEXT.JS 
> STATUS: NIGHT OWL MODE... 🐾 🌌

async function huntForBugs() {
  console.log("Stalking bugs in the codebase at midnight...");
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    developer: "Ferdi",
    role: "Fullstack Developer 💻",
    mission: "Building purrfect web experiences under the moonlight! 🐱✨"
  };
}

huntForBugs().then(console.dir);`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping) {
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isTyping]);

  useEffect(() => {
    if (!isTyping) return;
    
    let index = 0;
    const fullText = catFrames[0] + baseText;
    
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 15);
    
    return () => clearInterval(interval);
  }, [isTyping]);

  useEffect(() => {
    if (!isTypingDone) return;
    
    const animInterval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % catFrames.length);
    }, 500);
    
    return () => clearInterval(animInterval);
  }, [isTypingDone]);

  return (
    <section id="sandbox" className="w-full bg-custom-light py-24 md:py-32 relative overflow-hidden">
      
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-custom-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 flex flex-col items-center text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-custom-navy mb-6">
          {t("sandboxTitle") || "Code Sandbox"}
        </h2>
        <div className="w-24 h-1 bg-custom-navy rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 relative z-10">
        
        {/* Main Glassmorphism Card */}
        <div className="bg-white/60 backdrop-blur-3xl border border-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden group">
          
          {/* Subtle Grid inside card */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

          <div className="flex flex-col items-center text-center gap-2 mb-10 relative z-10">
            <span className="text-xs font-bold text-custom-blue uppercase tracking-widest bg-custom-blue/10 px-4 py-1.5 rounded-full">
              {LIVE_CODING_DEMO.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-custom-navy mt-4">
              {LIVE_CODING_DEMO.title}
            </h3>
          </div>
          
          {/* Terminal Container with Neon Glow */}
          <div className="relative z-10 transition-all duration-700 group-hover:scale-[1.02]">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-[1.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div 
              ref={containerRef}
              className="relative w-full aspect-video md:aspect-[21/9] rounded-[1.2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117] flex flex-col"
            >
              {/* Terminal Header */}
              <div className="w-full h-12 bg-black/40 backdrop-blur-md flex items-center justify-between px-5 z-10 border-b border-white/5 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f5680]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e80]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f80]"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] md:text-xs font-mono font-medium text-white/40 tracking-wider">ferdi@workspace: ~/night-owl-mode</span>
                </div>
                <div className="w-[42px]"></div> {/* Spacer for balance */}
              </div>

              {/* Code Output Area */}
              <div className="flex-1 p-6 md:p-8 overflow-auto bg-[#0d1117] text-left relative">
                <pre className="font-mono text-sm md:text-base lg:text-lg text-emerald-400 whitespace-pre-wrap break-words" style={{ textShadow: '0 0 10px rgba(52, 211, 153, 0.4)' }}>
                  <code>
                    {isTypingDone ? catFrames[frameIndex] + baseText : displayedText}
                    <span className="animate-ping inline-block w-2 md:w-2.5 h-5 md:h-6 bg-emerald-400 align-middle ml-1 rounded-sm shadow-[0_0_8px_#34d399]"></span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
