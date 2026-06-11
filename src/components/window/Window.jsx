import { Rnd } from 'react-rnd'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus } from 'lucide-react'
import { useDesktopStore, TRANSLATIONS } from '../../store/useDesktopStore'
import AboutApp from '../apps/AboutApp'
import WorkApp from '../apps/WorkApp'
import ContactApp from '../apps/ContactApp'
import { useRef, useEffect, useCallback } from 'react'
import clickSound from '../../assets/click.mp3'

const APP_COMPONENTS = {
  about: AboutApp,
  work: WorkApp,
  contact: ContactApp,
}

export default function Window({ win }) {
  const { id, zIndex, isMinimized, position, size } = win
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language]

  const focusedId = useDesktopStore(s => s.focusedId)
  const isMuted = useDesktopStore(s => s.isMuted)
  const closeApp = useDesktopStore(s => s.closeApp)
  const minimizeApp = useDesktopStore(s => s.minimizeApp)
  const focusApp = useDesktopStore(s => s.focusApp)
  const updateWindow = useDesktopStore(s => s.updateWindow)
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

  const playCloseSound = () => {
    if (isMuted || !audioRef.current) return
    const s1 = audioRef.current.cloneNode()
    s1.volume = 0.2
    s1.play().catch(() => { })
    setTimeout(() => {
      const s2 = audioRef.current.cloneNode()
      s2.volume = 0.15
      s2.play().catch(() => { })
    }, 80)
  }

  // Track whether a mousedown turned into a drag so we don't play sound on drags
  const dragStartPos = useRef(null)
  const didDrag = useRef(false)

  const handleMouseDown = useCallback((e) => {
    focusApp(id)
    dragStartPos.current = { x: e.clientX, y: e.clientY }
    didDrag.current = false
  }, [focusApp, id])

  const handleMouseMove = useCallback((e) => {
    if (!dragStartPos.current) return
    const dx = Math.abs(e.clientX - dragStartPos.current.x)
    const dy = Math.abs(e.clientY - dragStartPos.current.y)
    if (dx > 4 || dy > 4) didDrag.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    if (!didDrag.current) playActionSound()
    dragStartPos.current = null
    didDrag.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMuted])

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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
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
            ? 'bg-[#f8f5fb] dark:bg-[#121214] border border-black/10 dark:border-white/10 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-[#f8f5fb]/90 dark:bg-[#0c0c0e]/98 border border-black/5 dark:border-white/5 shadow-md scale-[0.995]'
          }`}
      >
        {/* Header */}
        <div
          className={`window-drag-handle flex items-center justify-between px-6 py-4 flex-shrink-0 select-none cursor-grab active:cursor-grabbing border-b transition-colors duration-300
            ${isFocused
              ? 'bg-[#f0e9f6] dark:bg-white/[0.02] border-black/5 dark:border-white/5'
              : 'bg-transparent border-transparent'
            }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isFocused ? 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
            <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isFocused ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'}`}>
              {t.apps[id] || id}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); playActionSound(); minimizeApp(id); }}
              className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-all"
              aria-label={t.windows.minimize}
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); playCloseSound(); closeApp(id); }}
              className="p-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-zinc-400 dark:text-zinc-600 hover:text-red-600 dark:hover:text-red-400 transition-all"
              aria-label={t.windows.close}
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
