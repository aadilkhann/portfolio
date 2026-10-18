import SectionHeading from '../../components/SectionHeading/SectionHeading'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import ContactSection from '../../components/ContactSection/ContactSection'
import { articles } from '../../data/articles'

export default function Blog() {
  return (
    <>
      <section aria-labelledby="blog-heading">
        <SectionHeading eyebrowTop="DESIGN" eyebrowBottom="THOUGHTS" as="h1" />
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
