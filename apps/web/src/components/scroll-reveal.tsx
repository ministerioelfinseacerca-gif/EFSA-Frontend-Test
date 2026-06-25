"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/hooks/useGSAP";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  staggerChildren?: boolean;
  animation?: "up" | "down" | "left" | "right" | "fade" | "zoom";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  stagger = 0.08,
  staggerChildren = false,
  animation = "up",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = staggerChildren
      ? gsap.utils.toArray(el.children)
      : [el];

    // Determine initial state based on animation type
    const initialVars: any = { opacity: 0 };
    
    if (animation === "up") initialVars.y = y;
    else if (animation === "down") initialVars.y = -y;
    else if (animation === "left") initialVars.x = -150;
    else if (animation === "right") initialVars.x = 150;
    else if (animation === "zoom") initialVars.scale = 0.8;
    // "fade" relies solely on opacity: 0

    // Set initial state
    gsap.set(targets, initialVars);

    gsap.to(targets, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.2, // Slightly longer duration for an elegant feel
      stagger: staggerChildren ? stagger : 0,
      delay: delay,
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: el,
        start: "top 85%", // Trigger slightly earlier for a better storytelling flow
        once: true,
      },
    });
  }, [delay, y, stagger, staggerChildren, animation], containerRef);

  return (
    <div ref={containerRef} className={className}>
      {staggerChildren
        ? (Array.isArray(children) ? children : [children]).map((child, i) => (
            <div key={i} className="scroll-reveal-item-gsap" style={{ display: "contents" }}>
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
