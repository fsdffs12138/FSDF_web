import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowDown, Github, Linkedin, Twitter, Hexagon } from 'lucide-react';

const TypewriterEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className="font-mono text-accent border-r-2 border-primary animate-typecursor pr-1">
      {displayText}
    </span>
  );
};

const Hero: React.FC = () => {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-20 text-primary animate-float animation-delay-0">
           <Hexagon size={120} strokeWidth={1} />
        </div>
        <div className="absolute top-1/3 right-[15%] opacity-20 text-secondary animate-float" style={{ animationDelay: '2s' }}>
           <Hexagon size={180} strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 left-[20%] opacity-10 text-accent animate-float" style={{ animationDelay: '4s' }}>
           <Hexagon size={80} strokeWidth={2} />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-sm">
          Welcome to my digital space
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500">
            {PERSONAL_INFO.name}
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl text-gray-400 mb-10 h-16 md:h-8 flex items-center justify-center">
          <p className="max-w-3xl mx-auto">
             I am a <TypewriterEffect text={PERSONAL_INFO.title} />
          </p>
        </div>
        
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="group relative p-4">
             <div className="absolute inset-0 bg-white/5 hexagon transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
             <Github size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="group relative p-4">
             <div className="absolute inset-0 bg-white/5 hexagon transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
             <Twitter size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="group relative p-4">
             <div className="absolute inset-0 bg-white/5 hexagon transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
             <Linkedin size={24} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        <div className="animate-bounce">
          <a 
            href="#timeline" 
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;