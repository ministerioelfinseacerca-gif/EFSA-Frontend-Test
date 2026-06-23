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

      {/* Tabs list (custom designed without shadcn, zero border radius) */}
      <div className="w-full">
        <div className="flex border-b-2 border-surface-bright overflow-x-auto pb-1 gap-1">
          {WEEKDAYS.map((day) => {
            const isToday = day === today;
            const isActive = day === selectedDay;
            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center justify-center min-w-[70px] sm:min-w-[90px] px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border-t-2 border-x-2 cursor-pointer ${
                  isActive
                    ? 'border-gold-base bg-gold-base text-navy-midnight'
                    : 'border-transparent bg-surface-container hover:bg-surface-container-high text-gold-base opacity-80'
                }`}
              >
                <span>{WEEKDAY_LABELS[day].short}</span>
                {isToday && (
                  <span
                    className={`flex items-center gap-0.5 text-[9px] font-extrabold tracking-widest mt-0.5 ${
                      isActive ? 'text-navy-midnight' : 'text-error'
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
    <div className="relative overflow-hidden border-2 border-error bg-surface-container-lowest p-5 sm:p-6">
      {/* Decorative ambient tint on right */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-10 blur-3xl"
        style={{ backgroundColor: meta.color }}
      />
      
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold-base text-2xl"
            style={{ backgroundColor: `${meta.color}22` }}
          >
            {meta.emoji}
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-error px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75"></span>
                  <span className="relative inline-flex h-1.5 w-1.5 bg-white"></span>
                </span>
                Al aire ahora
              </span>
              <span
                className="inline-flex items-center border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ color: meta.color, borderColor: `${meta.color}66`, backgroundColor: `${meta.color}11` }}
              >
                {meta.label}
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold leading-tight uppercase text-gold-highlight sm:text-xl">
              {program.title}
            </h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs text-on-surface opacity-75">
              <span className="inline-flex items-center gap-1 font-bold">
                <User className="h-3.5 w-3.5 text-gold-base" /> {program.presenter}
              </span>
              <span className="mx-1 opacity-50">•</span>
              <span className="inline-flex items-center gap-1 font-mono">
                <Clock className="h-3.5 w-3.5 text-gold-base" /> {program.startTime} – {program.endTime}
              </span>
            </p>
          </div>
        </div>
      </div>
      <p className="relative mt-4 font-body text-sm leading-relaxed text-on-surface opacity-90">
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
    <div className="max-h-[30rem] overflow-y-auto border-2 border-surface-bright bg-surface-container-low p-3 scrollbar-thin">
      <ul className="space-y-3">
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
                className={`relative overflow-hidden border p-4 transition-colors ${
                  isLive
                    ? 'border-error bg-error/5'
                    : 'border-surface-bright bg-surface-container-lowest hover:bg-surface-container hover:border-gold-base/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Hours badge */}
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center border border-surface-bright bg-surface-container-lowest/80 py-2 text-center">
                    <span className="font-mono text-sm font-bold text-gold-highlight">
                      {program.startTime}
                    </span>
                    <span className="font-mono text-[9px] text-on-surface opacity-55 mt-0.5">
                      {program.endTime}
                    </span>
                  </div>

                  {/* Program Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-headline text-sm font-bold uppercase tracking-tight text-off-white truncate">
                        {program.title}
                      </h4>
                      {isLive && (
                        <span className="inline-flex items-center gap-1 bg-error px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                          <span className="relative flex h-1 w-1">
                            <span className="absolute inline-flex h-full w-full animate-ping bg-white opacity-75"></span>
                            <span className="relative inline-flex h-1 w-1 bg-white"></span>
                          </span>
                          En vivo
                        </span>
                      )}
                      <span
                        className="inline-flex items-center border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${meta.color}11`,
                          color: meta.color,
                          borderColor: `${meta.color}44`,
                        }}
                      >
                        {meta.emoji} {meta.label}
                      </span>
                    </div>
                    <p className="flex items-center gap-1 font-body text-xs text-on-surface opacity-70">
                      <User className="h-3 w-3 text-gold-base" />
                      <span className="truncate font-semibold">{program.presenter}</span>
                    </p>
                    <p className="mt-2 font-body text-xs leading-relaxed text-on-surface opacity-80 line-clamp-2">
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
    <div className="mb-6 text-center">
      <span className="inline-flex items-center gap-1.5 border border-gold-base/20 bg-navy-midnight/20 px-3 py-1 font-body text-xs font-bold uppercase tracking-widest text-gold-base">
        <CalendarDays className="h-3.5 w-3.5" /> Programación
      </span>
      <h2 className="mt-3 font-headline text-3xl font-bold uppercase tracking-tighter text-gold-highlight sm:text-4xl">
        Grilla Semanal CLT
      </h2>
      <p className="mt-2 font-body text-sm text-on-surface opacity-70 max-w-lg mx-auto">
        Conoce qué programa está sonando ahora y entérate de toda la programación semanal de Radio Tiempos Finales.
      </p>
    </div>
  );
}
