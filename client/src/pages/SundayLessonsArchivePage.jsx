import { useEffect, useMemo, useState, memo, useCallback } from 'react'

const lessons = [
  {
    title: "The Price and Prize of God's Children Salvation",
    series: 'Salvation',
    date: 'June 14, 2026',
    summary: 'A message on salvation, adoption, and the blessings of belonging to God’s family through Christ.',
    pdfUrl: 'https://drive.google.com/file/d/1Mm8O_Dxpe4-NUxuZ1Q6k3ngVKJAbRp_S/view?usp=drive_link',
  },
  {
    title: "God's Children Loving Service to the Unsaved",
    series: 'Christian Living',
    date: 'June 14, 2026',
    summary: "A lesson on Matthew 25:31-40, where Jesus compares judgment to a shepherd separating sheep from goats, tracing Christ's return as Judge, the saved's reward for serving the least of these, and the call to serve others as Christ did.",
    pdfUrl: 'https://drive.google.com/file/d/1f3AoqdGigIbV4d21HlPH8RUzHyTYQSt6/view?usp=drive_link',
  },
  {
    title: 'The Firm Foundations of Faith, Hope and Love',
    series: 'Christian Living',
    date: 'June 19, 2026',
    summary: 'A lesson on 1 Corinthians 13:13, unpacking Faith, Hope, and Love as the lasting pillars of Christian life — with Love as the greatest, since it alone endures into eternity.',
    pdfUrl: 'https://drive.google.com/file/d/1Y30-omQfZftSB-_6KLzrzLha1q1Kj1QH/view?usp=drive_link',
  },
  {
    title: 'Knowing the Heart of Our Father God',
    series: 'Jesus',
    date: 'June 21, 2026',
    summary: "A Father's Day message revealing three qualities of God as the perfect Heavenly Father — His constant presence, His provision through Christ, and His pardon and grace — closing with stories illustrating a father's sacrificial love.",
    pdfUrl: 'https://drive.google.com/file/d/1YSdUAHEGeKgIU9X_h6ALHq6NGLqO-M2I/view?usp=drive_link',
  },
  {
    title: 'THE DOCTRINE OF REDEMPTION and RECONCILIATION',
    series: 'Doctrine',
    date: 'June 28, 2026',
    summary: "A message explaining Redemption (the price paid to rescue us from sin's penalty) and Reconciliation (the restored relationship with God) as two inseparable, Christ-purchased truths of salvation.",
    pdfUrl: 'https://drive.google.com/file/d/1agXRf1CkEFkVUDdxUAToQwswMBP1b_ax/view?usp=drive_link',
  },
  {
    title: 'Faith in God That Persists Even During Struggles in Life',
    series: 'Christian Living',
    date: 'July 5, 2026',
    summary: "A Sunday School lesson on Noah's faith (Hebrews 11:7, Genesis 6:9–22), outlining three marks of true faith — believing God's warning, obeying with godly fear, and receiving God's reward — with cross-references (2 Peter 3:3-7, Romans 10:17, James 2:17-18, Genesis 6:22, Romans 4:3, Ephesians 2:8-9) and applications for the reader's own life.",
    pdfUrl: 'https://drive.google.com/file/d/1MLnSm68myWw7-bcpmxE_xWmxhKLNdklH/view?usp=drive_link',
  },
  {
    title: 'The Greatest Test of Loyalty to God',
    series: 'Christian Living',
    date: 'July 12, 2026',
    summary: "A lesson on Abraham's test of faith in Genesis 22:1–19, examining three foundations of loyalty to God — prompt surrender, profound steadfastness, and providential sacrifice — closing with a challenge to self-examination and a prayer of surrender.",
    pdfUrl: 'https://drive.google.com/file/d/1zWL7MXFcym5kDkBQqM6RZ4repykjZigp/view?usp=drive_link',
  },
  {
    title: 'The Power of Deception (Cheating or Lying)',
    series: 'Christian Living',
    date: 'July 19, 2026',
    summary: "A message on deception rooted in Romans 15:4-5 and Proverbs 3:5-6, tracing sin's entry through Adam's disobedience, defining biblical deception, and surveying biblical examples of cheating/being cheated plus two fables, closing with a call to honesty and integrity.",
    pdfUrl: 'https://drive.google.com/file/d/1jl5NB3o8pj_wIqcP8HixJGlgghzKBzFu/view?usp=drive_link',
  },
  {
    title: 'THE SACRED SUPPER OF OUR SAVIOR',
    series: 'Jesus',
    date: 'July 26, 2026',
    summary: "A lesson on 1 Corinthians 11:23–30, structured around 3 Looks — self-examination, remembrance, and forward-looking hope — leading into the distribution of the Lord's Supper.",
    pdfUrl: 'https://drive.google.com/file/d/1Ly82i5P3Yz7Q-N1L4Vq64jAhSEjPeWY9/view?usp=drive_link',
  },
  {
    title: 'The Story of Comparisons',
    series: 'Doctrine',
    date: 'July 26, 2026',
    summary: "Sermon on Romans 5:12–21 contrasting Adam and Christ as Two Representatives — structured around the Problem (inherited sin), the Penalty (reign of death), and the Provision (abounding grace) — concluding with an invitation to receive salvation.",
    pdfUrl: 'https://drive.google.com/file/d/1ea-TfmWBHSw4cElJf8uwhdkVxMbk-xdF/view?usp=drive_link',
  },
  {
    title: "God's Design of Salvation — From Destiny to Glory",
    series: 'Salvation',
    date: 'August 2, 2026',
    summary: "A message on God's full plan of salvation in three points — Predestined Purpose, Providential Perseverance, and Perfect Presentation — closing with assurance that a believer's past, present, and future are all secured in God's plan.",
    pdfUrl: 'https://drive.google.com/file/d/1rYeaSROpf7qA-iL5KKerdnKkmLwQhGVd/view?usp=drive_link',
  },
  {
    title: 'The Purposeful Plan of God',
    series: 'Christian Living',
    date: 'August 9, 2026',
    summary: "The lesson unpacks Ecclesiastes 3:9–14 in three points — God's sovereign control over life's timing, the sacred contentment found in daily work as God's gift, and the eternal, unchanging nature of His plans — closing with a call to trust God's timing and rest in His eternal promise.",
    pdfUrl: 'https://drive.google.com/file/d/1WSV7KEDpxUyvMtDqGVquHsy4l7p5D3uB/view?usp=drive_link',
  },
  {
    title: "The Proof of Jesus Christ's Deity",
    series: 'Jesus',
    date: 'August 9, 2026',
    summary: "A message showing Jesus proved His deity through three actions in the Gospel of John — pardoning sin (Mark 2:5–7), exercising power over nature (Mark 4:39), and prevailing over death (John 11:43–44) — closing with Thomas's confession My Lord and my God! as the fitting response to who Jesus is.",
    pdfUrl: 'https://drive.google.com/file/d/1K9LcnCfYLGbX-KqTt6KTUE-6jEsDaTQI/view?usp=drive_link',
  },
  {
    title: "Capabilities and Character: Comparing the Gifts and Fruit of the Spirit",
    series: 'Christian Living',
    date: 'August 23, 2026',
    summary: "A worship lesson contrasting spiritual gifts (1 Corinthians 12:4–7) and the fruit of the Spirit (Galatians 5:22–23) — gifts are the God-given abilities for serving others, while fruit is the godly character grown through daily fellowship with Christ, and a healthy Christian life needs both.",
    pdfUrl: 'https://drive.google.com/file/d/1enG-ouhdVnNNH46DyTGrlHeflPigXtj_/view?usp=drive_link',
  },
  {
    title: "Three Parts of Human: Body, Soul, and Spirit",
    series: 'Doctrine',
    date: 'August 30, 2026',
    summary: "A lesson that focuses on 1 Thessalonians 5:23 and Hebrews 4:12, explaining that people are tripartite beings — a physical body, a soul, and a spirit — and teaching that only the spirit is dead in sin and must be born again through faith in Christ, while the soul is renewed over time and the body will be glorified at the resurrection.",
    pdfUrl: 'https://drive.google.com/file/d/1Wf93XgABEp9cGWRZxLqB_zabksDmuesr/view?usp=drive_link',
  },
   {
    title: "The Purpose of Pleasing God",
    series: 'Christian Living',
    date: 'August 30, 2026',
    summary: "This sermon on ROMANS 12:1 TO 6 teaches that the purpose of pleasing God is to glorify Him, and it outlines three ways to do so: by offering our bodies as living sacrifices, by renewing our minds through God's Word, and by using our spiritual gifts to serve others in love.",
    pdfUrl: 'https://drive.google.com/file/d/1ztZ097zKGE3xnFM9zRFbA1YquC-5msSf/view?usp=drive_link',
  },
]

const LESSONS_PER_PAGE = 6

// Memoized lesson card to prevent unnecessary re-renders
const LessonCard = memo(({ lesson }) => (
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
))

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
  const effectivePage = Math.min(Math.max(currentPage || 1, 1), totalPages)

  useEffect(() => {
    if (currentPage !== effectivePage) {
      setCurrentPage(effectivePage)
    }
  }, [currentPage, effectivePage])

  const paginatedLessons = useMemo(() => {
    const startIndex = (effectivePage - 1) * LESSONS_PER_PAGE
    return filteredLessons.slice(startIndex, startIndex + LESSONS_PER_PAGE)
  }, [effectivePage, filteredLessons])

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Sunday Lessons</p>
        <h1>Sermons Archive</h1>
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
              <LessonCard key={`${lesson.title}-${lesson.date}`} lesson={lesson} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination" aria-label="Lesson pagination">
              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={effectivePage === 1}
              >
                Previous
              </button>

              <span className="pagination-status">
                Page {effectivePage} of {totalPages}
              </span>

              <button
                type="button"
                className="pagination-btn"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={effectivePage === totalPages}
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
