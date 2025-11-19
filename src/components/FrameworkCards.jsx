import React from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

const items = [
  {
    name: 'React',
    pros: ['Huge ecosystem', 'Mature tooling', 'Server Components'],
    cons: ['Hydration cost', 'Bundle size'],
    desc: 'Ubiquitous UI library with a rich ecosystem and enterprise backing.'
  },
  {
    name: 'Vue',
    pros: ['Approachable', 'Reactivity system', 'SFCs'],
    cons: ['Ecosystem fragmentation'],
    desc: 'Progressive framework with great DX and sensible defaults.'
  },
  {
    name: 'Svelte',
    pros: ['Compile-time optimizations', 'Small bundles'],
    cons: ['SSR edge cases', 'Ecosystem maturity'],
    desc: 'Compiler-driven approach that ships less JS for interactive views.'
  },
  {
    name: 'SolidJS',
    pros: ['Fine-grained reactivity', 'Performance'],
    cons: ['Smaller ecosystem'],
    desc: 'Signals-first runtime delivering top-tier rendering performance.'
  },
  {
    name: 'Qwik',
    pros: ['Resumability', 'Ultra-fast start'],
    cons: ['Young ecosystem'],
    desc: 'Resumable apps with zero JS on first load and near-instant TTI.'
  },
  {
    name: 'Astro',
    pros: ['Islands architecture', '0ms hydration by default'],
    cons: ['Partial hydration complexity'],
    desc: 'Content-focused sites that ship minimal JavaScript by default.'
  },
  {
    name: 'Next.js',
    pros: ['Hybrid SSR/SSG', 'RSC support'],
    cons: ['Complexity', 'Lock-in'],
    desc: 'Production-grade React framework with routing and server features.'
  },
  {
    name: 'Remix',
    pros: ['Web fundamentals', 'Progressive enhancement'],
    cons: ['Learning curve'],
    desc: 'Server-first routing framework focused on speed and ergonomics.'
  },
]

export default function FrameworkCards({ theme }) {
  const isDark = theme === 'dark'
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_top_right,rgba(59,130,246,0.12),transparent)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Framework Profiles</h2>
        <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Pros, cons, and positioning for each ecosystem.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(fr => (
            <div key={fr.name} className={`rounded-2xl p-6 backdrop-blur ring-1 shadow-xl ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{fr.name}</h3>
                  <p className="text-sm text-slate-400">{fr.desc}</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
              </div>

              <div className="mt-4 space-y-2">
                {fr.pros.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="text-emerald-400" size={16} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {fr.cons.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <XCircle className="text-rose-400" size={16} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
