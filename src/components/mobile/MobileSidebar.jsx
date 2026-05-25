import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS } from '../../store/useDesktopStore'
import { Settings, Moon, Sun, Volume2, VolumeX, Globe, ChevronLeft } from 'lucide-react'

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const language = useDesktopStore(s => s.language)
  const setLanguage = useDesktopStore(s => s.setLanguage)
  const theme = useDesktopStore(s => s.theme)
  const setTheme = useDesktopStore(s => s.setTheme)
  const isMuted = useDesktopStore(s => s.isMuted)
  const setMuted = useDesktopStore(s => s.setMuted)
  const t = TRANSLATIONS[language]

  return (
    <>
      {/* Peek handle */}
      {!isOpen && (
        <motion.button
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          onClick={() => setIsOpen(true)}
          className="absolute right-0 top-[20%] w-6 h-16 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-l-xl flex items-center justify-center border-y border-l border-white/20 dark:border-white/10 shadow-lg z-30"
        >
          <ChevronLeft size={16} className="text-zinc-500" />
        </motion.button>
      )}

      {/* Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-40 pointer-events-auto"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-64 bg-white/90 dark:bg-[#121214]/90 backdrop-blur-2xl border-l border-white/20 dark:border-white/5 z-50 p-6 flex flex-col pointer-events-auto shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8 text-zinc-900 dark:text-white mt-10">
                <Settings size={20} />
                <span className="font-semibold tracking-wide">{t.controls.settings}</span>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center gap-4 p-3 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 active:scale-95 transition-all"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-sm font-medium">
                    {theme === 'dark' ? t.controls.lightMode : t.controls.darkMode}
                  </span>
                </button>

                <button 
                  onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                  className="flex items-center gap-4 p-3 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 active:scale-95 transition-all"
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">
                    {t.controls.changeLanguage}
                  </span>
                </button>

                <button 
                  onClick={() => setMuted(!isMuted)}
                  className="flex items-center gap-4 p-3 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 active:scale-95 transition-all"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span className="text-sm font-medium">
                    {isMuted ? t.controls.unmute : t.controls.mute}
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
