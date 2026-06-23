'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Quote, ArrowLeft, Radio, Heart } from 'lucide-react';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function BiografiaPage() {
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
    <div className="min-h-screen bg-background text-on-background flex flex-col font-body">
      {/* Navigation */}
      <TopNavBar />

      <main className="w-full flex flex-col gap-16 pb-32">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden border-b-2 border-gold-base bg-surface-container-lowest py-20 px-margin-mobile md:px-margin-desktop">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-midnight/20 to-transparent pointer-events-none" />
          
          <div className="max-w-container-max mx-auto relative flex flex-col gap-4">
            <a
              href="/#nosotros"
              className="inline-flex items-center gap-2 border border-gold-base/30 bg-surface-container px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold-base hover:bg-gold-base hover:text-navy-midnight transition-colors self-start cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a Nosotros
            </a>

            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase text-gold-highlight leading-none mt-4">
              Pastor Marcos Morales Chávez
            </h1>
            <p className="max-w-2xl font-body text-sm md:text-base text-on-surface opacity-80 leading-relaxed uppercase tracking-wider text-gold-base font-semibold">
              Presidente y Fundador del Ministerio Evangelístico Pentecostal El Fin Se Acerca
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image, Stats, and Timeline (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            
            {/* Profile Picture Card */}
            <div className="border-2 border-gold-base bg-surface-container-lowest p-6 flex flex-col items-center gap-6">
              <div className="w-48 h-48 border-2 border-gold-base shrink-0 overflow-hidden bg-navy-midnight/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeZ3eqsZdep37GuykFkKXy4dIPzcXKxe0Zgiqmz4a6Ps_7Cw2RbnCWjGuzLmVrA2bgJLbircQ_hg9pRvA126aBOElfWS-qS5uG8xR99Kz6U1yuVBCj-wjIYF3uvg8KSib7gc-ACr-yRT6gGJe5sZjl__c9JM3NP3KzrSlO-1bhYC3I5EqPMy9SWcErtUmpKQrzfK5R8r67yQYmU4SmnaVaa9ffJMFNl47Wv3NMS4R9myT-XJnzd8SUP_EtNVJtrHxrwfps1fgT6CbT"
                  alt="Pastor Marcos Morales"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
              <div className="text-center flex flex-col gap-1.5">
                <span className="font-headline text-lg font-bold text-gold-highlight uppercase">
                  Pastor Marcos Morales Ch.
                </span>
                <span className="font-body text-xs text-on-surface opacity-60 uppercase tracking-widest">
                  Santiago de Chile
                </span>
              </div>
              
              {/* Quick info row */}
              <div className="w-full border-t border-surface-bright pt-4 grid grid-cols-2 gap-4 text-center">
                <div className="border-r border-surface-bright pr-2">
                  <p className="font-headline text-xl font-bold text-gold-base">30+ AÑOS</p>
                  <p className="font-body text-[10px] text-on-surface opacity-60 uppercase tracking-wider mt-0.5">De Ministerio</p>
                </div>
                <div>
                  <p className="font-headline text-xl font-bold text-gold-base">7,000+</p>
                  <p className="font-body text-[10px] text-on-surface opacity-60 uppercase tracking-wider mt-0.5">Almas Ganadas</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="border-2 border-gold-base bg-surface-container p-6">
              <span className="inline-flex items-center gap-1.5 border border-gold-base/20 bg-navy-midnight/20 px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-gold-base mb-6">
                <Calendar className="h-3.5 w-3.5" /> Hitos de su vida
              </span>
              
              <div className="relative border-l border-gold-base/30 pl-4 ml-2 flex flex-col gap-6">
                {timelineItems.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Dot Marker */}
                    <div className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 bg-background border border-gold-base"></div>
                    <span className="font-mono text-xs font-bold text-gold-base uppercase tracking-wider block">
                      {item.year}
                    </span>
                    <h4 className="font-headline text-sm font-bold uppercase text-gold-highlight mt-0.5">
                      {item.title}
                    </h4>
                    <p className="font-body text-xs text-on-surface opacity-75 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Biography Narrative (7/12) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full font-body text-on-surface leading-relaxed text-base">
            
            {/* Highlight quote */}
            <div className="border-l-4 border-gold-base bg-surface-container-low p-6">
              <Quote className="h-8 w-8 text-gold-base opacity-40 mb-3" />
              <p className="font-headline text-lg font-bold text-gold-highlight uppercase tracking-tight">
                “Desde 1984, comenzó a predicar en la populosa Plaza de Armas de Santiago, donde hasta el día de hoy predica junto con su iglesia.”
              </p>
            </div>

            {/* Paragraph 1: Childhood */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold uppercase text-gold-base tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Infancia y Primeros Años
              </h3>
              <p className="opacity-90">
                El pastor Marcos Fernando Morales Chávez nació en Santiago de Chile un 5 de septiembre del año 1963. Es el hijo menor de la familia compuesta por Manuel Morales Pradenas (Q.E.P.D.) y Amanda Chávez Huerta. Sus hermanos mayores son Patricio, Alicia y Marcelo.
              </p>
              <p className="opacity-90">
                Su infancia transcurrió en una pobre población de Santiago, más bien dicho, un campamento en la comuna de San Miguel, donde vivió hasta los 15 años. Luego, se mudó con su familia a un sencillo departamento en el centro de Santiago. La familia era muy religiosa, todos católicos, con una madre devota de la Virgen María. Un tío sacerdote de la familia Chávez fortaleció aún más sus creencias católicas, pero la familia enfrentaba conflictos debido a que don Manuel era alcohólico, y la madre tenía profundos traumas y rencores de su niñez.
              </p>
            </div>

            {/* Paragraph 2: Conversion */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold uppercase text-gold-base tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
                <Heart className="h-4 w-4" /> Conversión y Llamado
              </h3>
              <p className="opacity-90">
                El Pastor Marcos completó sus estudios en 1982. Después de terminar la enseñanza media, decidió trabajar para ayudar a su madre con los gastos de la casa. Trabajó en un supermercado en Calle Portugal, donde conoció a un ferviente joven cristiano. En unos tres meses, este joven lo llevó al mensaje del evangelio, y en septiembre de 1983, el Pastor Marcos aceptó a Cristo como su Señor y Salvador en el baño de su casa.
              </p>
              <p className="opacity-90">
                Durante tres meses, se dedicó a orar, ayunar y leer la Biblia en su casa, ya que no encontraba una congregación cristiana donde asistir. Finalmente, encontró la iglesia "La Voz de Cristo" en la comuna de Granja (hoy comuna de La Pintana), donde fue bautizado con Espíritu Santo y fuego, además de ser bautizado en las aguas.
              </p>
            </div>

            {/* Paragraph 3: Marriage & Diaconate */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold uppercase text-gold-base tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
                <Award className="h-4 w-4" /> Matrimonio y Unción Ministerial
              </h3>
              <p className="opacity-90">
                En esa iglesia, conoció a su futura esposa, la pastora Isabel Pérez, y después de un noviazgo de 2 años, contrajeron matrimonio el 9 de mayo de 1987. Luego fue llamado al diaconado, predicador, secretario y hombre de confianza de su pastor. El 31 de marzo de 1991, fue ungido como pastor evangelista de la Misión "La Voz de Cristo" por el Obispo Justo Mena Rojas y el presbiterio.
              </p>
            </div>

            {/* Paragraph 4: Plaza de Armas & Church Start */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold uppercase text-gold-base tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> La Obra en Plaza de Armas
              </h3>
              <p className="opacity-90">
                Desde 1984, comenzó a predicar en la populosa Plaza de Armas de Santiago, donde hasta el día de hoy predica junto con su iglesia. Más de 7,000 almas se han entregado a Cristo allí, y en ese lugar nació la congregación que actualmente pastorea. Un pequeño grupo de 17 hermanos fue lo que dio inicio a la iglesia en Santiago Centro el 17 de junio de 1994.
              </p>
            </div>

            {/* Paragraph 5: Today */}
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-lg font-bold uppercase text-gold-base tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
                <Radio className="h-4 w-4" /> Ministerio Actual
              </h3>
              <p className="opacity-90">
                Actualmente, es el Presidente del Ministerio Evangelístico Pentecostal “El fin se acerca”, Director de Radio Tiempos finales 600 AM y cuenta con un espacio titulado “Profecías Bíblicas Hoy” en el canal 38.3 Gracia Tv y en el canal 118 por Mundo Pacífico.
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
