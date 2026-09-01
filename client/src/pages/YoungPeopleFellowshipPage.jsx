import { useEffect, useState } from 'react'
import ypFellowship01 from '../assets/yp-fellowship01.jpg'
import ypFellowship02 from '../assets/yp-fellowship02.jpg'
import ypFellowship03 from '../assets/yp-fellowship03.jpg'
import ypFellowship04 from '../assets/yp-fellowship04.jpg'
import ypFellowship05 from '../assets/yp-fellowship05.jpg'
import ypFellowship06 from '../assets/yp-fellowship06.jpg'

const fellowshipImages = [ypFellowship01, ypFellowship02, ypFellowship03, ypFellowship04, ypFellowship05, ypFellowship06]

function YoungPeopleFellowshipPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % fellowshipImages.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Ministry</p>
        <h1>Youngpeople Fellowship</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            The Youngpeople Fellowship is a vibrant ministry for young people to grow in the faith, build meaningful friendships,
            and learn how to live for Christ in every season of life.
          </p>
        </div>
      </div>

      <div className="kids-gallery">
        <div className="kids-gallery__stage">
          <img src={fellowshipImages[activeIndex]} alt={`Young people fellowship activity ${activeIndex + 1}`} className="kids-gallery__image" />
        </div>

        <div className="kids-gallery__thumbnails" aria-label="Young people fellowship gallery thumbnails">
          {fellowshipImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={index === activeIndex ? 'kids-gallery__thumb active' : 'kids-gallery__thumb'}
              onClick={() => setActiveIndex(index)}
              aria-label={`View young people fellowship image ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="values-panel">
        <div className="section-heading narrow left-aligned">
          <p className="eyebrow">Our focus</p>
          <h2>Faith, friendship, and service</h2>
        </div>

        <div className="values-list">
          <article className="principle-card">
            <h3>Spiritual growth</h3>
            <p>We encourage young people to study God’s Word, pray consistently, and build a personal walk with Christ.</p>
          </article>

          <article className="principle-card">
            <h3>Community</h3>
            <p>Through fellowship and encouragement, young people find belonging in the church and support one another.</p>
          </article>

          <article className="principle-card">
            <h3>Purpose</h3>
            <p>We help young people discover God’s calling, pursue godly character, and live with biblical purpose.</p>
          </article>

          <article className="principle-card">
            <h3>Service</h3>
            <p>Our ministry challenges young people to serve others, share the gospel, and represent Christ faithfully.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default YoungPeopleFellowshipPage
