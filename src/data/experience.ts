export interface ExperienceEntry {
  company: string
  role: string
  description: string
  period: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'PixelForge Studios',
    role: 'Senior Frontend Engineer',
    description:
      'Led the frontend team in building user-centric mobile and web applications, improving usability and raising user engagement across the product suite.',
    period: 'Jan 2020 \u2014 Present',
  },
  {
    company: 'BlueWave Innovators',
    role: 'Frontend Engineer',
    description:
      'Developed and implemented interface strategies for new product lines, collaborating closely with backend engineers and product managers.',
    period: 'Jun 2017 \u2014 Dec 2019',
  },
  {
    company: 'TrendCraft Solutions',
    role: 'UI Engineer',
    description:
      'Built interfaces for e-commerce platforms, focusing on enhancing usability, accessibility and visual consistency across the catalog.',
    period: 'Mar 2015 \u2014 May 2017',
  },
  {
    company: 'Visionary Labs',
    role: 'Junior Developer',
    description:
      'Assisted in building wireframes and interactive prototypes for digital products, contributing to user research and usability testing.',
    period: 'Sep 2013 \u2014 Feb 2015',
  },
]
