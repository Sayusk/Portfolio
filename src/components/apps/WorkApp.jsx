import { useState, useMemo, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../../data/project'
import ProjectCard from './work/ProjectCard'
import ProjectDetail from './work/ProjectDetail'
import TechStack from './work/TechStack'
import { useDesktopStore, TRANSLATIONS } from '../../store/useDesktopStore'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function WorkApp() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  // Mobile: persist via Zustand store so tab switching preserves location
  const mobileSelectedId = useDesktopStore(s => s.selectedProjectId)
  const setMobileSelectedId = useDesktopStore(s => s.setSelectedProjectId)

  // Desktop: local state that resets when the component unmounts (window close)
  const [desktopSelectedId, setDesktopSelectedId] = useState(null)

  const selectedId = isMobile ? mobileSelectedId : desktopSelectedId
  const setSelectedId = isMobile ? setMobileSelectedId : setDesktopSelectedId

  // Sync: if switching from mobile to desktop, reset local state from store
  useEffect(() => {
    if (!isMobile) {
      setDesktopSelectedId(null)
    }
  }, [isMobile])

  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp
  const localizedProjects = projects[language] || projects.en

  // Memoize the selected project
  const selectedProject = useMemo(() => 
    localizedProjects.find(p => p.id === selectedId), 
    [selectedId, localizedProjects]
  )

  return (
    <div className="relative min-h-full">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail 
            key={`detail-${selectedProject.id}`}
            project={selectedProject} 
            onBack={() => setSelectedId(null)} 
          />
        ) : (
          <motion.div 
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <header className="space-y-2">
              <h2 className="text-3xl font-bold text-zinc-950 dark:text-white tracking-tight">
                {t.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed font-medium">
                {t.subtitle}
              </p>
            </header>

            {/* Tools Section */}
            <TechStack />

            {/* Projects Grid - Fallback to ensure rendering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localizedProjects && localizedProjects.length > 0 ? (
                localizedProjects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => setSelectedId(project.id)} 
                  />
                ))
              ) : (
                <p className="text-zinc-500 dark:text-zinc-400">{t.noSections}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
