import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem'
import ToolCard from '../../components/ToolCard/ToolCard'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ContactSection from '../../components/ContactSection/ContactSection'
import { projects } from '../../data/projects'
import { experience } from '../../data/experience'
import { tools } from '../../data/tools'
import { articles } from '../../data/articles'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)
  const featuredExperience = experience.slice(0, 3)

  return (
    <>
      <Hero />

      <section aria-labelledby="projects-heading">
        <SectionHeading
          eyebrowTop="RECENT"
          eyebrowBottom="PROJECTS"
          action={
            <Link to="/projects" className="view-all-link">
              View all
            </Link>
          }
        />
        <div className="stack-list">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="experience-heading">
        <SectionHeading
          eyebrowTop="12 YEARS OF"
          eyebrowBottom="EXPERIENCE"
          action={
            <Link to="/experience" className="view-all-link">
              View all
            </Link>
          }
        />
        <div className="stack-list">
          {featuredExperience.map((entry) => (
            <ExperienceItem key={entry.company} entry={entry} />
          ))}
        </div>
      </section>

      <section aria-labelledby="tools-heading">
        <SectionHeading eyebrowTop="PREMIUM" eyebrowBottom="TOOLS" />
        <div className="tools-grid">
          {tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </section>

      <section aria-labelledby="blog-heading">
        <SectionHeading eyebrowTop="DESIGN" eyebrowBottom="THOUGHTS" />
        <div className="stack-list">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
