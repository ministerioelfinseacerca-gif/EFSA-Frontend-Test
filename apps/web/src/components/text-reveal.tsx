"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/hooks/useGSAP";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.06,
  as: Tag = "div",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".reveal-word-gsap");
    if (words.length === 0) return;

    gsap.set(words, {
      y: "110%",
      opacity: 0,
    });

    gsap.to(words, {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      stagger: stagger,
      delay: delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
  }, [delay, stagger], containerRef);

  if (typeof children !== "string") {
    return <Tag className={className}>{children}</Tag>;
  }

  const wordsList = children.split(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={containerRef as React.Ref<any>} className={`${className} font-heading`}>
      {wordsList.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
          <span className="reveal-word-gsap inline-block">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
