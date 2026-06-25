import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

// MOCK DATA
const agendaData = [
  {
    month: "AGOSTO 2025",
    events: [
      { day: "02", title: "Iglesia de Dios Cristo Viene", location: "5201 Sanger Av. Suite G, Waco Texas - EE.UU." },
      { day: "21", title: "Ministerio Internacional Bajo el poder del Espíritu Santo", location: "1006 Yager Lane Building D Austin, Texas - EE.UU." },
      { day: "22", title: "Iglesia Cristiana Camino de Santidad", location: "1855 Colony Creek Dr, Austin, Texas 78758" },
    ]
  },
  {
    month: "NOVIEMBRE 2025",
    events: [
      { day: "22", title: "Visita a la Región del Bío Bío", location: "Región del Bío Bío, Chile" },
    ]
  },
  {
    month: "DICIEMBRE 2025",
    events: [
      { day: "05", title: "Iglesia ministerio evangelístico y Restauración \"Betesda\"", location: "Pastor Walter Briones y pastora Nancy, La Pintana." },
      { day: "13", title: "Congreso \"Dejando un legado Pentecostal\"", location: "Templo central del ministerio evangelístico Pentecostés \"Adonay\", 10 Oriente # 8022. Población San Gregorio, La Granja." },
    ]
  }
];

export const metadata = {
  title: 'Agenda Pastor Marcos | Ministerio Evangelístico Pentecostal',
  description: 'Conoce la agenda de eventos y visitas ministeriales del Pastor Marcos para el año en curso.',
};

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-editorial-beige font-[family-name:var(--font-montserrat)] flex flex-col">
      {/* Botón de volver */}
      <Link href="/#nosotros" className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white bg-navy-midnight/80 px-4 py-2 rounded-full hover:bg-gold-base hover:text-navy-midnight transition-colors backdrop-blur-md">
        <ArrowLeft className="w-4 h-4" />
        <span className="font-bold text-xs uppercase tracking-widest">Volver</span>
      </Link>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* LEFT COLUMN: Sticky Image & Title */}
        <div className="lg:w-1/2 relative min-h-[60vh] lg:min-h-screen lg:sticky top-0 overflow-hidden flex flex-col justify-end p-8 md:p-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/pastor-predicando.jpeg")' }}
          />
          {/* Gradiente para que el texto sea legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-midnight/90 via-navy-midnight/40 to-transparent" />
          
          <div className="relative z-10 text-white mt-auto">
            <h1 className="font-black text-6xl md:text-8xl lg:text-[8rem] text-white leading-none tracking-tighter mb-4">
              Agenda <br className="hidden md:block" />
              <span className="font-light italic text-gold-base tracking-tight">Pastor Marcos.</span>
            </h1>
            <p className="font-light text-white/80 max-w-md text-lg leading-relaxed border-l-2 border-gold-base pl-4">
              Acompañanos en nuestras próximas actividades, campañas y visitas ministeriales alrededor del mundo.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Events */}
        <div className="lg:w-1/2 bg-surface-container-lowest flex flex-col">
          <div className="flex-1 px-4 py-16 md:px-16 md:py-24 max-w-2xl mx-auto w-full flex flex-col gap-16">
            
            {agendaData.map((monthGroup, idx) => (
              <div key={idx} className="flex flex-col gap-8">
                {/* Month Title */}
                <h2 className="font-black text-3xl md:text-4xl text-navy-midnight uppercase tracking-widest border-b border-navy-midnight/10 pb-4">
                  {monthGroup.month}
                </h2>
                
                {/* Events List */}
                <div className="flex flex-col gap-6">
                  {monthGroup.events.map((evt, evtIdx) => (
                    <div key={evtIdx} className="bg-white border border-navy-midnight/10 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-lg transition-shadow group">
                      
                      {/* Date Box */}
                      <div className="bg-navy-midnight text-gold-base flex items-center justify-center w-16 h-16 shrink-0 group-hover:bg-gold-base group-hover:text-navy-midnight transition-colors">
                        <span className="font-black text-3xl leading-none">{evt.day}</span>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 flex flex-col gap-1">
                        <h3 className="font-black text-lg md:text-xl text-navy-midnight uppercase leading-tight">
                          {evt.title}
                        </h3>
                        <p className="font-light text-navy-midnight/70 text-sm md:text-base leading-relaxed">
                          {evt.location}
                        </p>
                      </div>

                      {/* Action Button */}
                      <div className="mt-4 sm:mt-0 shrink-0">
                        <button className="border-2 border-navy-midnight/10 text-navy-midnight font-black text-[10px] sm:text-xs uppercase px-6 py-2.5 rounded-full hover:border-navy-midnight hover:bg-navy-midnight hover:text-white transition-all">
                          VER AFICHE
                        </button>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom Year Indicator */}
            <div className="pt-12 flex items-center justify-center gap-4 text-navy-midnight/30">
              <span className="font-black text-5xl">2025</span>
            </div>

          </div>
        </div>
      </div>
      
      <Footer theme="light" />
    </main>
  );
}
