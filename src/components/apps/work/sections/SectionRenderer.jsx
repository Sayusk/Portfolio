import HeroSection from './HeroSection'
import TextSection from './TextSection'
import GallerySection from './GallerySection'
import InspirationSection from './InspirationSection'
import NoteSection from './NoteSection'
import LearningsSection from './LearningsSection'
import FeatureShowcaseSection from './FeatureShowcaseSection'

// Section Type Presentation Mapping
const SECTION_COMPONENTS = {
  hero: HeroSection,
  text: TextSection,
  gallery: GallerySection,
  inspiration: InspirationSection,
  note: NoteSection,
  learnings: LearningsSection,
  features: FeatureShowcaseSection
}

export default function SectionRenderer({ section, project, language }) {
  const Component = SECTION_COMPONENTS[section.type]

  if (!Component) {
    console.warn(`[SectionRenderer] Unsupported section type: "${section.type}"`)
    return null
  }

  return (
    <div className="w-full">
      <Component 
        section={section} 
        project={project} 
        language={language} 
      />
    </div>
  )
}
