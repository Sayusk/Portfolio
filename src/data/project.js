import previewPortfolio from "../assets/Portfolio/preview.png";
import figmaPortfolio1 from "../assets/Portfolio/figma1.png";
import figmaPortfolio2 from "../assets/Portfolio/figma2.png";
import inspoPortfolio1 from "../assets/Portfolio/inspo1.png";
import inspoPortfolio2 from "../assets/Portfolio/inspo2.png";
import homePortfolio from "../assets/Portfolio/Home.png";
import projectdetailPortfolio from "../assets/Portfolio/ProjectDetail.png";
import workPortfolio from "../assets/Portfolio/Work.png";
import aboutmePortfolio from "../assets/Portfolio/AboutMe.png";
import contactPortfolio from "../assets/Portfolio/Contact.png";
import previewSmartsun from "../assets/Smartsun/preview.png";

import previewMacalania from "../assets/Macalania/preview.png";

export const projects = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    tag: "Web Development", 
    description:
      "A personal portfolio website built with React & Vite, showcasing my work in a desktop-inspired UI.",
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
    image: previewPortfolio,

    // Creative process
    process: [
      {
        caption: "Started by sketching layout ideas in Figma, focusing on a clean desktop-inspired aesthetic.",
      },      
      {
        image: figmaPortfolio1,
      },
      {
        image: figmaPortfolio2,
      },
      {
        caption: "The goal was to replicate a desktop-like environment where each section acts as a window.",
      },
      {
        image: inspoPortfolio1,
        caption: "I also drew inspiration from Shar’s portfolio (https://www.sharyap.com), whose layout and interactivity resonated with my concept."
      },
      {
        image: inspoPortfolio2,
        caption: "Last version of the portfolio, featuring mute/unmute button, and a window-style UI.",
      },
      {
        image: homePortfolio,
      },
      {
        image: aboutmePortfolio,
      },
      {
        image: workPortfolio,
      },
      {
        image: projectdetailPortfolio,
      },
      {
        image: contactPortfolio,
      },
      {
        caption: "Coming soon: Light/Dark mode switch.",
      },
    ],
  },

  {
    id: "smart-sun",
    name: "SmartSun",
    tag: "Web App",
    description:
      "A solar irradiation potential calculator web app that estimates energy generation using NASA data. Built with Flask, React, and Supabase.",
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git", "Flask", "Supabase"],
    image: previewSmartsun,

  // Creative process
    process: [
      {
        caption: "Coming soon...",
      },      
    ]
  },

  {
    id: "macalania-tattoo",
    name: "Macalania Tattoo",
    tag: "Web Development",
    description: "A modern and stylish website developed for Macalania Tattoo Studio, designed to showcase their tattoo and piercing work, contact details, location and a bit of their story.",
    technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
    image: previewMacalania,

  // Creative process
    process: [
      {
        caption: "Coming soon...",
      },      
    ]
  },
   {
    id: "dra-carol-mansur",
    name: "Doctor Carol Mansur",
    tag: "UI/UX & Layout Development",
    description: "Created the full website layout and structure for a business site hosted on Hostinger. Focused on responsive design and clean visual hierarchy",
    technologies: ["Figma", "HTML", "CSS"],

  // Creative process
    process: [
      {
        caption: "Coming soon...",
      },      
    ]
    
  },

];
