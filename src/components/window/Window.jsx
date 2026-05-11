import { Rnd } from 'react-rnd'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus } from 'lucide-react'
import { useDesktopStore } from '../../store/useDesktopStore'
import AboutApp from '../apps/AboutApp'
import WorkApp from '../apps/WorkApp'
import ContactApp from '../apps/ContactApp'
import { useRef, useEffect } from 'react'
import clickSound from '../../assets/click.wav'

const APP_COMPONENTS = {
  about:      AboutApp,
  work:       WorkApp,
  contact:    ContactApp,
}

const APP_LABELS = {
  about:      'About Me',
  work:       'Selected Work',
  contact:    'Get in Touch',
}

export default function Window({ win }) {
  const { id, zIndex, isMinimized, position, size } = win
  const focusedId    = useDesktopStore(s => s.focusedId)
  const isMuted      = useDesktopStore(s => s.isMuted)
  const closeApp     = useDesktopStore(s => s.closeApp)
  const minimizeApp  = useDesktopStore(s => s.minimizeApp)
  const focusApp     = useDesktopStore(s => s.focusApp)
  const updateWindow = useDesktopStore(s => s.updateWindow)
  const audioRef     = useRef(null)

  useEffect(() => {
    audioRef.current = new Audio(clickSound)
    audioRef.current.volume = 0.2
  }, [])

  const playActionSound = () => {
    if (isMuted || !audioRef.current) return
    const s = audioRef.current.cloneNode()
    s.volume = 0.2
    s.play().catch(() => {})
  }

  const isFocused = focusedId === id
  const Component = APP_COMPONENTS[id]

  if (isMinimized) return null

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(_, d) => updateWindow(id, { position: { x: d.x, y: d.y } })}
      onResizeStop={(_, __, ref, ___, pos) => {
        updateWindow(id, {
          size: { width: ref.offsetWidth, height: ref.offsetHeight },
          position: pos
        })
      }}
      onMouseDown={() => { focusApp(id); playActionSound(); }}
      style={{ zIndex, position: 'absolute' }}
      dragHandleClassName="window-drag-handle"
      minWidth={420}
      minHeight={320}
      bounds="parent"
      enableResizing={{
        bottom: true, right: true, bottomRight: true,
        top: true, left: true, topLeft: true, topRight: true, bottomLeft: true,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 15 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className={`w-full h-full flex flex-col rounded-[24px] overflow-hidden transition-all duration-500
          ${isFocused 
            ? 'bg-white dark:bg-[#121214] border border-zinc-200 dark:border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]' 
            : 'bg-zinc-50/98 dark:bg-[#0c0c0e]/98 border border-zinc-200/60 dark:border-white/5 shadow-md scale-[0.995]'
          }`}
      >
        {/* Header */}
        <div 
          className={`window-drag-handle flex items-center justify-between px-6 py-4 flex-shrink-0 select-none cursor-grab active:cursor-grabbing border-b transition-colors duration-300
            ${isFocused 
              ? 'bg-zinc-50/50 dark:bg-white/[0.02] border-zinc-100 dark:border-white/5' 
              : 'bg-transparent border-transparent'
            }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isFocused ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
            <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isFocused ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'}`}>
              {APP_LABELS[id]}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); playActionSound(); minimizeApp(id); }}
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all"
              aria-label="Minimize"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); playActionSound(); closeApp(id); }}
              className="p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-zinc-400 dark:text-zinc-600 hover:text-red-600 dark:hover:text-red-400 transition-all"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar scroll-smooth bg-transparent">
          {Component ? <Component /> : <div className="text-zinc-500 text-center py-12">Application not found</div>}
        </div>
      </motion.div>
    </Rnd>
  )
}
