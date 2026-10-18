export interface Tool {
  name: string
  description: string
  url: string
}

export const tools: Tool[] = [
  { name: 'Framer', description: 'Website Builder', url: 'https://framer.com' },
  { name: 'Figma', description: 'Design Tool', url: 'https://www.figma.com/' },
  { name: 'Lemon Squeezy', description: 'Payments Provider', url: 'https://www.lemonsqueezy.com/' },
  { name: 'ChatGPT', description: 'AI Assistant', url: 'https://chat.openai.com/' },
  { name: 'Notion', description: 'Productivity Tool', url: 'https://www.notion.so/' },
  { name: 'Next.js', description: 'React Framework', url: 'https://nextjs.org/' },
]
