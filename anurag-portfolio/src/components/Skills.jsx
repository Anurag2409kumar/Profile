const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/20',
    icon: '⚡',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend',
    color: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-500/20',
    icon: '🔧',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/20',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'Mongoose'],
  },
  {
    category: 'Languages',
    color: 'from-orange-500/20 to-yellow-500/20',
    border: 'border-orange-500/20',
    icon: '💻',
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'Tools & Concepts',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'DSA', 'OOP', 'DBMS', 'Computer Networks'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest uppercase">// skills</p>
          <h2 className="section-heading">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-500 font-body max-w-md mx-auto mt-2">
            Technologies I work with to build full-stack applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`glass glass-hover rounded-2xl p-6 border ${group.border} bg-gradient-to-br ${group.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-700 text-white text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
