import React from 'react';
import { PROJECT_DATA } from '../constants';
import { ExternalLink, Github, Code } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">Code experiments and deployed productions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROJECT_DATA.map((project) => (
            <div key={project.id} className="group glass-panel rounded-2xl overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-500">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors duration-500"></div>
                
                {/* Float Actions */}
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                   {project.repoUrl && (
                      <a href={project.repoUrl} className="p-2 bg-surface text-white rounded-full hover:bg-primary transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="p-2 bg-surface text-white rounded-full hover:bg-accent transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 text-gray-300 bg-white/5 rounded-sm border-l-2 border-primary/50">
                       {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;