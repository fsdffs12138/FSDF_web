import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [runtime, setRuntime] = useState('');

  useEffect(() => {
    const startDate = new Date(PERSONAL_INFO.runTimeStart).getTime();
    
    const updateRuntime = () => {
      const now = new Date().getTime();
      const distance = now - startDate;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      setRuntime(`${days} days ${hours} hrs ${minutes} mins`);
    };

    updateRuntime();
    const interval = setInterval(updateRuntime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#0f172a]/80 backdrop-blur-md border-t border-white/5 py-10 mt-12 animate-fade-up">
       <div className="container mx-auto px-4 text-center space-y-4">
          
          {/* Main Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-bold mx-1">{PERSONAL_INFO.name}</span>
          </p>
          
          {/* Theme Credit */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
             <span>Powered by React</span>
             <Heart size={12} className="text-red-500 fill-current animate-pulse" />
             <span>Theme Fomalhaut Replica</span>
          </div>

          {/* Runtime Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/5 text-xs text-gray-400 font-mono mt-2 hover:bg-black/40 transition-colors">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             Run time: <span className="text-primary font-bold">{runtime}</span>
          </div>
       </div>
    </footer>
  );
};

export default Footer;