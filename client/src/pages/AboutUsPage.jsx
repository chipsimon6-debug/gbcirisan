const missionPoints = [
  {
    title: 'Our Mission',
    text: 'To help people encounter Jesus, grow in their faith, and live lives of purpose, compassion, and obedience.',
  },
  {
    title: 'Our Worship',
    text: 'We gather in worship with joyful hearts, sincere prayer, and a commitment to seeing God move among us.',
  },
  {
    title: 'Our Community',
    text: 'We believe in building one another up through hospitality, support, and the shared grace of Christ.',
  },
]

const values = [
  'Biblical teaching and obedience',
  'Prayerful dependence on God',
  'Love, unity, and reconciliation',
  'Service to the church and community',
  'A welcoming environment for all',
]

function AboutUsPage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">About Us</p>
        <h1>Rooted in faith, united in love.</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            GBCIRISAN is a church family passionate about helping people know Christ,
            grow in His truth, and live out their calling with courage and joy.
          </p>
          <p>
            Whether you are new to faith or have walked with Christ for years, you are
            welcome here. We believe God is shaping His people for worship, discipleship,
            and service in the community around us.
          </p>
        </div>
      </div>

      <div className="feature-grid mission-grid">
        {missionPoints.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="values-panel">
        <div className="section-heading narrow left-aligned">
          <p className="eyebrow">What We Value</p>
          <h2>Principles that guide us</h2>
        </div>

        <ul className="values-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutUsPage
