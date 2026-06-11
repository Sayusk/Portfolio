// ============================================================================
// PORTFOLIO IMAGES
// ============================================================================
import previewPortfolio from "../assets/Portfolio/preview.png"
import homeDMPortfolio from "../assets/Portfolio/HomeDM.png"
import homeLMPortfolio from "../assets/Portfolio/HomeLM.png"
import homePortfolio from "../assets/Portfolio/Home.png"
import appsLMPortfolio from "../assets/Portfolio/AppsLM.png"
import figmaPortfolio1 from "../assets/Portfolio/figma1.png"
import figmaPortfolio2 from "../assets/Portfolio/figma2.png"
import inspoPortfolio1 from "../assets/Portfolio/inspo1.png"
import inspoPortfolio2 from "../assets/Portfolio/inspo2.png"
import mobileHomePortfolio from "../assets/Portfolio/MobileHome.png"
import mobileTabPortfolio from "../assets/Portfolio/MobileTab.png"

// ============================================================================
// MACALANIA IMAGES
// ============================================================================
import previewMacalania from "../assets/Macalania/preview.png"

// ============================================================================
// SMARTSUN IMAGES
// ============================================================================
import previewSmartsun from "../assets/Smartsun/preview.png"

// ============================================================================
// ROCKFIT IMAGES
// ============================================================================
import previewRockfit from "../assets/RockFit/Home.png"
import logoRockfit from "../assets/RockFit/Rockfitlogo.jpg"

// ============================================================================
// LAR DOCE LAR IMAGES
// ============================================================================
import previewLarDoceLar from "../assets/LarDoceLar/previewLarDoceLar.png"

// ============================================================================
// ENGLISH - EN
// ============================================================================

