import { create } from 'zustand'

const TRANSLATIONS = {
  en: {
    apps: {
      about: 'About Me',
      work: 'Work',
      projects: 'Projects',
      contact: 'Contact',
    },
    controls: {
      mute: 'Mute',
      unmute: 'Unmute',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      language: 'English',
      changeLanguage: 'Change Language',
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
        "Currently, I work as an Integration Analyst at Napp Solutions, focusing on system integrations. Alongside my professional role, I actively develop modern web applications as a freelance developer, helping businesses transform ideas into polished digital products.",
        "I'm also one of the founders of Nerva, a web development business dedicated to building performant, user-focused web experiences with strong attention to design and usability.",
        "Currently in the final year of my Bachelor's degree in Information Systems at FHO (Uniararas), I’m constantly exploring new technologies, frontend architectures, and product design approaches. I speak fluent English and basic Japanese, and I’m always looking for opportunities to grow as a developer and designer."
      ],
      highlights: [
        { label: 'Education', value: 'B.S. Information Systems', sub: 'FHO · Final year' },
        { label: 'Experience', value: 'Integration Analyst', sub: 'Napp Solutions' },
        { label: 'Languages', value: 'EN / PT / JP', sub: 'Fluent · Native · Basic' },
        { label: 'Focus', value: 'Frontend & UI/UX', sub: 'React · Next.js · Figma' },
        { label: 'Freelance', value: 'Web Developer', sub: 'Modern web projects' },
        { label: 'Business', value: 'Co-Founder at Nerva', sub: 'Web development studio' },
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
    },
    contact: {
      title: "Let's Talk!",
      subtitle: "Whether you want to discuss a new creative web project, talk about design psychology, or just swap story-driven RPG recommendations, my inbox is always open. I'm social, easy to talk to, and genuinely love deep conversations.",
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
      links: 'Find me on'
    }
  },
  pt: {
    apps: {
      about: 'Sobre Mim',
      work: 'Trabalho',
      projects: 'Projetos',
      contact: 'Contato',
    },
    controls: {
      mute: 'Mutar Som',
      unmute: 'Ativar Som',
      lightMode: 'Modo Claro',
      darkMode: 'Modo Escuro',
      language: 'Português',
      changeLanguage: 'Mudar Idioma',
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
        "Atualmente, trabalho como Analista de Integração na Napp Solutions, com foco em integrações de sistemas. Paralelamente ao meu papel profissional, desenvolvo ativamente aplicações web modernas como desenvolvedor freelancer, ajudando empresas a transformar ideias em produtos digitais polidos.",
        "Também sou um dos fundadores da Nerva, um negócio de desenvolvimento web dedicado a construir experiências web performantes e focadas no usuário, com forte atenção ao design e usabilidade.",
        "Atualmente no último ano do meu bacharelado em Sistemas de Informação na FHO (Uniararas), estou constantemente explorando novas tecnologias, arquiteturas frontend e abordagens de design de produto. Falo inglês fluente e japonês básico, e estou sempre em busca de oportunidades para crescer como desenvolvedor e designer."
      ],
      highlights: [
        { label: 'Educação', value: 'Bacharel em Sistemas de Inf.', sub: 'FHO · Último ano' },
        { label: 'Experiência', value: 'Analista de Integração', sub: 'Napp Solutions' },
        { label: 'Idiomas', value: 'EN / PT / JP', sub: 'Fluente · Nativo · Básico' },
        { label: 'Foco', value: 'Frontend & UI/UX', sub: 'React · Next.js · Figma' },
        { label: 'Freelance', value: 'Web Developer', sub: 'Projetos web modernos' },
        { label: 'Negócios', value: 'Co-fundador na Nerva', sub: 'Estúdio de desenvolvimento' },
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
    },
    contact: {
      title: 'Vamos Conversar!',
      subtitle: "Seja para discutir um novo projeto web criativo, conversar sobre a psicologia do design ou apenas trocar recomendações de RPGs focados em história, minha inbox está sempre aberta. Sou sociável, fácil de conversar e adoro conexões genuínas.",
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
      links: 'Encontre-me em'
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

    set({
      windows: nextWindows,
      focusedId: nextFocusedId
    })
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
  }
}))
