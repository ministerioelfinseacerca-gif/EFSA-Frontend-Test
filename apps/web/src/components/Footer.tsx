'use client';

import { motion } from 'framer-motion';
import { Globe, PlayCircle, Radio, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export default function Footer({ theme = 'dark' }: FooterProps) {
  const isLight = theme === 'light';

  // Dynamic classes
  const bgClass = isLight ? 'bg-editorial-beige border-t border-navy-midnight/10' : 'bg-[#060B19] border-t-2 border-gold-base';
  const titleClass = isLight ? 'text-navy-midnight' : 'text-gold-base';
  const textClass = isLight ? 'text-navy-midnight/80' : 'text-off-white opacity-80';
  const highlightClass = isLight ? 'text-sky-800' : 'text-gold-highlight';
  const subtextClass = isLight ? 'text-navy-midnight/60' : 'text-off-white opacity-60';
  const borderClass = isLight ? 'border-navy-midnight/20' : 'border-gold-base/30';
  const iconClass = isLight ? 'text-sky-800' : 'text-gold-base';
  const bottomBarBorderClass = isLight ? 'border-navy-midnight/10' : 'border-gold-base/10';
  const bottomBarTextClass = isLight ? 'text-navy-midnight/40' : 'text-off-white opacity-40';

  return (
    <footer className={`${bgClass} pt-16 pb-8 px-margin-mobile md:px-margin-desktop mt-auto transition-colors duration-500`}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Identity */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative flex justify-center items-center mt-2 mb-2">
            {/* Backlight Glow Effect */}
            <div className={`absolute inset-0 blur-[28px] rounded-full scale-[2] opacity-50 ${isLight ? 'bg-sky-800/20' : 'bg-gold-base/30'}`}></div>
            
            <img
              alt="Logo"
              className="h-24 w-auto object-contain relative z-10 drop-shadow-2xl"
              src="/logo.png"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <span className={`font-headline text-lg ${titleClass} font-bold uppercase leading-tight max-w-[280px]`}>
              Ministerio Evangelístico Pentecostal
            </span>
            <span className={`font-body text-sm ${highlightClass} tracking-widest uppercase font-semibold mt-1`}>
              El fin se acerca
            </span>
            <span className={`font-body text-xs ${subtextClass} mt-2`}>
              Desde 1995
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <motion.a
              className={`${iconClass} hover:${highlightClass} transition-colors`}
              href="/#inicio"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="h-5 w-5" />
            </motion.a>
            <motion.a
              className={`${iconClass} hover:${highlightClass} transition-colors`}
              href="/#multimedia"
              whileHover={{ scale: 1.05 }}
            >
              <PlayCircle className="h-5 w-5" />
            </motion.a>
            <motion.a
              className={`flex items-center gap-2 ${iconClass} hover:${highlightClass} transition-colors`}
              href="/radio"
              whileHover={{ scale: 1.02 }}
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
          <h4 className={`font-headline text-sm ${titleClass} uppercase tracking-widest border-b ${borderClass} pb-2 font-bold`}>
            Dirección
          </h4>
          <div className={`flex gap-3 ${textClass}`}>
            <MapPin className={`h-5 w-5 ${iconClass} shrink-0`} />
            <p className="font-body text-sm leading-relaxed">Chacabuco 549, Santiago Centro</p>
          </div>
        </div>

        {/* Column 3: Hours */}
        <div className="flex flex-col gap-6">
          <h4 className={`font-headline text-sm ${titleClass} uppercase tracking-widest border-b ${borderClass} pb-2 font-bold`}>
            Horarios
          </h4>
          <ul className={`flex flex-col gap-4 font-body text-sm ${textClass}`}>
            <li className="flex flex-col">
              <span className={`font-bold ${highlightClass}`}>Lunes de Victoria</span>
              <span>19:15 horas - Plaza de Armas de Santiago</span>
            </li>
            <li className="flex flex-col">
              <span className={`font-bold ${highlightClass}`}>Miércoles y Viernes</span>
              <span>19:30 horas</span>
            </li>
            <li className="flex flex-col">
              <span className={`font-bold ${highlightClass}`}>Domingo</span>
              <span>11:00 horas y 18:30 horas</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Links */}
        <div className="flex flex-col gap-6">
          <h4 className={`font-headline text-sm ${titleClass} uppercase tracking-widest border-b ${borderClass} pb-2 font-bold`}>
            Contacto
          </h4>
          <div className={`flex flex-col gap-3 ${textClass}`}>
            <a
              className={`flex items-center gap-3 hover:${highlightClass} transition-colors`}
              href="mailto:marcosmorales_evangelista@hotmail.com"
            >
              <Mail className={`h-4 w-4 ${iconClass} shrink-0`} />
              <span className="font-body text-xs break-all">
                marcosmorales_evangelista@hotmail.com
              </span>
            </a>
            <a
              className={`flex items-center gap-3 hover:${highlightClass} transition-colors`}
              href="mailto:elfinseacercaministerio@gmail.com"
            >
              <Mail className={`h-4 w-4 ${iconClass} shrink-0`} />
              <span className="font-body text-xs break-all">elfinseacercaministerio@gmail.com</span>
            </a>
            <div className="flex items-center gap-3">
              <Phone className={`h-4 w-4 ${iconClass} shrink-0`} />
              <span className="font-body text-xs">+56 2 2688 9465</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 font-body text-xs">
            <a className={`${iconClass} hover:underline uppercase`} href="#terminos">
              Términos y condiciones
            </a>
            <a className={`${iconClass} hover:underline uppercase`} href="#privacidad">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`max-w-container-max mx-auto pt-8 border-t ${bottomBarBorderClass} flex flex-col md:flex-row justify-between items-center gap-4`}>
        <p className={`font-body text-xs ${bottomBarTextClass} uppercase tracking-widest`}>
          © 2025 elfinseacerca.org
        </p>
        <div className={`flex gap-6 font-body text-xs ${bottomBarTextClass} uppercase`}>
          <span>Santiago, Chile</span>
        </div>
      </div>
    </footer>
  );
}
