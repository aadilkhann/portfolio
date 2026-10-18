import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Navigate404 from '../NotFound/NotFound'
import ProjectThumb from '../../components/ProjectThumb/ProjectThumb'
import ContactSection from '../../components/ContactSection/ContactSection'
import { getProjectBySlug } from '../../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate404 />
  }

  return (
    <>
      <article className="project-detail">
        <Link to="/projects" className="project-detail__back">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="project-detail__thumb">
          <ProjectThumb color={project.color} name={project.name} />
        </div>

        <header className="project-detail__header">
          <p className="project-detail__category">{project.category}</p>
          <h1 className="project-detail__title">{project.name}</h1>
          <p className="project-detail__tagline">{project.tagline}</p>
        </header>

        <p className="project-detail__description">{project.description}</p>

        <ul className="project-detail__tech">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-detail__cta"
          >
            Visit live site <ArrowUpRight size={18} />
          </a>
        )}
      </article>

      <ContactSection />
    </>
  )
}
