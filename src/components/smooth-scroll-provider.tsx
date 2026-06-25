"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/hooks/useGSAP";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Configuración Lenis solemne y pesada
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    // Sincronizar Lenis con ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Integrar ticker de GSAP con Lenis
    const updatePhysics = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updatePhysics);

    // Desactivar lagSmoothing para evitar saltos en la sincronización
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updatePhysics);
    };
  }, []);

  return <>{children}</>;
}
