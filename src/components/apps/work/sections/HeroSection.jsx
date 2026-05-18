import { motion } from 'framer-motion'
import { Layout, Calendar, User, Info } from 'lucide-react'

export default function HeroSection({ section, project, language }) {
  const { title, description, image } = section
  
  // Translation labels based on language
  const labels = {
    en: {
      role: 'Role',
      year: 'Year',
      status: 'Status',
      category: 'Category',
      stack: 'Technologies'
    },
    pt: {
      role: 'Função',
      year: 'Ano',
      status: 'Status',
      category: 'Categoria',
      stack: 'Tecnologias'
    }
  }[language] || {
    role: 'Role',
    year: 'Year',
    status: 'Status',
    category: 'Category',
    stack: 'Technologies'
  }

  return (
    <div className="space-y-8 pb-4">
      {/* Intro Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Cinematic Title */}
        <div className="lg:col-span-2 space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-[1.1] transition-theme"
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium transition-theme"
          >
            {description}
          </motion.p>
        </div>

        {/* Project Metadata Sidebar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/5 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5 rounded-2xl p-5 space-y-4 backdrop-blur-md shadow-sm transition-theme"
        >
          <div className="grid grid-cols-2 gap-4 text-xs font-bold text-zinc-500 dark:text-zinc-500">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[10px]">
                <User className="w-3.5 h-3.5 text-[var(--project-primary)]" />
                {labels.role}
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 font-bold transition-theme">{project.role}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[10px]">
                <Calendar className="w-3.5 h-3.5 text-[var(--project-primary)]" />
                {labels.year}
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 font-bold transition-theme">{project.year}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[10px]">
                <Info className="w-3.5 h-3.5 text-[var(--project-primary)]" />
                {labels.status}
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 font-bold transition-theme">{project.status}</p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[10px]">
                <Layout className="w-3.5 h-3.5 text-[var(--project-primary)]" />
                {labels.category}
              </span>
              <p className="text-zinc-800 dark:text-zinc-200 font-bold transition-theme">{project.category}</p>
            </div>
          </div>

          <div className="border-t border-black/5 dark:border-white/5 pt-3 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-500 block">
              {labels.stack}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack?.map(tech => (
                <span 
                  key={tech} 
                  className="text-[10px] px-2 py-1 rounded bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300 font-bold transition-theme hover:border-[var(--project-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main High-Fidelity Mockup Frame */}
      {image && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group mt-6"
        >
          {/* Neon Glow effect linked to custom accent variable */}
          <div className="absolute -inset-1.5 bg-[var(--project-primary)] rounded-[20px] blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-500" />
          
          {/* Glassmorphic Window Mockup wrapper */}
          <div className="relative overflow-hidden rounded-[20px] border border-black/10 dark:border-white/10 bg-[#f8f5fb] dark:bg-[#121214] shadow-2xl transition-theme">
            {/* Browser chrome header bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-black/5 dark:bg-white/[0.03] border-b border-black/5 dark:border-white/5 flex-shrink-0 select-none">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="ml-4 h-4 w-32 bg-black/5 dark:bg-white/5 rounded text-[9px] text-zinc-400 flex items-center justify-center font-bold tracking-tight">
                sayusk.dev/{project.id}
              </div>
            </div>

            {/* Img Container */}
            <div className="overflow-hidden bg-black/5 dark:bg-zinc-950 aspect-[16/10]">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
