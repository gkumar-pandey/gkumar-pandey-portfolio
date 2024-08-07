import React from "react";

// Container props interface
export interface ContainerProps {
  children: React.ReactNode;
}

// Button props interface
export interface ButtonProps {
  children: React.ReactNode;
  variant: String;
  leftIcon?: any;
  rightIcon?: any;
}

// Section Heading interface
export interface SectionHeadingProps {
  children: React.ReactNode;
}

// Skill icons interface
export interface SkillIconProps {
  icon: string;
  skill: string;
}

// Project card props interface
export interface ProjectCardProps {
  title: string;
  description?: string;
  liveLink: string;
  repoLink: string;
  img: string | any;
  languages?: string[];
}

// work experience props interface
export interface WorkExperienceProps {
  position: string;
  start_date: string;
  end_date: string;
  company: string;
  descriptions: string[];
  logo: any;
}
