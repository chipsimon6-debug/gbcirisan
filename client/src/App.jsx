import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'


// Lazy load pages for better performance
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const PastorPage = lazy(() => import('./pages/PastorPage'))
const SundaySchoolForKidsPage = lazy(() => import('./pages/SundaySchoolForKidsPage'))
const YoungPeopleFellowshipPage = lazy(() => import('./pages/YoungPeopleFellowshipPage'))
const MusicMinistryPage = lazy(() => import('./pages/MusicMinistryPage'))
const PrayerMeetingPage = lazy(() => import('./pages/PrayerMeetingPage'))
const SundayLessonsArchivePage = lazy(() => import('./pages/SundayLessonsArchivePage'))
const SalvationPage = lazy(() => import('./pages/SalvationPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))

// Loading fallback component
function PageLoader() {
  return <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function ChatbotPrompt() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 4000)
    return () => window.clearTimeout(timer)
  }, [])

  function openChatbot() {
    if (window.botpress && typeof window.botpress.open === 'function') {
      window.botpress.open()
    }
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <aside
      className="chatbot-prompt"
      aria-label="Church chatbot notification"
      role="status"
      aria-live="polite"
    >
      <button
        className="chatbot-prompt__dismiss"
        type="button"
        aria-label="Dismiss chat notification"
        onClick={() => setIsVisible(false)}
      >
        x
      </button>
      <p className="chatbot-prompt__eyebrow">GBCIM Chatbot</p>
      <p className="chatbot-prompt__message">
        Have a question? Our chatbot is ready to help.
      </p>
      <button className="chatbot-prompt__action" type="button" onClick={openChatbot}>
        Chat with us
      </button>
    </aside>
  )
}

function AppContent({ largeText, setLargeText }) {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />

      <div className={largeText ? 'app-shell large-text' : 'app-shell'}>
        <SiteHeader largeText={largeText} setLargeText={setLargeText} />

        <main className="page-content">
          <div key={location.pathname} className="page-transition">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutUsPage /></Suspense>} />
              <Route path="/pastor" element={<Suspense fallback={<PageLoader />}><PastorPage /></Suspense>} />
              <Route path="/sunday-school-for-kids" element={<Suspense fallback={<PageLoader />}><SundaySchoolForKidsPage /></Suspense>} />
              <Route path="/youngpeople-fellowship" element={<Suspense fallback={<PageLoader />}><YoungPeopleFellowshipPage /></Suspense>} />
              <Route path="/music-ministry" element={<Suspense fallback={<PageLoader />}><MusicMinistryPage /></Suspense>} />
              <Route path="/prayer-meeting" element={<Suspense fallback={<PageLoader />}><PrayerMeetingPage /></Suspense>} />
              <Route path="/lessons" element={<Suspense fallback={<PageLoader />}><SundayLessonsArchivePage /></Suspense>} />
              <Route path="/salvation" element={<Suspense fallback={<PageLoader />}><SalvationPage /></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FaqPage /></Suspense>} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
      <ChatbotPrompt />
    </>
  )
}

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <BrowserRouter>
      <AppContent largeText={largeText} setLargeText={setLargeText} />
      <Analytics />
    </BrowserRouter>
  )
}

export default App
