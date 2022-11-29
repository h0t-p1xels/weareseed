import React from "react"

export default function index() {
  return (
    <div className="container">
      <main>
        <div className="content">
          <div>SEED. LOGO</div>
          <h1>Creating value through innovative digital experiences</h1>
          <div>
            <a
              href="https://linkedin.com/company/weareseed"
              rel="noopener"
              target="_blank"
            >
              [ LinkedIn Logo]
            </a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <hr />
          <p className="footer__text">
            <small>&copy; {new Date().getFullYear()} Seed.</small>
          </p>
        </div>
      </footer>
    </div>
  )
}
