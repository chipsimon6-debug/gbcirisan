const highlights = [
  {
    title: 'Sunday Worship',
    text: 'A meaningful gathering centered on the gospel, reverent worship, and biblical teaching for every generation.',
  },
  {
    title: 'Bible Teaching',
    text: 'Thoughtful discipleship and Scripture-centered preaching that equips believers to live faithfully in Christ.',
  },
  {
    title: 'Community Care',
    text: 'A church family marked by prayer, encouragement, and practical support for people in every season of life.',
  },
]

const sermons = [
  {
    title: 'The Courage to Trust God',
    tag: 'Sunday Message',
    speaker: 'Pastor L. Gonzales',
  },
  {
    title: 'Growing in Grace',
    tag: 'Series: Spiritual Formation',
    speaker: 'Teacher Team',
  },
  {
    title: 'Living with Purpose',
    tag: 'Sunday Lessons',
    speaker: 'Ministry Leaders',
  },
]

const ministries = [
  {
    title: 'Youth Ministry',
    text: 'A vibrant place for students to belong, grow in faith, and discover purpose in Christ.',
  },
  {
    title: 'Adult Fellowship',
    text: 'Encouraging discipleship, friendship, and prayer for adults at every stage of life.',
  },
  {
    title: 'Community Outreach',
    text: 'Serving and blessing the people of Irisan through compassion, practical care, and acts of love.',
  },
]

function HomePage() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-banner__content">
          <p className="eyebrow light">Grace Baptist Church Irisan</p>
          <h1>Encounter grace. Grow in faith. Live with purpose.</h1>
          <p className="lead light">
            A Christ-centered church family gathering in worship, prayer, and discipleship.
          </p>
          <div className="cta-row">
            <a href="/about" className="primary-btn">
              Plan Your Visit
            </a>
            <a href="/lessons" className="secondary-btn light-btn">
              Watch Online
            </a>
          </div>
        </div>

        <div className="hero-banner__info">
          <div className="hero-banner__card">
            <span>Sunday Worship</span>
            <strong>9:00 AM</strong>
          </div>
          <div className="hero-banner__card">
            <span>Sunday School</span>
            <strong>8:00 AM</strong>
          </div>
          <div className="hero-banner__card">
            <span>Prayer Meeting</span>
            <strong>Wed • 6:30 PM</strong>
          </div>
        </div>
      </section>

      <section className="content-section featured-lessons">
        <div className="section-heading split-header">
          <div>
            <p className="eyebrow">Featured Message</p>
            <h2>Sunday lessons & sermon archives</h2>
          </div>
          <a href="/lessons" className="text-link">View all lessons</a>
        </div>

        <div className="sermon-grid">
          {sermons.map((item) => (
            <article key={item.title} className="sermon-card">
              <div className="thumbnail-art" />
              <div className="sermon-body">
                <span className="sermon-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.speaker}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading centered">
          <p className="eyebrow">Our Mission</p>
          <h2>Building a community of worship, discipleship, and care</h2>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="section-heading centered">
          <p className="eyebrow">Ministries</p>
          <h2>Serving the people of Irisan and beyond</h2>
        </div>

        <div className="ministry-grid">
          {ministries.map((item) => (
            <article key={item.title} className="ministry-card">
              <div className="ministry-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
