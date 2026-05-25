import { motion, AnimatePresence } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS, APPS } from '../../store/useDesktopStore'
import { X } from 'lucide-react'
import * as Icons from 'lucide-react'

export default function MobileRecentTabs({ isOpen, onClose }) {
  const windows = useDesktopStore(s => s.windows)
  const closeApp = useDesktopStore(s => s.closeApp)
  const focusApp = useDesktopStore(s => s.focusApp)
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-40 bg-black/40 backdrop-blur-md flex flex-col p-6 overflow-y-auto pointer-events-auto"
        >
          <div className="flex-1 flex flex-col gap-4 mt-8">
            {windows.map((win, i) => {
              const appInfo = APPS.find(a => a.id === win.id)
              const Icon = appInfo ? Icons[appInfo.icon] : null

              return (
                <motion.div
                  key={win.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-4 shadow-xl border border-black/5 dark:border-white/5 relative active:scale-[0.98] transition-transform"
                  onClick={() => {
                    focusApp(win.id)
                    onClose()
                  }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      {Icon && <Icon size={16} className="text-purple-500" />}
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                        {t.apps[win.id] || win.id}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        closeApp(win.id)
                        if (windows.length === 1) onClose()
                      }}
                      className="p-1.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-500 hover:text-red-500 active:bg-red-50 dark:active:bg-red-500/10 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  {/* Visual representation placeholder */}
                  <div className="h-32 bg-zinc-100 dark:bg-[#121214] rounded-xl flex items-center justify-center border border-black/5 dark:border-white/5">
                     <span className="text-zinc-400 dark:text-zinc-600 text-xs font-medium uppercase tracking-widest">{t.apps[win.id]} | {t.controls.preview}</span>
                  </div>
                </motion.div>
              )
            })}
            
            {windows.length === 0 && (
              <div className="flex-1 flex items-center justify-center">
                <span className="text-white/60 font-medium">{t.controls.noRecentTabs}</span>
              </div>
            )}
          </div>
          
          <button 
            onClick={onClose}
            className="mt-6 mb-16 mx-auto bg-white/20 active:bg-white/30 text-white rounded-full px-8 py-3 font-semibold backdrop-blur-md transition-colors"
          >
            {t.windows.close}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
