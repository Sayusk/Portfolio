import { useState, useEffect } from 'react'
import { useDesktopStore } from '../../store/useDesktopStore'

export default function MobileTopBar() {
  const [time, setTime] = useState(new Date())
  const language = useDesktopStore(s => s.language)
  const locale = language === 'pt' ? 'pt-BR' : 'en-US'

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString(locale, { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  })
  const formattedDay = time.toLocaleDateString(locale, {
    weekday: 'long'
  })

  return (
    <div className="h-10 flex items-center justify-center px-4 z-50">
      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 capitalize">
        {formattedTime} • {formattedDay}
      </span>
    </div>
  )
}
