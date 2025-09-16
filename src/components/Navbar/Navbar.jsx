import { NavLink } from 'react-router-dom'
import { useAuthStore } from '../../hooks/useAuthStore'

import './Navbar.css'

export const Navbar = () => {

  const { startLogout } = useAuthStore()


  return (
    <header className="site-header" role="banner" itemScope="itemScope" itemType="http://schema.org/WPHeader">
      <div className="site-title" itemScope itemType="http://schema.org/Organization">
        10up Blog
      </div>

      <nav className="site-navigation" role="navigation" itemScope="itemScope" itemType="http://schema.org/SiteNavigationElement">

        <a href="#menu-main-nav" id="js-menu-toggle" className="site-menu-toggle">
          <span className="screen-reader-text">Primary Menu</span>
          <span aria-hidden="true">☰</span>
        </a>

        {/* Make sure to update menu links to work with your app. */}
        <ul id="menu-main-nav" className="primary-menu">
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
            <NavLink className="nav-button" to="/home">Home</NavLink>
          </li>

          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
            <NavLink className="nav-button" to="/about">About</NavLink>
          </li>

          {/* Should only show when user is logged in */}
          <li className="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
            <button className="nav-button" onClick={startLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
