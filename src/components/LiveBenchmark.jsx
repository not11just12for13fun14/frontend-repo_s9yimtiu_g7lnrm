import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const frameworks = [
  { name: 'Qwik', base: 5 },
  { name: 'Svelte', base: 28 },
  { name: 'SolidJS', base: 18 },
  { name: 'React', base: 85 },
  { name: 'Vue', base: 55 },
  { name: 'Next.js', base: 80 },
  { name: 'Astro', base: 0 },
  { name: 'Remix', base: 65 },
]

function randomize(base) {
  const variance = base * 0.25
  const val = Math.max(0, Math.round(base + (Math.random() - 0.5) * 2 * variance))
  return val
}

export default function LiveBenchmark({ theme }) {
  const isDark = theme === 'dark'
  const [running, setRunning] = useState(false)
  const [values, setValues] = useState(frameworks.map(f => ({ ...f, val: f.base })))

  const run = () => {
    setRunning(true)
    let ticks = 0
    const id = setInterval(() => {
      setValues(prev => prev.map(p => ({ ...p, val: randomize(p.base) })))
      ticks++
      if (ticks > 16) {
        clearInterval(id)
        setRunning(false)
      }
    }, 160)
  }

  const max = Math.max(...values.map(v => v.val), 100)

  return (
    <section className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`rounded-2xl p-6 backdrop-blur ring-1 shadow-xl ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'}`}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Live Benchmark Demo</h2>
              <p className="text-slate-400 text-sm">Simulated initial render. Lower is better.</p>
            </div>
            <button onClick={run} disabled={running} className={`px-5 py-3 rounded-xl font-medium transition ${running ? 'opacity-60 cursor-not-allowed' : ''} ${isDark ? 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15' : 'bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-900/10'}`}>Run Benchmark</button>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {values.map(v => {
              const pct = (v.val / max) * 100
              const color = v.val <= 20 ? 'bg-emerald-400' : v.val <= 60 ? 'bg-amber-400' : 'bg-rose-400'
              return (
                <div key={v.name} className="rounded-xl p-4 bg-black/5">
                  <div className="flex items-center justify-between text-sm">
                    <span className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{v.name}</span>
                    <AnimatePresence mode="popLayout">
                      <motion.span key={v.val} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} className="text-slate-400">{v.val} ms</motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div layout className={`h-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
