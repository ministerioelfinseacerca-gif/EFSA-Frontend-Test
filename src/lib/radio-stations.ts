/**
 * Configuración de las señales de Radio Tiempos Finales.
 *
 * Las URLs de stream provienen de la API pública de configuración de la WebApp
 * de tiemposfinales.cl (GoodBarber): https://www.tiemposfinales.cl/apiv4/getSettings?platform=webapp
 *
 * Los streams están alojados en tustreaming.cl (SonicPanel / Icecast) y tienen
 * CORS habilitado (`Access-Control-Allow-Origin: *`), por lo que pueden
 * reproducirse directamente desde el navegador SIN instalar nada en la radio física.
 */

export interface RadioStation {
  /** Identificador único de la señal */
  id: string;
  /** Nombre corto de la señal */
  name: string;
  /** Frecuencia / dial */
  frequency: string;
  /** Ciudad de origen */
  city: string;
  /** URL del stream de audio en vivo (AAC/MP3, compatible con <audio>) */
  streamUrl: string;
  /** URL del video en vivo (HLS .m3u8) si está disponible */
  videoStreamUrl?: string;
  /** Formato de audio para información */
  format: string;
  /** Descripción breve de la señal */
  description: string;
  /** Color de acento de la señal (hex) */
  accent: string;
}

export const RADIO_STATIONS: RadioStation[] = [
  {
    id: "santiago",
    name: "Santiago",
    frequency: "600 AM",
    city: "Santiago, Región Metropolitana",
    streamUrl: "https://audio3.tustreaming.cl/8140/stream",
    videoStreamUrl: "https://v2.tustreaming.cl/tiemposf/index.m3u8",
    format: "AAC · 64 kbps · Estéreo",
    description:
      "Nuestra señal principal desde la capital, llevando la Palabra a todo el país por la banda de amplitud modulada.",
    accent: "#b0925d", // Updated to match gold-base from globals.css
  },
  {
    id: "iquique",
    name: "Iquique",
    frequency: "107.7 FM",
    city: "Iquique, Región de Tarapacá",
    streamUrl: "https://audio5.tustreaming.cl/7090/stream",
    format: "MP3 · 128 kbps · Estéreo",
    description:
      "Nuestra señal del norte grande, alcanzando la zona de Tarapacá y el extremo norte de Chile.",
    accent: "#b0925d", // Updated to match gold-base from globals.css
  },
];

export const DEFAULT_STATION_ID = "santiago";

/** Texto que se muestra cuando la radio está fuera del aire */
export const LIVE_OFF_MESSAGE = "¡PRONTO REGRESAMOS!";
