'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ShieldCheck, Heart, Sparkles, ChevronDown, Loader2 } from 'lucide-react';
import FadeInCascade, { FadeInItem } from './FadeInCascade';
import TextReveal from './TextReveal';

interface Doctrine {
  number: string;
  title: string;
  desc: string;
  verses: string;
}

function normalizeBookName(book: string): string {
  const bookMap: Record<string, string> = {
    'génesis': 'Genesis',
    'genesis': 'Genesis',
    'éxodo': 'Exodo',
    'exodo': 'Exodo',
    'levítico': 'Levitico',
    'levitico': 'Levitico',
    'números': 'Numeros',
    'numeros': 'Numeros',
    'josué': 'Josue',
    'josue': 'Josue',
    'nehemías': 'Nehemias',
    'nehemias': 'Nehemias',
    'salmo': 'Salmos',
    'salmos': 'Salmos',
    'isaías': 'Isaias',
    'isaias': 'Isaias',
    'jeremías': 'Jeremias',
    'jeremias': 'Jeremias',
    'ezequiel': 'Ezequiel',
    'sofonías': 'Sofonias',
    'sofonias': 'Sofonias',
    'zacarías': 'Zacarias',
    'zacarias': 'Zacarias',
    'malaquías': 'Malaquias',
    'malaquias': 'Malaquias',
    'mateo': 'Mateo',
    'marcos': 'Marcos',
    'lucas': 'Lucas',
    'juan': 'Juan',
    'hechos': 'Hechos',
    'romanos': 'Romanos',
    'gálatas': 'Galatas',
    'galatas': 'Galatas',
    'efesios': 'Efesios',
    'filipenses': 'Filipenses',
    'colosenses': 'Colosenses',
    'tito': 'Tito',
    'hebreos': 'Hebreos',
    'santiago': 'Santiago',
    '1 juan': '1-Juan',
    '1juan': '1-Juan',
    '1 corintios': '1-Corintios',
    '1corintios': '1-Corintios',
    '2 corintios': '2-Corintios',
    '2corintios': '2-Corintios',
    '1 tesalonicenses': '1-Tesalonicenses',
    '1tesalonicenses': '1-Tesalonicenses',
    '2 tesalonicenses': '2-Tesalonicenses',
    '2tesalonicenses': '2-Tesalonicenses',
    '1 pedro': '1-Pedro',
    '1pedro': '1-Pedro',
    '2 pedro': '2-Pedro',
    '2pedro': '2-Pedro',
    '1 timoteo': '1-Timoteo',
    '1timoteo': '1-Timoteo',
    '2 timoteo': '2-Timoteo',
    '2timoteo': '2-Timoteo',
    'apocalipsis': 'Apocalipsis'
  };

  const key = book.toLowerCase().trim();
  return bookMap[key] || book;
}

