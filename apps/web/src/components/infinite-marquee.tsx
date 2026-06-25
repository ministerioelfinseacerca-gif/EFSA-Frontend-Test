"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/hooks/useGSAP";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export default function InfiniteMarquee({
  items,
  speed = 40,
  className = "",
  reverse = false,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: 0 });

    gsap.to(track, {
      x: reverse ? totalWidth : -totalWidth,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed, reverse]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden w-full select-none ${className}`}>
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block px-6 font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase text-white/5 dark:text-white/5 tracking-wider"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
