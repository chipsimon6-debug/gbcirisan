import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Sunday Lessons Archive', to: '/lessons' },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="brand-mark">GB</span>
        <div>
          <p className="brand-name">Grace Baptist Church</p>
          <span className="brand-tag">Irisan • Baguio</span>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
