'use client';

import { Tablet, BookOpen, ShoppingCart, Book, Store } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import TextReveal from './text-reveal';
import PremiumButton from './PremiumButton';

export default function Recursos() {
  return (
    <section id="recursos-edificacion" className="py-20 sm:py-28 px-4 border-t border-gold-base/10 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Title */}
        <div className="w-full">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-efsa-red mb-4">
            Biblioteca Digital
          </p>
          <TextReveal
            as="h2"
            className="font-headline text-4xl sm:text-5xl text-gold-highlight uppercase tracking-tight font-bold mb-6"
          >
            RECURSOS PARA LA EDIFICACIÓN
          </TextReveal>
        </div>

        <ScrollReveal animation="up" staggerChildren={true} stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Material de Estudio */}
          <div className="bg-surface-container-lowest border border-gold-base/20 p-8 md:p-12 flex flex-col justify-between gap-8 relative group hover:border-gold-base/40 transition-colors duration-300">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="w-14 h-14 bg-navy-midnight border border-gold-base/20 flex items-center justify-center">
                <Tablet className="h-7 w-7 text-white" />
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="font-headline text-3xl text-gold-highlight uppercase tracking-tight font-bold">
                  MATERIAL DE ESTUDIO
                </h3>
                <p className="font-body text-base text-on-surface opacity-70 leading-relaxed max-w-md">
                  Acceso inmediato a Reflexiones, Bosquejos para predicadores y Librillos teológicos.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-10">
              <PremiumButton>
                REFLEXIONES
              </PremiumButton>
              <a
                href="#bosquejos"
                className="inline-flex items-center justify-center border-2 border-gold-base/40 text-gold-base font-headline text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-gold-base hover:text-navy-midnight transition-colors duration-300"
              >
                BOSQUEJOS
              </a>
            </div>

            {/* Background Icon Decoration */}
            <BookOpen className="h-48 w-48 text-gold-base opacity-[0.03] absolute -bottom-10 -right-10 pointer-events-none select-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700" />
          </div>

          {/* Card 2: Librería Israel */}
          <div className="bg-surface-container-lowest border border-gold-base/20 p-8 md:p-12 flex flex-col justify-between gap-8 relative group hover:border-gold-base/40 transition-colors duration-300">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="w-14 h-14 bg-efsa-red border border-efsa-red/80 flex items-center justify-center">
                <ShoppingCart className="h-7 w-7 text-white" />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-headline text-3xl text-gold-highlight uppercase tracking-tight font-bold">
                  LIBRERÍA ISRAEL
                </h3>
                <p className="font-body text-base text-on-surface opacity-70 leading-relaxed max-w-md">
                  Adquiere biblias de estudio, literatura escogida y material devocional seleccionado con rigor doctrinal para tu crecimiento.
                </p>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <PremiumButton as="a" href="#tienda" icon={Store}>
                VISITAR TIENDA
              </PremiumButton>
            </div>

            {/* Background Icon Decoration */}
            <Book className="h-48 w-48 text-efsa-red opacity-[0.03] absolute -bottom-10 -right-10 pointer-events-none select-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
