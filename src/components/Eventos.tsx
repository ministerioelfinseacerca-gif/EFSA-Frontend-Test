'use client';

import { MapPin, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from './scroll-reveal';
import TextReveal from './text-reveal';
import PremiumButton from './PremiumButton';

export default function Eventos() {
  const events = [
    {
      date: '06 DIC',
      title: 'CULTO DE CONFERENCIAS',
      location: 'SANTIAGO CENTRO',
      time: '19:30 HORAS',
      isLive: true,
    },
    {
      date: '28 NOV',
      title: 'CAMPAÑA EVANGELÍSTICA',
      location: 'PLAZA DE ARMAS',
      time: '19:15 HORAS',
      isLive: false,
    },
    {
      date: '22 NOV',
      title: 'SEGUNDO CONGRESO DE MUJERES',
      location: 'TEMPLO CENTRAL',
      time: '10:00 HORAS',
      isLive: false,
    },
  ];

  return (
    <section id="eventos" className="py-20 sm:py-28 px-4 border-t border-gold-base/10 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-efsa-red mb-4">
              Próximos
            </p>
            <TextReveal
              as="h2"
              className="font-headline text-4xl sm:text-5xl text-gold-highlight uppercase tracking-tight font-bold"
            >
              EVENTOS
            </TextReveal>
          </div>
          <PremiumButton as="a" href="#todos-los-eventos" icon={undefined}>
            Ver todos los eventos
          </PremiumButton>
        </div>

        {/* List */}
        <div className="lg:col-span-8">
          <ScrollReveal animation="right" staggerChildren={true} stagger={0.12} y={25} className="flex flex-col divide-y divide-gold-base/10 border-t border-b border-gold-base/10">
            {events.map((event, idx) => (
              <a
                key={idx}
                href={`#evento-${idx}`}
                className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-transparent hover:bg-surface-container-high transition-colors duration-300 px-4 -mx-4 sm:mx-0 sm:px-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-headline text-sm text-efsa-red tracking-wider uppercase font-bold">
                      {event.date}
                    </span>
                    {event.isLive && (
                      <div className="flex items-center gap-2 border border-efsa-red/20 bg-efsa-red/5 px-2 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-efsa-red live-pulse" />
                        <span className="font-headline text-[10px] text-efsa-red uppercase font-bold">En Vivo</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline text-xl sm:text-2xl text-gold-highlight uppercase font-bold group-hover:translate-x-1 transition-transform duration-300">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-1">
                    <div className="flex items-center gap-2 text-on-surface opacity-60">
                      <MapPin className="h-4 w-4" strokeWidth={1.5} />
                      <span className="font-sans text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface opacity-60">
                      <Clock className="h-4 w-4" strokeWidth={1.5} />
                      <span className="font-sans text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center justify-center w-12 h-12 border border-gold-base/20 text-gold-base/40 group-hover:border-gold-base group-hover:bg-gold-base group-hover:text-navy-midnight transition-all duration-300">
                  <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </a>
            ))}
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
