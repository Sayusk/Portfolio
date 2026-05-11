import { useState } from 'react'
import { ArrowLeft, ExternalLink, Code, Layout, Database } from 'lucide-react'
import { projects } from '../../data/project'

const tools = [
  'React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'Python',
  'C', 'C#', 'Java', 'Figma', 'Git', 'Adobe Suite', 'CorelDraw', 'Power BI',
]

function ProjectDetail({ project, onBack }) {
  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors w-fit font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </button>

      <div className="space-y-4">
        <span className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 font-bold">
          {project.tag || 'Web Development'}
        </span>

        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{project.name}</h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
      </div>

      {project.technologies && (
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(t => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <hr className="border-zinc-100 dark:border-zinc-800" />

      {project.process && project.process.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Creative Process</h3>
          <div className="grid gap-6">
            {project.process.map((step, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                {step.image && (
                  <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm transition-all hover:shadow-md">
                    <img
                      src={step.image}
                      alt={`Step ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                )}
                {step.caption && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic">{step.caption}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex gap-4 pt-4">
        <a href="#" className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-600/20">
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
        <a href="#" className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold transition-all border border-zinc-200 dark:border-zinc-700">
          <Code className="w-4 h-4" /> Source Code
        </a>
      </div>
    </div>
  )
}

export default function WorkApp() {
  const [selectedId, setSelectedId] = useState(null)
  const project = projects.find(p => p.id === selectedId)

  if (project) {
    return <ProjectDetail project={project} onBack={() => setSelectedId(null)} />
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Selected Projects</h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">A collection of my recent work in web development and interface design.</p>
      </div>

      {/* Tools */}
      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-bold">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map(tool => (
            <span
              key={tool}
              className="text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all cursor-default shadow-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedId(p.id)}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-purple-500/50 transition-all duration-300 text-left shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
          >
            <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center opacity-20">
                  <Layout className="w-12 h-12" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 dark:opacity-80" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 dark:bg-zinc-900/90 p-2 rounded-lg backdrop-blur-sm shadow-lg">
                  <ArrowLeft className="w-4 h-4 rotate-180 text-purple-600" />
                </div>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">{p.tag || 'Project'}</p>
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white truncate">{p.name}</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">{p.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
