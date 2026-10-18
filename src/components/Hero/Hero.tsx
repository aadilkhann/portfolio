import { Link } from 'react-router-dom'
import { Layers, LayoutGrid } from 'lucide-react'
import './Hero.css'

const stats = [
  { value: '+12', label: 'YEARS OF\nEXPERIENCE' },
  { value: '+46', label: 'PROJECTS\nCOMPLETED' },
  { value: '+20', label: 'WORLDWIDE\nCLIENTS' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="hero__heading">
        <span className="hero__heading-top">SOFTWARE</span>
        <span className="hero__heading-bottom">ENGINEER</span>
      </h1>
      <p className="hero__lead">
        Passionate about creating intuitive and engaging user experiences. Specialize in
        transforming ideas into beautifully crafted products.
      </p>

      <dl className="hero__stats">
        {stats.map((stat) => (
          <div className="hero__stat" key={stat.value}>
            <dt className="sr-only">{stat.label.replace('\n', ' ')}</dt>
            <dd className="hero__stat-value">{stat.value}</dd>
            <p className="hero__stat-label" aria-hidden="true">
              {stat.label.split('\n').map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        ))}
      </dl>

      <div className="hero__tags">
        <Link to="/experience" className="hero__tag hero__tag--orange">
          <Layers size={28} strokeWidth={1.75} aria-hidden="true" />
          <span>DYNAMIC ANIMATION, MOTION DESIGN</span>
        </Link>
        <Link to="/projects" className="hero__tag hero__tag--lime">
          <LayoutGrid size={28} strokeWidth={1.75} aria-hidden="true" />
          <span>FRAMER, FIGMA, WORDPRESS, REACTJS</span>
        </Link>
      </div>
    </section>
  )
}
