import React from 'react'
import { Gauge, Cpu, MemoryStick, Timer } from 'lucide-react'

export default function WhyPerformanceMatters({ theme }) {
  const isDark = theme === 'dark'
  const items = [
    { icon: Timer, title: 'TTFB & LCP', desc: 'Faster server and render paths improve Time to First Byte and Largest Contentful Paint.' },
    { icon: Gauge, title: 'Hydration Cost', desc: 'Minimizing client work reduces CPU, avoids main-thread jank, and speeds interactivity.' },
    { icon: Cpu, title: 'CPU Budget', desc: 'Low-end devices have tight CPU budgets; idle-blocking scripts hurt UX the most.' },
    { icon: MemoryStick, title: 'Memory Footprint', desc: 'Less memory pressure enables smoother navigation and fewer GC pauses.' },
  ]
  return (
    <section className="relative py-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Why Performance Matters</h2>
        <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Metrics that translate into real user outcomes and business KPIs.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className={`rounded-2xl p-6 backdrop-blur ring-1 shadow-xl ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'}`}>
              <it.icon className="text-indigo-400" />
              <h3 className={`mt-3 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{it.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
