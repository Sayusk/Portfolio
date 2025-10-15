import previewPortfolio from "../assets/PreviewPortfolio.png";

export const projects = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "A personal portfolio website built with React & Vite, showcasing my work and a desktop-inspired UI.",
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
    image: previewPortfolio,
  },
  {
    id: "smart-sun",
    name: "SmartSun",
    description:
      "A solar irradiation potential calculator web app that estimates energy generation using NASA data. Built with Flask, React, and Supabase.",
    technologies: ["React", "Flask", "Supabase"],
    // No image
  },
  {
    id: "project3",
    name: "Project 3",
    description: "Placeholder for a future project.",
    technologies: ["Python"],
  },
  {
    id: "project4",
    name: "Project 4",
    description: "Placeholder for a future project.",
    technologies: ["Java"],
  },
];
