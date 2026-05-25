import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MobileHome from './MobileHome'
import MobileTabManager from './MobileTabManager'
import MobileBottomNav from './MobileBottomNav'
import MobileTopBar from './MobileTopBar'
import MobileTabBar from './MobileTabBar'
import MobileSidebar from './MobileSidebar'
import MobileRecentTabs from './MobileRecentTabs'

export default function Mobile() {
  const [showRecentTabs, setShowRecentTabs] = useState(false)

  return (
    <div className="fixed inset-0 flex flex-col bg-[#f0e9f6] dark:bg-[#080809] transition-colors duration-700 overflow-hidden text-zinc-900 dark:text-zinc-100 select-none font-sans">
      <MobileTopBar />
      <MobileTabBar />
      
      <main className="flex-1 relative overflow-hidden z-10">
        <MobileHome />
        <MobileTabManager />
      </main>
      
      <AnimatePresence>
        {showRecentTabs && <MobileRecentTabs isOpen={showRecentTabs} onClose={() => setShowRecentTabs(false)} />}
      </AnimatePresence>
      
      <MobileBottomNav 
        onRecentTabsClick={() => setShowRecentTabs(true)} 
        isRecentTabsOpen={showRecentTabs}
        onCloseRecentTabs={() => setShowRecentTabs(false)}
        onRecentTabsToggle={() => setShowRecentTabs(!showRecentTabs)}
      />
      <MobileSidebar />
    </div>
  )
}
