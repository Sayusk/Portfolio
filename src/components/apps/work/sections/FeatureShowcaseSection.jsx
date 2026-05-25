import { motion } from 'framer-motion'
import { Sun, Layers, Volume2, Globe, Monitor, Smartphone } from 'lucide-react'

// Live Icon Mapping Dictionary
const ICON_MAP = {
  theme: Sun,
  window: Layers,
  audio: Volume2,
  language: Globe,
  responsive: Monitor,
  mobile: Smartphone
}

export default function FeatureShowcaseSection({ section }) {
  const { title, items = [] } = section

  return (
    <div className="space-y-6 py-6 w-full text-left">
      {title && (
        <h4 className="text-xs uppercase tracking-[0.25em] font-black text-zinc-400 dark:text-zinc-500 transition-theme">
          {title}
        </h4>
      )}

      {/* Premium Minimalist Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 w-full">
        {items.map((item, idx) => {
          const IconComponent = ICON_MAP[item.icon] || Layers

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 transition-all duration-300 hover:border-[var(--project-primary)]/30 hover:bg-[#fbf9fc]/50 dark:hover:bg-zinc-900/10 shadow-sm"
            >
              {/* Icon Sphere */}
              <div className="w-10 h-10 rounded-xl bg-[var(--project-primary)]/10 text-[var(--project-primary)] flex items-center justify-center transition-colors">
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Explanatory Text */}
              <div className="space-y-1.5">
                <h5 className="text-sm font-black text-zinc-950 dark:text-white transition-theme">
                  {item.title}
                </h5>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed transition-theme">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
