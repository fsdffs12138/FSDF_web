import React from 'react';
import { PERSONAL_INFO, PROJECT_DATA, GAMING_DATA } from '../constants';
import { Github, Linkedin, Twitter, Tag, Bell, MapPin, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const projectCount = PROJECT_DATA.length;
  const gameCount = GAMING_DATA.length;
  const uniqueTags = Array.from(new Set(PROJECT_DATA.flatMap(p => p.tags)));

  return (
    <aside className="space-y-6 animate-fade-up sticky top-[90px]">
      
      {/* Profile Card - 1:1 Replica */}
      <div className="butterfly-card overflow-hidden group">
        {/* Profile Cover Image */}
        <div className="h-32 w-full overflow-hidden relative">
           <img 
             src={PERSONAL_INFO.profileCover} 
             alt="Cover" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
        </div>
        
        {/* Avatar Area - Overlapping */}
        <div className="px-6 text-center relative z-10">
           <div className="relative inline-block -mt-10 mb-3">
              <img 
                src={PERSONAL_INFO.avatar} 
                alt={PERSONAL_INFO.name} 
                className="w-24 h-24 rounded-full border-[4px] border-[#1e293b] shadow-xl transition-transform duration-700 hover:rotate-[360deg] cursor-pointer bg-[#1e293b]"
              />
           </div>
           
           <h2 className="text-xl font-bold text-white mb-1 tracking-wide">{PERSONAL_INFO.name}</h2>
           <p className="text-gray-400 text-xs mb-5 font-medium">{PERSONAL_INFO.title}</p>
           
           {/* Statistics Grid (Vertical Split) */}
           <div className="grid grid-cols-3 gap-2 mb-6 px-2">
             <div className="text-center cursor-pointer hover:text-primary transition-colors border-r border-white/10">
               <span className="block font-bold text-white text-lg">{projectCount}</span>
               <span className="text-gray-500 text-[10px] uppercase tracking-wider">Posts</span>
             </div>
             <div className="text-center cursor-pointer hover:text-primary transition-colors border-r border-white/10">
               <span className="block font-bold text-white text-lg">{uniqueTags.length}</span>
               <span className="text-gray-500 text-[10px] uppercase tracking-wider">Tags</span>
             </div>
             <div className="text-center cursor-pointer hover:text-primary transition-colors">
               <span className="block font-bold text-white text-lg">{gameCount}</span>
               <span className="text-gray-500 text-[10px] uppercase tracking-wider">Games</span>
             </div>
           </div>

           {/* Follow Me Button */}
           <a 
             href={PERSONAL_INFO.socials.github} 
             target="_blank"
             className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-primary text-white py-2.5 rounded-lg font-bold text-sm shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 transition-all mb-5 group-hover:animate-pulse"
           >
             <Github size={18} />
             <span>Follow Me</span>
           </a>
           
           {/* Social Icons */}
           <div className="flex justify-center gap-6 pb-6">
             <a href={PERSONAL_INFO.socials.github} className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 hover:rotate-12">
                <Github size={22}/>
             </a>
             <a href={PERSONAL_INFO.socials.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 hover:rotate-12">
                <Linkedin size={22}/>
             </a>
             <a href={PERSONAL_INFO.socials.bilibili} className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110 hover:rotate-12">
                <Twitter size={22}/>
             </a>
           </div>
        </div>
      </div>

      {/* Announcement Widget */}
      <div className="butterfly-card p-5">
         <div className="flex items-center gap-2 mb-3 text-white font-bold border-b border-dashed border-white/20 pb-2">
            <Bell size={16} className="text-red-400 animate-shake" />
            <span className="text-sm">Announcement</span>
         </div>
         <div className="text-sm text-gray-300 leading-relaxed space-y-2">
           <p>👋 Welcome to my blog!</p>
           <p>This site is built with React & Tailwind, styled after Hexo Butterfly.</p>
         </div>
      </div>

      {/* Info Widget */}
      <div className="butterfly-card p-5">
         <div className="flex items-center gap-2 mb-3 text-white font-bold border-b border-dashed border-white/20 pb-2">
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Info</span>
         </div>
         <div className="text-xs text-gray-400 space-y-2">
            <div className="flex justify-between">
              <span>Location:</span>
              <span className="text-gray-200">Cyberverse</span>
            </div>
            <div className="flex justify-between">
              <span>Job:</span>
              <span className="text-gray-200">Developer</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="text-gray-200">me@example.com</span>
            </div>
         </div>
      </div>

    </aside>
  );
};

export default Sidebar;