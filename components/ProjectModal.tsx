import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Calendar, Tag, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border border-white/10">
        
        {/* Close Button - Sticky */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500 rounded-full text-white transition-all backdrop-blur-md group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Header Image */}
        <div className="relative h-48 sm:h-72 shrink-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg font-serif">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/80 text-white backdrop-blur-md">
                    # {tag}
                  </span>
               ))}
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-8 bg-[#1e293b]">
          
          {/* Main Description */}
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="bg-black/20 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-secondary" size={20} />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
             {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-1"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
             )}
             {project.repoUrl && (
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                  <Github size={18} />
                  Source Code
                </a>
             )}
          </div>

          {/* Copyright/Info Block - Common in Hexo Butterfly */}
          <div className="mt-8 p-4 border-l-4 border-accent bg-accent/5 rounded-r-lg">
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-accent font-bold">
                <AlertCircle size={16} />
                <span>Project Copyright</span>
              </div>
              <p className="text-gray-400">
                <strong className="text-gray-300">Author:</strong> {PERSONAL_INFO.name}<br/>
                <strong className="text-gray-300">Link:</strong> {window.location.href}<br/>
                <strong className="text-gray-300">License:</strong> CC BY-NC-SA 4.0
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;