
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  name: string;
  level?: number; // Optional: 0-100 for progress bar
  icon?: React.ReactNode;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface DeveloperProfile {
  name: string;
  tagline: string;
  profilePictureUrl: string;
  about: string;
  skills: SkillCategory[];
  projects: Project[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}
    