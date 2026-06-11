import { create } from 'zustand'

const TRANSLATIONS = {
  en: {
    apps: {
      about: 'About Me',
      work: 'Projects',
      contact: 'Contact',
    },
    controls: {
      mute: 'Mute',
      unmute: 'Unmute',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      language: 'English',
      changeLanguage: 'Change language',
      settings: 'Settings',
      preview: 'Preview',
      noRecentTabs: 'No recent tabs',
    },
    desktop: {
      greeting: "Hey! I'm",
      role: 'WebDev and Designer',
      instruction: 'Select an application to start',
    },
    windows: {
      close: 'Close',
      minimize: 'Minimize',
      maximize: 'Maximize',
    },
    about: {
      role: 'Software Developer · UI/UX Designer',
      tags: ['Leme, SP - Brazil', 'EN & PT & JP'],
      bio: [
        "Hi! I'm Alan, a Software Developer and UI/UX Designer passionate about creating intuitive, visually appealing web experiences that balance form and function.",
        "Currently, I work as an Integration Analyst at Napp Solutions, focusing on system integrations. Throughout my journey, I've had the opportunity to work in different environments, including education, IT within a multinational company, and the public sector in my city. Outside of my full-time work, I also develop web applications as a freelance developer.",
        "My journey has been shaped by a unique blend of experiences. When I was 14, I had the opportunity to live in Vancouver, Canada, for a period of time, an experience that broadened my perspective and helped me become fluent in English. Having family members in Japan also sparked my interest in the language and culture, inspiring me to study Japanese on my own.",
        "I'm currently in the final year of my bachelor's degree in Information Systems at FHO (Uniararas). I'm always looking for opportunities to learn, improve, and create products and experiences that people genuinely enjoy using."
      ],
      highlights: [
        { label: 'Education', value: 'B.S. Information Systems', sub: 'FHO · Final year' },
        { label: 'Experience', value: 'Integration Analyst', sub: 'Napp Solutions' },
        { label: 'Languages', value: 'EN / PT / JP', sub: 'Fluent · Native · Basic' },
        { label: 'Focus', value: 'Frontend & UI/UX', sub: 'React · Next.js · Figma' },
        { label: 'Freelance', value: 'Web Developer', sub: 'Modern web projects' },
      ]
    },
    workApp: {
      title: 'Selected Projects',
      subtitle: 'A collection of my recent work in web development and interface design.',
      techStack: 'Tech Stack',
      viewLive: 'View Live',
      viewGithub: 'View Github',
      back: 'Back to projects',
      process: 'Development Process',
      noSections: 'No sections available for this case study.',
      galleryFallback: 'Designed with close attention to pixel-perfection and modular layout systems, ensuring clean information flows across viewport thresholds.',
      wipTitle: "Wait! I'm still writing about it.",
      wipDescription: "I'm currently writing about this project. In the meantime, you can explore the website using the button below!",
    },
    contact: {
      title: "Let's Talk!",
      subtitle: "Have a project in mind, an opportunity, or just want to say hi? Feel free to reach out.",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully! Talk to you soon.',
        error: 'Failed to send message. Please try again.',
      },
      links: 'Find me on',
      sendEmail: 'Send email',
    }
  },
  pt: {
    apps: {
      about: 'Sobre Mim',
      work: 'Projetos',
      contact: 'Contato',
    },
    controls: {
      mute: 'Mutar Som',
      unmute: 'Ativar Som',
      lightMode: 'Modo Claro',
      darkMode: 'Modo Escuro',
      language: 'Português',
      changeLanguage: 'Trocar idioma',
      settings: 'Configurações',
      preview: 'Visualização',
      noRecentTabs: 'Sem abas recentes',
    },
    desktop: {
      greeting: 'Olá! Eu sou o',
      role: 'WebDev e Designer',
      instruction: 'Selecione um aplicativo para começar',
    },
    windows: {
      close: 'Fechar',
      minimize: 'Minimizar',
      maximize: 'Maximizar',
    },
    about: {
      role: 'Desenvolvedor de Software · Designer UI/UX',
      tags: ['Leme, SP - Brasil', 'EN & PT & JP'],
      bio: [
        "Olá! Sou Alan, Desenvolvedor de Software e Designer UI/UX, apaixonado por criar experiências web intuitivas e visualmente atraentes que equilibram forma e função.",
        "Atualmente, trabalho como Analista de Integração na Napp Solutions, com foco em integrações de sistemas. Anteriormente, atuei como professor, TI de uma multinacional e estagiário de TI na prefeitura da minha cidade. Além do meu trabalho principal, também desenvolvo aplicações web como desenvolvedor freelancer.",
        "Quando tinha 14 anos, tive a oportunidade de morar por um tempo em Vancouver, Canadá, onde pude conhecer uma cultura diferente e melhorar meu inglês. Ter familiares no Japão também me inspirou a começar a aprender japonês, idioma que venho estudando por conta própria.",
        "Atualmente no último ano do meu bacharelado em Sistemas de Informação na FHO (Uniararas), estou constantemente explorando novas tecnologias, arquiteturas frontend e abordagens de design. Falo inglês fluente e japonês básico, e estou sempre em busca de oportunidades para crescer como desenvolvedor e designer."
      ],
      highlights: [
        { label: 'Educação', value: 'Bacharel em Sistemas de Inf.', sub: 'FHO · Último ano' },
        { label: 'Experiência', value: 'Analista de Integração', sub: 'Napp Solutions' },
        { label: 'Idiomas', value: 'EN / PT / JP', sub: 'Fluente · Nativo · Básico' },
        { label: 'Foco', value: 'Frontend & UI/UX', sub: 'React · Next.js · Figma' },
        { label: 'Freelance', value: 'Web Developer', sub: 'Projetos web modernos' },
      ]
    },
    workApp: {
      title: 'Projetos Selecionados',
      subtitle: 'Uma coleção dos meus trabalhos recentes em desenvolvimento web e design de interface.',
      techStack: 'Tecnologias',
      viewLive: 'Ver Site',
      viewGithub: 'Ver Github',
      back: 'Voltar para projetos',
      process: 'Processo de Desenvolvimento',
      noSections: 'Nenhuma seção disponível para este estudo de caso.',
      galleryFallback: 'Projetado com atenção meticulosa à perfeição de pixels e sistemas de layout modular, garantindo fluxos de informação claros através das resoluções de tela.',
      wipTitle: "Espere! Ainda estou escrevendo sobre isso.",
      wipDescription: "Estou escrevendo um artigo detalhado sobre este projeto. Enquanto isso, você pode explorar o site utilizando o botão abaixo!",
    },
    contact: {
      title: 'Vamos Conversar!',
      subtitle: "Tem um projeto em mente, uma oportunidade ou apenas quer trocar uma ideia? Fique à vontade para entrar em contato.",
      form: {
        name: 'Nome',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Falo com você em breve.',
        error: 'Erro ao enviar mensagem. Tente novamente.',
      },
      links: 'Encontre-me em',
      sendEmail: 'Enviar e-mail',
    }
  }
}

