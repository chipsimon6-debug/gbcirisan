const missionPoints = [
  {
    title: 'Evangelism',
    text: 'Preaching and sharing the Gospel locally and globally to lead individuals to a personal faith in Jesus Christ.',
  },
  {
    title: 'Discipleship',
    text: 'Teaching believers God’s Word to conform them to Christ’s image and mature them in their faith.',
  },
  {
    title: 'Glorifying God',
    text: 'Honoring God through sound biblical teaching, worship, and faithful obedience to Scripture.',
  },
]

const values = [
  {
    title: 'Authority of the Bible',
    text: 'The Bible is the final and sole written guide for faith, doctrine, and church practice.',
  },
  {
    title: 'Believer\'s Baptism',
    text: 'Baptism is performed strictly by full immersion for individuals who have already made a personal profession of faith in Jesus Christ, serving as an outward symbol of an inward spiritual change.',
  },
  {
    title: 'The Lord\'s Supper',
    text: 'Communion is observed as a symbolic remembrance of Christ’s broken body and shed blood, rather than a means of imparting saving grace.',
  },
  {
    title: 'Local Church Autonomy',
    text: 'Each local church governs itself independently under Christ, free from outside hierarchies, synods, or external religious control.',
  },
  {
    title: 'Separation of Church and State',
    text: 'The church and government should remain institutionally separate, protecting religious freedom.',
  },
]

function AboutUsPage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">About Us</p>
        <h1>Rooted in our Lord Jesus Christ.</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            Built upon the solid foundation of Jesus Christ, Grace Baptist Church Irisan Mission is a Bible-believing church committed to preaching the Good News of salvation—helping people come to know Christ.
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

        <div className="values-list">
          {values.map((value) => (
            <article key={value.title} className="principle-card">
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage
