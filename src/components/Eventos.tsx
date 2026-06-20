'use client';

import { motion } from 'framer-motion';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

export default function Eventos() {
  const events = [
    {
      date: '06 DIC',
      title: 'CULTO DE CONFERENCIAS',
      location: 'SANTIAGO CENTRO',
      time: '19:30 HORAS',
    },
    {
      date: '28 NOV',
      title: 'CAMPAÑA EVANGELÍSTICA',
      location: 'PLAZA DE ARMAS',
      time: '19:15 HORAS',
    },
    {
      date: '22 NOV',
      title: 'SEGUNDO CONGRESO DE MUJERES',
      location: 'TEMPLO CENTRAL',
      time: '10:00 HORAS',
    },
  ];

  return (
    <section
      id="eventos"
      className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24 mb-24"
    >
      {/* Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-2xl text-gold-base uppercase tracking-tighter font-semibold">
          PRÓXIMOS EVENTOS
        </h2>
      </div>

      {/* Grid */}
      <FadeInCascade className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {events.map((event, idx) => (
          <FadeInItem key={idx}>
            <motion.div
              className="bg-surface-container-high border-2 border-gold-base p-8 flex flex-col gap-6 group hover:border-gold-highlight transition-all h-full"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              {/* Date Box */}
              <div className="bg-gold-base text-navy-midnight px-3 py-1 font-body text-xs font-bold uppercase self-start">
                {event.date}
              </div>

              {/* Details */}
              <div className="flex flex-col gap-2">
                <h3 className="font-headline text-lg text-off-white uppercase leading-tight font-bold group-hover:text-gold-highlight transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gold-base opacity-80">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="font-body text-xs uppercase">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gold-base opacity-80">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span className="font-body text-xs uppercase">{event.time}</span>
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                className="mt-auto border-2 border-gold-base text-gold-base font-body text-xs font-bold uppercase px-6 py-3 hover:bg-gold-base hover:text-navy-midnight transition-colors cursor-pointer w-full text-center"
                whileTap={{ scale: 0.97 }}
              >
                VER MÁS
              </motion.button>
            </motion.div>
          </FadeInItem>
        ))}
      </FadeInCascade>
    </section>
  );
}
