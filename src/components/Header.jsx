import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 z-30 transition-colors ${scrolled ? 'backdrop-blur bg-white/60 dark:bg-black/40' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-slate-900 font-semibold dark:text-white">Robert Alessandro Strapasson</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">Junior Software Developer</div>
        </div>
  <nav className="flex items-center gap-4">
          <div className="hidden sm:flex space-x-4 text-sm text-slate-700 dark:text-gray-200">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://github.com/alessandrostrapa-ops" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/robert-strapasson-936747311/" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
