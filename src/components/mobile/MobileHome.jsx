import { motion, AnimatePresence } from 'framer-motion'
import { useDesktopStore, APPS, TRANSLATIONS } from '../../store/useDesktopStore'
import * as Icons from 'lucide-react'

export default function MobileHome() {
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]
  const openApp = useDesktopStore(s => s.openApp)
  const windows = useDesktopStore(s => s.windows)
  
  const hasVisibleWindows = windows.some(w => !w.isMinimized)
  
  return (
    <AnimatePresence mode="wait">
      {!hasVisibleWindows && (
        <motion.div 
          key="home"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-auto"
        >
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2">
              {t.desktop.greeting} <span className="text-purple-600 dark:text-purple-400">Alan</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t.desktop.role}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
            {APPS.map((app, i) => {
              const Icon = Icons[app.icon]
              return (
                <motion.button
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => openApp(app.id)}
                  className="flex flex-col items-center gap-3 active:scale-95 transition-transform pointer-events-auto"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-sm flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    {t.apps[app.id]}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
