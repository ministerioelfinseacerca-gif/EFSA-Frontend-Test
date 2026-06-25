import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  variant?: 'dark' | 'light';
}

export default function PremiumButton({
  children,
  icon: Icon = ArrowRight,
  as = 'button',
  href,
  className = '',
  variant = 'dark',
  ...props
}: PremiumButtonProps) {
  const isLight = variant === 'light';
  
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2
    border border-transparent ${isLight ? 'hover:border-navy-midnight/20 text-navy-midnight' : 'hover:border-[#D4AF37]/30 text-[#D4AF37]'} bg-transparent 
    font-headline text-sm font-bold uppercase tracking-widest 
    px-6 py-3 rounded-full transition-all duration-500 cursor-pointer
    ${className}
  `;

  const content = (
    <>
      {/* Background fill on hover */}
      <div className={`absolute inset-0 rounded-full ${isLight ? 'bg-navy-midnight/5' : 'bg-white/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0`} />
      
      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-500">
        {children}
      </span>
      
      {/* Icon */}
      {Icon && (
        <Icon 
          className="relative z-10 h-4 w-4 group-hover:translate-x-1 transition-transform duration-500" 
          strokeWidth={2}
        />
      )}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
