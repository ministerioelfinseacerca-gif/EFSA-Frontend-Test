import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
}

export default function PremiumButton({
  children,
  icon: Icon = ArrowRight,
  as = 'button',
  href,
  className = '',
  ...props
}: PremiumButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center justify-center gap-3 
    border-2 border-[#D4AF37] bg-transparent 
    text-[#D4AF37] font-heading text-sm font-bold uppercase tracking-widest 
    px-8 py-4 overflow-hidden transition-all duration-500 cursor-pointer
    hover:border-[#F3E5AB] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
    ${className}
  `;

  const content = (
    <>
      {/* Background fill on hover */}
      <div className="absolute inset-0 bg-[#0F172A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
      
      {/* Button Text */}
      <span className="relative z-10 group-hover:text-[#F3E5AB] transition-colors duration-500">
        {children}
      </span>
      
      {/* Icon */}
      {Icon && (
        <Icon 
          className="relative z-10 h-4 w-4 group-hover:text-[#F3E5AB] group-hover:translate-x-1 transition-all duration-500" 
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
