import { useLayoutEffect, useState, useEffect } from 'react'
import { useDesktopStore } from './store/useDesktopStore'
import Desktop from './components/desktop/Desktop'
import Mobile from './components/mobile/Mobile'
import { useMediaQuery } from './hooks/useMediaQuery'

export default function App() {
  const theme = useDesktopStore(s => s.theme)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Theme Handling
  useLayoutEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
  }, [theme])

  if (!mounted) return null

  return (
    <div className="antialiased text-zinc-900 dark:text-zinc-100 selection:bg-purple-500/30">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  )
}
