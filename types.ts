export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  companyOrInstitution: string;
  description: string;
  type: 'work' | 'education' | 'milestone';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Game {
  id: string;
  title: string;
  hoursPlayed: number;
  rating: number; // 1-5
  imageUrl: string;
  status: 'playing' | 'completed' | 'wishlist';
  comment: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  avatar: string;
  profileCover: string; // New
  title: string;
  tagline: string;
  about: string;
  socials: {
    github: string;
    bilibili: string;
    linkedin: string;
  };
  runTimeStart: string; // New
}