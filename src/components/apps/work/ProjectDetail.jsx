import { ArrowLeft, ExternalLink, Code } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectDetail({ project, onBack }) {
  const { title, tag, description, technologies, process, links } = project;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col gap-6"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-fit font-medium group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> 
        Back to Projects
      </button>

      <div className="space-y-4">
        <span className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-bold">
          {tag || 'Web Development'}
        </span>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
      </div>

      {technologies && technologies.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <hr className="border-zinc-100 dark:border-zinc-800" />

      {process && process.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Creative Process</h3>
          <div className="grid gap-6">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                {step.image && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all hover:shadow-md">
                    <img
                      src={step.image}
                      alt={`Step ${i + 1}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {step.caption && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">{step.caption}</p>
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
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-600/20 active:scale-95"
          >
            <ExternalLink className="w-4 h-4" /> Live Demo
          </a>
        )}
        {links?.github && links.github !== "#" && (
          <a 
            href={links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold transition-all border border-zinc-200 dark:border-zinc-700 active:scale-95"
          >
            <Code className="w-4 h-4" /> Source Code
          </a>
        )}
      </div>
    </motion.div>
  )
}
