import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'

// Lazy load pages for better performance
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
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

function App() {
  const [largeText, setLargeText] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className={largeText ? 'app-shell large-text' : 'app-shell'}>
        <SiteHeader largeText={largeText} setLargeText={setLargeText} />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutUsPage /></Suspense>} />
            <Route path="/lessons" element={<Suspense fallback={<PageLoader />}><SundayLessonsArchivePage /></Suspense>} />
            <Route path="/salvation" element={<Suspense fallback={<PageLoader />}><SalvationPage /></Suspense>} />
            <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FaqPage /></Suspense>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
