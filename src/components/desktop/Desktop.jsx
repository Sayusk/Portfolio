import { motion, AnimatePresence } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS } from '../../store/useDesktopStore'
import Taskbar from './Taskbar'
import WindowContainer from '../window/WindowContainer'
import { useState, useEffect } from 'react'

function DesktopBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-700">
      {/* Dark Mode Background */}
      <div className="hidden dark:block absolute inset-0 bg-[#080809]" />
      <div className="hidden dark:block absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-[140px]" />
      <div className="hidden dark:block absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[100px]" />
      
      {/* Light Mode Background - Soft Purple Atmospheric */}
      <div className="block dark:hidden absolute inset-0 bg-[#f0e9f6]" />
      <div className="block dark:hidden absolute top-[-15%] left-[-5%] w-[75%] h-[75%] rounded-full bg-white/40 blur-[120px]" />
      <div className="block dark:hidden absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-purple-200/50 blur-[100px]" />
      <div className="block dark:hidden absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-100/30 blur-[80px]" />

      {/* Grid Pattern with subtle purple tint */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
        style={{ backgroundImage: 'radial-gradient(#6750A5 0.5px, transparent 0.5px)', backgroundSize: '48px 48px' }} 
      />
    </div>
  )
}

function TopPanel() {
  const [time, setTime] = useState(new Date())
  const language = useDesktopStore(s => s.language)
  const locale = language === 'pt' ? 'pt-BR' : 'en-US'

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString(locale, { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false 
  })

  const formattedDate = time.toLocaleDateString(locale, {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  })

  return (
    <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center px-4 pointer-events-none z-[140]">
      <div className="flex items-center gap-4 bg-white/20 dark:bg-black/5 backdrop-blur-xl px-5 py-1.5 rounded-full border border-purple-500/10 dark:border-white/5 shadow-sm">
        <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
          {formattedDate}
        </span>
        <div className="w-px h-2.5 bg-black/5 dark:bg-zinc-700" />
        <span className="text-[11px] font-black text-zinc-900 dark:text-zinc-100 tracking-wider">
          {formattedTime}
        </span>
      </div>
    </div>
  )
}

function HomeScreen() {
  const windows = useDesktopStore(s => s.windows)
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]

  // Visibility Logic
  const hasVisibleWindows = windows.some(w => !w.isMinimized)
  if (hasVisibleWindows) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col items-center justify-center h-full text-center select-none"
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <motion.h2 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tight"
          >
            {t.desktop.greeting} <span className="text-purple-600 dark:text-purple-400">Alan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 font-medium"
          >
            {t.desktop.role}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8"
        >
          <p className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.4em] font-bold">
            {t.desktop.instruction}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Desktop() {
  return (
    <div className="fixed inset-0 flex overflow-hidden bg-[#f0e9f6] dark:bg-[#080809] transition-colors duration-700" aria-label="Desktop workspace">
      <DesktopBackground />

      <Taskbar />

      {/* Desktop Canvas */}
      <main
        className="relative flex-1 overflow-hidden h-full"
        style={{ marginLeft: 72 }}
      >
        <TopPanel />
        
        <AnimatePresence mode="wait">
          <HomeScreen key="home" />
        </AnimatePresence>

        <WindowContainer />
      </main>
    </div>
  )
}
