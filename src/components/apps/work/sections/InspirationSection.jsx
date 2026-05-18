import { motion } from 'framer-motion'

export default function InspirationSection({ section }) {
  const { title, content, images = [] } = section

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
      {/* Narrative block */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h4 className="text-xs uppercase tracking-[0.25em] font-black text-[var(--project-primary)] transition-theme">
          {title}
        </h4>
        <p className="text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed pl-4 border-l border-zinc-200 dark:border-zinc-800 transition-theme">
          {content}
        </p>
      </motion.div>

      {/* Moodboard / References cards */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-zinc-950 transition-theme shadow-sm hover:shadow-md"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-500 ease-out" 
                alt={`Inspiration Reference ${i + 1}`} 
                loading="lazy" 
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
