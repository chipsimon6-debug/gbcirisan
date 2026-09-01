import { useMemo, useState } from 'react'

const lessons = [
  {
    title: 'Faith That Moves Mountains',
    series: 'Sunday Message',
    date: 'August 18, 2026',
    summary: 'A reflection on trust, perseverance, and the strength of God’s promises in seasons of uncertainty.',
    pdfUrl: '/lessons/faith-that-moves-mountains.pdf',
  },
  {
    title: 'The Power of Prayer',
    series: 'Prayer & Renewal',
    date: 'August 11, 2026',
    summary: 'Exploring how intentional prayer transforms our hearts, strengthens our faith, and aligns us with God’s will.',
    pdfUrl: '/lessons/the-power-of-prayer.pdf',
  },
  {
    title: 'Living with Purpose',
    series: 'Discipleship',
    date: 'August 4, 2026',
    summary: 'Learning how to live intentionally, serve faithfully, and follow Christ in everyday life.',
    pdfUrl: '/lessons/living-with-purpose.pdf',
  },
  {
    title: 'Hope in the Waiting',
    series: 'Sunday Message',
    date: 'July 28, 2026',
    summary: 'Encouragement for seasons of waiting, trusting God’s timing, and finding peace in His presence.',
    pdfUrl: '/lessons/hope-in-the-waiting.pdf',
  },
  {
    title: 'The Fruit of the Spirit',
    series: 'Bible Study',
    date: 'July 21, 2026',
    summary: 'A practical look at love, joy, patience, and peace as evidence of God’s work in us.',
    pdfUrl: '/lessons/the-fruit-of-the-spirit.pdf',
  },
  {
    title: 'The Call to Serve',
    series: 'Community',
    date: 'July 14, 2026',
    summary: 'Understanding how Christ’s love compels us to serve people with humility and generosity.',
    pdfUrl: '/lessons/the-call-to-serve.pdf',
  },
]

const LESSONS_PER_PAGE = 6

function SundayLessonsArchivePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredLessons = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return lessons
    }

    return lessons.filter((lesson) => {
      const haystack = `${lesson.title} ${lesson.series} ${lesson.summary} ${lesson.date}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [searchTerm])

  const totalPages = Math.max(1, Math.ceil(filteredLessons.length / LESSONS_PER_PAGE))

  const paginatedLessons = useMemo(() => {
    const startIndex = (currentPage - 1) * LESSONS_PER_PAGE
    return filteredLessons.slice(startIndex, startIndex + LESSONS_PER_PAGE)
  }, [currentPage, filteredLessons])

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Sunday Lessons</p>
        <h1>Past messages and teachings</h1>
      </div>

      <div className="lesson-toolbar">
        <label className="lesson-search" htmlFor="lesson-search">
          <span>Search lessons</span>
          <input
            id="lesson-search"
            type="search"
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder="Search by title, series, or keyword"
          />
        </label>
      </div>

      {filteredLessons.length === 0 ? (
        <div className="empty-state">
          <p>No lessons match your search.</p>
        </div>
      ) : (
        <>
          <div className="lesson-grid">
            {paginatedLessons.map((lesson) => (
              <article key={`${lesson.title}-${lesson.date}`} className="lesson-card">
                <div className="lesson-meta">
                  <span>{lesson.series}</span>
                  <span>{lesson.date}</span>
                </div>
                <h3>{lesson.title}</h3>
                <p>{lesson.summary}</p>
                <a
                  href={lesson.pdfUrl || '#'}
                  className="link-button lesson-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read lesson
                </a>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination" aria-label="Lesson pagination">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className="pagination-status">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default SundayLessonsArchivePage
