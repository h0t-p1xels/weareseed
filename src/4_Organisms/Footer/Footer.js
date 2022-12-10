/*
 * Footer Organism Component
 *
 */

import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <hr />
        <p className="footer__text">
          <small>
            &copy; {new Date().getFullYear()} Seed Innovations Group Limited.
            Registered in England & Wales. Registration Number 14532186.
          </small>
        </p>
      </div>
    </footer>
  )
}

export default Footer
