import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from './UI';
import { InteractiveGrid } from './InteractiveGrid';

const AdvancedCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      
      // Update dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      // Check for hover targets
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive-hover');
      
      setIsHovering(!!isInteractive);
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    // Physics loop for the trailing ring
    let animationFrameId: number;
    const animateRing = () => {
      // Lerp logic for smooth trailing
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
      
      ringPosRef.current.x = lerp(ringPosRef.current.x, cursorRef.current.x, 0.15);
      ringPosRef.current.y = lerp(ringPosRef.current.y, cursorRef.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animateRing);
    };
    
    animateRing();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot hidden md:block fixed top-0 left-0 w-2 h-2 bg-brand-teal rounded-full pointer-events-none z-[9999] -mt-1 -ml-1 mix-blend-difference transition-transform duration-75`}
      />
      <div 
        ref={ringRef} 
        className={`cursor-ring hidden md:flex fixed top-0 left-0 justify-center items-center pointer-events-none z-[9998] -mt-5 -ml-5 transition-all duration-300
          ${isHovering ? 'w-16 h-16 -mt-8 -ml-8 bg-brand-teal/20 border-transparent' : 'w-10 h-10 border border-brand-teal/50'}
          ${isClicking ? 'scale-75' : 'scale-100'}
          rounded-full backdrop-blur-sm animate-glow
        `}
      />
    </>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'AI Visibility', path: '/ai-visibility' },
    { name: 'Lead Gen', path: '/lead-generation' },
    { name: 'Voice Agents', path: '/voice-agents' },
    { name: 'Email Marketing', path: '/email-marketing' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-darker text-gray-200 relative">
      <AdvancedCursor />
      <InteractiveGrid />
      
      <header 
        className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled 
            ? 'bg-brand-darker/80 backdrop-blur-xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50 group interactive-hover">
            <div className="relative">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl relative z-10 transition-colors duration-300 ${isScrolled ? 'bg-brand-blue text-white' : 'bg-white text-brand-blue'}`}>
                A
              </div>
              <div className="absolute inset-0 bg-brand-teal blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className={`font-heading font-bold text-2xl tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              Aithical.pro
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-sm font-medium transition-all duration-300 hover:text-brand-teal hover:tracking-wide text-gray-300 relative group interactive-hover"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button size="sm" variant="primary" className="glow-effect">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 p-2 text-white hover:text-brand-teal transition-colors interactive-hover"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-brand-darker/95 backdrop-blur-2xl z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center gap-10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-3xl font-bold text-white hover:text-brand-teal transition-colors font-heading"
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" variant="primary" className="mt-8">
            Get Started
          </Button>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className="bg-brand-darker/80 backdrop-blur-md border-t border-white/5 text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden z-20">
        {/* Footer Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_20px_rgba(30,58,138,0.5)]">
                A
              </div>
              <span className="font-heading font-bold text-2xl">Aithical.pro</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Aithical.pro is a specialized AI visibility and marketing automation platform designed exclusively for real estate professionals.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="interactive-hover w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 cursor-pointer hover:scale-110">
                  <ExternalLink size={20} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 text-white">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/ai-visibility" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">AI Visibility Optimization</Link></li>
              <li><Link to="/lead-generation" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Automated Lead Gen</Link></li>
              <li><Link to="/voice-agents" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">AI Voice Agents</Link></li>
              <li><Link to="/email-marketing" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Email Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">About Us</Link></li>
              <li><Link to="/" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Case Studies</Link></li>
              <li><Link to="/" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Resources</Link></li>
              <li><Link to="/" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Contact</Link></li>
              <li><Link to="/" className="interactive-hover hover:text-brand-teal hover:pl-2 transition-all duration-300 block">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 text-white">Contact</h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-brand-orange/20 transition-colors">
                  <MapPin className="text-brand-orange" size={20} />
                </div>
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-brand-orange/20 transition-colors">
                  <Mail className="text-brand-orange" size={20} />
                </div>
                <span>hello@aithical.pro</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-brand-orange/20 transition-colors">
                  <Phone className="text-brand-orange" size={20} />
                </div>
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aithical.pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};