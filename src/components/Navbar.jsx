import './Navbar.css'

export const Navbar = () => {
  return (
    <header class="site-header" role="banner" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
      <div class="site-title" itemscope itemtype="http://schema.org/Organization">
        10up Blog
      </div>

      <nav class="site-navigation" role="navigation" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">

        <a href="#menu-main-nav" id="js-menu-toggle" class="site-menu-toggle">
          <span class="screen-reader-text">Primary Menu</span>
          <span aria-hidden="true">☰</span>
        </a>

        {/* Make sure to update menu links to work with your app. */}
        <ul id="menu-main-nav" class="primary-menu">
          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1912">
              <a href="home.html">Home</a>
          </li>

          <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <a href="about.html">About</a>
          </li>

            {/* Should only show when user is logged out */}
          <li class="logged-out menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <a href="login.html">Login</a>
          </li>

          {/* Should only show when user is logged in */}
          <li class="logged-in menu-item menu-item-type-custom menu-item-object-custom menu-item-1915">
              <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
