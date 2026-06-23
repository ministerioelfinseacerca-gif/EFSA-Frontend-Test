/**
 * Grilla de programación de Radio Tiempos Finales.
 *
 * IMPORTANTE: Estos horarios son una base de programación representativa de
 * una radioemisora pentecostal, ajustada al ministerio "El Fin se Acerca".
 * Deben reemplazarse por la grilla real cuando el ministerio la proporcione.
 *
 * Las horas están en timezone America/Santiago (CLT / CLST).
 */

export type Weekday =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export interface RadioProgram {
  id: string;
  title: string;
  presenter: string;
  description: string;
  /** Hora de inicio en formato 24h "HH:MM" */
  startTime: string;
  /** Hora de fin en formato 24h "HH:MM" */
  endTime: string;
  /** Días de la semana en que se transmite */
  days: Weekday[];
  /** Categoría para color e ícono */
  category: "devocional" | "ensenanza" | "musica" | "predicacion" | "infantil" | "interaccion";
}

export const WEEKDAYS: Weekday[] = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

export const WEEKDAY_LABELS: Record<Weekday, { short: string; long: string }> = {
  lunes: { short: "Lun", long: "Lunes" },
  martes: { short: "Mar", long: "Martes" },
  miercoles: { short: "Mié", long: "Miércoles" },
  jueves: { short: "Jue", long: "Jueves" },
  viernes: { short: "Vie", long: "Viernes" },
  sabado: { short: "Sáb", long: "Sábado" },
  domingo: { short: "Dom", long: "Domingo" },
};

export const CATEGORY_META: Record<
  RadioProgram["category"],
  { label: string; color: string; emoji: string }
> = {
  devocional: { label: "Devocional", color: "#b0925d", emoji: "🌅" }, // gold-base
  ensenanza: { label: "Enseñanza", color: "#7b8fbf", emoji: "📖" }, // on-primary-container
  musica: { label: "Música", color: "#d4b47c", emoji: "🎵" }, // on-secondary-container
  predicacion: { label: "Predicación", color: "#ffb4ab", emoji: "🔥" }, // error
  infantil: { label: "Infantil", color: "#b2c6f9", emoji: "🧒" }, // primary
  interaccion: { label: "Interacción", color: "#e3c289", emoji: "🎙️" }, // secondary
};

