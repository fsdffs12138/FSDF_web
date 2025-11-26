import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Gaming from './components/Gaming';
import AIChat from './components/AIChat';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-gray-200 selection:bg-accent selection:text-black">
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Timeline />
        <Portfolio />
        <Gaming />
      </main>

      <footer className="py-12 bg-black/40 border-t border-white/5 text-center relative z-10">
        <div className="container mx-auto px-6">
           <p className="text-gray-400 font-mono text-sm mb-2">© {new Date().getFullYear()} NeonPersona</p>
           <p className="text-gray-600 text-xs">Designed with Gemini Intelligence</p>
        </div>
      </footer>

      {/* Interactive Elements */}
      <AIChat />

      {/* Hexo Style Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-24 z-40 p-3 bg-surface border border-white/10 rounded-lg text-primary shadow-lg transition-all duration-300 transform hover:bg-primary hover:text-white ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default App;