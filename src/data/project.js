import previewPortfolio from "../assets/Portfolio/preview.png";
import figmaPortfolio1 from "../assets/Portfolio/figma1.png";
import figmaPortfolio2 from "../assets/Portfolio/figma2.png";
import inspoPortfolio1 from "../assets/Portfolio/inspo1.png";
import inspoPortfolio2 from "../assets/Portfolio/inspo2.png";
import homePortfolio from "../assets/Portfolio/Home.png";
import workPortfolio from "../assets/Portfolio/Work.png";
import previewSmartsun from "../assets/Smartsun/preview.png";
import previewMacalania from "../assets/Macalania/preview.png";

// High-fidelity screenshots for the updated case study storytelling
import appsDMPortfolio from "../assets/Portfolio/AppsDM.png";
import appsLMPortfolio from "../assets/Portfolio/AppsLM.png";
import homeDMPortfolio from "../assets/Portfolio/HomeDM.png";
import homeLMPortfolio from "../assets/Portfolio/HomeLM.png";

export const projects = {
  en: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      category: "Web Development",
      summary: "A personal digital playroom built with React & Vite, showcasing my work in a cozy, desktop-inspired emulator space.",
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
        background: "#0f0f0f",
      },
      sections: [
        {
          type: "hero",
          title: "Building my own digital playroom",
          description: "A creative engineering space designed to run away from standard scrolling templates. Built to behave like a cozy desktop emulator—complete with draggable window controls, dynamic themes, tiny audio click feedbacks, and localized text—crafted to feel like exploring a creative person's workspace rather than reading a static resume.",
          image: homeDMPortfolio,
        },
        {
          type: "text",
          title: "The Idea: Why a Desktop in a Browser?",
          content: "Most developer portfolios follow a standard vertical layout that can feel a bit passive and corporate. I wanted to create something that felt alive, inviting, and playful.\n\nGrowing up, I spent countless hours playing story-driven RPGs and diving into anime, always fascinated by how games create immersive worlds. That love for storytelling and psychology shaped this project. By turning my portfolio into a desktop emulator—where About Me, Selected Projects, and Contact act as independent, draggable apps—I wanted to create a comfortable sandbox for people to explore, showing my skills in complex React state synchronization while sharing a bit of who I am.",
        },
        {
          type: "text",
          title: "Creative Direction: Atmospheric Inspiration",
          content: "To build a truly immersive OS experience, I started by researching classic operating systems, desktop simulation games, and premium contemporary portfolios. Rather than copying these references literally, I treated them as emotional and design anchor points.\n\nOne of my biggest inspirations for this spatial workspace was Shar Yap's desktop portfolio ([sharyap.com](https://www.sharyap.com/)), which beautifully demonstrated how retro operating system concepts could be brought into modern web interfaces with pure elegance.\n\nKey inspiration areas included:\n• **Immersive UI & Cozy Simulation**: Studying retro systems to craft tactile dock layouts, floating indicators, and clean window limits.\n• **Tactile Interaction Systems**: Implementing zero-latency audio cues and focus behaviors that make digital folders feel physical.\n• **Atmospheric Storytelling**: Adapting these concepts to construct a highly responsive, cinematic developer portfolio that feels warm, personal, and comfortable to navigate.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Visual Reference & Inspiration Boards",
          images: [
            {
              src: inspoPortfolio1,
              caption: "Window Navigation Reference",
              description: "Analyzing dynamic desktop simulators, floating workspaces, and dynamic layering coordinate stacks."
            },
            {
              src: inspoPortfolio2,
              caption: "Dock & System Controls Reference",
              description: "Studying tactile desktop widgets, dynamic language switches, and system level control layouts."
            }
          ]
        },
        {
          type: "text",
          title: "Design Exploration: Designing the Moods",
          content: "The early exploration phase focused on creating a desktop-inspired interface that still felt modern, clean, and navigable. It was crucial to strike the perfect balance between playful desktop realism and high-end, clean minimalism.\n\nIn Figma, I experimented with visual identity systems, type scales, and spacing tokens. I wanted light and dark modes to represent entirely different atmospheres: a soft, lavender light mode that feels like a quiet, productive morning, and a deep neon-accented dark mode that feels like a late-night creative session.",
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
          title: "UI Evolution: Redesigning the Messy Sketches",
          content: "My initial prototype laid a solid technical foundation, but it was visually cluttered and hard to navigate on mobile. The borders were harsh, windows collided like bumper cars, and the hierarchy felt muddy.\n\nThrough several iterative design cycles, I refined the visual rhythm. I converted rigid inline borders into elegant, soft Tailwind CSS v4 variables, implemented strict coordinate limits to protect mobile viewports, and aggressively cleared out unnecessary visual noise to let the case studies take center stage.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Prototype vs Final Version Comparison",
          images: [
            {
              src: homePortfolio,
              caption: "Early Design Prototype",
              description: "Initial baseline desktop environment featuring harsh purple themes and basic positioning coordinates."
            },
            {
              src: homeDMPortfolio,
              caption: "Final Polished Desktop",
              description: "Optimized modern dark interface with high-contrast visual grids and atmospheric neon backdrops."
            }
          ]
        },
        {
          type: "text",
          title: "The Finished Space: An Atmospheric Sandbox",
          content: "The finished website is a responsive desktop simulator that feels clean, editorial, and highly professional. It features dynamic light/dark workspace themes, seamless translations, and tactile mechanical click feedback, designed to feel memorable and deeply human.",
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
            }
          ]
        },
        {
          type: "text",
          title: "Technical Implementation & Architecture",
          content: "Behind the cozy graphics lies a highly performant frontend architecture built with React 19, Zustand, and Tailwind CSS v4:\n\n• **Decoupled App Architecture**: Every application window (AboutApp, WorkApp, ContactApp) is written as an isolated React component, completely decoupled from parent layout constraints.\n• **Synchronous State Manager (Zustand)**: Coordinate tracking, active window focus indexes, and desktop boundaries are synchronized síncronamente to avoid expensive prop-drilling or Context render-churn.\n• **Tailwind CSS v4 variables**: Implemented dynamic brand variables (`--project-primary`) that inject custom colors per case study, giving each project its own atmosphere.\n• **Performance Tweaks**: Leveraged Framer Motion's `layoutId` for fluid transitions, pre-cached HTML5 audio nodes, and set up lazy loading for images to keep mobile frame rates at a smooth 60fps.",
        },
        {
          type: "learnings",
          items: [
            "Learning how to tame complex coordinate calculations inside fluid browser viewports.",
            "Preventing FOUT (Flash of Unstyled Text) by executing local storage checks before React mounts.",
            "Designing with empathy—balancing retro playfulness with digital accessibility rules.",
            "Learning to ruthlessly edit my own designs: removing excess borders to let the content breathe.",
            "Recreating tactile physical sound systems in a zero-latency digital buffer."
          ],
        },
        {
          type: "note",
          content: "Messy sketches on my future roadmap: adding a functional interactive CLI terminal, designing custom retro OS skins, WebGL-powered atmospheric backdrops, and advanced multi-touch gestures.",
        },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      category: "Web App",
      summary: "A solar calculator that cuts through NASA's atmospheric databases to make solar potential easy, readable, and human.",
      featured: false,
      stack: ["React", "Vite", "Flask", "Supabase", "Python", "Figma", "Git"],
      thumbnail: previewSmartsun,
      year: 2024,
      role: "Fullstack Developer",
      status: "Completed",
      links: {
        live: "#",
        github: "#"
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
        {
          type: "note",
          content: "Note: Currently polishing the client-side integration and API keys with Supabase.",
        },
        {
          type: "learnings",
          items: [
            "Parsing complex atmospheric datasets without slowing down the client interface.",
            "Designing clean visual charts that explain raw data with empathy and clarity.",
            "Structuring Supabase security policies to protect user geolocation parameters."
          ],
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
      status: "Completed",
      links: {
        live: "#",
        github: "#"
      },
      theme: {
        primary: "#ec4899",
        background: "#09090b",
      },
      sections: [
        {
          type: "hero",
          title: "A Cinematic Studio Catalog",
          description: "Designed to reflect the studio's dark, premium aesthetic, providing an online catalog and contact portal for prospective clients.",
          image: previewMacalania,
        },
        {
          type: "text",
          title: "When Artistry Meets Web Layout",
          content: "Tattoo and piercing studios are built on trust, visual identity, and intense artistry. I didn't want to build a generic brochure. The goal was to design a dark, cinematic space where massive, high-contrast imagery takes center stage, and smooth transitions guide users into a simple, comfortable booking flow.",
        },
        {
          type: "note",
          content: "Note: Designed fully in Figma from scratch to map out the visual atmosphere before touching code.",
        },
        {
          type: "learnings",
          items: [
            "Optimizing large image assets for instant mobile load times while keeping high quality.",
            "Creating custom CSS grid layouts that behave like modular physical art galleries.",
            "Balancing moody, deep dark-mode contrasts with high legibility standards."
          ],
        },
      ],
    },
    {
      id: "dra-carol-mansur",
      title: "Doctor Carol Mansur",
      category: "UI/UX & Layout",
      summary: "A clean, trust-focused layout created with patient comfort and digital accessibility at its center.",
      featured: false,
      stack: ["Figma", "HTML", "CSS"],
      thumbnail: null,
      year: 2023,
      role: "UI/UX Designer & Developer",
      status: "Completed",
      links: {
        live: "#",
        github: "#"
      },
      theme: {
        primary: "#06b6d4",
        background: "#080e14",
      },
      sections: [
        {
          type: "text",
          title: "Designing for Comfort & Clarity",
          content: "Medical websites can often feel cold and intimidating. I wanted to design a professional, trust-inspiring experience. By focusing on highly readable serif headers, soft calming blues, and clear, descriptive grid lists, I built a friendly space where patients can find hours, directions, and medical services without friction.",
        },
        {
          type: "learnings",
          items: [
            "Understanding medical UI rules and digital accessibility regulations.",
            "Choosing soft, warm typography scales that feel comforting and highly professional.",
            "Structuring columns for swift, stress-free mobile scheduling navigation."
          ],
        },
      ],
    },
  ],
  pt: [
    {
      id: "portfolio-website",
      title: "Site Portfólio",
      category: "Desenvolvimento Web",
      summary: "Um espaço de trabalho pessoal e aconchegante construído com React & Vite, funcionando como um simulador de desktop interativo.",
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
        background: "#0f0f0f",
      },
      sections: [
        {
          type: "hero",
          title: "Construindo meu próprio espaço digital",
          description: "Um espaço de engenharia criativa projetado para fugir do padrão de rolagem tradicional. Construído para funcionar como um simulador de desktop aconchegante — completo com janelas arrastáveis, temas dinâmicos, sons táteis de clique e textos localizados — feito para parecer a mesa de trabalho de uma pessoa criativa em vez de um currículo estático.",
          image: homeDMPortfolio,
        },
        {
          type: "text",
          title: "A Ideia: Por que um Desktop no Navegador?",
          content: "A maioria dos portfólios de desenvolvedores segue um layout vertical padrão que pode parecer um pouco passivo e corporativo. Eu queria criar algo que parecesse vivo, convidativo e divertido.\n\nCrescendo, passei incontáveis horas jogando RPGs focados em história e assistindo a animes, sempre fascinado por como os jogos criam mundos imersivos. Esse amor por narrativa e psicologia moldou este projeto. Ao transformar meu portfólio em um emulador de desktop — onde o Sobre Mim, Projetos e Contato agem como aplicativos independentes e arrastáveis —, eu quis criar um espaço confortável para as pessoas explorarem, demonstrando minhas habilidades em sincronização complexa de estado com React enquanto compartilho um pouco de quem eu sou.",
        },
        {
          type: "text",
          title: "Direção Criativa: Inspiração Atmosférica",
          content: "Para construir uma experiência de SO verdadeiramente imersiva, comecei pesquisando sistemas operacionais clássicos, jogos de simulação e portfólios contemporâneos de alto nível. Em vez de copiar essas referências de forma literal, eu as tratei como pontos de ancoragem conceituais de design e sentimento.\n\nUma das minhas maiores inspirações para este espaço de trabalho espacial foi o portfólio de Shar Yap ([sharyap.com](https://www.sharyap.com/)), que demonstrou brilhantemente como conceitos de sistemas operacionais retrô poderiam ser trazidos para interfaces web modernas com extrema elegância.\n\nAs principais áreas de inspiração incluíram:\n• **UI Imersiva & Simulação Aconchegante**: Estudo de sistemas clássicos para criar docks táteis, indicadores flutuantes e limites limpos de janela.\n• **Sistemas de Interação Tácteis**: Implementação de sons de latência zero e focos de janela que fazem pastas digitais parecerem físicas.\n• **Narrativa Atmosférica**: Adaptação desses conceitos para construir um portfólio moderno que pareça acolhedor, pessoal e confortável de navegar.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Referências Visuais & Painéis de Inspiração",
          images: [
            {
              src: inspoPortfolio1,
              caption: "Referência de Navegação de Janelas",
              description: "Analisando emuladores de desktop, espaços flutuantes e empilhamentos dinâmicos de camadas de foco."
            },
            {
              src: inspoPortfolio2,
              caption: "Referência de Docks & Controles",
              description: "Estudando componentes de widgets de desktop, seletores de idioma e layouts de botões de controle."
            }
          ]
        },
        {
          type: "text",
          title: "Exploração de Design: Projetando os Climas",
          content: "A fase inicial de exploração de design focou na criação de uma interface de desktop que parecesse moderna, limpa e fácil de navegar. Era crucial atingir o equilíbrio ideal entre o realismo do desktop e o minimalismo moderno.\n\nNo Figma, experimentei com sistemas de identidade visual, escalas de tipografia e tokens de espaçamento. Eu queria que os modos claro e escuro representassem atmosferas totalmente diferentes: um modo claro lavanda suave que parece uma manhã calma e produtiva, e um modo escuro com toques neon que parece uma sessão de criação no meio da noite.",
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
          title: "Evolução da UI: Redesenhando os Rascunhos Confusos",
          content: "Meu protótipo inicial estabeleceu bases técnicas sólidas, mas era visualmente poluído e difícil de navegar no celular. As bordas eram duras, as janelas colidiam de forma confusa e a hierarquia parecia bagunçada.\n\nPor meio de vários ciclos de design iterativo, refinei o ritmo visual. Converti bordas duras inline em variáveis Tailwind CSS v4 elegantes e suaves, implementei limites de coordenadas para proteger o uso em telas pequenas e limpei agressivamente o ruído visual desnecessário para deixar os estudos de caso brilharem.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Comparação do Protótipo com a Versão Final",
          images: [
            {
              src: homePortfolio,
              caption: "Protótipo de Design Antigo",
              description: "Área de trabalho de protótipo inicial com dimensões de janela rígidas e tema roxo cru."
            },
            {
              src: homeDMPortfolio,
              caption: "Área de Trabalho Polida Final",
              description: "Interface escura moderna otimizada com grades de alto contraste e iluminação de fundo neon sutil."
            }
          ]
        },
        {
          type: "text",
          title: "O Espaço Concluído: Um Sandbox Atmosférico",
          content: "O site finalizado é um simulador de desktop responsivo que parece limpo, editorial e altamente profissional. Ele conta com temas claro/escuro dinâmicos, traduções instantâneas e feedbacks de clique mecânico, projetado para ser memorável e profundamente humano.",
        },
        {
          type: "gallery",
          layout: "2-columns",
          title: "Ambientes da Experiência Final",
          images: [
            {
              src: homeLMPortfolio,
              caption: "Área de Trabalho Final no Modo Claro",
              description: "Espaço de trabalho lavanda limpo apresentando cabeçalhos translúcidos e dock de vidro fosco."
            },
            {
              src: appsLMPortfolio,
              caption: "Janelas Ativas (Modo Claro)",
              description: "Janelas rodando sob os estilos de modo claro dentro das coordenadas de desktop."
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
            }
          ]
        },
        {
          type: "text",
          title: "Arquitetura Frontend & Implementação Técnica",
          content: "Por trás dos elementos visuais amigáveis existe uma arquitetura de frontend altamente otimizada em React 19, Zustand e Tailwind CSS v4:\n\n• **Arquitetura Desacoplada**: Cada janela de app (Sobre, Trabalhos, Contato) funciona como um componente React isolado, totalmente desacoplado das restrições de layout dos pais.\n• **Gerenciamento de Estado síncrono (Zustand)**: As coordenadas de arrasto, foco e indexação de janelas são controladas em uma única store Zustand síncrona, evitando prop-drilling e renderizações extras.\n• **Variáveis Tailwind CSS v4**: Mapeei variáveis de cores dinâmicas (`--project-primary`) que mudam de acordo com o estudo de caso, conferindo uma atmosfera exclusiva para cada projeto.\n• **Desempenho Otimizado**: Emprega `layoutId` do Framer Motion para transições elegantes, buffers HTML5 Audio para feedback sonoro com latência zero e lazy loading de imagens para manter o framerate em suaves 60fps.",
        },
        {
          type: "learnings",
          items: [
            "Aprender a conter cálculos de coordenadas complexas em viewports flexíveis no navegador.",
            "Prevenir FOUT (Flash of Unstyled Text) rodando verificações no LocalStorage antes do React montar os componentes.",
            "Projetar com empatia — equilibrando o lúdico retro com regras de acessibilidade e grids responsivos.",
            "Aprender a editar com rigor meus próprios designs, removendo linhas de contorno excessivas para dar respiro ao conteúdo.",
            "Reconstruir respostas sonoras táteis digitais em um buffer de latência zero."
          ],
        },
        {
          type: "note",
          content: "Rascunhos de melhorias futuras: terminal interativo integrado, novos temas visuais inspirados em SOs antigos, gestos avançados de arrasto para mobile e fundos atmosféricos usando WebGL.",
        },
      ],
    },
    {
      id: "smart-sun",
      title: "SmartSun",
      category: "Web App",
      summary: "Uma calculadora solar que traduz os bancos de dados complexos da NASA em estimativas verdes simples e fáceis de ler.",
      featured: false,
      stack: ["React", "Vite", "Flask", "Supabase", "Python", "Figma", "Git"],
      thumbnail: previewSmartsun,
      year: 2024,
      role: "Desenvolvedor Fullstack",
      status: "Concluído",
      links: {
        live: "#",
        github: "#"
      },
      theme: {
        primary: "#f59e0b",
        background: "#0c0a09",
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
        {
          type: "note",
          content: "Nota: A integração com Supabase e chaves de API do backend estão passando por otimizações de segurança.",
        },
        {
          type: "learnings",
          items: [
            "Filtrar dados de irradiação solar complexos no lado do cliente sem comprometer a fluidez.",
            "Projetar gráficos limpos que explicam economias financeiras de forma clara e visual.",
            "Configurar políticas de segurança RLS no Supabase para proteger dados de localização dos usuários."
          ],
        },
      ],
    },
    {
      id: "macalania-tattoo",
      title: "Macalania Tattoo",
      category: "Desenvolvimento Web",
      summary: "Um catálogo digital cinematográfico e minimalista projetado para destacar artes de tatuagem e fluxos de contato.",
      featured: false,
      stack: ["React", "Vite", "JavaScript", "HTML", "CSS", "Figma", "Git"],
      thumbnail: previewMacalania,
      year: 2024,
      role: "Desenvolvedor Frontend",
      status: "Concluído",
      links: {
        live: "#",
        github: "#"
      },
      theme: {
        primary: "#ec4899",
        background: "#09090b",
      },
      sections: [
        {
          type: "hero",
          title: "Um Catálogo de Estúdio Cinemático",
          description: "Projetado para refletir a estética escura e premium do estúdio, fornecendo um catálogo online e portal de contato para potenciais clientes.",
          image: previewMacalania,
        },
        {
          type: "text",
          title: "Quando o Artesanato Encontra o Layout Web",
          content: "Estúdios de tatuagem e piercing dependem de identidade, confiança e forte impacto visual. Eu não queria construir apenas mais um folheto institucional. O objetivo foi criar uma galeria escura e cinematográfica onde imagens em grande formato e transições fluidas guiam o cliente até um agendamento rápido e confortável.",
        },
        {
          type: "note",
          content: "Nota: Desenhado inteiramente do zero no Figma para definir a atmosfera e o contraste visual antes do código.",
        },
        {
          type: "learnings",
          items: [
            "Otimizar ativos de imagem em alta definição para carregamento instantâneo no mobile.",
            "Projetar grades CSS customizadas que se comportam como exposições físicas de quadros.",
            "Equilibrar os contrastes escuros do tema sem prejudicar as regras de legibilidade."
          ],
        },
      ],
    },
    {
      id: "dra-carol-mansur",
      title: "Dra. Carol Mansur",
      category: "UI/UX & Layout",
      summary: "Uma estrutura de site institucional centrada na clareza de informações e no conforto dos pacientes.",
      featured: false,
      stack: ["Figma", "HTML", "CSS"],
      thumbnail: null,
      year: 2023,
      role: "Designer UI/UX & Desenvolvedor",
      status: "Concluído",
      links: {
        live: "#",
        github: "#"
      },
      theme: {
        primary: "#06b6d4",
        background: "#080e14",
      },
      sections: [
        {
          type: "text",
          title: "Projetando para o Acolhimento & Clareza",
          content: "Websites na área da saúde podem muitas vezes parecer frios ou burocráticos. Meu foco foi desenhar uma experiência acolhedora e que inspire confiança. Utilizando tipografia serifada de alta legibilidade, tons suaves de azul e listas limpas em colunas, criei um portal onde pacientes de diferentes faixas etárias conseguem encontrar horários, tratamentos e direções sem dificuldades.",
        },
        {
          type: "learnings",
          items: [
            "Compreender regulamentações de acessibilidade digital aplicadas a portais de saúde.",
            "Desenhar escalas tipográficas suaves que transmitem acolhimento e profissionalismo.",
            "Estruturar grids intuitivos para que agendamentos via mobile sejam rápidos e livres de estresse."
          ],
        },
      ],
    },
  ],
};
