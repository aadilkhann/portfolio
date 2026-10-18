import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectThumb from '../ProjectThumb/ProjectThumb'
import type { Project } from '../../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__thumb">
        <ProjectThumb color={project.color} name={project.name} />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
      </div>
      <span className="icon-badge project-card__arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  )
}
