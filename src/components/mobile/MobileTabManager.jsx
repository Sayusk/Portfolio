import { AnimatePresence, motion } from 'framer-motion'
import { useDesktopStore } from '../../store/useDesktopStore'
import AboutApp from '../apps/AboutApp'
import WorkApp from '../apps/WorkApp'
import ContactApp from '../apps/ContactApp'

const APP_COMPONENTS = {
  about: AboutApp,
  work: WorkApp,
  contact: ContactApp,
}

export default function MobileTabManager() {
  const windows = useDesktopStore(s => s.windows)
  const focusedId = useDesktopStore(s => s.focusedId)

  // On mobile, we only display the focused active tab in fullscreen
  const activeWindow = windows.find(w => w.id === focusedId && !w.isMinimized)

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {activeWindow && (
          <MobileTab key={activeWindow.id} win={activeWindow} />
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileTab({ win }) {
  const Component = APP_COMPONENTS[win.id]
  
  if (!Component) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: '5%' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: '5%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-[#f8f5fb] dark:bg-[#121214] pointer-events-auto flex flex-col overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto no-scrollbar">
        {/* Padding bottom is needed so content isn't hidden behind the bottom nav */}
        <div className="p-6 pb-24 min-h-full">
           <Component />
        </div>
      </div>
    </motion.div>
  )
}
