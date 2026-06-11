import { motion, AnimatePresence } from 'framer-motion'
import {
  User, Folder, Mail, Sun, Moon, Volume2, VolumeX, Globe
} from 'lucide-react'
import { useDesktopStore, APPS, TRANSLATIONS } from '../../store/useDesktopStore'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import clickSound from '../../assets/click.mp3'
import owlSound from '../../assets/owl.mp3'

const ICON_MAP = { User, Folder, Mail }

const BASE_URL = import.meta.env.BASE_URL
const LOGO_PATHS = {
  dark: `${BASE_URL}assets/nervabranco.svg`,
  light: `${BASE_URL}assets/nervapreto.svg`
}

/**
 * Premium Tooltip Component
 * Renders via Portal to prevent clipping and uses fixed positioning
 */
function Tooltip({ label, hovered, coords }) {
  return createPortal(
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, x: -12, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -12, scale: 0.92 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed z-[9999] pointer-events-none whitespace-nowrap"
          style={{
            top: coords.top,
            left: coords.left,
            transform: 'translateY(-50%)'
          }}
        >
          <div className="bg-white/95 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/5 dark:border-white/10 px-4 py-2 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex items-center justify-center">
            <span className="text-[10px] font-black tracking-[0.15em] text-zinc-900 dark:text-zinc-100 uppercase">
              {label}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function TaskbarItem({ app, onAction }) {
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]

  const windows = useDesktopStore(s => s.windows)
  const focusedId = useDesktopStore(s => s.focusedId)
  const toggleApp = useDesktopStore(s => s.toggleApp)

  const win = windows.find(w => w.id === app.id)
  const isOpen = !!win
  const isActive = isOpen && focusedId === app.id && !win.isMinimized
  const Icon = ICON_MAP[app.icon] || Folder

  const [hovered, setHovered] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const buttonRef = useRef(null)
  const hoverTimeout = useRef(null)

  const handleHoverStart = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setCoords({
        top: rect.top + rect.height / 2 - 16,
        left: rect.right + 20
      })
    }
    setHovered(true)
  }

  const handleHoverEnd = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(false)
    }, 180)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center py-1.5" style={{ width: 48 }}>
      <Tooltip label={t.apps[app.id] || app.id} hovered={hovered} coords={coords} />

      <motion.button
        ref={buttonRef}
        onClick={() => { onAction(); toggleApp(app.id); }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
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

function TaskbarControl({ label, icon: Icon, onClick, className }) {
  const [hovered, setHovered] = useState(false)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const buttonRef = useRef(null)
  const hoverTimeout = useRef(null)

  const handleHoverStart = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setCoords({
        top: rect.top + rect.height / 2 - 16,
        left: rect.right + 20
      })
    }
    setHovered(true)
  }

  const handleHoverEnd = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(false)
    }, 180)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    }
  }, [])

  return (
    <div className="relative">
      <Tooltip label={label} hovered={hovered} coords={coords} />
      <motion.button
        ref={buttonRef}
        onClick={onClick}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
      >
        {Icon}
      </motion.button>
    </div>
  )
}

export default function Taskbar() {
  const theme = useDesktopStore(s => s.theme)
  const setTheme = useDesktopStore(s => s.setTheme)
  const language = useDesktopStore(s => s.language)
  const setLanguage = useDesktopStore(s => s.setLanguage)
  const t = TRANSLATIONS[language]

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

  const playOwlSound = () => {
    if (isMuted) return
    const audio = new Audio(owlSound)
    audio.volume = 0.5
    audio.play().catch(() => { })
  }

  // Muted balloon state for the logo easter egg
  const owlRef = useRef(null)
  const [owlHovered, setOwlHovered] = useState(false)
  const [owlCoords, setOwlCoords] = useState({ top: 0, left: 0 })

  const handleOwlHoverStart = () => {
    if (!isMuted) return
    if (owlRef.current) {
      const rect = owlRef.current.getBoundingClientRect()
      setOwlCoords({ top: rect.top + rect.height / 2 - 16, left: rect.right + 20 })
    }
    setOwlHovered(true)
  }

  const handleOwlHoverEnd = () => setOwlHovered(false)

  const toggleLanguage = () => {
    playActionSound()
    setLanguage(language === 'en' ? 'pt' : 'en')
  }

  return (
    <aside
      className="fixed left-0 top-0 h-screen flex flex-col items-center py-6 gap-3 z-[150]
        bg-[#e4dced] dark:bg-[#111112] shadow-[4px_0_24px_rgba(103,80,165,0.06)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.3)]
        border-r border-black/5 dark:border-white/5 transition-all duration-500"
      style={{ width: 72 }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-6 flex-shrink-0">
        <Tooltip label="Whoo whoo" hovered={owlHovered && isMuted} coords={owlCoords} />
        <div
          ref={owlRef}
          onClick={playOwlSound}
          onMouseEnter={handleOwlHoverStart}
          onMouseLeave={handleOwlHoverEnd}
          className="w-12 h-12 rounded-2xl bg-white/60 dark:bg-zinc-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm overflow-hidden group cursor-pointer select-none"
        >
          <img
            src={LOGO_PATHS[theme] || LOGO_PATHS.dark}
            alt="Nerva"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-110 duration-500"
          />
        </div>
      </div>

      <div className="w-10 h-px bg-black/5 dark:bg-white/5 mb-4" />

      {/* Apps List */}
      <div className="flex flex-col items-center gap-4 flex-1 w-full overflow-y-auto no-scrollbar px-2">
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
        {/* Language Toggle */}
        <TaskbarControl
          label={t.controls.changeLanguage}
          icon={
            <div className="flex flex-col items-center justify-center gap-0.5">
              <Globe className="w-4 h-4" />
              <span className="text-[7px] font-black">{language.toUpperCase()}</span>
            </div>
          }
          onClick={toggleLanguage}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 transition-all"
        />

        {/* Mute Toggle */}
        <TaskbarControl
          label={isMuted ? t.controls.unmute : t.controls.mute}
          icon={isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          onClick={() => setMuted(!isMuted)}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 transition-all"
        />

        {/* Theme Toggle */}
        <TaskbarControl
          label={theme === 'dark' ? t.controls.lightMode : t.controls.darkMode}
          icon={
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
          }
          onClick={() => { playActionSound(); setTheme(theme === 'dark' ? 'light' : 'dark') }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/60 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-yellow-400 border border-black/5 dark:border-zinc-800 transition-all shadow-sm"
        />
      </div>
    </aside>
  )
}
