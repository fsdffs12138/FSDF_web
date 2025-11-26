import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { Briefcase, GraduationCap, Star, Circle } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="butterfly-card p-8 md:p-10 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-700/50 pb-4">
        <Briefcase className="text-primary" />
        <h2 className="text-2xl font-bold text-white">Timeline</h2>
      </div>

      <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-10 py-2">
        {TIMELINE_DATA.map((item) => (
          <div key={item.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] md:-left-[9px] top-1 w-5 h-5 rounded-full border-4 border-surface bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
            
            <div className="group">
               <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                 <span className="px-2 py-0.5 rounded text-xs font-bold bg-primary/20 text-primary w-fit">
                   {item.year}
                 </span>
                 <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                   {item.title}
                 </h3>
               </div>
               
               <div className="text-gray-400 text-sm font-medium mb-2 flex items-center gap-2">
                 {item.type === 'education' ? <GraduationCap size={14} /> : <Circle size={8} className="fill-current" />}
                 {item.companyOrInstitution}
               </div>
               
               <p className="text-gray-300 leading-relaxed text-sm bg-black/20 p-4 rounded-lg border-l-4 border-gray-600">
                 {item.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;