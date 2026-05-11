import { AnimatePresence } from 'framer-motion'
import { useDesktopStore } from '../../store/useDesktopStore'
import Window from './Window'

export default function WindowContainer() {
  const windows = useDesktopStore(s => s.windows)

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative w-full h-full pointer-events-auto">
        <AnimatePresence>
          {windows.map(win => (
            <Window key={win.id} win={win} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
