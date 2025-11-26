import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { Briefcase, GraduationCap, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work': return <Briefcase size={16} />;
      case 'education': return <GraduationCap size={16} />;
      default: return <Star size={16} />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent md:-ml-px"></div>

          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative mb-12 md:mb-16 flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Hexagon Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 hexagon bg-surface border border-primary flex items-center justify-center z-10 text-primary shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  {getIcon(item.type)}
                </div>

                {/* Content Spacer for layout */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="group relative bg-surface/50 border border-white/5 p-6 md:p-8 rounded-lg transition-all duration-300 hover:border-primary/30 hover:bg-surface/80 hover:shadow-xl hover:-translate-y-1">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-primary/20 transition-all group-hover:border-r-primary"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                       <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h3>
                       <span className="text-xs font-mono text-accent py-1 px-2 bg-accent/10 rounded mt-2 md:mt-0 w-fit">
                        {item.year}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">{item.companyOrInstitution}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;