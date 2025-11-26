import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav h-16' : 'bg-transparent h-20'
      }`}>
        <div className="container mx-auto px-6 h-full max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-2xl font-bold font-serif text-white flex items-center gap-2 hover:text-primary transition-colors"
          >
            Fomalhaut<span className="text-primary text-3xl">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative text-sm font-bold text-gray-200 hover:text-primary transition-colors py-2 flex items-center gap-2"
              >
                {/* Optional icons could go here */}
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-[#0f172a]/95 backdrop-blur-xl transition-all duration-300 flex items-center justify-center ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <button 
          className="absolute top-6 right-6 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col gap-8 text-center">
           {NAV_LINKS.map(link => (
              <a 
                key={link.label}
                href={link.href}
                className="text-3xl font-bold text-white hover:text-primary transition-colors font-serif"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
           ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;