import { useEffect, useState } from 'react'
import kids01 from '../assets/kids01.jpg'
import kids02 from '../assets/kids02.jpg'
import kids03 from '../assets/kids03.jpg'
import kids04 from '../assets/kids04.jpg'
import kids05 from '../assets/kids05.jpg'
import kids06 from '../assets/kids06.jpeg'
import kids07 from '../assets/kids07.jpeg'
import kids08 from '../assets/kids08.jpg'
import kids09 from '../assets/kids09.jpeg'
import kids10 from '../assets/kids10.jpeg'
import kids11 from '../assets/kids11.jpeg'
import kids12 from '../assets/kids12.jpg'
import kids13 from '../assets/kids13.jpeg'

const kidsImages = [kids01, kids02, kids03, kids04, kids05, kids06, kids07, kids08, kids09, kids10, kids11, kids12, kids13]

function SundaySchoolForKidsPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % kidsImages.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="page-section">
      <div className="section-heading centered">
        <p className="eyebrow">Ministry</p>
        <h1>Sunday School for Kids</h1>
      </div>

      <div className="story-block">
        <div>
          <p>
            Sunday School for Kids is a joyful and Bible-centered ministry where children learn the truths of God’s Word,
            grow in faith, and discover the love of Jesus in a safe and encouraging environment.
          </p>
        </div>
      </div>

      <div className="kids-gallery">
        <div className="kids-gallery__stage">
          <img src={kidsImages[activeIndex]} alt={`Kids ministry activity ${activeIndex + 1}`} className="kids-gallery__image" />
        </div>

        <div className="kids-gallery__thumbnails" aria-label="Kids ministry gallery thumbnails">
          {kidsImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={index === activeIndex ? 'kids-gallery__thumb active' : 'kids-gallery__thumb'}
              onClick={() => setActiveIndex(index)}
              aria-label={`View kids ministry image ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="values-panel">
        <div className="section-heading narrow left-aligned">
          <p className="eyebrow">What we do</p>
          <h2>Helping kids grow in Christ</h2>
        </div>

        <div className="values-list">
          <article className="principle-card">
            <h3>Bible teaching</h3>
            <p>Children are taught biblical truths in age-appropriate and practical ways that help them understand God’s love.</p>
          </article>

          <article className="principle-card">
            <h3>Prayer and discipleship</h3>
            <p>We encourage children to pray, trust God, and grow in their relationship with the Lord every week.</p>
          </article>

          <article className="principle-card">
            <h3>Fellowship</h3>
            <p>Children build friendships in a loving environment where they are welcomed, encouraged, and valued.</p>
          </article>

          <article className="principle-card">
            <h3>Christian growth</h3>
            <p>Our goal is to help each child know Jesus Christ personally and live out their faith with confidence.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SundaySchoolForKidsPage
