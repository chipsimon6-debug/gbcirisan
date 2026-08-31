const lessons = [
  {
    title: 'Faith That Moves Mountains',
    series: 'Sunday Message',
    date: 'August 18, 2026',
    summary: 'A reflection on trust, perseverance, and the strength of God’s promises in seasons of uncertainty.',
  },
  {
    title: 'The Power of Prayer',
    series: 'Prayer & Renewal',
    date: 'August 11, 2026',
    summary: 'Exploring how intentional prayer transforms our hearts, strengthens our faith, and aligns us with God’s will.',
  },
  {
    title: 'Living with Purpose',
    series: 'Discipleship',
    date: 'August 4, 2026',
    summary: 'Learning how to live intentionally, serve faithfully, and follow Christ in everyday life.',
  },
  {
    title: 'Hope in the Waiting',
    series: 'Sunday Message',
    date: 'July 28, 2026',
    summary: 'Encouragement for seasons of waiting, trusting God’s timing, and finding peace in His presence.',
  },
  {
    title: 'The Fruit of the Spirit',
    series: 'Bible Study',
    date: 'July 21, 2026',
    summary: 'A practical look at love, joy, patience, and peace as evidence of God’s work in us.',
  },
  {
    title: 'The Call to Serve',
    series: 'Community',
    date: 'July 14, 2026',
    summary: 'Understanding how Christ’s love compels us to serve people with humility and generosity.',
  },
]

function SundayLessonsArchivePage() {
  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Sunday Lessons Archive</p>
        <h1>Past messages and teachings</h1>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <article key={lesson.title} className="lesson-card">
            <div className="lesson-meta">
              <span>{lesson.series}</span>
              <span>{lesson.date}</span>
            </div>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
            <button type="button" className="link-button">
              Read lesson
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SundayLessonsArchivePage
