import { ArrowLeft, ExternalLink, Code, Timer, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS } from '../../../store/useDesktopStore'
import SectionRenderer from './sections/SectionRenderer'

export default function ProjectDetail({ project, onBack }) {
  const { category, sections, links } = project
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp
  const [showFloatingBack, setShowFloatingBack] = useState(false)
  const headerRef = useRef(null)

  // Track scroll position to show/hide the floating back button
  useEffect(() => {
    const scrollParent = headerRef.current?.closest('.overflow-y-auto')
    if (!scrollParent) return

    const handleScroll = () => {
      setShowFloatingBack(scrollParent.scrollTop > 80)
    }

    scrollParent.addEventListener('scroll', handleScroll, { passive: true })
    return () => scrollParent.removeEventListener('scroll', handleScroll)
  }, [])

  // Inject primary brand theme color dynamically
  const containerStyle = {
    '--project-primary': project.theme?.primary || '#8b5cf6',
    '--project-bg': project.theme?.background || '#0f0f0f',
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      style={containerStyle}
      className="flex flex-col gap-10 select-none pb-6 relative"
    >
      {/* Persistent Sticky Return Button — Desktop only, appears on scroll */}
      <div className="hidden md:block sticky top-0 z-50 h-0 overflow-visible pointer-events-none">
        <AnimatePresence>
          {showFloatingBack && (
            <motion.button
              key="floating-back"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={onBack}
              className="absolute -left-6 top-1 pointer-events-auto flex items-center justify-center p-3 bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md text-zinc-500 hover:text-[var(--project-primary)] border border-black/10 dark:border-white/10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
              title={t.back}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-[var(--project-primary)]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Header */}
      <header ref={headerRef} className="flex flex-col gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-[var(--project-primary)] transition-colors w-fit font-black uppercase tracking-[0.15em] group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[var(--project-primary)]" /> 
          {t.back}
        </button>

        {/* Small project category marker */}
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-[var(--project-primary)]/10 text-[var(--project-primary)] border border-[var(--project-primary)]/15 transition-theme">
            {category || 'Case Study'}
          </span>
        </div>
      </header>

      {/* Case Study Storytelling Sections */}
      <div className="flex flex-col gap-12 w-full">
        {project.status === 'wip' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-3xl bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Ambient Background Glow matching the brand color */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[var(--project-primary)]/5 blur-3xl pointer-events-none select-none" />

            <div className="relative space-y-6 max-w-md flex flex-col items-center">
              {/* Premium Icon Badge with spin/pulse micro-animation */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--project-primary)]/10 text-[var(--project-primary)] flex items-center justify-center border border-[var(--project-primary)]/15 relative">
                <Timer className="w-8 h-8 animate-pulse" />
                <Sparkles className="w-4 h-4 absolute -top-1.5 -right-1.5 text-[var(--project-primary)] animate-bounce" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {t.wipTitle || "Wait! I’m still writing about it."}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed">
                  {t.wipDescription || "I'm currently crafting a detailed write-up for this project. In the meantime, you can explore the live demo or check out the repository on GitHub using the buttons below!"}
                </p>
              </div>

              {/* Polished, slightly playful micro progress bar */}
              <div className="w-32 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-[var(--project-primary)] rounded-full"
                  animate={{ 
                    left: ["-100%", "100%"],
                    width: ["30%", "60%", "30%"]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        ) : sections && sections.length > 0 ? (
          sections.map((section, idx) => (
            <SectionRenderer 
              key={`${project.id}-section-${idx}`}
              section={section}
              project={project}
              language={language}
            />
          ))
        ) : (
          <div className="py-8 text-zinc-400 dark:text-zinc-500 font-bold text-center">
            {t.noSections}
          </div>
        )}
      </div>

      {/* Interactive Links Panel */}
      <div className="flex flex-wrap gap-4 pt-8 border-t border-black/5 dark:border-white/5 transition-theme mt-4">
        {links?.live && links.live !== "#" && (
          <a 
            href={links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--project-primary)] hover:brightness-110 text-white font-bold transition-all shadow-lg shadow-[var(--project-primary)]/15 hover:shadow-[var(--project-primary)]/30 active:scale-98 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" /> {t.viewLive}
          </a>
        )}
        {links?.github && links.github !== "#" && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/5 dark:bg-zinc-800/80 hover:bg-black/10 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold transition-all border border-black/5 dark:border-zinc-700/50 active:scale-98 shadow-sm cursor-pointer"
          >
            <Code className="w-4 h-4" /> {t.viewGithub}
          </a>
        )}
      </div>
    </motion.div>
  )
}
