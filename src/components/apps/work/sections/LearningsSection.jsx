import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function LearningsSection({ section, language }) {
  const { items = [] } = section

  // Translatability
  const title = {
    en: 'Key Learnings & Takeaways',
    pt: 'Principais Aprendizados & Conclusões'
  }[language] || 'Key Learnings & Takeaways'

  if (!items || items.length === 0) return null

  return (
    <div className="space-y-4 py-4">
      <h4 className="text-xs uppercase tracking-[0.25em] font-black text-zinc-400 dark:text-zinc-500 transition-theme">
        {title}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-center gap-3.5 p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] shadow-sm transition-theme hover:border-[var(--project-primary)]/30 hover:bg-[var(--project-primary)]/[0.01]"
          >
            <div className="p-1.5 bg-[var(--project-primary)]/10 text-[var(--project-primary)] rounded-lg flex-shrink-0 transition-theme">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-sm text-zinc-700 dark:text-zinc-300 font-bold tracking-tight transition-theme">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
