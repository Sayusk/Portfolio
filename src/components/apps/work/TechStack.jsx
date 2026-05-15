import { useDesktopStore, TRANSLATIONS } from '../../../store/useDesktopStore'

export const TOOLS = [
  'React', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'Figma', 'Git', 'Adobe Suite', 'CorelDraw', 'Power BI',
]

export default function TechStack() {
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp

  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-black">{t.techStack}</h3>
      <div className="flex flex-wrap gap-2">
        {TOOLS.map(tool => (
          <span
            key={tool}
            className="text-xs px-3 py-1.5 rounded-lg bg-black/5 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-zinc-700/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all cursor-default shadow-sm font-medium"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