const APPS = [
  { id: 'about', icon: 'User' },
  { id: 'work', icon: 'Folder' },
  { id: 'contact', icon: 'Mail' },
]

export { APPS, TRANSLATIONS }

export const useDesktopStore = create((set, get) => ({
  // Window State
  windows: [],
  focusedId: null,
  maxZIndex: 10,
  selectedProjectId: null,

  // Theme
  theme: typeof window !== 'undefined'
    ? localStorage.getItem('portfolio-theme') || 'dark'
    : 'dark',

  // Language
  language: typeof window !== 'undefined'
    ? localStorage.getItem('portfolio-language') || 'en'
    : 'en',

  // Sound
  isMuted: typeof window !== 'undefined'
    ? localStorage.getItem('portfolio-muted') === 'true'
    : false,

  // Actions
  openApp: (id) => {
    const { windows, maxZIndex } = get()
    const existing = windows.find(w => w.id === id)

    if (existing) {
      set({
        windows: windows.map(w =>
          w.id === id ? { ...w, isMinimized: false, zIndex: maxZIndex + 1 } : w
        ),
        focusedId: id,
        maxZIndex: maxZIndex + 1
      })
      return
    }

    const windowCount = windows.length
    const newWindow = {
      id,
      zIndex: maxZIndex + 1,
      isMinimized: false,
      position: { x: 100 + (windowCount * 30), y: 50 + (windowCount * 30) },
      size: { width: 700, height: 500 }
    }

    set({
      windows: [...windows, newWindow],
      focusedId: id,
      maxZIndex: maxZIndex + 1
    })
  },

  closeApp: (id) => {
    const { windows } = get()
    const nextWindows = windows.filter(w => w.id !== id)
    let nextFocusedId = null

    if (nextWindows.length > 0) {
      const visibleWindows = nextWindows.filter(w => !w.isMinimized)
      if (visibleWindows.length > 0) {
        nextFocusedId = visibleWindows.reduce((prev, current) =>
          (prev.zIndex > current.zIndex) ? prev : current
        ).id
      }
    }

    // Reset Work app state when closing
    if (id === 'work') {
      set({
        windows: nextWindows,
        focusedId: nextFocusedId,
        selectedProjectId: null
      })
    } else {
      set({
        windows: nextWindows,
        focusedId: nextFocusedId
      })
    }
  },

  minimizeApp: (id) => {
    const { windows } = get()
    const nextWindows = windows.map(w => w.id === id ? { ...w, isMinimized: true } : w)

    let nextFocusedId = null
    const visibleWindows = nextWindows.filter(w => !w.isMinimized)
    if (visibleWindows.length > 0) {
      nextFocusedId = visibleWindows.reduce((prev, current) =>
        (prev.zIndex > current.zIndex) ? prev : current
      ).id
    }

    set({
      windows: nextWindows,
      focusedId: nextFocusedId
    })
  },

  focusApp: (id) => {
    const { windows, maxZIndex, focusedId } = get()
    if (focusedId === id) return

    set({
      windows: windows.map(w =>
        w.id === id ? { ...w, zIndex: maxZIndex + 1, isMinimized: false } : w
      ),
      focusedId: id,
      maxZIndex: maxZIndex + 1
    })
  },

  toggleApp: (id) => {
    const { windows, focusedId } = get()
    const win = windows.find(w => w.id === id)

    if (!win) {
      get().openApp(id)
      return
    }

    if (win.isMinimized) {
      get().focusApp(id)
    } else if (focusedId === id) {
      get().minimizeApp(id)
    } else {
      get().focusApp(id)
    }
  },

  updateWindow: (id, data) => {
    set(state => ({
      windows: state.windows.map(w => w.id === id ? { ...w, ...data } : w)
    }))
  },

  setTheme: (t) => {
    localStorage.setItem('portfolio-theme', t)
    set({ theme: t })
  },

  setLanguage: (l) => {
    localStorage.setItem('portfolio-language', l)
    set({ language: l })
  },

  setMuted: (m) => {
    localStorage.setItem('portfolio-muted', m)
    set({ isMuted: m })
  },

  setSelectedProjectId: (id) => {
    set({ selectedProjectId: id })
  },

  closeAllApps: () => {
    set({
      windows: [],
      focusedId: null,
      selectedProjectId: null
    })
  },

  resetWorkState: () => {
    set({ selectedProjectId: null })
  }
}))
