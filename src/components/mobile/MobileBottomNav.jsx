import { useDesktopStore } from '../../store/useDesktopStore'
import { ChevronLeft, Home, Layers } from 'lucide-react'

export default function MobileBottomNav({ onRecentTabsClick }) {
  const focusedId = useDesktopStore(s => s.focusedId)
  const windows = useDesktopStore(s => s.windows)
  const minimizeApp = useDesktopStore(s => s.minimizeApp)
  const closeApp = useDesktopStore(s => s.closeApp)

  const handleBack = () => {
    if (focusedId) {
      closeApp(focusedId)
    }
  }

  const handleHome = () => {
    // Minimize all windows to show the home screen
    windows.forEach(w => minimizeApp(w.id))
  }

  return (
    <div className="h-16 bg-white/80 dark:bg-[#121214]/80 backdrop-blur-2xl border-t border-black/5 dark:border-white/5 flex items-center justify-around px-6 z-50">
      <button 
        onClick={handleBack}
        className="p-3 rounded-full active:bg-black/5 dark:active:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={handleHome}
        className="p-3 rounded-full active:bg-black/5 dark:active:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
      >
        <Home size={24} />
      </button>

      <button 
        onClick={onRecentTabsClick}
        className="p-3 rounded-full active:bg-black/5 dark:active:bg-white/5 transition-colors text-zinc-500 dark:text-zinc-400"
      >
        <Layers size={24} />
      </button>
    </div>
  )
}
