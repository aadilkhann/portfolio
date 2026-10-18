import { ArrowUpRight } from 'lucide-react'
import type { Tool } from '../../data/tools'
import './ToolCard.css'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tool-card"
      aria-label={`${tool.name} \u2014 ${tool.description} (opens in a new tab)`}
    >
      <span className="tool-card__icon" aria-hidden="true">
        {tool.name.charAt(0)}
      </span>
      <span className="tool-card__body">
        <span className="tool-card__name">{tool.name}</span>
        <span className="tool-card__description">{tool.description}</span>
      </span>
      <span className="icon-badge tool-card__arrow" aria-hidden="true">
        <ArrowUpRight size={16} />
      </span>
    </a>
  )
}
