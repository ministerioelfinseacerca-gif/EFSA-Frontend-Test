"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { progress: 100 }; // 100% inset from top (fully hidden)

      const tl = gsap.timeline({
        onComplete: () => {
          // Desvanece todo el preloader suavemente
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => setIsLoaded(true),
          });
        },
      });

      // Anima el llenado de abajo hacia arriba (reduciendo el inset superior de 100% a 0%)
      tl.to(obj, {
        progress: 0,
        duration: 2.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (fillRef.current) {
            fillRef.current.style.clipPath = `inset(${obj.progress}% 0% 0% 0%)`;
          }
        },
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={preloaderRef}
        className={`fixed inset-0 z-[100] bg-[#060B19] flex items-center justify-center ${
          isLoaded ? "hidden" : ""
        }`}
      >
        <div className="relative w-48 sm:w-64 md:w-80 h-auto">
          {/* Logo de fondo (vacío/marca de agua) */}
          <img
            src="/logo-preloader.svg"
            alt=""
            className="w-full h-auto object-contain opacity-20 grayscale"
          />
          
          {/* Logo que se llena de "agua" (color original) */}
          <div 
            ref={fillRef}
            className="absolute inset-0"
            style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          >
            <img
              src="/logo-preloader.svg"
              alt="Cargando..."
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      <div style={{ visibility: isLoaded ? "visible" : "hidden", height: isLoaded ? "auto" : "100vh", overflow: isLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
