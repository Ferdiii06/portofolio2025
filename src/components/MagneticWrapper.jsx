"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticWrapper({ children }) {
  const magneticRef = useRef(null);

  useEffect(() => {
    const el = magneticRef.current;
    
    // Check if it's a touch device, if so, disable magnetic effect
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      gsap.to(el, {
        x: x * 0.3, // Pull strength
        y: y * 0.3,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Wrap the child element so we can attach the ref
  return React.cloneElement(children, { ref: magneticRef });
}
