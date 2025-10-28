export default function SkillIcon({ Icon, name }) {
  return (
    <div className="glass-panel px-4 py-3 text-center text-sm text-gray-100 flex flex-col items-center gap-2 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group" role="listitem">
      <Icon className="text-2xl text-indigo-300 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" aria-hidden />
      <div className="group-hover:text-white transition-colors">{name}</div>
    </div>
  )
}
