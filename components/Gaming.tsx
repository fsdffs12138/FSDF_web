import React from 'react';
import { GAMING_DATA } from '../constants';
import { Star, Clock, Gamepad2 } from 'lucide-react';

const Gaming: React.FC = () => {
  return (
    <section id="gaming" className="py-20 relative overflow-hidden">
       {/* Decorative BG element */}
       <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold mb-2">Gaming Log</h2>
             <p className="text-gray-400">What keeps me busy when AFK.</p>
           </div>
           <Gamepad2 className="text-secondary opacity-50 hidden md:block" size={48} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMING_DATA.map((game) => (
            <div key={game.id} className="relative group rounded-xl overflow-hidden h-80 glass-panel border-0">
              {/* Background Image */}
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Status Badge */}
              <div className="absolute top-3 right-3">
                 <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wider ${
                   game.status === 'playing' ? 'bg-green-500/20 text-green-400 border border-green-500/50' :
                   game.status === 'completed' ? 'bg-primary/20 text-primary border border-primary/50' :
                   'bg-gray-700/50 text-gray-300 border border-gray-600'
                 }`}>
                   {game.status}
                 </span>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">{game.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-accent" />
                    <span>{game.hoursPlayed}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span>{game.rating}/5</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 italic">
                  "{game.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gaming;