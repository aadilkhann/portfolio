import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import NotFound from '../NotFound/NotFound'
import ContactSection from '../../components/ContactSection/ContactSection'
import { getArticleBySlug } from '../../data/articles'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return <NotFound />
  }

  return (
    <>
      <article className="blog-post">
        <Link to="/blog" className="blog-post__back">
          <ArrowLeft size={16} /> Back to thoughts
        </Link>

        <header className="blog-post__header">
          <h1 className="blog-post__title">{article.title}</h1>
          <div className="blog-post__meta">
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </header>

        <div className="blog-post__content">
          {article.content.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </article>

      <ContactSection />
    </>
  )
}
