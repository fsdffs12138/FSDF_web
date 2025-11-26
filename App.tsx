import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Gaming from './components/Gaming';
import Sidebar from './components/Sidebar';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 max-w-7xl flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column */}
          <main className="lg:w-[72%] order-2 lg:order-1 flex flex-col gap-12">
             <Portfolio />
             <Timeline />
             <Gaming />
          </main>

          {/* Sidebar Column */}
          <aside className="lg:w-[28%] order-1 lg:order-2 relative">
             <Sidebar />
          </aside>

        </div>
      </div>

      <Footer />
      <AIChat />

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-40 p-3 bg-primary text-white rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
};

export default App;