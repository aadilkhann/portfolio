import type { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'
import ProfileCard from '../ProfileCard/ProfileCard'
import Footer from '../Footer/Footer'
import './Layout.css'

interface LayoutProps {
  children: ReactNode
  /** Hide the persistent profile sidebar (used on the 404 page). */
  hideProfile?: boolean
}

export default function Layout({ children, hideProfile }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <main className="page-main">
        <div className={`layout__grid container${hideProfile ? ' layout__grid--full' : ''}`}>
          {!hideProfile && (
            <div className="layout__sidebar">
              <ProfileCard />
            </div>
          )}
          <div className="layout__content">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
