import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrowTop: string
  eyebrowBottom: string
  action?: ReactNode
  as?: 'h1' | 'h2'
}

export default function SectionHeading({
  eyebrowTop,
  eyebrowBottom,
  action,
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as

  return (
    <div className="section-heading">
      <Heading className="section-heading__title">
        <span className="section-heading__top">{eyebrowTop}</span>
        <span className="section-heading__bottom">{eyebrowBottom}</span>
      </Heading>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  )
}
