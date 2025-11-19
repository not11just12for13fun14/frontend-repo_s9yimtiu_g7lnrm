import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onViewResults, onDownload, theme }) {
  return (
    <section className="relative overflow-hidden">
      <div className={`relative min-h-[80vh] w-full ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-sky-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_top_right,rgba(99,102,241,0.25),transparent)]" />
        </div>

        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm ring-1 ${theme === 'dark' ? 'bg-white/5 ring-white/10 text-slate-200' : 'bg-slate-900/5 ring-slate-900/10 text-slate-700'}`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Independently measured, lab-style benchmarks
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={`mt-6 text-5xl md:text-7xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            JS Framework Benchmark 2025
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`mt-5 max-w-3xl text-lg md:text-xl ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Real-world metrics for rendering, hydration, bundling and runtime performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button onClick={onViewResults} className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:opacity-95 transition">
              View Results
            </button>
            <button onClick={onDownload} className={`${theme === 'dark' ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10'} px-5 py-3 rounded-xl font-medium hover:opacity-90 transition backdrop-blur`}>Download Full Report</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
