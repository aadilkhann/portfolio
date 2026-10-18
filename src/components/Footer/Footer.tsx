import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        Designed &amp; built by <span>Aaabad Ahmed</span> — React, TypeScript &amp; Vite.
      </p>
      <a
        className="site-footer__link"
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View source
      </a>
    </footer>
  )
}
