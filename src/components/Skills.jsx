const TECH = ['HTML', 'CSS', 'JavaScript', 'React'];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TECH.map((t) => (
            <div key={t} className="text-white">{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
