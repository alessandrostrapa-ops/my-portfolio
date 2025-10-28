const PROJECTS = [
  { title: 'Project One', desc: 'Desc 1', href: '#' },
  { title: 'Project Two', desc: 'Desc 2', href: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="text-white">{p.title}</div>
        ))}
      </div>
    </section>
  );
}
