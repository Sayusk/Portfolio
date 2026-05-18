import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function NoteSection({ section }) {
  const { content } = section

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-[var(--project-primary)]/20 dark:border-[var(--project-primary)]/30 bg-[var(--project-primary)]/[0.02] dark:bg-[var(--project-primary)]/[0.04] p-5 backdrop-blur-md shadow-sm transition-theme my-2"
    >
      {/* Glow decorative bubble */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[var(--project-primary)]/5 blur-xl pointer-events-none" />

      <div className="flex gap-4 items-start relative z-10">
        <div className="p-2 bg-[var(--project-primary)]/10 text-[var(--project-primary)] rounded-xl flex-shrink-0 transition-theme">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="text-sm text-zinc-700 dark:text-zinc-300 font-bold tracking-tight leading-relaxed transition-theme my-auto">
          {content}
        </p>
      </div>
    </motion.div>
  )
}
