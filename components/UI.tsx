import React, { useRef, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden interactive-hover";
  
  const variants = {
    primary: "bg-brand-orange text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] border border-brand-orange/50",
    secondary: "bg-brand-teal text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-brand-teal/50",
    outline: "bg-transparent border-2 border-brand-teal/50 text-brand-teal hover:bg-brand-teal hover:text-white hover:border-brand-teal hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    white: "bg-white text-brand-darker hover:bg-gray-100 shadow-lg",
    glow: "bg-black/40 backdrop-blur-md border border-white/10 text-white hover:border-brand-teal/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
        {Icon && <Icon className="ml-2 w-5 h-5" />}
      </span>
      {/* Subtle shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
    </button>
  );
};

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}> = ({ children, className = '', id, dark = false }) => (
  <section 
    id={id} 
    className={`py-20 lg:py-24 px-6 md:px-12 relative overflow-hidden ${
      dark 
        ? 'bg-brand-darker text-white' 
        : 'bg-brand-dark text-white' 
    } ${className}`}
  >
    <div className="max-w-7xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}> = ({ children, className = '', hoverEffect = true, glow = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hoverEffect) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (max +/- 10 degrees)
    const rotateY = (mouseX / (width / 2)) * 8; // Rotate Y based on X position
    const rotateX = (mouseY / (height / 2)) * -8; // Rotate X based on Y position (inverted)

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 }); // Reset rotation
  };

  return (
    <div 
      className="perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovering 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
        }}
        className={`
          relative group rounded-2xl p-8 md:p-10 
          bg-white/[0.03] backdrop-blur-md 
          border border-white/[0.05] 
          transform-style-3d
          ${glow ? 'hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] hover:border-brand-teal/40 hover:bg-white/[0.07]' : ''}
          ${className}
        `}
      >
        {/* Animated border gradient on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/30 via-transparent to-brand-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Shine reflection */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent"
          style={{
            transform: `translate(${rotation.y * 2}px, ${rotation.x * 2}px)`
          }}
        />
        
        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 shadow-[0_0_10px_rgba(6,182,212,0.2)] ${className}`}>
    {children}
  </span>
);
