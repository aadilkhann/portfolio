import { Globe, AtSign, Camera, Mail } from 'lucide-react'
import AvatarArt from '../AvatarArt/AvatarArt'
import './ProfileCard.css'

const socials = [
  { href: 'https://dribbble.com/', label: 'Design portfolio', Icon: Globe },
  { href: 'https://twitter.com/', label: 'Social / X', Icon: AtSign },
  { href: 'https://www.instagram.com/', label: 'Instagram', Icon: Camera },
  { href: 'mailto:hello@aaabad.dev', label: 'Email', Icon: Mail },
]

export default function ProfileCard() {
  return (
    <aside className="profile-card">
      <div className="profile-card__photo">
        <AvatarArt />
      </div>
      <h2 className="profile-card__name">Aaabad Ahmed</h2>
      <p className="profile-card__bio">
        A software engineer who has developed countless innovative solutions.
      </p>
      <ul className="profile-card__socials">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="profile-card__social-link"
            >
              <Icon size={18} strokeWidth={2} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
