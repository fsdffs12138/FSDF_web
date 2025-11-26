import React from 'react';
import { GAMING_DATA } from '../constants';
import { Gamepad2, Star } from 'lucide-react';

const Gaming: React.FC = () => {
  return (
    <section id="gaming" className="butterfly-card p-8 md:p-10 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-700/50 pb-4">
        <Gamepad2 className="text-green-400" />
        <h2 className="text-2xl font-bold text-white">Gaming Log</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {GAMING_DATA.map((game) => (
          <div key={game.id} className="group relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-xs font-bold text-yellow-400 flex items-center gap-1">
               <Star size={10} fill="currentColor" /> {game.rating}
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
               <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1">{game.title}</h3>
               <p className="text-xs text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-75">
                 {game.comment}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gaming;