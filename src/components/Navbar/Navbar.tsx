import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, FolderKanban, Briefcase, Wrench, PenSquare, Menu, X } from 'lucide-react'
import './Navbar.css'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/tools', label: 'Tools', icon: Wrench },
  { to: '/blog', label: 'Thoughts', icon: PenSquare },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className="navbar" aria-label="Primary">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `navbar__item${isActive ? ' navbar__item--active' : ''}`}
          >
            <Icon size={18} strokeWidth={2} aria-hidden="true" />
            <span className="navbar__label">{label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
        <span className="sr-only">Toggle navigation menu</span>
      </button>

      <div
        id="mobile-nav"
        className={`mobile-nav${open ? ' mobile-nav--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav__list">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav__item${isActive ? ' mobile-nav__item--active' : ''}`
                }
              >
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
