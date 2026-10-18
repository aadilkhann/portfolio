export interface Project {
  slug: string
  name: string
  tagline: string
  category: string
  description: string
  tech: string[]
  color: 'violet' | 'teal' | 'red' | 'sand' | 'ink' | 'blue'
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'najmai',
    name: 'NajmAI',
    tagline: 'SaaS Product Site',
    category: 'SaaS Website',
    description:
      'A marketing site for an AI-powered design assistant. Built around a dark, gradient-driven visual language with a focus on fast scroll-triggered storytelling and a clear upgrade path from free to paid plans.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    color: 'violet',
    featured: true,
  },
  {
    slug: 'damas',
    name: 'Damas',
    tagline: 'Agency Template',
    category: 'Agency Website',
    description:
      'A bold, editorial-style site for a creative studio. Large type, high-contrast imagery blocks and a tactile grid system were used to make the studio\u2019s process feel confident and considered.',
    tech: ['React', 'Vite', 'CSS Grid'],
    color: 'teal',
    featured: true,
  },
  {
    slug: 'majd',
    name: 'Majd',
    tagline: 'Portfolio Template',
    category: 'Personal Portfolio',
    description:
      'A compact single-page portfolio built for designers who want a punchy introduction and a short, curated project list rather than an exhaustive archive of work.',
    tech: ['React', 'TypeScript'],
    color: 'red',
    featured: true,
  },
  {
    slug: 'faseelh',
    name: 'Faseelh',
    tagline: 'Sustainability Landing Page',
    category: 'Landing Page',
    description:
      'A landing page for a sustainability-focused product, pairing calm green tones and soft imagery with a direct, benefit-first layout aimed at converting first-time visitors.',
    tech: ['React', 'Accessibility', 'SEO'],
    color: 'sand',
  },
  {
    slug: 'abjad',
    name: 'ABJAD',
    tagline: 'AI Tooling Portfolio',
    category: 'Product Portfolio',
    description:
      'A showcase site for a suite of AI planning tools, structured around short feature explainers and plenty of whitespace so each capability gets room to breathe.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
    color: 'ink',
  },
  {
    slug: 'bayt',
    name: 'Bayt',
    tagline: 'Real Estate Showcase',
    category: 'Real Estate Website',
    description:
      'A property showcase site with a focus on imagery density and quick filtering, designed so listings feel premium without slowing down the browsing experience.',
    tech: ['React', 'Responsive Grids'],
    color: 'blue',
  },
  {
    slug: 'stabraq',
    name: 'Stabraq',
    tagline: 'Portfolio Template',
    category: 'Personal Portfolio',
    description:
      'A second take on the personal portfolio format, leaning into muted neutrals and a stronger typographic hierarchy for engineers and product designers alike.',
    tech: ['React', 'TypeScript', 'CSS'],
    color: 'red',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
