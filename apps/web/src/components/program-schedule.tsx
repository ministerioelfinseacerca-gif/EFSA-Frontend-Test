'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Clock, User, CalendarDays, CircleDot } from 'lucide-react';
import {
  WEEKDAYS,
  WEEKDAY_LABELS,
  CATEGORY_META,
  getTodayWeekday,
  getProgramsByDay,
  getCurrentProgram,
  type Weekday,
  type RadioProgram,
} from '@/lib/radio-schedule';

export default function ProgramSchedule() {
  const [now, setNow] = React.useState<Date | null>(null);
  const mounted = now !== null;

  React.useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const today: Weekday | null = mounted ? getTodayWeekday(now!) : null;
  const [selectedDay, setSelectedDay] = React.useState<Weekday>('lunes');

  React.useEffect(() => {
    if (today) setSelectedDay(today);
  }, [today]);

  const current = mounted ? getCurrentProgram(now!) : null;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Banner: Al aire ahora */}
      <div className="w-full">
        <NowPlayingBanner current={current} />
      </div>

      {/* Tabs list */}
      <div className="w-full">
        <div className="flex overflow-x-auto pb-4 gap-3 snap-x scrollbar-thin">
          {WEEKDAYS.map((day) => {
            const isToday = day === today;
            const isActive = day === selectedDay;
            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] px-4 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-full cursor-pointer border shrink-0 snap-start ${
                  isActive
                    ? 'border-navy-midnight bg-navy-midnight text-white shadow-md'
                    : 'border-navy-midnight/10 bg-white hover:border-navy-midnight/30 text-navy-midnight/70 hover:text-navy-midnight'
                }`}
              >
                <span>{WEEKDAY_LABELS[day].short}</span>
                {isToday && (
                  <span
                    className={`flex items-center gap-1 text-[9px] font-black tracking-widest mt-1 ${
                      isActive ? 'text-white/80' : 'text-sky-800'
                    }`}
                  >
                    <CircleDot className="h-2 w-2 fill-current animate-pulse" /> HOY
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        <DaySchedule day={selectedDay} now={now} isToday={selectedDay === today} />
      </div>
    </div>
  );
}

/* --------------------------- Now playing banner --------------------------- */

function NowPlayingBanner({
  current,
}: {
  current: { program: RadioProgram; isLive: boolean } | null;
}) {
  if (!current) {
    return (
      <div className="flex items-center gap-4 border-2 border-gold-base/30 bg-surface-container-lowest p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-base bg-navy-midnight/20">
          <Radio className="h-6 w-6 text-gold-base animate-pulse" />
        </div>
        <div>
          <p className="font-headline text-sm font-bold text-gold-highlight uppercase">
            Espacio musical continuo
          </p>
          <p className="mt-0.5 font-body text-xs text-on-background opacity-75">
            Disfruta de la mejor selección de alabanzas y programación instrumental continua. ¡Pronto regresamos con más programas en vivo!
          </p>
        </div>
      </div>
    );
  }

  const { program } = current;
  const meta = CATEGORY_META[program.category];

  return (
    <div className="relative overflow-hidden border-2 border-sky-800 bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
      {/* Decorative ambient tint on right */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-10 blur-3xl rounded-full"
        style={{ backgroundColor: meta.color }}
      />
      
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center border border-navy-midnight/10 rounded-full text-3xl"
            style={{ backgroundColor: `${meta.color}15` }}
          >
            {meta.emoji}
          </div>
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-sky-800 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75 rounded-full"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 bg-white rounded-full"></span>
                </span>
                Al aire ahora
              </span>
              <span
                className="inline-flex items-center border px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full"
                style={{ color: meta.color, borderColor: `${meta.color}30`, backgroundColor: `${meta.color}08` }}
              >
                {meta.label}
              </span>
            </div>
            <h3 className="font-black text-2xl leading-tight uppercase text-navy-midnight sm:text-3xl">
              {program.title}
            </h3>
            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-light text-xs text-navy-midnight/80">
              <span className="inline-flex items-center gap-1 font-black text-sky-800">
                <User className="h-3.5 w-3.5" /> <span className="text-navy-midnight/80">{program.presenter}</span>
              </span>
              <span className="mx-1 opacity-30">•</span>
              <span className="inline-flex items-center gap-1 font-light text-navy-midnight/80">
                <Clock className="h-3.5 w-3.5 text-sky-800" /> {program.startTime} – {program.endTime}
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="relative mt-5 font-light text-sm leading-relaxed text-navy-midnight/80">
        {program.description}
      </p>
    </div>
  );
}

/* ------------------------------ Day schedule ----------------------------- */

function DaySchedule({
  day,
  now,
  isToday,
}: {
  day: Weekday;
  now: Date | null;
  isToday: boolean;
}) {
  const programs = getProgramsByDay(day);
  const current = now ? getCurrentProgram(now) : null;
  const currentId = isToday && current ? current.program.id : null;

  if (programs.length === 0) {
    return (
      <p className="py-10 text-center font-body text-sm text-on-surface opacity-60">
        No hay programación específica para este día.
      </p>
    );
  }

  return (
    <div className="max-h-[35rem] overflow-y-auto bg-transparent p-2 scrollbar-thin">
      <ul className="space-y-4">
        <AnimatePresence mode="popLayout">
          {programs.map((program) => {
            const meta = CATEGORY_META[program.category];
            const isLive = program.id === currentId;
            return (
              <motion.li
                key={program.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`relative overflow-hidden border p-5 transition-all duration-300 rounded-2xl ${
                  isLive
                    ? 'border-sky-800 bg-white shadow-md'
                    : 'border-navy-midnight/10 bg-white hover:border-navy-midnight/30 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Hours badge */}
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center border border-navy-midnight/10 bg-editorial-beige/50 rounded-xl py-3 text-center">
                    <span className="font-black text-sm text-navy-midnight">
                      {program.startTime}
                    </span>
                    <span className="font-light text-[10px] text-navy-midnight/50 mt-0.5">
                      {program.endTime}
                    </span>
                  </div>

                  {/* Program Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="font-black text-sm md:text-base uppercase tracking-tight text-navy-midnight truncate">
                        {program.title}
                      </h4>
                      {isLive && (
                        <span className="inline-flex items-center gap-1 bg-sky-800 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white rounded-full">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75 rounded-full"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 bg-white rounded-full"></span>
                          </span>
                          En vivo
                        </span>
                      )}
                      <span
                        className="inline-flex items-center border px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full"
                        style={{
                          backgroundColor: `${meta.color}10`,
                          color: meta.color,
                          borderColor: `${meta.color}20`,
                        }}
                      >
                        {meta.emoji} {meta.label}
                      </span>
                    </div>
                    <p className="flex items-center gap-1.5 font-light text-xs text-navy-midnight/70">
                      <User className="h-3 w-3 text-sky-800" />
                      <span className="truncate font-black text-navy-midnight/80">{program.presenter}</span>
                    </p>
                    <p className="mt-2 text-xs leading-relaxed font-light text-navy-midnight/60">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </div>
  );
}

/* ------------------------------ Section header ---------------------------- */

export function ScheduleHeader() {
  return (
    <div className="mb-8 text-center flex flex-col items-center">
      <span className="inline-flex items-center gap-1.5 border border-sky-800/10 bg-sky-800/10 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] text-sky-800">
        <CalendarDays className="h-3.5 w-3.5" /> Programación
      </span>
      <h2 className="mt-4 font-black text-4xl md:text-5xl text-navy-midnight leading-[1.05] tracking-tighter sm:text-6xl">
        Grilla Semanal <br className="hidden sm:block" />
        <span className="font-light italic text-sky-800 tracking-tight">CLT.</span>
      </h2>
      <p className="mt-4 font-light text-base text-navy-midnight/80 max-w-lg mx-auto leading-relaxed">
        Conoce qué programa está sonando ahora y entérate de toda la programación semanal de Radio Tiempos Finales.
      </p>
    </div>
  );
}
