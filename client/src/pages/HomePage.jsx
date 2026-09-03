import { useEffect, useState } from 'react'
import gbcim01 from '../assets/gbcim01.jpg'
import gbcim02 from '../assets/gbcim02.jpg'
import gbcim03 from '../assets/gbcim03.jpg'
import gbcim04 from '../assets/gbcim04.jpg'
import gbcim05 from '../assets/gbcim05.jpg'
import gbcim06 from '../assets/gbcim06.jpg'
import gbcim07 from '../assets/gbcim07.jpg'
import gbcim08 from '../assets/gbcim08.jpg'
import gbcim09 from '../assets/gbcim09.jpg'
import gbcim10 from '../assets/gbcim10.jpg'
import gbcim11 from '../assets/gbcim11.jpg'

const heroSlides = [
  { image: gbcim01, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim02, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim03, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim04, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim05, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim06, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim07, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim08, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim09, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim10, alt: 'Grace Baptist Church Irisan Mission' },
  { image: gbcim11, alt: 'Grace Baptist Church Irisan Mission' },
]

const sermons = [
  {
    title: "The Price and Prize of God's Children Salvation",
    tag: 'Sunday Message',
    speaker: 'Ptr. Alexander Chommog',
    date: 'June 14, 2026',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'THE DOCTRINE OF REDEMPTION and RECONCILIATION',
    tag: 'Doctrine',
    speaker: 'Ptr. Alexander Chommog',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'The Greatest Test of Loyalty to God',
    tag: 'Christian Living',
    speaker: 'Ptr. Alexander Chommog',
    date: 'July 12, 2026',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
  },
]

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex)
  }

  // Keep only the next image warm; the browser loads the LCP image eagerly.
  useEffect(() => {
    const preloadNextImage = () => {
      const nextSlide = heroSlides[(activeSlide + 1) % heroSlides.length]
      const image = new Image()
      image.decoding = 'async'
      image.src = nextSlide.image
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadNextImage, { timeout: 1500 })
      return () => window.cancelIdleCallback(idleId)
    } else {
      const timeoutId = window.setTimeout(preloadNextImage, 100)
      return () => window.clearTimeout(timeoutId)
    }
  }, [activeSlide])

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveSlide((current) => (current + 1) % heroSlides.length)
      }
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <section
        className="hero-banner has-image"
        id="visit"
      >
        <div className="hero-banner__media" aria-hidden="true">
          <picture>
            <img
              className="hero-banner__image"
              src={heroSlides[activeSlide].image}
              alt=""
              aria-hidden="true"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div className="hero-banner__content">
          <p className="eyebrow light hero-eyebrow">GRACE BAPTIST CHURCH • IRISAN MISSION</p>
          <h1 className="hero-main-heading">Sharing the Gospel. Glorifying God. Finishing the Course Faithfully.</h1>
          <div className="cta-row">
            <a href="/lessons" className="primary-btn hero-primary-btn">
              Explore Our Messages
            </a>
          </div>
        </div>

        <div className="hero-carousel-controls" aria-label="Hero image gallery">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={index === activeSlide ? 'hero-carousel-dot active' : 'hero-carousel-dot'}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="content-section welcome-section" id="about">
        <div className="welcome-hero">
          <img src="/gbc-logo.png" alt="Grace Baptist Church Irisan Mission" className="welcome-logo" />
          <h2 className="welcome-heading">YOU ARE WELCOME HERE</h2>
          <p className="welcome-subheading">
            Everyone is welcome here. Whether you're looking for a church family or seeking answers, our doors are open.
          </p>
          <div className="location-pill">GRACE BAPTIST CHURCH IRISAN MISSION · BAGUIO CITY, PHILIPPINES</div>
        </div>
      </section>

      <section className="content-section" id="service-times">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="eyebrow">Gathering Times</p>
            <h2>Worship with us this Sunday.</h2>
          </div>
          <a href="#visit" className="text-link">Get directions</a>
        </div>

        <div className="service-grid">
          <div className="service-info">
            <div className="service-row">
              <span className="service-label">Sunday Worship</span>
              <strong>9:30 AM - 12:00 PM</strong>
            </div>
            <div className="service-row">
              <span className="service-label">Sunday School for Kids</span>
              <strong>8:30 AM - 9:30 AM</strong>
            </div>
            <div className="service-row">
              <span className="service-label">Prayer Meeting</span>
              <strong>Saturday • 3:30 PM</strong>
            </div>
            <div className="service-row address-row">
              <span className="service-label">Location</span>
              <strong>Lower Dumpsite, Purok 17, Barangay Irisan, Baguio, 2600 Benguet</strong>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="Grace Baptist Church map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3827.278500965031!2d120.55521007460683!3d16.410676130207758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDI0JzM4LjQiTiAxMjDCsDMzJzI4LjAiRQ!5e0!3m2!1sen!2sph!4v1788244434031!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="salvation-cta-section">
        <div className="salvation-cta-content">
          <p className="salvation-cta-question">If you died today, where would you go?</p>
          <p className="salvation-cta-subtext">
            Eternity is not a matter to leave to chance. Discover the hope, peace, and certainty of salvation in Jesus Christ.
          </p>
          <a href="/salvation" className="primary-btn salvation-cta-btn">THE BIBLE WAY TO HEAVEN</a>
        </div>
      </section>

      <section className="content-section sermon-section" id="sermons">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="eyebrow">Latest Teachings</p>
            <h2>Sermons & media library</h2>
          </div>
          <a href="/lessons" className="text-link">View all sermons</a>
        </div>

        <div className="sermon-grid">
          {sermons.map((item) => (
            <article key={item.title} className="sermon-card">
              <div
                className="sermon-thumb"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(18, 35, 52, 0.38), rgba(180, 142, 82, 0.24)), url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="sermon-body">
                <span className="sermon-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.speaker}</p>
                <div className="sermon-meta">
                  <span>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* <section className="content-section" id="events">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="eyebrow">Upcoming Events</p>
            <h2>Gather with the community.</h2>
          </div>
          <a href="#visit" className="text-link">See the calendar</a>
        </div>

        <div className="event-list">
          {events.map((item) => (
            <article key={item.title} className="event-item">
              <div className="event-date">
                <span>{item.date}</span>
              </div>
              <div className="event-body">
                <h3>{item.title}</h3>
                <p>{item.time}</p>
                <p>{item.location}</p>
              </div>
              <div className="event-actions">
                <button type="button" className="event-button primary-btn small">
                  RSVP
                </button>
                <button type="button" className="event-button secondary-btn small">
                  Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section className="content-section community-section" id="community">
        <div className="section-header">
          <div className="section-heading-block">
            <p className="eyebrow">Community Groups</p>
            <h2>Find your place to belong.</h2>
          </div>
        </div>

        <div className="community-grid">
          {ministries.map((item) => (
            <article key={item.title} className="community-card">
              <div className="community-icon">✦</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section className="giving-banner" id="give">
        <div className="giving-copy">
          <p className="eyebrow light">Give</p>
          <h2>Support the mission with generosity and transparency.</h2>
        </div>

        <div className="giving-actions">
          <a href="#" className="primary-btn dark-btn">One-Time Gift</a>
          <a href="#" className="secondary-btn light-btn">Monthly Giving</a>
          <a href="#" className="secondary-btn light-btn">Missions Fund</a>
        </div>
      </section> */}
    </>
  )
}

export default HomePage