export const PROGRAM_SCHEDULE: RadioProgram[] = [
  {
    id: "madrugada-espiritual",
    title: "Madrugada Espiritual",
    presenter: "Locución automatizada",
    description:
      "Música instrumental y alabanzas para acompañar la madrugada con comunión y descanso en el Señor.",
    startTime: "00:00",
    endTime: "06:00",
    days: WEEKDAYS,
    category: "musica",
  },
  {
    id: "amanecer-con-dios",
    title: "Amanecer con Dios",
    presenter: "Hermana Rosa Díaz",
    description:
      "Devocional matutino con lectura bíblica, reflexión y oración para comenzar el día en la presencia del Señor.",
    startTime: "06:00",
    endTime: "08:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "devocional",
  },
  {
    id: "alabanza-y-adoracion",
    title: "Alabanza y Adoración",
    presenter: "Hermano Carlos Soto",
    description:
      "Una hora de música pentecostal, coros clásicos y nuevas alabanzas para elevar el espíritu.",
    startTime: "08:00",
    endTime: "10:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "musica",
  },
  {
    id: "estudio-biblico",
    title: "Estudio Bíblico",
    presenter: "Pastor Marcos Morales Chávez",
    description:
      "Profundización en la Palabra, verso a verso, con enseñanza expositiva de las Sagradas Escrituras.",
    startTime: "10:00",
    endTime: "12:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "ensenanza",
  },
  {
    id: "mediodia-de-bendicion",
    title: "Mediodía de Bendición",
    presenter: "Hermana Lucía Ramírez",
    description:
      "Programa de interacción con la audiencia: saludos, peticiones de oración y testimonios de la comunidad.",
    startTime: "12:00",
    endTime: "14:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "interaccion",
  },
  {
    id: "predicacion-en-vivo",
    title: "Predicación en Vivo",
    presenter: "Pastores invitados",
    description:
      "Mensajes predicales en vivo desde la sede del ministerio y templos asociados en todo el país.",
    startTime: "14:00",
    endTime: "16:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "predicacion",
  },
  {
    id: "tarde-de-alabanza",
    title: "Tarde de Alabanza",
    presenter: "Hermano Carlos Soto",
    description:
      "Selección musical de coros pentecostales, himnos clásicos y nuevos talentos del ministerio.",
    startTime: "16:00",
    endTime: "19:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "musica",
  },
  {
    id: "reflexion-nocturna",
    title: "Reflexión Nocturna",
    presenter: "Hermano Pedro Vergara",
    description:
      "Enseñanza bíblica y reflexión para cerrar el día, con espacio para oración y peticiones.",
    startTime: "19:00",
    endTime: "22:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "ensenanza",
  },
  {
    id: "noche-de-comunion",
    title: "Noche de Comunión",
    presenter: "Hermana Rosa Díaz",
    description:
      "Música suave, saludos de la comunidad y oración nocturna para acompañar el descanso.",
    startTime: "22:00",
    endTime: "24:00",
    days: ["lunes", "martes", "miercoles", "jueves", "viernes"],
    category: "interaccion",
  },
  // Sábado
  {
    id: "sabado-juvenil",
    title: "Sábado Juvenil",
    presenter: "Juventud del ministerio",
    description:
      "Programa de la juventud pentecostal con música moderna, testimonios y palabra para los jóvenes.",
    startTime: "10:00",
    endTime: "13:00",
    days: ["sabado"],
    category: "musica",
  },
  {
    id: "sabado-familiar",
    title: "Sábado Familiar",
    presenter: "Hermana Lucía Ramírez",
    description:
      "Espacio para la familia: consejos del hogar cristiano, música y participación de los niños.",
    startTime: "13:00",
    endTime: "16:00",
    days: ["sabado"],
    category: "interaccion",
  },
  {
    id: "gran-predicacion-sabado",
    title: "Gran Predicación",
    presenter: "Pastor Marcos Morales Chávez",
    description:
      "Mensaje central del Pastor Central Marcos Morales Chávez para todo el país.",
    startTime: "16:00",
    endTime: "19:00",
    days: ["sabado"],
    category: "predicacion",
  },
  {
    id: "vigilia-de-oracion",
    title: "Vigilia de Oración",
    presenter: "Ministerio de intercesión",
    description:
      "Cadena de oración nocturna con intercesión por las peticiones recibidas durante la semana.",
    startTime: "20:00",
    endTime: "24:00",
    days: ["sabado"],
    category: "devocional",
  },
  // Domingo
  {
    id: "escuela-dominical",
    title: "Escuela Dominical",
    presenter: "Maestros del ministerio",
    description:
      "Escuela bíblica dominical con enseñanza para todas las edades y edificación del cuerpo de Cristo.",
    startTime: "09:00",
    endTime: "11:00",
    days: ["domingo"],
    category: "ensenanza",
  },
  {
    id: "culto-dominical",
    title: "Culto Dominical en Vivo",
    presenter: "Pastor Marcos Morales Chávez",
    description:
      "Transmisión en vivo del culto dominical desde la sede central del ministerio en Santiago.",
    startTime: "11:00",
    endTime: "14:00",
    days: ["domingo"],
    category: "predicacion",
  },
  {
    id: "domingo-infantil",
    title: "Domingo Infantil",
    presenter: "Ministerio de niños",
    description:
      "Programa para los más pequeños con cantos, historias bíblicas y enseñanzas adaptadas.",
    startTime: "14:00",
    endTime: "16:00",
    days: ["domingo"],
    category: "infantil",
  },
  {
    id: "domingo-musical",
    title: "Domingo Musical",
    presenter: "Hermano Carlos Soto",
    description:
      "Lo mejor de la música del ministerio: coros, himnos y alabanzas seleccionadas.",
    startTime: "16:00",
    endTime: "20:00",
    days: ["domingo"],
    category: "musica",
  },
  {
    id: "domingo-nocturno",
    title: "Reflexión Dominical",
    presenter: "Hermano Pedro Vergara",
    description:
      "Cierre del día del Señor con enseñanza, música y acción de gracias por la semana.",
    startTime: "20:00",
    endTime: "24:00",
    days: ["domingo"],
    category: "devocional",
  },
];

/** Devuelve el índice del día de la semana (0=Lunes ... 6=Domingo) */
export function getTodayWeekday(date: Date = new Date()): Weekday {
  // getDay(): 0=Domingo, 1=Lunes ... 6=Sábado
  // Convertimos a: 0=Lunes ... 6=Domingo
  const jsDay = date.getDay();
  const idx = jsDay === 0 ? 6 : jsDay - 1;
  return WEEKDAYS[idx];
}

/** Convierte "HH:MM" a minutos desde medianoche */
function timeToMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

/**
 * Devuelve el programa que está al aire ahora, o null si no hay ninguno.
 * Considera programas que cruzan medianoche (endTime "24:00").
 */
export function getCurrentProgram(
  date: Date = new Date(),
): { program: RadioProgram; isLive: boolean } | null {
  const today = getTodayWeekday(date);
  const nowMinutes = date.getHours() * 60 + date.getMinutes();

  for (const program of PROGRAM_SCHEDULE) {
    if (!program.days.includes(today)) continue;
    const start = timeToMinutes(program.startTime);
    const end = timeToMinutes(program.endTime);
    if (nowMinutes >= start && nowMinutes < end) {
      return { program, isLive: true };
    }
  }

  // Si no hay programa explícito, asumimos música continua
  const madrugada = PROGRAM_SCHEDULE.find((p) => p.id === "madrugada-espiritual");
  if (madrugada && madrugada.days.includes(today)) {
    const start = timeToMinutes(madrugada.startTime);
    const end = timeToMinutes(madrugada.endTime);
    if (nowMinutes >= start && nowMinutes < end) {
      return { program: madrugada, isLive: true };
    }
  }

  return null;
}

/** Devuelve los programas de un día específico, ordenados por hora */
export function getProgramsByDay(day: Weekday): RadioProgram[] {
  return PROGRAM_SCHEDULE.filter((p) => p.days.includes(day)).sort(
    (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime),
  );
}
