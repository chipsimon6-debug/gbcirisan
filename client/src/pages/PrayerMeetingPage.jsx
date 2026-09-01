function PrayerMeetingPage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Ministry</p>
        <h1>Prayer Meeting</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            Prayer Meeting is a sacred time of gathering together to seek God, encourage one another,
            and intercede for the church, our community, and the nations. It is a place of spiritual renewal,
            unity, and dependence on the Lord.
          </p>
        </div>
      </div>

      <blockquote className="pastor-verse prayer-verse">
        “Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask,
        it shall be done for them of my Father which is in heaven. For where two or three are gathered together in my name,
        there am I in the midst of them.” — Matthew 18:19–20
      </blockquote>

      <div className="story-block">
        <div>
          <p>
            <strong>Submit a prayer request:</strong>{' '}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfGsGyM0qZJOXbMhwpN6ygdm6XKf3kEoo4HS9Ymqm7YP_R5ng/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
            >
              Prayer Request Form
            </a>
          </p>
        </div>
      </div>

      <div className="values-panel">
        <div className="section-heading narrow left-aligned">
          <p className="eyebrow">Our focus</p>
          <h2>Gathering in faith and prayer</h2>
        </div>

        <div className="values-list">
          <article className="principle-card">
            <h3>Seeking God</h3>
            <p>We come before the Lord with humility, worship, and a heart willing to listen to His leading.</p>
          </article>

          <article className="principle-card">
            <h3>Intercession</h3>
            <p>We pray for families, ministries, leaders, revival, and the needs of people around us.</p>
          </article>

          <article className="principle-card">
            <h3>Encouragement</h3>
            <p>Through prayer and Scripture, we strengthen one another and grow together in spiritual maturity.</p>
          </article>

          <article className="principle-card">
            <h3>Unity</h3>
            <p>Prayer unites the church in purpose and reminds us that God is at the center of all we do.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default PrayerMeetingPage
