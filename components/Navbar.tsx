import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理导航点击，防止修改 URL 导致的安全策略问题
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-0 ${
        scrolled ? 'py-4' : 'py-6'
      }`}>
        <div className={`mx-auto max-w-5xl transition-all duration-300 ${
          scrolled 
            ? 'glass-nav rounded-full shadow-lg border border-white/10 px-6 py-3' 
            : 'bg-transparent px-6'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <Hexagon className="text-primary fill-primary/10 group-hover:rotate-90 transition-transform duration-500" size={24} />
              <span className="text-xl font-bold tracking-tight text-white">
                Neo<span className="text-primary">.Dev</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-gray-300 hover:text-white p-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-all duration-300 flex items-center justify-center ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <button 
          className="absolute top-8 right-8 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col gap-8 text-center">
           {NAV_LINKS.map(link => (
              <a 
                key={link.label}
                href={link.href}
                className="text-3xl font-bold text-white hover:text-primary transition-colors cursor-pointer"
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