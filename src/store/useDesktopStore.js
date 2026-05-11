import { create } from 'zustand'

const APPS = [
  { id: 'about',    label: 'About Me',  icon: 'User' },
  { id: 'work',     label: 'Work',      icon: 'Folder' },
  { id: 'contact',  label: 'Contact',   icon: 'Mail' },
]

export { APPS }

export const useDesktopStore = create((set, get) => ({
  // Window State
  windows: [],
  focusedId: null,
  maxZIndex: 10,

  // Theme
  theme: typeof window !== 'undefined'
    ? localStorage.getItem('portfolio-theme') || 'dark'
    : 'dark',

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

  setMuted: (m) => {
    localStorage.setItem('portfolio-muted', m)
    set({ isMuted: m })
  }
}))
