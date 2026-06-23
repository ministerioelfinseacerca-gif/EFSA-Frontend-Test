'use client';

import { motion } from 'framer-motion';
import { Globe, PlayCircle, Radio, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-gold-base pt-16 pb-8 px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Identity */}
        <div className="flex flex-col gap-4">
          <img
            alt="Logo"
            className="h-20 w-auto object-contain self-start filter brightness-100"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWs-pZjziEnhWRAMIQnoXuZzwoOZI_xFGch08aDrYloDG4P8TfeRAn2MCwmk_BmPC8qU14A_v5-JCLCh4rg2Pie3xSqtHr9KC5iZNWOI2BL1naIuO1zzU88nq1MpxzRlGL04REgvHTJxS64oktbQ47DoFobNAOZNxtoizkYm9gnEtghjzxE-wO65b9IfuByfKncJ1ndge45Ym7BXusw61q9kDNg1p99HI9yG6_SYXsG3-kqhMylQUKznPgB5AHOkt32CKh_deKgqDR"
          />
          <div className="flex flex-col">
            <span className="font-headline text-lg text-gold-base font-bold uppercase leading-tight">
              Ministerio Evangelístico Pentecostal
            </span>
            <span className="font-body text-sm text-gold-highlight tracking-widest uppercase font-semibold">
              El fin se acerca
            </span>
            <span className="font-body text-xs text-off-white opacity-60 mt-2">
              Desde 1995
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2">
            <motion.a
              className="text-gold-base hover:text-gold-highlight transition-colors"
              href="/#inicio"
              whileHover={{ scale: 1.1 }}
            >
              <Globe className="h-5 w-5" />
            </motion.a>
            <motion.a
              className="text-gold-base hover:text-gold-highlight transition-colors"
              href="/#multimedia"
              whileHover={{ scale: 1.1 }}
            >
              <PlayCircle className="h-5 w-5" />
            </motion.a>
            <motion.a
              className="flex items-center gap-2 text-gold-base hover:text-gold-highlight transition-colors"
              href="/radio"
              whileHover={{ scale: 1.05 }}
            >
              <Radio className="h-5 w-5" />
              <span className="font-body text-xs uppercase tracking-widest font-semibold">
                Radio en Vivo
              </span>
            </motion.a>
          </div>
        </div>

        {/* Column 2: Location */}
        <div className="flex flex-col gap-6">
          <h4 className="font-headline text-sm text-gold-base uppercase tracking-widest border-b border-gold-base/30 pb-2 font-bold">
            Dirección
          </h4>
          <div className="flex gap-3 text-off-white opacity-80">
            <MapPin className="h-5 w-5 text-gold-base shrink-0" />
            <p className="font-body text-sm leading-relaxed">Chacabuco 549, Santiago Centro</p>
          </div>
        </div>

        {/* Column 3: Hours */}
        <div className="flex flex-col gap-6">
          <h4 className="font-headline text-sm text-gold-base uppercase tracking-widest border-b border-gold-base/30 pb-2 font-bold">
            Horarios
          </h4>
          <ul className="flex flex-col gap-4 font-body text-sm text-off-white opacity-80">
            <li className="flex flex-col">
              <span className="font-bold text-gold-highlight">Lunes de Victoria</span>
              <span>19:15 horas - Plaza de Armas de Santiago</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-gold-highlight">Miércoles y Viernes</span>
              <span>19:30 horas</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold text-gold-highlight">Domingo</span>
              <span>11:00 horas y 18:30 horas</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Links */}
        <div className="flex flex-col gap-6">
          <h4 className="font-headline text-sm text-gold-base uppercase tracking-widest border-b border-gold-base/30 pb-2 font-bold">
            Contacto
          </h4>
          <div className="flex flex-col gap-3 text-off-white opacity-80">
            <a
              className="flex items-center gap-3 hover:text-gold-highlight transition-colors"
              href="mailto:marcosmorales_evangelista@hotmail.com"
            >
              <Mail className="h-4 w-4 text-gold-base shrink-0" />
              <span className="font-body text-xs break-all">
                marcosmorales_evangelista@hotmail.com
              </span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-gold-highlight transition-colors"
              href="mailto:elfinseacercaministerio@gmail.com"
            >
              <Mail className="h-4 w-4 text-gold-base shrink-0" />
              <span className="font-body text-xs break-all">elfinseacercaministerio@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold-base shrink-0" />
              <span className="font-body text-xs">+56 2 2688 9465</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 font-body text-xs">
            <a className="text-gold-base hover:underline uppercase" href="#terminos">
              Términos y condiciones
            </a>
            <a className="text-gold-base hover:underline uppercase" href="#privacidad">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-container-max mx-auto pt-8 border-t border-gold-base/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-off-white opacity-40 uppercase tracking-widest">
          © 2025 elfinseacerca.org
        </p>
        <div className="flex gap-6 font-body text-xs text-off-white opacity-40 uppercase">
          <span>Santiago, Chile</span>
        </div>
      </div>
    </footer>
  );
}
