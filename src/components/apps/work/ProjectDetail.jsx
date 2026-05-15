import { ArrowLeft, ExternalLink, Code } from 'lucide-react'
import { motion } from 'framer-motion'
import { useDesktopStore, TRANSLATIONS } from '../../../store/useDesktopStore'

export default function ProjectDetail({ project, onBack }) {
  const { title, tag, description, technologies, process, links } = project;
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col gap-6"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-fit font-bold group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
        {t.back}
      </button>

      <div className="space-y-4">
        <span className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/5 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/10 dark:border-purple-500/30 font-black">
          {tag}
        </span>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
        <p className="text-base text-zinc-700 dark:text-zinc-400 leading-relaxed font-medium">{description}</p>
      </div>

      {technologies && technologies.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-black">{t.techStack}</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-lg bg-black/5 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-zinc-700 font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <hr className="border-black/5 dark:border-zinc-800" />

      {process && process.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-black">{t.process}</h3>
          <div className="grid gap-6">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                {step.image && (
                  <div className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-zinc-700 shadow-sm transition-all hover:shadow-md">
                    <img
                      src={step.image}
                      alt={`Step ${i + 1}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {step.caption && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic font-medium">{step.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-4">
        {links?.live && links.live !== "#" && (
          <a 
            href={links.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-lg shadow-purple-600/20 active:scale-95"
          >
            <ExternalLink className="w-4 h-4" /> {t.viewLive}
          </a>
        )}
        {links?.github && links.github !== "#" && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-black/5 dark:bg-zinc-800 hover:bg-black/10 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold transition-all border border-black/5 dark:border-zinc-700 active:scale-95 shadow-sm"
          >
            <Code className="w-4 h-4" /> {t.viewGithub}
          </a>
        )}
      </div>
    </motion.div>
  )
}
