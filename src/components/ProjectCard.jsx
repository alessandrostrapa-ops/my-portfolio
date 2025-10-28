import { FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectCard({ title, desc, href }) {
  return (
    <article 
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10 
                 hover:border-white/20 transition-all duration-300 group hover:scale-105" 
      role="article" 
      aria-label={title}>
  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
  <p className="text-slate-700 dark:text-gray-300 mb-4 transition-colors">{desc}</p>
      <a href={href} 
         target="_blank" 
         rel="noreferrer" 
         className="text-indigo-400 hover:text-indigo-200 inline-flex items-center gap-2 transition-all duration-300 hover:gap-3">
        View repo / demo <FaExternalLinkAlt className="transition-transform group-hover:rotate-45" />
      </a>
    </article>
  )
}
