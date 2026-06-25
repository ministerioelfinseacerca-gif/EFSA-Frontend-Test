'use client';

import * as React from 'react';
import { useState } from 'react';
import { Calendar, MapPin, Award, BookOpen, Quote, ArrowLeft, Radio, Heart } from 'lucide-react';
import { useGSAP, gsap } from '@/hooks/useGSAP';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/scroll-reveal';

export default function BiografiaPage() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.timeline-section');
    
    sections.forEach((sec, i) => {
      ScrollTrigger.create({
        trigger: sec as Element,
        start: "top 50%", 
        end: "bottom 50%",
        onToggle: self => {
          if (self.isActive) {
            setActiveIndex(i);
          }
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sec as Element,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      });

      tl.fromTo(sec as Element, 
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .to(sec as Element, 
        { opacity: 1, y: 0, duration: 0.4 }
      )
      .to(sec as Element, 
        { opacity: 0, y: -80, duration: 0.3 }
      );
    });
  }, []);

  const timelineItems = [
    {
      year: '1963',
      title: 'Nacimiento',
      desc: 'Nace en Santiago de Chile un 5 de septiembre.',
    },
    {
      year: '1983',
      title: 'Conversión',
      desc: 'Acepta a Cristo como su Salvador personal en septiembre.',
    },
    {
      year: '1987',
      title: 'Matrimonio',
      desc: 'Contrajo matrimonio el 9 de mayo con la Pastora Isabel Pérez.',
    },
    {
      year: '1991',
      title: 'Unción Pastoral',
      desc: 'Es ungido como Pastor Evangelista el 31 de marzo.',
    },
    {
      year: '1994',
      title: 'Fundación de la Iglesia',
      desc: 'Comienza la congregación con 17 hermanos en Santiago Centro.',
    },
    {
      year: 'Presente',
      title: 'Ministerio Global',
      desc: 'Presidente del Ministerio, Director de Radio y conductor de TV.',
    },
  ];

  return (
    <div className="min-h-screen bg-editorial-beige text-navy-midnight flex flex-col font-body">
      {/* Navigation */}
      <TopNavBar />

      <main className="w-full flex flex-col gap-16 pb-32">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden border-b border-navy-midnight/10 bg-editorial-beige py-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto relative flex flex-col items-start gap-10">
            <Link
              href="/#nosotros"
              className="inline-flex items-center gap-2 border border-navy-midnight/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-navy-midnight hover:bg-navy-midnight hover:text-white transition-colors cursor-pointer rounded-full"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a Nosotros
            </Link>

            <div className="flex flex-col items-start w-full max-w-5xl">
              <h1 className="font-body text-[3.5rem] md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-navy-midnight leading-[0.95] text-left">
                Biografía del <br />
                Pastor <span className="font-headline italic font-normal tracking-tight px-1 md:px-3">Marcos</span> <br />
                Morales Chávez<span className="text-sky-800">.</span>
              </h1>
            </div>

            <p className="max-w-xl font-body text-base md:text-lg text-navy-midnight/80 leading-relaxed font-medium">
              Presidente y Fundador del Ministerio Evangelístico Pentecostal El Fin Se Acerca. Con más de 30 años de servicio a la obra del Señor, guiando a la congregación a través de la predicación de la Palabra y la expansión de los medios de comunicación.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Image, Stats, and Timeline (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full z-10 lg:sticky lg:top-24">
            
            {/* Profile Picture Card */}
            <div className="bg-white rounded-3xl flex flex-col items-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-navy-midnight/5 transition-transform duration-500 hover:-translate-y-1 overflow-hidden">
              
              <div className="p-6 md:p-8 flex flex-col items-center gap-5 w-full">
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-full ring-4 ring-gold-base shadow-lg bg-navy-midnight/5 relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ3eqsZdep37GuykFkKXy4dIPzcXKxe0Zgiqmz4a6Ps_7Cw2RbnCWjGuzLmVrA2bgJLbircQ_hg9pRvA126aBOElfWS-qS5uG8xR99Kz6U1yuVBCj-wjIYF3uvg8KSib7gc-ACr-yRT6gGJe5sZjl__c9JM3NP3KzrSlO-1bhYC3I5EqPMy9SWcErtUmpKQrzfK5R8r67yQYmU4SmnaVaa9ffJMFNl47Wv3NMS4R9myT-XJnzd8SUP_EtNVJtrHxrwfps1fgT6CbT"
                    alt="Pastor Marcos Morales"
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>
                <div className="text-center flex flex-col gap-1.5 mt-2">
                  <span className="font-headline text-lg md:text-xl font-bold text-navy-midnight uppercase tracking-tight">
                    Pastor Marcos Morales Ch.
                  </span>
                  <span className="font-body text-xs text-sky-800 uppercase tracking-widest font-semibold bg-sky-800/10 px-3 py-1 rounded-full self-center">
                    Santiago de Chile
                  </span>
                </div>
              </div>
              
              {/* Quick info row */}
              <div className="w-full bg-navy-midnight py-6 grid grid-cols-2 text-center">
                <div className="border-r border-white/10 flex flex-col items-center justify-center">
                  <p className="font-headline text-xl md:text-2xl font-bold text-gold-base">30+</p>
                  <p className="font-body text-[10px] text-white/60 uppercase tracking-widest mt-1 font-semibold">Años de Servicio</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-headline text-xl md:text-2xl font-bold text-gold-base">7,000+</p>
                  <p className="font-body text-[10px] text-white/60 uppercase tracking-widest mt-1 font-semibold">Almas Ganadas</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="border border-navy-midnight/10 bg-white p-4 md:p-5 relative shadow-sm rounded-2xl">
              <span className="inline-flex items-center gap-1.5 border border-navy-midnight/10 bg-navy-midnight/5 px-3 py-1 font-body text-[10px] md:text-xs font-bold uppercase tracking-widest text-sky-800 mb-4 md:mb-5 rounded-full">
                <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" /> Hitos de su vida
              </span>
              
              <div className="relative border-l border-navy-midnight/20 pl-3 md:pl-4 ml-1 md:ml-2 flex flex-col gap-3 md:gap-4 transition-all duration-300">
                {timelineItems.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div key={idx} className={`relative transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {/* Circle Dot Marker */}
                      <div className={`absolute -left-[17px] md:-left-[21px] top-1.5 h-2 w-2 md:h-2.5 md:w-2.5 border rounded-full transition-all duration-500 ${isActive ? 'bg-sky-800 border-sky-800 scale-150 shadow-[0_0_10px_rgba(2,132,199,0.3)]' : 'bg-white border-navy-midnight/30 scale-100'}`}></div>
                      
                      <span className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider block leading-none transition-colors duration-500 ${isActive ? 'text-sky-800' : 'text-navy-midnight/60'}`}>
                        {item.year}
                      </span>
                      <h4 className={`font-headline text-xs md:text-sm font-bold uppercase mt-0.5 leading-tight transition-colors duration-500 ${isActive ? 'text-navy-midnight' : 'text-navy-midnight/80'}`}>
                        {item.title}
                      </h4>
                      <p className={`font-body text-[10px] md:text-xs mt-0.5 leading-snug transition-all duration-500 ${isActive ? 'text-navy-midnight opacity-100' : 'text-navy-midnight/60 opacity-75'}`}>
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Biography Narrative (7/12) */}
          <div className="lg:col-span-7 flex flex-col w-full font-body text-navy-midnight leading-relaxed text-lg lg:text-xl z-0">
            
            {/* Highlight quote */}
            <ScrollReveal className="min-h-[80vh] flex flex-col justify-center py-20">
              <div className="border-l-4 border-gold-base bg-white p-8 md:p-12 shadow-sm rounded-r-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-base/5 to-transparent pointer-events-none" />
                <Quote className="h-12 w-12 text-gold-base opacity-40 mb-6" />
                <p className="font-headline text-2xl lg:text-4xl font-bold text-navy-midnight uppercase tracking-tight leading-tight">
                  “Desde 1984, comenzó a predicar en la populosa Plaza de Armas de Santiago, donde hasta el día de hoy predica junto con su iglesia.”
                </p>
              </div>
            </ScrollReveal>

            {/* Paragraph 1: Childhood (Index 0) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Infancia y <br className="hidden md:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">primeros años.</span>
                </h3>
                <p className="opacity-90">
                  El pastor Marcos Fernando Morales Chávez nació en Santiago de Chile un 5 de septiembre del año 1963. Es el hijo menor de la familia compuesta por Manuel Morales Pradenas (Q.E.P.D.) y Amanda Chávez Huerta. Sus hermanos mayores son Patricio, Alicia y Marcelo.
                </p>
                <p className="opacity-90">
                  Su infancia transcurrió en una pobre población de Santiago, más bien dicho, un campamento en la comuna de San Miguel, donde vivió hasta los 15 años. Luego, se mudó con su familia a un sencillo departamento en el centro de Santiago. La familia era muy religiosa, todos católicos, con una madre devota de la Virgen María. Un tío sacerdote de la familia Chávez fortaleció aún más sus creencias católicas, pero la familia enfrentaba conflictos debido a que don Manuel era alcohólico, y la madre tenía profundos traumas y rencores de su niñez.
                </p>
              </div>
            </div>

            {/* Paragraph 2: Conversion (Index 1) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Conversión <br className="hidden md:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">y llamado.</span>
                </h3>
                <p className="opacity-90">
                  El Pastor Marcos completó sus estudios en 1982. Después de terminar la enseñanza media, decidió trabajar para ayudar a su madre con los gastos de la casa. Trabajó en un supermercado en Calle Portugal, donde conoció a un ferviente joven cristiano. En unos tres meses, este joven lo llevó al mensaje del evangelio, y en septiembre de 1983, el Pastor Marcos aceptó a Cristo como su Señor y Salvador en el baño de su casa.
                </p>
                <p className="opacity-90">
                  Durante tres meses, se dedicó a orar, ayunar y leer la Biblia en su casa, ya que no encontraba una congregación cristiana donde asistir. Finalmente, encontró la iglesia "La Voz de Cristo" en la comuna de Granja (hoy comuna de La Pintana), donde fue bautizado con Espíritu Santo y fuego, además de ser bautizado en las aguas.
                </p>
              </div>
            </div>

            {/* Paragraph 3: Marriage (Index 2) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Sagrado <br className="hidden md:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">matrimonio.</span>
                </h3>
                <p className="opacity-90">
                  En esa iglesia, conoció a su futura esposa, la pastora Isabel Pérez, y después de un noviazgo de 2 años, contrajeron matrimonio el 9 de mayo de 1987. Luego fue llamado al diaconado, predicador, secretario y hombre de confianza de su pastor.
                </p>
              </div>
            </div>

            {/* Paragraph 4: Unción Ministerial (Index 3) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Unción pastoral <br className="hidden lg:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">ministerial.</span>
                </h3>
                <p className="opacity-90">
                  El 31 de marzo de 1991, fue ungido como pastor evangelista de la Misión "La Voz de Cristo" por el Obispo Justo Mena Rojas y el presbiterio.
                </p>
              </div>
            </div>

            {/* Paragraph 5: Plaza de Armas & Church Start (Index 4) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Labor en la <br className="hidden xl:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">Plaza de Armas.</span>
                </h3>
                <p className="opacity-90">
                  Desde 1984, comenzó a predicar en la populosa Plaza de Armas de Santiago, donde hasta el día de hoy predica junto con su iglesia. Más de 7,000 almas se han entregado a Cristo allí, y en ese lugar nació la congregación que actualmente pastorea. Un pequeño grupo de 17 hermanos fue lo que dio inicio a la iglesia en Santiago Centro el 17 de junio de 1994.
                </p>
              </div>
            </div>

            {/* Paragraph 6: Today (Index 5) */}
            <div className="timeline-section opacity-0 min-h-[80vh] flex flex-col justify-center py-20 border-t border-navy-midnight/10">
              <div className="flex flex-col gap-6">
                <h3 className="font-bold text-5xl md:text-6xl lg:text-[4.5rem] text-navy-midnight leading-[1.05] tracking-tighter mb-6">
                  Ministerio <br className="hidden md:block" />
                  <span className="font-headline italic text-sky-800 font-normal tracking-tight">actual.</span>
                </h3>
                <p className="opacity-90">
                  Actualmente, es el Presidente del Ministerio Evangelístico Pentecostal “El fin se acerca”, Director de Radio Tiempos finales 600 AM y cuenta con un espacio titulado “Profecías Bíblicas Hoy” en el canal 38.3 Gracia Tv y en el canal 118 por Mundo Pacífico.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
