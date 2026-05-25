import { motion } from 'framer-motion'
import { useDesktopStore, APPS, TRANSLATIONS } from '../../store/useDesktopStore'
import * as Icons from 'lucide-react'

export default function MobileTabBar() {
  const windows = useDesktopStore(s => s.windows)
  const focusedId = useDesktopStore(s => s.focusedId)
  const focusApp = useDesktopStore(s => s.focusApp)
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]
  
  // Show/hide based on whether there are visible windows
  const visibleWindows = windows.filter(w => !w.isMinimized)
  if (visibleWindows.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-12 bg-white/70 dark:bg-[#1a1a1c]/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 flex items-center justify-start px-2 gap-1 z-30 relative select-none pointer-events-auto overflow-x-auto no-scrollbar"
    >
      {visibleWindows.map(win => {
        const appInfo = APPS.find(a => a.id === win.id)
        const Icon = appInfo ? Icons[appInfo.icon] : null
        const isActive = focusedId === win.id

        return (
          <motion.button
            key={win.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs flex-shrink-0 whitespace-nowrap transition-all pointer-events-auto ${
              isActive
                ? 'bg-purple-500/20 dark:bg-purple-500/30 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                : 'bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-transparent hover:bg-black/10 dark:hover:bg-white/10'
            }`}
            onClick={() => focusApp(win.id)}
          >
            {Icon && <Icon size={14} />}
            <span className="uppercase tracking-wider">
              {t.apps[win.id] || win.id}
            </span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
