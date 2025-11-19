import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm transition ring-1 ${isDark ? 'bg-white/5 text-white ring-white/10 hover:bg-white/10' : 'bg-slate-900/5 text-slate-900 ring-slate-900/10 hover:bg-slate-900/10'}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} mode</span>
    </button>
  )
}