export default function DeclaracionFe() {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [tooltip, setTooltip] = React.useState<{
    verse: string;
    x: number;
    y: number;
    arrowOffset: number;
    visible: boolean;
  } | null>(null);
  const [verseTexts, setVerseTexts] = React.useState<
    Record<string, { text: string; loading: boolean; error: boolean }>
  >({});

  const doctrines: Doctrine[] = [
    {
      number: '01',
      title: 'La Santísima Trinidad',
      desc: 'Creemos en Dios Padre, Dios Hijo y Dios Espíritu Santo como un solo Dios verdadero, eterno, coesencial y coigual en gloria y poder.',
      verses: 'Génesis 1:26-27, Isaías 6:8, Isaías 48:16, Mateo 3:16, Mateo 28:19, 1 Juan 5:7, 2 Corintios 13:14, Apocalipsis 5:1-7',
    },
    {
      number: '02',
      title: 'Justificación, regeneración y santificación',
      desc: 'Creemos en la obra transformadora y redentora de Jesucristo en la cruz para la salvación del alma, la regeneración por el Espíritu Santo y el llamado a vivir una vida santa apartada del pecado.',
      verses: 'Juan 3:2-3, 1 Corintios 1:30, 2 Corintios 5:17, Romanos 5:18, Romanos 6:22, 1 Tesalonicenses 4:3',
    },
    {
      number: '03',
      title: 'La deidad del Señor Jesucristo',
      desc: 'Creemos que Jesucristo es Dios manifestado en carne, nacido de la virgen María, que vivió sin pecado, murió en nuestro lugar, resucitó corporalmente y ascendió a los cielos.',
      verses: 'Romanos 9:5, Colosenses 2:9, Tito 2:13, Hebreos 1:8, 1 Juan 5:20, Apocalipsis 1:8',
    },
    {
      number: '04',
      title: 'La infalibilidad de las Sagradas Escrituras',
      desc: 'Creemos que la Biblia es la Palabra inspirada de Dios, inerrante e infalible, y constituye la única y máxima regla de fe, doctrina y conducta cristiana.',
      verses: 'Salmo 19:7, Salmo 119:105, Mateo 4:4, Mateo 24:35, Juan 17:17, Hebreos 4:12, 2 Pedro 1:20-21',
    },
    {
      number: '05',
      title: 'La salvación solo por gracia',
      desc: 'Creemos que la salvación es un regalo inmerecido de Dios (gracia), recibido únicamente por medio de la fe personal en la persona y obra de nuestro Señor Jesucristo.',
      verses: 'Marcos 16:16, Juan 1:18, Juan 5:24, Hechos 16:31, Romanos 6:14, Efesios 2:8-9, Tito 2:11, Juan 3:16, Romanos 5:8, 1 Timoteo 2:3-4, 1 Pedro 1:9',
    },
    {
      number: '06',
      title: 'El bautismo en agua',
      desc: 'Creemos en el bautismo bíblico por inmersión en agua en el nombre del Padre, del Hijo y del Espíritu Santo, como un testimonio público de fe y sepultura del viejo hombre.',
      verses: 'Mateo 28:19, Marcos 16:16, Lucas 3:21, Hechos 8:36, Romanos 6:4, 1 Juan 5:7',
    },
    {
      number: '07',
      title: 'El bautismo del Espíritu Santo',
      desc: 'Creemos en la llenura y poder del Espíritu Santo para servicio y testimonio de la iglesia, con la manifestación inicial de hablar en otras lenguas según el Espíritu da que se hablen.',
      verses: 'Mateo 3:11, Marcos 16:15-17, Hechos 1:8, Hechos 2:4, 1 Pedro 2:24, Santiago 5:14-15',
    },
    {
      number: '08',
      title: 'Los dones espirituales',
      desc: 'Creemos en la vigencia actual y manifestación soberana de los dones espirituales del Espíritu Santo dentro del cuerpo de Cristo para edificación mutua.',
      verses: 'Éxodo 14:3, Mateo 10:8, Marcos 16:17-18, 1 Corintios 12:1, Hechos 6:10, Hechos 15:28',
    },
    {
      number: '09',
      title: 'La segunda venida de Cristo',
      desc: 'Creemos en el regreso inminente, literal, corporal y glorioso de Jesucristo por su Iglesia, seguido por su reinado visible sobre la tierra.',
      verses: 'Mateo 24:40-42, 1 Tesalonicenses 1:10, 1 Tesalonicenses 4:13-18, Hebreos 9:28, Apocalipsis 3:10, Apocalipsis 22:7, Daniel 7:13-14, Mateo 24:27-29, Mateo 25:31, Lucas 17:24, Marcos 14:62, 2 Tesalonicenses 1:7-10, Apocalipsis 1:7, Apocalipsis 19:11-16',
    },
    {
      number: '10',
      title: 'La resurrección y el juicio final',
      desc: 'Creemos en la resurrección de los muertos, tanto de justos para vida eterna como de injustos para condenación perpetua en el juicio final ante el trono de Dios.',
      verses: 'Números 16:31, Salmo 9:17, Mateo 25:46, Marcos 9:44, Juan 14:1-3, 2 Corintios 12:2-4, Apocalipsis 7:9-12, Apocalipsis 20:15, Apocalipsis 21:4',
    },
  ];

  const practices = [
    'Himnos de gloria y alabanza',
    'Cadenas de oración activa',
    'Ayunos congregacionales',
    'Escuela dominical doctrinal',
    'Estudios bíblicos profundos',
    'Vigilias de intercesión nocturna',
    'Evangelismo en hospitales, cárceles y calles',
    'Campañas evangelísticas al aire libre',
    'Manifestación de los dones del Espíritu Santo',
    'Predicación de sana doctrina centrada en Cristo',
  ];

  const toggleDoctrine = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
    setTooltip(null);
  };

  const fetchVerseText = async (verseStr: string) => {
    if (verseTexts[verseStr]) return;

    setVerseTexts((prev) => ({
      ...prev,
      [verseStr]: { text: '', loading: true, error: false },
    }));

    try {
      // Regex parsing e.g. "Génesis 1:26-27"
      const match = verseStr.match(/^(\d?\s*[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)\s+(\d+):([\d\-]+)$/);
      if (!match) {
        throw new Error('Formato de versículo inválido');
      }

      const rawBook = match[1];
      const chapter = match[2];
      const verseRange = match[3];
      const book = normalizeBookName(rawBook);

      const res = await fetch(`https://bible-api.deno.dev/api/read/rv1960/${book}/${chapter}/${verseRange}`);
      if (!res.ok) {
        throw new Error('Fallo en la respuesta de la API');
      }

      const data = await res.json();
      let text = '';
      if (Array.isArray(data)) {
        text = data.map((v) => `${v.number}. ${v.verse}`).join(' ');
      } else if (data && data.verse) {
        text = data.verse;
      } else {
        throw new Error('Formato de respuesta desconocido');
      }

      setVerseTexts((prev) => ({
        ...prev,
        [verseStr]: { text, loading: false, error: false },
      }));
    } catch (err) {
      console.error('Error cargando versículo:', err);
      setVerseTexts((prev) => ({
        ...prev,
        [verseStr]: { text: '', loading: false, error: true },
      }));
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>, verseStr: string) => {
    const badgeEl = e.currentTarget;
    const sectionEl = document.getElementById('declaracion-fe');
    if (!badgeEl || !sectionEl) return;

    const badgeRect = badgeEl.getBoundingClientRect();
    const sectionRect = sectionEl.getBoundingClientRect();

    const tooltipWidth = 288; // w-72 (18rem)
    const badgeCenter = badgeRect.left - sectionRect.left + badgeRect.width / 2;
    let tooltipX = badgeCenter;

    // Clamp tooltipX to stay within section bounds
    const minX = tooltipWidth / 2 + 16;
    const maxX = sectionRect.width - (tooltipWidth / 2 + 16);
    if (tooltipX < minX) {
      tooltipX = minX;
    } else if (tooltipX > maxX) {
      tooltipX = maxX;
    }

    const arrowOffset = badgeCenter - tooltipX;
    const tooltipY = badgeRect.top - sectionRect.top;

    setTooltip({
      verse: verseStr,
      x: tooltipX,
      y: tooltipY,
      arrowOffset,
      visible: true,
    });

    fetchVerseText(verseStr);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const handleVerseClick = (e: React.MouseEvent<HTMLSpanElement>, verseStr: string) => {
    e.stopPropagation();
    if (tooltip && tooltip.verse === verseStr && tooltip.visible) {
      setTooltip(null);
    } else {
      handleMouseEnter(e, verseStr);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      setTooltip(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section
      id="declaracion-fe"
      className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col gap-8 scroll-mt-24"
    >
      {/* Title */}
      <div className="border-b-2 border-gold-base pb-2">
        <h2 className="font-headline text-sm font-bold text-gold-base uppercase tracking-widest">
          DECLARACIÓN DOCTRINAL
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Introduction & Practices (5/12) */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full">
          <div className="border-2 border-gold-base bg-surface-container-lowest p-6 flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 border border-gold-base/20 bg-navy-midnight/20 px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-gold-base self-start">
              <ShieldCheck className="h-3.5 w-3.5" /> Quiénes Somos
            </span>
            <TextReveal
              as="h3"
              text="SENDA ANTIGUA"
              className="font-headline text-3xl font-bold uppercase tracking-tight text-gold-highlight"
            />
            <p className="font-body text-sm text-on-surface opacity-80 leading-relaxed">
              El Ministerio Evangelístico Pentecostal <strong>“El Fin Se Acerca”</strong> es una denominación cristiana evangélica adherida a la fe protestante, pentecostal y trinitaria.
            </p>
            <p className="font-body text-sm text-on-surface opacity-80 leading-relaxed">
              Declaramos seguir el modelo bíblico y apostólico de las antiguas iglesias evangkapitalistas pentecostales de Chile, manteniéndonos distantes del modernismo y corrientes neopentecostales contemporáneas. Somos un ministerio completamente apolítico e independiente de partidos o ideologías humanas.
            </p>
          </div>

          {/* Core Practices Card */}
          <div className="border border-surface-bright bg-surface-container p-6 flex flex-col gap-4">
            <h4 className="font-headline text-xs font-bold uppercase text-gold-base tracking-widest flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Prácticas del Ministerio
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 font-body text-xs text-on-surface opacity-80">
              {practices.map((practice, idx) => (
                <li key={idx} className="flex items-center gap-2 border-b border-surface-bright/50 pb-1.5 last:border-0 last:pb-0">
                  <span className="w-1.5 h-1.5 bg-gold-base shrink-0"></span>
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Doctrines Accordion (7/12) */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 border border-gold-base/20 bg-navy-midnight/20 px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-gold-base self-start">
              <BookOpen className="h-3.5 w-3.5" /> Nuestra Fe
            </span>
            <h3 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tighter text-gold-highlight">
              Lo Que Creemos
            </h3>
            <p className="mt-1 font-body text-xs text-on-surface opacity-75">
              Nuestros 10 pilares doctrinales fundamentados estrictamente en las Sagradas Escrituras.
            </p>
          </div>

          {/* Accordion list */}
          <div className="border border-surface-bright bg-surface-container flex flex-col">
            {doctrines.map((doctrine, idx) => {
              const isOpen = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-surface-bright last:border-0"
                >
                  <button
                    onClick={() => toggleDoctrine(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-high transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 min-w-0 pr-4">
                      <span className="font-headline text-lg font-bold text-gold-base/50 group-hover:text-gold-base transition-colors shrink-0">
                        {doctrine.number}
                      </span>
                      <span className="font-headline text-sm font-bold uppercase tracking-tight text-off-white truncate">
                        {doctrine.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gold-base shrink-0"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: isOpen ? 'visible' : 'hidden' }}
                      >
                        <div className="px-12 pb-4 pt-1 font-body text-xs text-on-surface opacity-80 leading-relaxed border-t border-surface-bright/35 bg-surface-container-lowest/30 flex flex-col gap-3">
                          <p>{doctrine.desc}</p>
                          
                          <div className="border-t border-surface-bright/30 pt-2.5 flex flex-col gap-3">
                            {/* Verse badges list */}
                            <div className="flex flex-wrap gap-1.5 items-center">
                              <span className="font-headline text-[10px] font-bold text-gold-base uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" /> Referencias Bíblicas:
                              </span>
                              {doctrine.verses.split(', ').map((verse, vIdx) => {
                                const isCurrentHovered = tooltip?.verse === verse && tooltip?.visible;
                                return (
                                  <span
                                    key={vIdx}
                                    onMouseEnter={(e) => handleMouseEnter(e, verse)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={(e) => handleVerseClick(e, verse)}
                                    className={`font-mono text-[9px] border px-1.5 py-0.5 cursor-help transition-all duration-200 select-none ${
                                      isCurrentHovered
                                        ? 'bg-gold-base text-navy-midnight border-gold-base font-bold scale-105'
                                        : 'bg-surface-container border-surface-bright/50 text-gold-highlight hover:border-gold-base/85 hover:text-gold-highlight'
                                    }`}
                                  >
                                    {verse}
                                  </span>
                                );
                              })}
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Tooltip for Bible Verses */}
      <AnimatePresence>
        {tooltip && tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              transform: 'translate(-50%, calc(-100% - 8px))',
            }}
            className="z-50 w-72 bg-navy-midnight border-2 border-gold-base p-3 shadow-2xl pointer-events-none select-none text-left"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-[9px] font-headline font-bold text-gold-highlight uppercase tracking-wider border-b border-gold-base/30 pb-1">
                <BookOpen className="h-3 w-3 text-gold-base shrink-0" /> {tooltip.verse} · RVR1960
              </div>
              <p className="font-body text-[11px] text-off-white italic leading-relaxed">
                {verseTexts[tooltip.verse]?.loading && (
                  <span className="flex items-center gap-2 opacity-70 py-0.5">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-gold-base shrink-0" /> Cargando texto...
                  </span>
                )}
                {verseTexts[tooltip.verse]?.error && (
                  <span className="text-error opacity-90 py-0.5 block">
                    No se pudo cargar el versículo. Por favor, consulta tu Biblia física.
                  </span>
                )}
                {verseTexts[tooltip.verse] && !verseTexts[tooltip.verse].loading && !verseTexts[tooltip.verse].error && (
                  <span>“{verseTexts[tooltip.verse].text}”</span>
                )}
              </p>
            </div>
            
            {/* Tooltip Arrow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gold-base"
              style={{
                left: `calc(50% + ${tooltip.arrowOffset}px)`
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
