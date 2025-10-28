import { SiPython, SiReact } from 'react-icons/si'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: (
      <span className="inline-flex items-center gap-2">
        <SiPython className="text-yellow-400" /> Truco POO (Python)
      </span>
    ),
    desc: 'Backend project built using Object-Oriented Programming principles. Includes classes for cards, players, rounds, and test coverage for logic validation.',
    href: 'https://github.com/alessandrostrapa-ops/truco-poo',
  },
  {
    title: (
      <span className="inline-flex items-center gap-2">
        <SiReact className="text-cyan-400" /> Portfolio Website
      </span>
    ),
    desc: 'Personal portfolio developed with React, Vite, Tailwind CSS, and Framer Motion — fully responsive and optimized for GitHub Pages deployment.',
    href: 'https://alessandrostrapa-ops.github.io/my-portfolio',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, index) => (
            <ProjectCard key={index} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
