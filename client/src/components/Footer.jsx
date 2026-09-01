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
            <a href="https://www.facebook.com/groups/1917613778449953" target="_blank" rel="noreferrer" title="Follow us on Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="tel:+639381295073" title="Call us">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.707 12.293l-5.293-5.293a1 1 0 00-1.414 0l-5.293 5.293a1 1 0 001.414 1.414L10 9.414V20a1 1 0 102 0V9.414l3.586 3.586a1 1 0 001.414-1.414zM3 3h18a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-block">
          <h4>Service Times</h4>
          <ul>
            <li>Sunday Worship — 9:30 AM - 12:00 PM</li>
            <li>Sunday School for Kids — 8:30 AM - 9:30 AM</li>
            <li>Prayer Meeting — Saturday • 3:30 PM</li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/pastor">Pastor</a></li>
            <li><a href="#sermons">Sermons</a></li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+639381295073">+63 9381295073</a></li>
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
