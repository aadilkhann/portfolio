import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__eyebrow">Error</p>
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">
        This page doesn’t exist — it may have been moved or the link might be incorrect.
      </p>
      <Link to="/" className="not-found__link">
        Back to home
      </Link>
    </div>
  )
}
