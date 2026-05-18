import { ArrowLeft, Layout } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onClick }) {
  // Gracefully adapt to both old and new schema fields
  const title = project.title
  const category = project.category || project.tag || 'Project'
  const summary = project.summary || project.description || ''
  const previewImage = project.thumbnail || project.image

  const primaryColor = project.theme?.primary || '#8b5cf6'
  
  // Custom container style for dynamic hover accents
  const cardStyle = {
    '--project-primary': primaryColor,
  }

  return (
    <motion.button
      layoutId={`project-${project.id}`}
      onClick={onClick}
      style={cardStyle}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-black/5 dark:border-zinc-800 bg-[#fbf9fc] dark:bg-zinc-900/40 hover:border-[var(--project-primary)]/50 transition-all duration-300 text-left shadow-sm hover:shadow-xl hover:shadow-[var(--project-primary)]/[0.04] cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Visual Thumbnail Area */}
      <div className="relative h-44 w-full overflow-hidden bg-black/5 dark:bg-zinc-950 flex-shrink-0">
        {previewImage ? (
          <img
            src={previewImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-25 dark:opacity-20 text-[var(--project-primary)]">
            <Layout className="w-12 h-12" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 dark:opacity-80" />
        
        {/* Dynamic Hover Action Indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 dark:bg-zinc-900/90 p-2 rounded-xl backdrop-blur-md shadow-lg border border-black/5 dark:border-white/5 transition-theme">
            <ArrowLeft className="w-4 h-4 rotate-180 text-[var(--project-primary)] transition-theme" />
          </div>
        </div>
      </div>
      
      {/* Content Metadata Area */}
      <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
        <div className="space-y-1">
          <span className="text-[9px] uppercase tracking-[0.2em] font-black text-[var(--project-primary)] transition-theme block">
            {category}
          </span>
          <h4 className="text-lg font-black text-zinc-900 dark:text-white truncate group-hover:text-[var(--project-primary)] transition-colors duration-200">
            {title}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-bold">
            {summary}
          </p>
        </div>

        {/* Mini technical stack list */}
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-3 border-t border-black/5 dark:border-white/5 mt-2 transition-theme">
            {project.stack.slice(0, 4).map(tech => (
              <span 
                key={tech} 
                className="text-[9px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 font-bold transition-theme"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-[9px] text-zinc-400 font-bold pl-1 align-middle self-center">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.button>
  )
}
