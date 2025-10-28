import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => {
        // trigger a short fade overlay while theme changes
        document.documentElement.classList.add('theme-fade')
        setIsDark(s => !s)
        // remove the fade class after the CSS transition
        setTimeout(() => document.documentElement.classList.remove('theme-fade'), 500)
      }}
      className="text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white transition-colors"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
