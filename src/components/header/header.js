import React from 'react'
import MobileHamburger from './mobile_hamburger'
import NavLink from './nav_link'

const Header = () => {
  const collapsibleId = 'navbarSupportedContent'
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
        <MobileHamburger collapsibleId={collapsibleId} />
        <div className="navbar-nav row collapse navbar-collapse" id={collapsibleId}>
          <NavLink href="/adalida" text="Adalida" width={4} />
          <NavLink href="/" text="Us" width={4} />
          <NavLink href="/ricardo" text="Ricardo" width={4} />
        </div>
      </nav>
    </header>
  )
}


export default Header