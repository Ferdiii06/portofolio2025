"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Check if it's a touch device, if so, don't show custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      return;
    }

    // Set initial state
    gsap.set(cursor, { opacity: 0 });

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(170, 192, 225, 0.3)", // custom-blue
        border: "1px solid rgba(170, 192, 225, 0.5)",
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        border: "2px solid rgba(170, 192, 225, 0.8)", // custom-blue border
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach event listeners to all links and buttons
    const attachListeners = () => {
      const links = document.querySelectorAll("a, button");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnterLink);
        link.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    attachListeners();

    // Re-attach if DOM changes (simple implementation)
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle mouse leaving the window
    const onMouseLeaveWindow = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };
    
    const onMouseEnterWindow = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    document.documentElement.addEventListener("mouseleave", onMouseLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onMouseEnterWindow);
      const links = document.querySelectorAll("a, button");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button {
            cursor: none;
          }
        }
      `}</style>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border-2 border-custom-blue rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-colors mix-blend-multiply"
      ></div>
    </>
  );
}
