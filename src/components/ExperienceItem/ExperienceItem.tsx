import type { ExperienceEntry } from '../../data/experience'
import './ExperienceItem.css'

interface ExperienceItemProps {
  entry: ExperienceEntry
}

export default function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <div className="experience-item__body">
        <h3 className="experience-item__company">{entry.company}</h3>
        <p className="experience-item__role">{entry.role}</p>
        <p className="experience-item__description">{entry.description}</p>
      </div>
      <p className="experience-item__period">{entry.period}</p>
    </article>
  )
}
