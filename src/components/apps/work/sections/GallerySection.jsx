import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import { useDesktopStore, TRANSLATIONS } from '../../../../store/useDesktopStore'

export default function GallerySection({ section }) {
  const { title, layout = '2-columns', images = [] } = section
  const [activeImage, setActiveImage] = useState(null)
  
  const language = useDesktopStore(s => s.language)
  const t = TRANSLATIONS[language].workApp

  // Helper to parse image item properties (handles both raw string and object item schemas)
  const parseImageItem = (item) => {
    if (typeof item === 'string') {
      return { src: item, caption: '', description: '' }
    }
    return {
      src: item.src || '',
      caption: item.caption || '',
      description: item.description || ''
    }
  }

  // Keyboard navigation inside Lightbox Modal
  useEffect(() => {
    if (activeImage === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      } else if (e.key === 'ArrowRight') {
        const currentIndex = images.findIndex(img => parseImageItem(img).src === activeImage)
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % images.length
          setActiveImage(parseImageItem(images[nextIndex]).src)
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = images.findIndex(img => parseImageItem(img).src === activeImage)
        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + images.length) % images.length
          setActiveImage(parseImageItem(images[prevIndex]).src)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage, images])

  if (!images || images.length === 0) return null

  const closeLightbox = () => setActiveImage(null)

  // Layout Renders
  const renderLayout = () => {
    switch (layout) {
      case 'stacked':
        return (
          <div className="flex flex-col gap-10">
            {images.map((img, i) => {
              const { src, caption, description } = parseImageItem(img)
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="space-y-4 w-full"
                >
                  <GalleryItem img={src} index={i} onClick={() => setActiveImage(src)} isLarge={true} />
                  {(caption || description) && (
                    <div className="pl-4 border-l border-zinc-200 dark:border-zinc-800 transition-theme space-y-1 text-left">
                      {caption && <p className="text-sm font-black text-zinc-950 dark:text-zinc-50 transition-theme">{caption}</p>}
                      {description && <p className="text-xs text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed transition-theme">{description}</p>}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        )

      case 'masonry':
        return (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {images.map((img, i) => {
              const parsed = parseImageItem(img)
              // Asymmetrical masonry grid span configuration
              const colSpans = [
                'md:col-span-8',
                'md:col-span-4',
                'md:col-span-4',
                'md:col-span-8',
                'md:col-span-12',
              ]
              const span = colSpans[i % colSpans.length]

              return (
                <div key={i} className={`${span} group`}>
                  <GalleryItemWithCaption 
                    item={parsed} 
                    index={i} 
                    onClick={() => setActiveImage(parsed.src)} 
                  />
                </div>
              )
            })}
          </div>
        )

      case 'carousel':
        return (
          <div className="relative w-full overflow-x-auto flex gap-6 pb-4 pt-2 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
            {images.map((img, i) => {
              const parsed = parseImageItem(img)
              return (
                <div key={i} className="flex-shrink-0 w-72 md:w-96 snap-center">
                  <GalleryItemWithCaption 
                    item={parsed} 
                    index={i} 
                    onClick={() => setActiveImage(parsed.src)} 
                  />
                </div>
              )
            })}
          </div>
        )

      case 'fullscreen':
        return (
          <div className="w-full">
            <GalleryItemWithCaption 
              item={parseImageItem(images[0])} 
              index={0} 
              onClick={() => setActiveImage(parseImageItem(images[0]).src)} 
              isLarge={true} 
            />
          </div>
        )

      case 'split-layout':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <GalleryItemWithCaption 
                item={parseImageItem(images[0])} 
                index={0} 
                onClick={() => setActiveImage(parseImageItem(images[0]).src)} 
              />
            </div>
            <div className="space-y-4 text-left">
              {title && <h5 className="text-lg font-black text-zinc-950 dark:text-white transition-theme">{title}</h5>}
              {images[1] ? (
                <GalleryItemWithCaption 
                  item={parseImageItem(images[1])} 
                  index={1} 
                  onClick={() => setActiveImage(parseImageItem(images[1]).src)} 
                />
              ) : (
                <div className="p-6 rounded-2xl bg-black/5 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5 transition-theme">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed transition-theme">
                    {t.galleryFallback}
                  </p>
                </div>
              )}
            </div>
          </div>
        )

      case '2-columns':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => {
              const parsed = parseImageItem(img)
              return (
                <div key={i} className="group">
                  <GalleryItemWithCaption 
                    item={parsed} 
                    index={i} 
                    onClick={() => setActiveImage(parsed.src)} 
                  />
                </div>
              )
            })}
          </div>
        )
    }
  }

  // Find active image index and metadata inside active Lightbox
  const activeParsedItem = activeImage 
    ? parseImageItem(images.find(img => parseImageItem(img).src === activeImage)) 
    : null

  return (
    <div className="space-y-4 py-4 w-full text-left">
      {title && layout !== 'split-layout' && (
        <h4 className="text-xs uppercase tracking-[0.2em] font-black text-zinc-400 dark:text-zinc-500 transition-theme">
          {title}
        </h4>
      )}

      {renderLayout()}

      {/* Fullscreen Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[999] flex flex-col items-center justify-center p-6 cursor-zoom-out"
          >
            {/* Top Close Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                onClick={closeLightbox}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[75vh] overflow-hidden rounded-[20px] border border-white/10 shadow-2xl"
            >
              <img 
                src={activeImage} 
                alt="Case study fullscreen view" 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Bottom Caption Overlay */}
            {activeParsedItem && activeParsedItem.caption && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-center max-w-2xl px-6 space-y-1 pointer-events-none select-none"
              >
                <p className="text-sm font-black text-white">{activeParsedItem.caption}</p>
                {activeParsedItem.description && (
                  <p className="text-xs text-zinc-400 font-bold">{activeParsedItem.description}</p>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Sub-component wrapper attaching captions beneath thumbnails
function GalleryItemWithCaption({ item, index, onClick, isLarge = false }) {
  const { src, caption, description } = item
  return (
    <div className="space-y-3 w-full text-left">
      <GalleryItem img={src} index={index} onClick={onClick} isLarge={isLarge} />
      {caption && (
        <div className="pl-3.5 border-l border-zinc-200 dark:border-zinc-800 transition-theme space-y-0.5">
          <p className="text-xs font-black text-zinc-800 dark:text-zinc-200 transition-theme">{caption}</p>
          {description && (
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed transition-theme">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// Sub-component for individual item previews with hover scaling
function GalleryItem({ img, index, onClick, isLarge = false }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-zinc-950 shadow-sm cursor-zoom-in ${
        isLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'
      } transition-theme`}
    >
      <img 
        src={img} 
        alt={`Gallery screenshot ${index + 1}`}
        className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out"
        loading="lazy"
      />
      
      {/* Dynamic hover overlay mask */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="p-3 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-full text-white scale-90 group-hover:scale-100 transition-transform duration-300">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
