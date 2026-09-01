import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Meet Our Pastor', href: '/pastor' },
    ],
  },
  {
    label: 'Our Ministries',
    href: '/ministries',
    children: [
      { label: 'Sunday School for Kids', href: '/sunday-school-for-kids' },
      { label: 'Youngpeople Fellowship', href: '/youngpeople-fellowship' },
      { label: 'Music Ministry', href: '/music-ministry' },
      { label: 'Prayer Meeting', href: '/prayer-meeting' },
    ],
  },
  { label: 'Sunday Lessons', href: '/lessons' },
  { label: 'How To Be Saved', href: '/salvation' },
  { label: 'FAQ', href: '/faq' },
]

function SiteHeader({ largeText, setLargeText }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openParent, setOpenParent] = useState(null)

  return (
    <header className={`site-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="brand-block">
        <a href="/" className="brand-anchor" aria-label="Grace Baptist Church Irisan Mission home">
          <img src="/gbc-logo.png" alt="Grace Baptist Church Irisan Mission logo" className="brand-logo" />
        </a>
        <div>
          <p className="brand-name">Grace Baptist Church <br /> Irisan Mission</p>
          <span className="brand-tag">Irisan • Baguio</span>
        </div>
      </div>

      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>

        {navItems.map((item) => {
          if (item.children) {
            const isOpen = openParent === item.label

            return (
              <div key={item.label} className={`nav-dropdown ${isOpen ? 'mobile-open' : ''}`}>
                <button
                  type="button"
                  className="nav-link nav-link-parent"
                  aria-expanded={isOpen}
                  onClick={(event) => {
                    event.preventDefault()

                    if (window.innerWidth <= 640) {
                      setOpenParent((current) => (current === item.label ? null : item.label))
                      return
                    }

                    setIsMenuOpen(false)
                  }}
                >
                  <span>{item.label}</span>
                  <span className="nav-caret" aria-hidden="true">▾</span>
                </button>

                <div className={`nav-submenu ${isOpen ? 'open' : ''}`} aria-label={`${item.label} submenu`}>
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="nav-sub-link"
                      onClick={() => {
                        setIsMenuOpen(false)
                        setOpenParent(null)
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="header-toggle"
          onClick={() => setLargeText((value) => !value)}
          aria-label="Toggle large text"
          aria-pressed={largeText}
        >
          A+
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
