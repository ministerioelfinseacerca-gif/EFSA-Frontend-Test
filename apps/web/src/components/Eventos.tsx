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
    <section id="eventos" className="py-20 sm:py-28 px-6 sm:px-8 md:px-12 lg:px-16 border-t border-gold-base/15 bg-editorial-beige font-[family-name:var(--font-montserrat)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-black text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
              Próximos <br className="hidden md:block" />
              <span className="font-light italic text-sky-800 tracking-tight">eventos.</span>
            </h2>
          </div>
          <PremiumButton as="a" href="#todos-los-eventos" icon={undefined} variant="light">
            Ver todos los eventos
          </PremiumButton>
        </div>

        {/* List */}
        <div className="lg:col-span-8">
          <ScrollReveal animation="right" staggerChildren={true} stagger={0.12} y={25} className="flex flex-col divide-y divide-navy-midnight/10 border-t border-b border-navy-midnight/10">
            {events.map((event, idx) => (
              <a
                key={idx}
                href={`#evento-${idx}`}
                className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-transparent hover:bg-navy-midnight/5 transition-colors duration-300 px-4 -mx-4 sm:mx-0 sm:px-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-sm text-sky-800 tracking-wider uppercase">
                      {event.date}
                    </span>
                    {event.isLive && (
                      <div className="flex items-center gap-2 border border-sky-800/20 bg-sky-800/5 px-2 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-800 live-pulse" />
                        <span className="font-black text-[10px] text-sky-800 uppercase">En Vivo</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-black text-xl sm:text-2xl text-navy-midnight uppercase group-hover:translate-x-1 transition-transform duration-300">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-1">
                    <div className="flex items-center gap-2 text-navy-midnight/65">
                      <MapPin className="h-4 w-4 text-navy-midnight/50" strokeWidth={1.5} />
                      <span className="font-light text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-navy-midnight/65">
                      <Clock className="h-4 w-4 text-navy-midnight/50" strokeWidth={1.5} />
                      <span className="font-light text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center justify-center w-12 h-12 border border-navy-midnight/20 text-navy-midnight/40 group-hover:border-navy-midnight group-hover:bg-navy-midnight group-hover:text-white transition-all duration-300">
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
