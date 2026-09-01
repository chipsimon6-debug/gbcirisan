function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="eyebrow light">Grace Baptist Church Irisan Mission</p>
          <h3>Join us in worship, prayer, and community.</h3>
          <p>
            We are a gospel-centered church committed to Christ, His Word, and
            sharing the gospel.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>

        <div className="footer-block">
          <h4>Service Times</h4>
          <ul>
            <li>Sunday Worship — 9:30 AM - 12:00 PM</li>
            <li>Sunday School — 8:30 AM - 9:30 AM</li>
            <li>Prayer Meeting — Saturday • 3:30 PM</li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#sermons">Sermons</a></li>
          </ul>
        </div>
      </div>

      <div className="map-card">
        <iframe
          title="Grace Baptist Church Irisan Mission map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3827.278500965031!2d120.55521007460683!3d16.410676130207758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzM4LjQiTiAxMjDCsDMzJzI4LjAiRQ!5e0!3m2!1sen!2sph!4v1788244434031!5m2!1sen!2sph"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="footer-bottom">
        <span>© 2026 Grace Baptist Church Irisan Mission</span>
        <span>Statement of Faith</span>
      </div>
    </footer>
  )
}

export default Footer
