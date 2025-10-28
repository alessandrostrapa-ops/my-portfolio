import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-gradient-to-br from-white via-sky-300 to-sky-500 dark:text-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors duration-700 ease-in-out">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent pointer-events-none dark:from-indigo-500/10" />
      {/* overlay para animación de fade al cambiar tema */}
      <div className="theme-overlay fixed inset-0 bg-white dark:bg-black pointer-events-none" aria-hidden />
      <Header />
      <main className="relative pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Robert Alessandro Strapasson — Built with React + Tailwind
      </footer>
    </div>
  )
}
