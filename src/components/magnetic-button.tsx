"use client";

import { useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const btn = ref.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transform = "translate(0, 0)";
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-transform duration-300 ease-out`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: "inline-block" }}
    >
      {children}
    </div>
  );
}
