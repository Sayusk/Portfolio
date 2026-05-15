import profilePic from '../../assets/Pfp.jpeg'
import { useDesktopStore, TRANSLATIONS } from '../../store/useDesktopStore'

export default function AboutApp() {
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].about

  return (
    <div className="flex flex-col gap-8 p-1">
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 flex-shrink-0 shadow-lg relative">
          <img src={profilePic} alt="Alan" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 ring-inset ring-1 ring-white/10" />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
            Alan Yusuke Sassano Vilares
          </h2>
          <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">{t.role}</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {t.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg bg-black/5 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-zinc-700/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-black/5 dark:via-zinc-800 to-transparent" />

      {/* Bio */}
      <div className="space-y-4 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
        {t.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {t.highlights.map(item => (
          <div
            key={item.label}
            className="group rounded-2xl bg-black/[0.01] dark:bg-zinc-900/50 p-4 border border-black/5 dark:border-zinc-800 transition-all hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5"
          >
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-black mb-1">
              {item.label}
            </p>

            <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {item.value}
            </p>

            <p className="text-xs text-zinc-600 dark:text-zinc-500 mt-0.5">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
