export const TOOLS = [
  'React', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'Figma', 'Git', 'Adobe Suite', 'CorelDraw', 'Power BI',
]

export default function TechStack() {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {TOOLS.map(tool => (
          <span
            key={tool}
            className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all cursor-default shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
