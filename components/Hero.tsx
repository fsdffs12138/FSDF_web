import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown } from 'lucide-react';

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 150); 
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className="inline-block relative">
      {displayText}
      <span className="absolute -right-1 top-0 bottom-0 w-0.5 bg-white animate-typecursor"></span>
    </span>
  );
};

const Hero: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects'); // Usually scroll to first content
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with zoom animation is handled by body, but here we add content */}
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-60px] animate-fade-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] font-serif tracking-tight">
          {PERSONAL_INFO.name}
        </h1>
        
        <div className="inline-block px-8 py-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 shadow-lg">
          <p className="text-lg md:text-2xl text-gray-100 font-light tracking-wide font-mono">
             <span className="text-primary mr-2">&gt;</span>
             <TypewriterEffect text={PERSONAL_INFO.tagline} />
          </p>
        </div>
      </div>

      {/* Wave Divider - The signature of this theme */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.05)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.05)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.05)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="transparent" /> 
          </g>
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-float cursor-pointer">
         <a href="#projects" onClick={handleScrollDown} className="text-white/70 hover:text-white transition-colors">
           <ChevronDown size={48} className="drop-shadow-lg" />
         </a>
      </div>
    </section>
  );
};

export default Hero;