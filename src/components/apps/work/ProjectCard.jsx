import { ArrowLeft, Layout } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onClick }) {
  const { title, tag, description, image } = project;

  return (
    <motion.button
      layoutId={`project-${project.id}`}
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-purple-500/10 dark:border-zinc-800 bg-purple-500/[0.01] dark:bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300 text-left shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-44 overflow-hidden bg-purple-500/5 dark:bg-zinc-800">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-20">
            <Layout className="w-12 h-12" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-60 dark:opacity-80" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 dark:bg-zinc-900/90 p-2 rounded-lg backdrop-blur-sm shadow-lg">
            <ArrowLeft className="w-4 h-4 rotate-180 text-purple-600" />
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-1">
        <p className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-black">
          {tag || 'Project'}
        </p>
        <h4 className="text-lg font-bold text-zinc-900 dark:text-white truncate">
          {title}
        </h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </motion.button>
  )
}
