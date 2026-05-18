import { motion } from 'framer-motion'

export default function TextSection({ section }) {
  const { title, content } = section

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="space-y-4 max-w-3xl py-4"
    >
      {title && (
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-[var(--project-primary)] rounded-full" />
          <h4 className="text-xl lg:text-2xl font-black text-zinc-950 dark:text-white tracking-tight transition-theme">
            {title}
          </h4>
        </div>
      )}
      <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium transition-theme whitespace-pre-line pl-4 border-l border-zinc-200 dark:border-zinc-800/80">
        {content}
      </p>
    </motion.div>
  )
}
