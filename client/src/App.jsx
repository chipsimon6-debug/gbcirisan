import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import SundayLessonsArchivePage from './pages/SundayLessonsArchivePage'
import SalvationPage from './pages/SalvationPage'
import FaqPage from './pages/FaqPage'

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
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/lessons" element={<SundayLessonsArchivePage />} />
            <Route path="/salvation" element={<SalvationPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
