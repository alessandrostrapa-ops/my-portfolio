import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import profilePic from '../assets/profilePic.jpg'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center" aria-label="Hero">
      <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-8">
        
        {/* Texto */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-indigo-300 mb-2">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Robert Alessandro Strapasson —{' '}
            <span className="text-indigo-300">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Problem Solver",
                  "Adaptable Learner"
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="mt-4 text-slate-700 dark:text-gray-300 max-w-2xl transition-colors">
            I build maintainable, efficient applications across frontend and backend. I quickly learn new technologies and leverage AI tools like ChatGPT and GitHub Copilot to deliver solutions that meet real-world needs.
          </p>
          <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-primary">See my work</a>
            <a href="#contact" className="inline-block border border-indigo-500 text-indigo-700 dark:text-indigo-100 px-4 py-2 rounded-md transition-colors">Contact me</a>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilePic}
            alt="Robert Alessandro Strapasson"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  )
}
