import React from 'react'

const DATA = [
  { name: 'Qwik', render: [2, 8], hydrate: 12, bundle: 45, memory: 28, dx: 7.5 },
  { name: 'Svelte', render: [15, 40], hydrate: 35, bundle: 55, memory: 34, dx: 8.7 },
  { name: 'SolidJS', render: [8, 30], hydrate: 28, bundle: 62, memory: 36, dx: 8.2 },
  { name: 'React', render: [40, 120], hydrate: 95, bundle: 95, memory: 48, dx: 8.9 },
  { name: 'Vue', render: [30, 80], hydrate: 70, bundle: 78, memory: 42, dx: 8.6 },
  { name: 'Next.js', render: [25, 110], hydrate: 90, bundle: 110, memory: 52, dx: 9.2 },
  { name: 'Astro', render: [0, 0], hydrate: 0, bundle: 35, memory: 18, dx: 8.4 },
  { name: 'Remix', render: [40, 90], hydrate: 75, bundle: 88, memory: 44, dx: 8.8 },
]

function colorFor(value, good, bad) {
  if (value <= good) return 'text-emerald-400'
  if (value >= bad) return 'text-rose-400'
  return 'text-amber-400'
}

export default function ComparisonTable({ theme }) {
  const isDark = theme === 'dark'
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_top_left,rgba(147,51,234,0.12),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Framework Comparison</h2>
        <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Initial render, hydration, bundle size and runtime memory.</p>

        <div className={`mt-8 overflow-x-auto rounded-2xl backdrop-blur shadow-xl ring-1 ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'}`}>
          <table className="min-w-full text-left text-sm">
            <thead className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <tr>
                <th className="px-6 py-4">Framework</th>
                <th className="px-6 py-4">Initial Render</th>
                <th className="px-6 py-4">Hydration</th>
                <th className="px-6 py-4">Bundle Size</th>
                <th className="px-6 py-4">Runtime Memory</th>
                <th className="px-6 py-4">DX Rating</th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              {DATA.map((row) => {
                const renderMid = Math.round((row.render[0] + row.render[1]) / 2)
                return (
                  <tr key={row.name} className={`${isDark ? 'even:bg-white/5' : 'even:bg-slate-50/80'}`}>
                    <td className="px-6 py-4 font-medium">{row.name}</td>
                    <td className={`px-6 py-4 ${colorFor(renderMid, 15, 80)}`}>{row.render[0]}–{row.render[1]} ms</td>
                    <td className={`px-6 py-4 ${colorFor(row.hydrate, 40, 120)}`}>{row.hydrate} ms</td>
                    <td className={`px-6 py-4 ${colorFor(row.bundle, 50, 110)}`}>{row.bundle} kB</td>
                    <td className={`px-6 py-4 ${colorFor(row.memory, 30, 55)}`}>{row.memory} MB</td>
                    <td className="px-6 py-4">{row.dx.toFixed(1)}/10</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
