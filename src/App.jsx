import { useLayoutEffect } from 'react'
import { useDesktopStore } from './store/useDesktopStore'
import Desktop from './components/desktop/Desktop'

export default function App() {
  const theme = useDesktopStore(s => s.theme)

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

  return (
    <div className="antialiased text-zinc-900 dark:text-zinc-100 selection:bg-purple-500/30">
      <Desktop />
    </div>
  )
}
