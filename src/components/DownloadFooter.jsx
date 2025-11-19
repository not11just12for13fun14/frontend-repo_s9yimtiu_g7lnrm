import React from 'react'
import { Download, ExternalLink, Github, Twitter } from 'lucide-react'

export default function DownloadFooter({ theme }) {
  const isDark = theme === 'dark'
  return (
    <footer className={`relative py-16 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className={`rounded-2xl p-6 md:p-8 backdrop-blur ring-1 shadow-xl ${isDark ? 'bg-white/5 ring-white/10' : 'bg-white ring-slate-200'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Download</h3>
              <p className="text-slate-400 text-sm mt-1">Get the full 2025 Benchmark PDF or compare your project.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
                <Download size={16} />
                Download 2025 Benchmark PDF
              </button>
              <button className={`${isDark ? 'bg-white/10 text-white ring-1 ring-white/15' : 'bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10'} inline-flex items-center gap-2 px-4 py-3 rounded-xl`}>
                <ExternalLink size={16} />
                Compare your project
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs text-slate-500">© 2025 JS Framework Lab</p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" aria-label="GitHub" className="hover:text-slate-200"><Github size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-slate-200"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
