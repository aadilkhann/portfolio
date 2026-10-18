interface ProjectThumbProps {
  color: 'violet' | 'teal' | 'red' | 'sand' | 'ink' | 'blue'
  name: string
  className?: string
}

const palettes: Record<ProjectThumbProps['color'], { bg: string; fg: string; accent: string }> = {
  violet: { bg: '#241b3d', fg: '#efe8ff', accent: '#8b5cf6' },
  teal: { bg: '#0f2e2c', fg: '#eafff8', accent: '#2dd4bf' },
  red: { bg: '#3a1210', fg: '#ffe9e4', accent: '#f1592a' },
  sand: { bg: '#2b2820', fg: '#fbf7ee', accent: '#c6f135' },
  ink: { bg: '#15181d', fg: '#f3f5f7', accent: '#9ca3af' },
  blue: { bg: '#10212f', fg: '#e8f3ff', accent: '#3b82f6' },
}

/**
 * Lightweight original SVG thumbnail standing in for a real product
 * screenshot, generated from a per-project color palette.
 */
export default function ProjectThumb({ color, name, className }: ProjectThumbProps) {
  const palette = palettes[color]
  const initial = name.charAt(0)

  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      role="img"
      aria-label={`${name} preview`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="400" height="300" fill={palette.bg} />
      <circle cx="340" cy="40" r="90" fill={palette.accent} opacity="0.18" />
      <circle cx="40" cy="270" r="70" fill={palette.accent} opacity="0.14" />
      <rect x="28" y="24" width="140" height="14" rx="7" fill={palette.fg} opacity="0.5" />
      <rect x="28" y="52" width="90" height="10" rx="5" fill={palette.fg} opacity="0.3" />
      <rect x="28" y="190" width="200" height="10" rx="5" fill={palette.fg} opacity="0.25" />
      <rect x="28" y="210" width="140" height="10" rx="5" fill={palette.fg} opacity="0.2" />
      <rect x="250" y="150" width="122" height="90" rx="14" fill={palette.accent} opacity="0.85" />
      <text
        x="200"
        y="150"
        textAnchor="middle"
        fontSize="86"
        fontWeight="800"
        fill={palette.fg}
        opacity="0.9"
        fontFamily="Inter, sans-serif"
      >
        {initial}
      </text>
    </svg>
  )
}
