import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Folder, Mail, Sun, Moon, Volume2, VolumeX
} from 'lucide-react'
import { useDesktopStore, APPS } from '../../store/useDesktopStore'
import { useState, useEffect, useRef } from 'react'
import clickSound from '../../assets/click.wav'

const ICON_MAP = { User, Folder, Mail }

const BASE_URL = import.meta.env.BASE_URL
const LOGO_PATHS = {
  dark: `${BASE_URL}assets/nervabranco.svg`,
  light: `${BASE_URL}assets/nervapreto.svg`
}

function TaskbarItem({ app, onAction }) {
  const windows = useDesktopStore(s => s.windows)
  const focusedId = useDesktopStore(s => s.focusedId)
  const toggleApp = useDesktopStore(s => s.toggleApp)

  const win = windows.find(w => w.id === app.id)
  const isOpen = !!win
  const isActive = isOpen && focusedId === app.id && !win.isMinimized
  const Icon = ICON_MAP[app.icon] || Folder
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    onAction()
    toggleApp(app.id)
  }

  return (
    <div className="relative flex flex-col items-center py-1.5" style={{ width: 48 }}>
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            className="absolute left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-[11px] font-bold px-3 py-2 rounded-xl whitespace-nowrap pointer-events-none z-[200] shadow-2xl border border-zinc-200 dark:border-zinc-700/50"
          >
            {app.label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.92 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative z-10 border
          ${isActive
            ? 'bg-purple-600 dark:bg-purple-500 text-white border-purple-400 dark:border-purple-400 shadow-lg shadow-purple-500/30'
            : isOpen
              ? 'bg-white/60 dark:bg-zinc-800/60 text-zinc-900 dark:text-white border-black/10 dark:border-white/10 shadow-sm'
              : 'bg-white/30 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 border-black/5 dark:border-white/5 hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
      >
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </motion.button>

      {/* Open Indicator */}
      {isOpen && (
        <motion.div
          layoutId={`indicator-${app.id}`}
          className={`absolute -left-1.5 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300
            ${isActive ? 'bg-purple-600 dark:bg-purple-400 h-6' : 'bg-black/20 dark:bg-zinc-600 h-2'}`}
        />
      )}
    </div>
  )
}

export default function Taskbar() {
  const theme = useDesktopStore(s => s.theme)
  const setTheme = useDesktopStore(s => s.setTheme)
  const isMuted = useDesktopStore(s => s.isMuted)
  const setMuted = useDesktopStore(s => s.setMuted)
  const audioRef = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(clickSound)
    audioRef.current.volume = 0.2
  }, [])

  const playActionSound = () => {
    if (isMuted || !audioRef.current) return
    const s = audioRef.current.cloneNode()
    s.volume = 0.2
    s.play().catch(() => { })
  }

  return (
    <aside
      className="fixed left-0 top-0 h-screen flex flex-col items-center py-6 gap-3 z-[150]
        bg-[#D9D9D9] dark:bg-[#111112] shadow-[4px_0_24px_rgba(0,0,0,0.05)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.3)]
        border-r border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500"
      style={{ width: 72 }}
    >
      {/* Brand */}
      <div className="w-12 h-12 flex items-center justify-center mb-6 flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-zinc-900 border border-black/10 dark:border-white/10 flex items-center justify-center shadow-sm overflow-hidden group">
          <img
            src={LOGO_PATHS[theme] || LOGO_PATHS.dark}
            alt="Nerva"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110 duration-500"
          />
        </div>
      </div>

      <div className="w-10 h-px bg-black/5 dark:bg-white/5 mb-4" />

      {/* Apps List */}
      <div className="flex flex-col items-center gap-4 flex-1 w-full overflow-y-auto no-scrollbar overflow-x-hidden px-2">
        {APPS.map(app => (
          <TaskbarItem
            key={app.id}
            app={app}
            onAction={playActionSound}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-auto flex flex-col items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5 w-full">
        {/* Mute Toggle */}
        <button
          onClick={() => setMuted(!isMuted)}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => { playActionSound(); setTheme(theme === 'dark' ? 'light' : 'dark') }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black/5 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-yellow-400 border border-black/5 dark:border-zinc-800 transition-all shadow-sm"
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div key="sun" initial={{ scale: 0.5, rotate: -45, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.5, rotate: 45, opacity: 0 }} transition={{ duration: 0.3 }}>
                <Sun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="moon" initial={{ scale: 0.5, rotate: 45, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} exit={{ scale: 0.5, rotate: -45, opacity: 0 }} transition={{ duration: 0.3 }}>
                <Moon className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </aside>
  )
}
