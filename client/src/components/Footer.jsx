function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="eyebrow accent">Grace Baptist Church Irisan</p>
          <h3>Join us in worship, prayer, and community.</h3>
          <p>
            A gospel-centered church committed to Christ, His Word, and serving the
            people of Irisan with compassion and grace.
          </p>
        </div>

        <div className="footer-block">
          <h4>Service Times</h4>
          <ul>
            <li>Sunday Worship — 9:00 AM</li>
            <li>Sunday School — 8:00 AM</li>
            <li>Prayer Meeting — Wednesday, 6:30 PM</li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>Visit Us</h4>
          <p>123 Irisan Road, Baguio City</p>
          <p>hello@gbcirisan.org</p>
          <p>(+63) 912 345 6789</p>
        </div>

        <div className="footer-block">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="map-card">
        <iframe
          title="Grace Baptist Church Irisan map"
          src="https://www.google.com/maps?q=Irisan%20Baguio&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="footer-bottom">
        <span>© 2026 Grace Baptist Church Irisan</span>
        <span>Statement of Faith</span>
      </div>
    </footer>
  )
}

export default Footer
