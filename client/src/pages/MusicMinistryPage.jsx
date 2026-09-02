import { useEffect, useState } from 'react'
import musicMinistry01 from '../assets/music_ministry01.jpg'
import musicMinistry02 from '../assets/music-ministry02.jpg'
import musicMinistry03 from '../assets/music-ministry03.jpg'
import musicMinistry04 from '../assets/music-ministry04.jpeg'
import musicMinistry05 from '../assets/music-ministry05.jpeg'
import musicMinistry06 from '../assets/music-ministry06.jpg'

const musicImages = [musicMinistry01, musicMinistry02, musicMinistry03, musicMinistry04, musicMinistry05, musicMinistry06]

function MusicMinistryPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % musicImages.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Ministry</p>
        <h1>Music Ministry</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            The Music Ministry is committed to leading the church in heartfelt worship, honoring God with excellence, and helping
            the congregation focus on the Lord through music and song.
          </p>
        </div>
      </div>

      <div className="kids-gallery">
        <div className="kids-gallery__stage">
          <img src={musicImages[activeIndex]} alt={`Music ministry activity ${activeIndex + 1}`} className="kids-gallery__image" />
        </div>

        <div className="kids-gallery__thumbnails" aria-label="Music ministry gallery thumbnails">
          {musicImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={index === activeIndex ? 'kids-gallery__thumb active' : 'kids-gallery__thumb'}
              onClick={() => setActiveIndex(index)}
              aria-label={`View music ministry image ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="values-panel">
        <div className="section-heading narrow left-aligned">
          <p className="eyebrow">Our purpose</p>
          <h2>Worship that glorifies Christ</h2>
        </div>

        <div className="values-list">
          <article className="principle-card">
            <h3>Worship leadership</h3>
            <p>We lead the congregation in worship that is reverent, joyful, and rooted in Scripture.</p>
          </article>

          <article className="principle-card">
            <h3>Excellence</h3>
            <p>Our ministry seeks to serve with skill, humility, and dedication as an offering to the Lord.</p>
          </article>

          <article className="principle-card">
            <h3>Unity</h3>
            <p>Music helps unite the church in prayer, praise, and obedience to God’s Word.</p>
          </article>

          <article className="principle-card">
            <h3>Encouragement</h3>
            <p>We aim to create an atmosphere where believers are strengthened, uplifted, and drawn nearer to Christ.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default MusicMinistryPage
