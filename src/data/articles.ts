export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'starting-a-career-in-web-design',
    title: 'Starting and Growing a Career in Web Design',
    excerpt:
      'Notes on breaking into web design and development, and the mix of creative and technical skills that keeps the field moving.',
    date: 'Apr 8, 2022',
    readTime: '6min read',
    content: [
      'Web design sits at the intersection of craft and code. Designers are usually judged on the overall feel of a product, while developers carry the responsibility of making that feel actually work across browsers, devices and connection speeds. In practice, the strongest portfolios belong to people comfortable moving between both worlds.',
      'Early in a design career, it helps to build a small number of complete projects rather than a large number of half-finished ones. A single polished case study that explains the problem, the constraints and the outcome will usually do more for a portfolio than a dozen unfinished mockups.',
      'Coding ability compounds over time. Even a working knowledge of HTML, CSS and a component framework makes it easier to hand off designs that survive contact with a real browser, and it opens the door to roles that blend design and front-end engineering.',
    ],
  },
  {
    slug: 'create-a-landing-page-that-performs-great',
    title: 'Create a Landing Page That Performs Great',
    excerpt:
      'Why landing pages behave differently from a marketing site, and the small decisions that tend to move conversion the most.',
    date: 'Mar 15, 2022',
    readTime: '6min read',
    content: [
      'A landing page has one job: convince a visitor who already clicked an ad or a link to take a single next step. That\u2019s a very different goal from a company\u2019s homepage, which has to represent an entire brand and give equal weight to many different paths.',
      'The best performing pages tend to repeat the same offer in a few different ways \u2014 a strong headline, a short supporting line, and a call to action that reappears as the visitor scrolls \u2014 instead of introducing new ideas as the page goes on.',
      'Visual noise is the easiest thing to cut. Fewer navigation links, fewer competing buttons and a single clear action usually outperforms a page that tries to do everything at once.',
    ],
  },
  {
    slug: 'how-can-designers-prepare-for-the-future',
    title: 'How Can Designers Prepare for the Future?',
    excerpt:
      'Thoughts on staying useful as tooling changes quickly, and why understanding people still matters more than any single tool.',
    date: 'Feb 28, 2022',
    readTime: '6min read',
    content: [
      'Every few years a new wave of tooling promises to remove the repetitive parts of a designer\u2019s job. That\u2019s usually a good thing \u2014 it frees up time for the harder problems that automation doesn\u2019t handle well, like understanding what a user actually needs versus what they say they want.',
      'The designers who adapt fastest tend to be the ones who treat new tools as instruments rather than threats. Learning how a tool reasons, where it tends to be wrong, and how to combine it with human judgement is a more durable skill than mastering any one interface.',
      'None of this replaces research. Talking to real users, watching how they actually behave, and being willing to be wrong about assumptions is still the most reliable way to build something people want to use.',
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
