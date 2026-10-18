import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ContactSection from '../../components/ContactSection/ContactSection'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <>
      <section aria-labelledby="projects-heading">
        <SectionHeading eyebrowTop="RECENT" eyebrowBottom="PROJECTS" as="h1" />
        <div className="stack-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
