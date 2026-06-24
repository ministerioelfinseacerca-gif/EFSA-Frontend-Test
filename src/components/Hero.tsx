'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/hooks/useGSAP';
import TextReveal from './text-reveal';
import PremiumButton from './PremiumButton';
import MagneticButton from './magnetic-button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !contentRef.current) return;

    // Efecto parallax en lugar de "pin" para evitar solapamientos con flexbox
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // Animar el contenido hacia abajo (efecto parallax suave) y desvanecerlo
    tl.to(contentRef.current, {
      y: 150,
      opacity: 0,
      scale: 0.95,
      ease: "none",
    });

    // Parallax muy sutil también en la imagen de fondo
    const bgImage = containerRef.current.querySelector('.bg-cover');
    if (bgImage) {
      gsap.to(bgImage, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, [], containerRef);

  return (
    <section 
      ref={containerRef} 
      id="inicio" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Background Image with vibrant colors and light flat overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center hero-entrance"
        style={{ backgroundImage: `url("/portada.jpg")` }}
      />
      {/* Reduced overlay opacity to 30% to keep image vibrant, plus a bottom gradient for button legibility */}
      <div className="absolute inset-0 bg-black/30 z-10 hero-entrance" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-70" />

      {/* Content */}
      <div 
        ref={contentRef} 
        className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center"
      >
        {/* Overline Oficial */}
        <div className="hero-entrance hero-entrance-delay-1">
          <span className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-gold-base/20 px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-efsa-red live-pulse" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-base">
              MINISTERIO EVANGELÍSTICO PENTECOSTAL
            </p>
          </span>
        </div>

        {/* TextReveal Oficial */}
        <TextReveal
          as="h1"
          className="font-heading text-5xl md:text-7xl lg:text-9xl text-white uppercase leading-none tracking-tight font-bold max-w-5xl mx-auto drop-shadow-lg"
        >
          EL FIN SE ACERCA
        </TextReveal>

        <p className="mt-8 font-sans text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed hero-entrance hero-entrance-delay-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
          Descubre un espacio dedicado a la edificación espiritual y el estudio profundo de la Palabra. Recursos doctrinales y análisis profético en los tiempos finales.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 hero-entrance hero-entrance-delay-3">
          <MagneticButton strength={0.2}>
            <PremiumButton as="a" href="#biblioteca">
              Explorar Biblioteca
            </PremiumButton>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a
              href="/radio"
              className="group relative inline-flex items-center justify-center gap-3 border-2 border-gold-base/40 text-gold-base bg-transparent font-headline text-sm font-bold uppercase tracking-widest px-8 py-4 overflow-hidden transition-all duration-500 hover:border-gold-highlight hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <div className="absolute inset-0 bg-navy-midnight translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
              <span className="relative z-10 w-2 h-2 rounded-full bg-efsa-red live-pulse" />
              <span className="relative z-10 group-hover:text-gold-highlight transition-colors duration-500">Radio en Vivo</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