export const projects = {
  en: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Web Development",
      summary: "A personal digital portfolio built with React & Vite, showcasing my work and design, desktop-inspired emulator space.",
      featured: true,
      stack: ["React 19", "Vite", "Tailwind CSS v4", "Zustand", "Framer Motion", "React Rnd", "HTML5 Audio", "Figma"],
      thumbnail: previewPortfolio,
      year: 2025,
      role: "Creative Developer & Designer",
      status: "Completed",
      links: {
        live: "https://Sayusk.github.io/Portfolio",
        github: "https://github.com/Sayusk/Portfolio"
      },
      theme: {
        primary: "#8b5cf6",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Building my own digital portfolio",
          description: "An expressive, interactive space designed to run away from standard scrolling templates. Built to behave like a cozy desktop emulator with draggable window controls, dynamic themes, audio click feedbacks, and localized text.",
          image: homeDMPortfolio,
        },
        {
          type: "text",
          title: "The Idea: Why a Desktop in a Browser?",
          content: "Most developer portfolios follow a standard vertical layout that can feel a bit passive and corporate. I wanted to build something that felt more creative, interactive, and personal.\n\nBy turning my portfolio into a desktop-inspired experience, I aimed to create a space people could genuinely explore instead of simply scroll through, a project that showcases both my technical skills and a bit of my own personality."
        },
        {
          type: "text",
          title: "Atmospheric Inspirations",
          content: "To build a true OS experience, I started by researching operating systems and some creative portfolios. One of my biggest inspirations was Shar’s desktop and her video about personal websites. I had already followed her work for a long time because of her animations; watching her talk about personal websites motivated me to finally build my own.\n\nAnother major inspiration was Ubuntu’s desktop UI. I treat these references not as elements to copy, but as design anchor points to create a unique workspace.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Visual Reference & Inspiration Boards",
          images: [
            {
              src: inspoPortfolio1,
              caption: "Ubuntu Desktop UI Inspiration",
              description: "Using Ubuntu’s workspace design, dock behavior, and window management system as inspiration for creating a more desktop-like navigation experience."
            },
            {
              src: inspoPortfolio2,
              caption: "Interactive Portfolio Inspiration",
              description: "Studying interactive portfolio experiences that transform personal websites into explorable digital spaces rather than traditional scrolling layouts."
            }
          ]
        },
        {
          type: "text",
          title: "The Journey: The Redesign Turning Point",
          content: "I actually started this project back in 2025, but the original version was very simple—no draggable windows, no theme switching, no localization, traditional React Router navigation, and bland project pages. Eventually, I stopped working on it because I struggled with implementing theme systems and frontend architecture challenges.\n\nBut as I gained more frontend experience, stronger design knowledge, and better projects to showcase, I revisited the sketches. That redesign became the real turning point, balancing personality, usability, professionalism, and immersion.",
        },
        {
          type: "text",
          title: "Designing Light & Dark Modes",
          content: "The project has two distinct visual atmospheres. Light Mode features soft lavender tones, a calmer contrast, and a comfortable workspace feeling. Dark Mode, heavily influenced by my favorite color purple, brings deep darker backgrounds and neon-inspired accents for a late-night creative workspace vibe.\n\nVisual systems, type scales, and spacing tokens were rigorously tested in Figma to ensure excellent accessibility, high contrast legibility, and cleaner layouts during iterations.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Figma Light & Dark Theme Concept Exploration",
          images: [
            {
              src: figmaPortfolio1,
              caption: "Light Theme Exploration",
              description: "Exploring lavender accents, soft border-shadow configurations, and translucent titlebars for a clean light workspace environment."
            },
            {
              src: figmaPortfolio2,
              caption: "Dark Theme Exploration",
              description: "Drafting slate-dark color tones, pixel-perfect close/minimize action coordinates, and dock alignment markers."
            }
          ]
        },
        {
          type: "text",
          title: "The Mobile Version",
          content: "A detail I care about is that the desktop and mobile versions feel intentionally different while preserving the same identity. Instead of shrinking the desktop window coordinates to fit a small screen, the mobile experience is designed as its own product: a fully-realized smartphone operating system with app-driven navigation, clean tabs, a persistent Samsung/Android-inspired navigation bar, recent tab switchers, and springy slide-out settings panels.\n\nThe responsive experience is part of the product design itself, not just a technical adaptation.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          aspectRatio: "portrait",
          title: "Mobile Launcher & System Control Panel",
          images: [
            {
              src: mobileHomePortfolio,
              caption: "Mobile Home Screen",
              description: "A custom smartphone home screen featuring dynamic app shortcuts, status bar, and persistent navigation controls."
            },
            {
              src: mobileTabPortfolio,
              caption: "Quick Settings Drawer",
              description: "A slide-out system control panel hosting mute controls, system language toggle, and responsive light/dark theme switches."
            }
          ]
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Final Experience Environments",
          images: [
            {
              src: homeLMPortfolio,
              caption: "Final Light Mode Desktop",
              description: "Lavender light mode featuring transparent window headers and a glassmorphic dock."
            },
            {
              src: appsLMPortfolio,
              caption: "Draggable Apps (Light Mode)",
              description: "Multiple React-rnd windows running smoothly under light mode coordinate bounds."
            }
          ]
        },
        {
          type: "features",
          title: "Behind the Scenes: Core Systems",
          items: [
            {
              icon: "theme",
              title: "Theme Switching & Atmosphere",
              description: "Shifts the entire mood of the workspace between a quiet morning clear sky (light) and a neon-lit midnight (dark), saved to LocalStorage to respect your choice upon revisit."
            },
            {
              icon: "window",
              title: "Draggable Navigation Logic",
              description: "Allows you to drag, resize, maximize, and minimize windows smoothly. Powered by Zustand to manage layering coordinate stacks and active window focus."
            },
            {
              icon: "audio",
              title: "Tactile Audio Immersion",
              description: "Pre-caches micro mechanical sound nodes in memory to give you instant physical click feedback for actions like folder opening and minimizing."
            },
            {
              icon: "language",
              title: "Bilingual Localization",
              description: "Instantly translates the entire workspace between English and Portuguese without losing your current open windows or drag coordinates."
            },
            {
              icon: "responsive",
              title: "Responsive Desktop Layout",
              description: "Gracefully scales active windows and taskbar coordinates to ensure the workspace remains completely touch-friendly and functional on mobile screens."
            },
            {
              icon: "mobile",
              title: "Mobile OS Architecture",
              description: "Replaces the desktop interface with a completely custom smartphone experience on smaller viewports, featuring standalone tabs and custom transitions."
            }
          ]
        },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      category: "Web Development",
      summary: "A solar calculator that cuts through NASA's atmospheric databases to make solar potential easy, readable, and human.",
      featured: false,
      stack: ["React", "Vite", "Flask", "Supabase", "Python", "Figma", "Git"],
      thumbnail: previewSmartsun,
      year: 2024,
      role: "Fullstack Developer",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/JohnVictorVera/SmartsunFrontend"
      },
      theme: {
        primary: "#f59e0b",
        background: "#0c0a09",
      },
      sections: [
        {
          type: "hero",
          title: "Demystifying Solar Potential",
          description: "Calculating solar potential using NASA satellite data and modern web technologies to make green energy clear, readable, and highly accessible.",
          image: previewSmartsun,
        },
        {
          type: "text",
          title: "The Goal: Making Complex Data Approachable",
          content: "Solar energy forecasts are incredibly powerful, but the raw science is often locked behind heavy academic formulas and confusing databases. The idea behind SmartSun was to act as a bridge. By hooking into NASA's atmospheric APIs and mapping them with basic geolocation data, I built an interface that translates massive irradiation data into friendly, simple forecasts of energy savings and monthly generation.",
        },
      ],
    },
    {
      id: "macalania-tattoo",
      title: "Macalania Tattoo",
      category: "Web Development",
      summary: "A dark, moody digital catalog designed to showcase tattoo artistry, booking details, and creative stories.",
      featured: false,
      stack: ["React", "Vite", "JavaScript", "HTML", "CSS", "Figma", "Git"],
      thumbnail: previewMacalania,
      year: 2024,
      role: "Frontend Developer",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/Sayusk/MacalaniaTattooStudio"
      },
      theme: {
        primary: "#3b82f6",
        background: "#09090b",
      },
      sections: [
        {
          type: "hero",
          title: "A Tattoo Studio Landing Page",
          description: "A landing page for a tattoo studio called Macalania Tattoo. Showcasing the studio's works, and providing a way to get in touch with them for an appointment. Telling the studio's story, showing their mission and values.",
          image: previewMacalania,
        },
        {
          type: "text",
          title: "When Ink on Skin Meets the Digital World",
          content: "Tattoo and piercing studios are built on trust, visual identity, and intense artistry. I didn't want to build a generic brochure. The goal was to design a dark, cinematic space where massive, high-contrast imagery takes center stage, and smooth transitions guide users into a simple, comfortable booking flow.",
        },
      ],
    },
    {
      id: "rockfit-brasil-consultoria",
      title: "RockFit Brasil Consultoria",
      category: "Web Development",
      summary: "A landing page with built-in checkout for a fitness consulting company called RockFit Brasil. It has a checkout page and payment management.",
      featured: false,
      stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Figma"],
      thumbnail: logoRockfit,
      year: 2026,
      role: "Frontend Developer & Designer",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/Sayusk/LandinPageRockFit"
      },
      theme: {
        primary: "#ef4444",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Elevating Fitness Consulting to High Performance",
          description: "Building a digital presence for RockFit Brasil with a intuitive user interface and optimized conversion funnels.",
          image: previewRockfit,
        }
      ],
    },
    {
      id: "lar-doce-lar",
      title: "Lar Doce Lar",
      category: "Ui/Ux Designer",
      summary: "A platform for courses and community for Christian women who want to grow in their faith, marriage, and motherhood.",
      featured: false,
      stack: ["React", "Vite", "Typescript", "Tailwind CSS", "Figma"],
      thumbnail: previewLarDoceLar,
      year: 2026,
      role: "Frontend Developer & Designer",
      status: "wip",
      links: {
        live: "https://lardocelar.app"
      },
      theme: {
        primary: "#eb7da7",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Lar Doce Lar",
          description: "A platform for courses and community for Christian women who want to grow in their faith, marriage, and motherhood.",
          image: previewLarDoceLar,
        },
      ],
    },
  ],

  // ============================================================================
  // Portuguese - PT
  // ============================================================================

  pt: [
    {
      id: "portfolio-website",
      title: "Site Portfólio",
      category: "Desenvolvimento Web",
      summary: "Um espaço de trabalho pessoal e aconchegante construído com React & Vite, apresentando meus designs e projetos.",
      featured: true,
      stack: ["React 19", "Vite", "Tailwind CSS v4", "Zustand", "Framer Motion", "React Rnd", "HTML5 Audio", "Figma"],
      thumbnail: previewPortfolio,
      year: 2025,
      role: "Desenvolvedor Criativo & Designer",
      status: "Concluído",
      links: {
        live: "https://Sayusk.github.io/Portfolio",
        github: "https://github.com/Sayusk/Portfolio"
      },
      theme: {
        primary: "#8b5cf6",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Construindo meu próprio portfólio digital",
          description: "Um espaço expressivo e interativo projetado para fugir dos modelos de rolagem padrão. Construído para se comportar como um emulador de desktop aconchegante com janelas arrastáveis, temas dinâmicos, feedbacks de clique por áudio e texto localizado.",
          image: homeDMPortfolio,
        },
        {
          type: "text",
          title: "A Ideia: Por que um Desktop no Navegador?",
          content: "A maioria dos portfólios de desenvolvedores segue um layout vertical padrão que pode parecer um pouco passivo e corporativo. Eu queria construir algo que parecesse mais criativo, interativo e pessoal.\n\nAo transformar meu portfólio em uma experiência inspirada em desktop, meu objetivo foi criar um espaço que as pessoas pudessem explorar genuinamente em vez de simplesmente rolar a página, um projeto que demonstra tanto minhas habilidades técnicas quanto um pouco da minha própria personalidade."
        },
        {
          type: "text",
          title: "Inspirações Atmosféricas",
          content: "Para construir uma experiência real de SO, comecei pesquisando sistemas operacionais e alguns portfólios criativos. Uma das maiores inspirações foi o site da Shar e seu vídeo sobre sites pessoais. Eu já acompanhava o trabalho dela há muito tempo por causa de suas animações; ver ela falar sobre sites pessoais me motivou a finalmente construir o meu próprio.\n\nOutra grande inspiração foi a interface do Ubuntu. Trato essas referências não como elementos para copiar, mas como pontos de inspiração para criar um portfólio único.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Referências Visuais & Painéis de Inspiração",
          images: [
            {
              src: inspoPortfolio1,
              caption: "Inspiração da Interface Ubuntu",
              description: "Usando o design de espaço de trabalho, comportamento do dock e sistema de gerenciamento de janelas do Ubuntu como inspiração para criar uma experiência de navegação mais parecida com um desktop."
            },
            {
              src: inspoPortfolio2,
              caption: "Inspiração de Portfólio Interativo",
              description: "Estudando experiências de portfólio interativas que transformam sites pessoais em espaços digitais exploráveis em vez de layouts tradicionais de rolagem vertical."
            }
          ]
        },
        {
          type: "text",
          title: "A Jornada: O Ponto de Virada no Redesenho",
          content: "Eu realmente comecei este projeto em 2025, mas a versão original era muito simples — sem janelas arrastáveis, sem troca de temas, sem localização, navegação tradicional com React Router e páginas de projetos sem graça. Eventualmente, parei de trabalhar nele porque tive dificuldades para implementar sistemas de temas e desafios de arquitetura frontend.\n\nMas conforme ganhei mais experiência em frontend, conhecimento de design mais sólido e melhores projetos para exibir, revisitei os rascunhos. Aquele redesenho se tornou o verdadeiro ponto de virada, equilibrando personalidade, usabilidade, profissionalismo e imersão.",
        },
        {
          type: "text",
          title: "Projetando os Modos Claro & Escuro",
          content: "O projeto tem duas atmosferas visuais distintas. O Modo Claro apresenta tons de lavanda suaves, um contraste mais calmo e uma sensação de espaço de trabalho confortável. O Modo Escuro, fortemente influenciado pela minha cor favorita, roxo, traz fundos escuros profundos e detalhes inspirados em neon para uma vibe de espaço de trabalho criativo de fim de noite.\n\nSistemas visuais, escalas tipográficas e espaçamentos foram rigorosamente testados no Figma para garantir excelente acessibilidade, legibilidade de alto contraste e layouts mais limpos durante as iterações.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Exploração de Conceitos de Tema Claro & Escuro",
          images: [
            {
              src: figmaPortfolio1,
              caption: "Exploração de Tema Claro",
              description: "Mapeando detalhes em lavanda, cabeçalhos transparentes e sombras de janela suaves em um rascunho de área de trabalho clara."
            },
            {
              src: figmaPortfolio2,
              caption: "Exploração de Tema Escuro",
              description: "Refinando grades de alta visibilidade em tom cinza, vetores de ação de fechar/minimizar e marcadores do dock."
            }
          ]
        },
        {
          type: "text",
          title: "A Versão Mobile",
          content: "Um detalhe que me importa é que as versões desktop e mobile pareçam intencionalmente diferentes, mantendo a mesma identidade. Em vez de espremer as coordenadas das janelas do desktop para caber em uma tela pequena, a experiência mobile é projetada como seu próprio produto: um sistema operacional de smartphone completo, com navegação baseada em aplicativos, abas limpas, uma barra de navegação persistente inspirada em Samsung/Android, seletores de abas recentes e painéis de configurações deslizantes e responsivos.\n\nA experiência responsiva faz parte do próprio design do produto, não é apenas uma adaptação técnica.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          aspectRatio: "portrait",
          title: "Launcher Mobile & Painel de Configurações",
          images: [
            {
              src: mobileHomePortfolio,
              caption: "Tela Inicial Mobile",
              description: "Uma tela de smartphone personalizada com atalhos de aplicativos, barra de status customizada e controles de navegação inferiores."
            },
            {
              src: mobileTabPortfolio,
              caption: "Painel de Configurações Rápidas",
              description: "Um menu deslizante lateral do sistema que permite silenciar sons, alternar idiomas e trocar o tema visual instantaneamente."
            }
          ]
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Ambientes da Experiência Final",
          images: [
            {
              src: homeLMPortfolio,
              caption: "Área de Trabalho Final no Modo Claro",
              description: "Espaço de trabalho em tom lavanda suave apresentando cabeçalhos translúcidos e um dock de vidro fosco."
            },
            {
              src: appsLMPortfolio,
              caption: "Janelas Ativas (Modo Claro)",
              description: "Múltiplas janelas do React-rnd rodando de forma fluida dentro dos limites de coordenadas do modo claro."
            }
          ]
        },
        {
          type: "features",
          title: "Por Trás dos Panos: Subsistemas",
          items: [
            {
              icon: "theme",
              title: "Alternância & Clima de Temas",
              description: "Muda toda a atmosfera da tela de trabalho entre uma manhã tranquila e limpa (claro) e uma meia-noite iluminada por neon (escuro), salvo no LocalStorage."
            },
            {
              icon: "window",
              title: "Navegação por Janelas Arrastáveis",
              description: "Permite que você arraste, redimensione e organize janelas livremente. Controlado pelo Zustand para manter coordenadas fluidas e prioridades de foco."
            },
            {
              icon: "audio",
              title: "Imersão de Som Tátil",
              description: "Pré-carrega pequenos sons de cliques mecânicos na memória para dar um feedback físico instantâneo a cada abertura ou fechamento de pasta."
            },
            {
              icon: "language",
              title: "Localização Bilíngue",
              description: "Traduz instantaneamente todo o sistema entre Inglês e Português sem perder suas coordenadas atuais ou janelas abertas."
            },
            {
              icon: "responsive",
              title: "Layout de Desktop Responsivo",
              description: "Redimensiona janelas ativas e docks de forma fluida para que a mesa de trabalho continue divertida e utilizável mesmo em telas compactas de celulares."
            },
            {
              icon: "mobile",
              title: "Arquitetura de SO Mobile",
              description: "Substitui a interface de desktop por uma experiência de smartphone totalmente personalizada em telas menores, com abas independentes e transições fluidas."
            }
          ]
        },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      category: "Desenvolvimento Web",
      summary: "Uma calculadora solar que calcula o potencial solar usando a API de irradiação solar da NASA",
      featured: false,
      stack: ["React", "Vite", "Flask", "Supabase", "Python", "Figma", "Git"],
      thumbnail: previewSmartsun,
      year: 2024,
      role: "Desenvolvedor Fullstack",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/JohnVictorVera/SmartsunFrontend"
      },
      theme: {
        primary: "#f59e0b",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Desmistificando o Potencial Solar",
          description: "Calculando o potencial solar usando dados de satélite da NASA e tecnologias web modernas para tornar a energia verde clara, acessível e muito mais humana.",
          image: previewSmartsun,
        },
        {
          type: "text",
          title: "O Objetivo: Tornar Dados Complexos Acolhedores",
          content: "As estimativas solares são extremamente importantes para o futuro sustentável, mas os bancos de dados científicos costumam ser complexos e intimidantes para o usuário comum. O SmartSun nasceu para funcionar como uma ponte. Integrando-me às APIs de irradiação solar da NASA e cruzando-as com geolocalização simples, criei um painel limpo que traduz dados complexos em previsões amigáveis de economia e geração de energia.",
        },
      ],
    },
    {
      id: "macalania-tattoo",
      title: "Macalania Tattoo",
      category: "Desenvolvimento Web",
      summary: "Uma landing page projetada para o estúdio de tatuagem Macalania Tattoo. Mostra as artes do estúdio, e fornece uma forma de entrar em contato com eles para um agendamento. Contando a história do estúdio, mostrando seus valores e sua filosofia.",
      featured: false,
      stack: ["React", "Vite", "JavaScript", "HTML", "CSS", "Figma", "Git"],
      thumbnail: previewMacalania,
      year: 2024,
      role: "Desenvolvedor Frontend",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/Sayusk/MacalaniaTattooStudio"
      },
      theme: {
        primary: "#3b82f6",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Uma Landing Page Para o Macalania Tattoo Studio",
          description: "Uma landing page projetada para o estúdio de tatuagem Macalania Tattoo. Mostra as artes do estúdio, e fornece uma forma de entrar em contato com eles para um agendamento. Contando a história do estúdio, mostrando seus valores e sua filosofia.",
          image: previewMacalania,
        },
        {
          type: "text",
          title: "Quando a Arte na Pele Encontra o Mundo Digital",
          content: "Estúdios de tatuagem e piercing dependem de identidade, confiança e forte impacto visual. Eu não queria construir apenas mais um folheto institucional. O objetivo foi criar uma galeria escura e cinematográfica onde imagens em grande formato e transições fluidas guiam o cliente até um agendamento rápido e confortável.",
        },
      ],
    },
    {
      id: "rockfit-brasil-consultoria",
      title: "RockFit Brasil Consultoria",
      category: "Desenvolvimento Web",
      summary: "Uma landing page para uma empresa de consultoria fitness chamada RockFit Brasil. Possui checkout embutido para pagamento facilitado.",
      featured: false,
      stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Figma"],
      thumbnail: logoRockfit,
      year: 2026,
      role: "Desenvolvedor Frontend & Designer",
      status: "wip",
      links: {
        live: "#",
        github: "https://github.com/Sayusk/LandinPageRockFit"
      },
      theme: {
        primary: "#ef4444",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Elevando a Consultoria Fitness à Alta Performance",
          description: "Construindo uma presença digital para a RockFit Brasil com uma interface intuitiva, checkout embutido e design dinâmico.",
          image: previewRockfit,
        }
      ],
    },
    {
      id: "lar-doce-lar",
      title: "Lar Doce Lar",
      category: "Ui/Ux Design",
      summary: "Uma plataforma de cursos e comunidade para mulheres cristãs que desejam crescer na fé, no matrimônio e na maternidade.",
      featured: false,
      stack: ["React", "Vite", "Tailwind CSS", "Figma"],
      thumbnail: previewLarDoceLar,
      year: 2026,
      role: "Designer Ui/Ux & Desenvolvedor Frontend",
      status: "wip",
      links: {
        live: "https://lardocelar.app"
      },
      theme: {
        primary: "#eb7da7",
        background: "#000000",
      },
      sections: [
        {
          type: "hero",
          title: "Lar Doce Lar",
          description: "Uma plataforma de cursos e comunidade para mulheres cristãs que desejam crescer na fé, no matrimônio e na maternidade.",
          image: previewLarDoceLar,
        },
      ],
    },
  ],
};
