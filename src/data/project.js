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

export const projects = {
  en: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      tag: "Web Development",
      description: "A personal portfolio website built with React & Vite, showcasing my work in a desktop-inspired UI.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
      image: previewPortfolio,
      featured: true,
      links: {
        live: "https://Sayusk.github.io/Portfolio",
        github: "https://github.com/Sayusk/Portfolio"
      },
      process: [
        { caption: "Started by sketching layout ideas in Figma, focusing on a clean desktop-inspired aesthetic." },
        { image: figmaPortfolio1 },
        { image: figmaPortfolio2 },
        { caption: "The goal was to replicate a desktop-like environment where each section acts as a window." },
        { image: inspoPortfolio1, caption: "I also drew inspiration from Shar’s portfolio (https://www.sharyap.com), whose layout and interactivity resonated with my concept." },
        { image: inspoPortfolio2, caption: "Last version of the portfolio, featuring mute/unmute button, and a window-style UI." },
        { image: homePortfolio },
        { image: aboutmePortfolio },
        { image: workPortfolio },
        { image: projectdetailPortfolio },
        { image: contactPortfolio },
        { caption: "Coming soon: Light/Dark mode switch." },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      tag: "Web App",
      description: "A solar irradiation potential calculator web app that estimates energy generation using NASA data. Built with Flask, React, and Supabase.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git", "Flask", "Supabase"],
      image: previewSmartsun,
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Coming soon..." },
      ]
    },
    {
      id: "macalania-tattoo",
      title: "Macalania Tattoo",
      tag: "Web Development",
      description: "A modern and stylish website developed for Macalania Tattoo Studio, designed to showcase their tattoo and piercing work, contact details, location and a bit of their story.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
      image: previewMacalania,
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Coming soon..." },
      ]
    },
    {
      id: "dra-carol-mansur",
      title: "Doctor Carol Mansur",
      tag: "UI/UX & Layout Development",
      description: "Created the full website layout and structure for a business site hosted on Hostinger. Focused on responsive design and clean visual hierarchy",
      technologies: ["Figma", "HTML", "CSS"],
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Coming soon..." },
      ]
    },
  ],
  pt: [
    {
      id: "portfolio-website",
      title: "Site Portfolio",
      tag: "Desenvolvimento Web",
      description: "Um site de portfólio pessoal construído com React & Vite, mostrando meu trabalho em uma interface inspirada em desktop.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
      image: previewPortfolio,
      featured: true,
      links: {
        live: "https://Sayusk.github.io/Portfolio",
        github: "https://github.com/Sayusk/Portfolio"
      },
      process: [
        { caption: "Comecei esboçando ideias de layout no Figma, focando em uma estética limpa inspirada em desktop." },
        { image: figmaPortfolio1 },
        { image: figmaPortfolio2 },
        { caption: "O objetivo era replicar um ambiente semelhante ao desktop, onde cada seção atua como uma janela." },
        { image: inspoPortfolio1, caption: "Também tirei inspiração do portfólio de Shar (https://www.sharyap.com), cujo layout e interatividade ressoaram com meu conceito." },
        { image: inspoPortfolio2, caption: "Última versão do portfólio, apresentando botão de mudo/desmudo e uma interface estilo janela." },
        { image: homePortfolio },
        { image: aboutmePortfolio },
        { image: workPortfolio },
        { image: projectdetailPortfolio },
        { image: contactPortfolio },
        { caption: "Em breve: Troca de modo claro/escuro." },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      tag: "Web App",
      description: "Um aplicativo web calculador de potencial de irradiação solar que estima a geração de energia usando dados da NASA. Construído com Flask, React e Supabase.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git", "Flask", "Supabase"],
      image: previewSmartsun,
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Em breve..." },
      ]
    },
    {
      id: "macalania-tattoo",
      title: "Macalania Tattoo",
      tag: "Desenvolvimento Web",
      description: "Um site moderno e elegante desenvolvido para o Macalania Tattoo Studio, projetado para mostrar seu trabalho de tatuagem e piercing, detalhes de contato, localização e um pouco de sua história.",
      technologies: ["React", "Vite", "HTML", "CSS", "JavaScript", "Figma", "Git"],
      image: previewMacalania,
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Em breve..." },
      ]
    },
    {
      id: "dra-carol-mansur",
      title: "Dra. Carol Mansur",
      tag: "Desenvolvimento de Layout & UI/UX",
      description: "Criei o layout e a estrutura completa do site para um site de negócios hospedado na Hostinger. Focado em design responsivo e hierarquia visual limpa",
      technologies: ["Figma", "HTML", "CSS"],
      links: {
        live: "#",
        github: "#"
      },
      process: [
        { caption: "Em breve..." },
      ]
    },
  ]
};
