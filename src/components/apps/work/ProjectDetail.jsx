import { ArrowLeft, ExternalLink, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS } from '../../../store/useDesktopStore'
import SectionRenderer from './sections/SectionRenderer'

export default function ProjectDetail({ project, onBack }) {
  const { title, category, sections, links } = project
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp

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
      className="flex flex-col gap-10 select-none pb-6"
    >
      {/* Navigation Header */}
      <header className="flex flex-col gap-3">
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
        {sections && sections.length > 0 ? (
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
            No sections available for this case study.
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
