import React, { useMemo } from 'react'

const DATA = [
  { name: 'Qwik', render: 5, hydrate: 12, bundle: 45, dx: 7.5 },
  { name: 'Svelte', render: 28, hydrate: 35, bundle: 55, dx: 8.7 },
  { name: 'SolidJS', render: 18, hydrate: 28, bundle: 62, dx: 8.2 },
  { name: 'React', render: 85, hydrate: 95, bundle: 95, dx: 8.9 },
  { name: 'Vue', render: 55, hydrate: 70, bundle: 78, dx: 8.6 },
  { name: 'Next.js', render: 80, hydrate: 90, bundle: 110, dx: 9.2 },
  { name: 'Astro', render: 0, hydrate: 0, bundle: 35, dx: 8.4 },
  { name: 'Remix', render: 65, hydrate: 75, bundle: 88, dx: 8.8 },
]

function Bar({ label, value, max }) {
  const pct = (value / max) * 100
  const color = value <= 20 ? 'bg-emerald-400' : value <= 60 ? 'bg-amber-400' : 'bg-rose-400'
  return (
    <div className="grid grid-cols-6 items-center gap-4 w-full">
      <div className="col-span-2 text-sm text-slate-400">{label}</div>
      <div className="col-span-4 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function LineChart({ points, maxX, maxY }) {
  const path = useMemo(() => {
    const w = 560, h = 160, pad = 20
    const sx = (x) => pad + (x / maxX) * (w - pad * 2)
    const sy = (y) => h - pad - (y / maxY) * (h - pad * 2)
    return points.reduce((acc, p, i) => i === 0 ? `M ${sx(p.x)} ${sy(p.y)}` : acc + ` L ${sx(p.x)} ${sy(p.y)}`, '')
  }, [points, maxX, maxY])
  return (
    <svg viewBox="0 0 560 160" className="w-full h-40">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d={path} stroke="url(#grad)" strokeWidth="3" fill="none" />
    </svg>
  )
}

function Radar({ axes }) {
  const size = 220
  const center = size / 2
  const radius = 90
  const points = axes.map((a, i) => {
    const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2
    const r = (a.value / 10) * radius
    return [center + Math.cos(angle) * r, center + Math.sin(angle) * r]
  })
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z'
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-56">
      <circle cx={center} cy={center} r={radius} className="fill-white/5 stroke-white/10" />
      {[1,2,3,4].map((i) => (
        <circle key={i} cx={center} cy={center} r={(radius/4)*i} className="fill-none stroke-white/10" />
      ))}
      {axes.map((a, i) => {
        const angle = (i / axes.length) * Math.PI * 2 - Math.PI / 2
        return <line key={i} x1={center} y1={center} x2={center + Math.cos(angle) * radius} y2={center + Math.sin(angle) * radius} className="stroke-white/10" />
      })}
      <path d={path} className="fill-indigo-500/30 stroke-indigo-400" />
    </svg>
  )
}

export default function Charts({ theme }) {
  const isDark = theme === 'dark'
  const maxRender = Math.max(...DATA.map(d => d.render), 100)

  const linePoints = DATA.map(d => ({ x: d.bundle, y: d.hydrate }))
  const maxX = Math.max(...linePoints.map(p => p.x), 120)
  const maxY = Math.max(...linePoints.map(p => p.y), 120)

  const avgDX = (
    DATA.reduce((a, b) => a + b.dx, 0) / DATA.length
  ).toFixed(1)

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_bottom_right,rgba(56,189,248,0.12),transparent)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Performance Graphs</h2>
        <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Initial render, hydration vs bundle, and developer experience.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className={`rounded-2xl p-6 backdrop-blur ring-1 ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'} shadow-xl`}>
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Initial render (ms)</h3>
              <span className="text-xs text-slate-400">Lower is better</span>
            </div>
            <div className="mt-6 space-y-4">
              {DATA.map(d => (
                <Bar key={d.name} label={d.name} value={d.render} max={maxRender} />
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-6 backdrop-blur ring-1 ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'} shadow-xl`}>
            <div className="flex items-center justify-between">
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Bundle vs Hydration</h3>
              <span className="text-xs text-slate-400">kB vs ms</span>
            </div>
            <div className="mt-2">
              <LineChart points={linePoints} maxX={maxX} maxY={maxY} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className={`rounded-2xl p-6 backdrop-blur ring-1 ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'} shadow-xl col-span-1 md:col-span-1`}>
            <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>DX Radar</h3>
            <Radar axes={DATA.map(d => ({ label: d.name, value: d.dx }))} />
            <p className="text-sm text-slate-400">Average DX: {avgDX}/10</p>
          </div>
        </div>
      </div>
    </section>
  )
}
