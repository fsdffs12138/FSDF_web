import React, { useState } from 'react';
import { PROJECT_DATA } from '../constants';
import { Project } from '../types';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to get consistent fake dates
  const getFakeDate = (index: number) => {
    const dates = ['2024-03-15', '2023-11-20', '2023-08-05', '2023-01-12'];
    return dates[index % dates.length];
  };

  return (
    <>
      <div id="projects" className="space-y-6 animate-fade-up">
        {/* Section Header if needed, but Fomalhaut usually just lists them */}
        
        {PROJECT_DATA.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={project.id}
              className={`butterfly-card group flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} h-auto md:h-[280px] overflow-hidden cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Thumbnail */}
              <div className="w-full md:w-[45%] h-56 md:h-full relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 md:p-8 flex flex-col relative">
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Meta Data */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{getFakeDate(index)}</span>
                  </div>
                  <div className="w-px h-3 bg-gray-600"></div>
                  <div className="flex items-center gap-1 text-primary">
                     <Tag size={12} />
                     <span>{project.tags[0]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-7 line-clamp-3 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Read More Button - Bottom positioned */}
                <div className={`mt-auto flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
                   <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1 group/btn hover:text-primary transition-colors">
                      Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Portfolio;