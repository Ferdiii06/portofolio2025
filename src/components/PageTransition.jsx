"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Initial page load animation
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        delay: 0.2, // slight delay to show the overlay
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Black overlay that slides up */}
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black z-[1000] flex items-center justify-center pointer-events-none"
      >
        <span 
          className="text-white text-4xl font-black uppercase tracking-widest"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          FERDI.
        </span>
      </div>
      {children}
    </>
  );
}
