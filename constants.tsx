
import React from 'react';
import { DeveloperProfile, Project, SkillCategory } from './types';

//Moved icon definitions to the top to fix 'used before declaration' errors
// SVG Icons (Heroicons example, simplified)
export const IconSun: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

export const IconMoon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);

export const IconChatBubble: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091a1.993 1.993 0 0 0-1.116-.401c-.368.022-.73.041-1.09.06M18 15.75V9.75M15.75 13.5H3.75M15.75 9.75H3.75M12.75 6.75H3.75M12 4.5H3.75m6.75-3H3.75" />
  </svg>
);

export const IconPaperAirplane: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

export const IconXMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export const IconBars3: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const IconExternalLink: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const IconSocialGithub: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
  </svg>
);

export const IconSocialLinkedin: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.966 0-1.75-.785-1.75-1.75S5.534 3.23 6.5 3.23c.965 0 1.75.784 1.75 1.75S7.465 6.73 6.5 6.73zM19 19h-3v-5.604c0-1.42-.048-2.65-1.736-2.65-1.594 0-1.98.96-2.27 1.875V19h-3V8h3v1.322c.64-.985 1.64-1.772 3.27-1.772 2.48 0 4.236 1.524 4.236 4.97V19z"/>
  </svg>
);

export const IconMail: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

// Basic tech icons as SVGs
export const IconTechReact: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export const IconTechTypeScript: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#007ACC" d="M0 0h128v128H0z"/>
    <path fill="#FFF" d="M25.73 93.29V34.71h11.02v11.42h22.27V34.71h11.01v58.58H59.02V68.39H36.75v24.9h-11.02zm66.39-30.53c0-5.7-1.82-10.5-5.46-14.42-3.63-3.91-8.3-5.87-13.99-5.87-5.78 0-10.41 1.96-13.89 5.87-3.49 3.91-5.23 8.72-5.23 14.42 0 5.73 1.75 10.56 5.23 14.52 3.48 3.95 8.11 5.93 13.89 5.93 5.69 0 10.36-1.98 13.99-5.93 3.64-3.96 5.46-8.79 5.46-14.52zm-9.62 0c0 3.48-.88 6.35-2.63 8.62-1.76 2.26-4.13 3.4-7.12 3.4-2.99 0-5.37-1.14-7.12-3.4-1.75-2.27-2.63-5.14-2.63-8.62 0-3.45.88-6.3 2.63-8.55 1.75-2.25 4.13-3.38 7.12-3.38 2.99 0 5.36 1.13 7.12 3.38 1.75 2.25 2.63 5.1 2.63 8.55z"/>
  </svg>
);

export const IconTechTailwind: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} fill="none" viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 0C6.042 0 0 6.042 0 13.5s6.042 13.5 13.5 13.5S27 20.958 27 13.5C27 6.042 20.958 0 13.5 0zm0 24.3a10.8 10.8 0 110-21.6 10.8 10.8 0 010 21.6zM40.5 0C33.042 0 27 6.042 27 13.5S33.042 27 40.5 27 54 20.958 54 13.5C54 6.042 47.958 0 40.5 0zm0 24.3a10.8 10.8 0 110-21.6 10.8 10.8 0 010 21.6z" fill="#38BDF8"></path>
  </svg>
);

export const IconTechNodeJS: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className || "w-6 h-6"} viewBox="0 0 240 277.1" xmlns="http://www.w3.org/2000/svg" fill="#68A063">
    <path d="M120,0,6.5,66.11V198.33L120,264.44l113.5-66.11V66.11Zm87.55,185.67-87.55,50.22-87.55-50.22V78.78l87.55-50.22,87.55,50.22ZM100.39,103.54l-42.1,24.83v26.39l67.36,38.44V167l-25.26-14.72v-24.4Zm38.82,34.66,25.26,14.72v26.23l-67.36-38.44V143.3l42.1-24.83Z"/>
  </svg>
);

export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
};

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: "Nimmagadda Yagna Yaswanth",
  tagline: "Aspiring Full-Stack Developer | M.S. Computer Science Student",
  profilePictureUrl: "https://picsum.photos/seed/yagnayaswanth/400/400",
  about: `Hello! I'm Nimmagadda Yagna Yaswanth, a Computer Science Master's student at the University of Central Missouri (Aug 2023 - May 2025) with a GPA of 3.2/4.0. I completed my B.Tech. in Computer Science from Vasireddy Venkatadri Institute of Technology in June 2023.

Since 2021, I've been gaining hands-on experience as an Intern React Developer at CodingZen. This internship has provided me with real-world knowledge and an understanding of how things are done at a low level.

My technical skills are complemented by certifications including Python 3 Programming Specialization, Java Specialization by Wipro, Spring Boot Certification By Udemy, and React Js Certification By Verzeo.

I'm passionate about building impactful applications and continuously expanding my knowledge in software development. During my undergraduate studies (2020-2023), I was an active Student Activity Council Member, contributing to the Academics council for a tenure of 3 years.`,
  skills: [
    {
      name: "Languages",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "SQL" },
        { name: "C" },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "React.Js", icon: <IconTechReact /> },
        { name: "Node.Js", icon: <IconTechNodeJS /> },
        { name: "Django" },
        { name: "StreamLit" },
      ],
    },
    {
      name: "Tools & Databases",
      skills: [
        { name: "Git & GitHub", icon: <IconSocialGithub /> },
        { name: "MongoDB" },
        { name: "SQLite3" }, // From Covid Tracker Project
        { name: "VS Code" },
        { name: "PyCharm" },
        { name: "Postman" }, // From Covid Tracker Project
      ],
    },
  ],
  projects: [
    {
      id: 'proj1',
      title: "Music Recommendation System",
      description: "A website which recommends music based on users' recent interests. Features: Songs Recommendation.",
      imageUrl: "httpsum.photos/seed/musicrecsys/600/400",
      techStack: ["Machine Learning", "StreamLit"],
      liveLink: "#", 
      repoLink: "#", 
    },
    {
      id: 'proj2',
      title: "Covid Tracker",
      description: "A website in which one can check real-time Covid cases. Features: Covid Hot Spots, Vacancies in Nearby Hospitals.",
      imageUrl: "httpsum.photos/seed/covidtrackerapp/600/400",
      techStack: ["React Js", "Django", "SQLite3", "Git", "Postman"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 'proj3',
      title: "Quiz Game",
      description: "A basic introduction project that allows users to create and answer quizzes online. Custom questions and sections can be added according to one's need.",
      imageUrl: "httpsum.photos/seed/quizgameapp/600/400",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#",
    },
  ],
  contact: {
    email: "yagnayaswanth@gmail.com",
    linkedin: "https://linkedin.com/in/yagnayaswanth",
    github: "https://github.com/Yaswanthyagna",
  },
};
