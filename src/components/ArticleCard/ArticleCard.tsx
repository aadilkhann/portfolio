import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../../data/articles'
import './ArticleCard.css'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/blog/${article.slug}`} className="article-card">
      <div className="article-card__body">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <div className="article-card__meta">
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
      <span className="icon-badge article-card__arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  )
}
