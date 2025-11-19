import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ThemeToggle from './components/ThemeToggle'
import ComparisonTable from './components/ComparisonTable'
import Charts from './components/Charts'
import FrameworkCards from './components/FrameworkCards'
import WhyPerformanceMatters from './components/WhyPerformanceMatters'
import LiveBenchmark from './components/LiveBenchmark'
import DownloadFooter from './components/DownloadFooter'

function App() {
  const [theme, setTheme] = useState('dark')
  const resultsRef = useRef(null)

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg" />
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>JS Framework Lab</span>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>

      <main className="pt-20">
        <Hero onViewResults={scrollToResults} onDownload={() => {}} theme={theme} />

        <div ref={resultsRef}>
          <ComparisonTable theme={theme} />
          <Charts theme={theme} />
          <FrameworkCards theme={theme} />
          <WhyPerformanceMatters theme={theme} />
          <LiveBenchmark theme={theme} />
          <DownloadFooter theme={theme} />
        </div>
      </main>
    </div>
  )
}

export default App
