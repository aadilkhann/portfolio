import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import ContactSection from '../../components/ContactSection/ContactSection'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <>
      <section aria-labelledby="experience-heading">
        <SectionHeading eyebrowTop="12 YEARS OF" eyebrowBottom="EXPERIENCE" as="h1" />
        <div className="stack-list">
          {experience.map((entry) => (
            <ExperienceItem key={entry.company} entry={entry} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
