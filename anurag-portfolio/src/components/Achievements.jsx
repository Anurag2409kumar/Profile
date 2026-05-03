const achievements = [
  {
    icon: '🧩',
    title: '200+ DSA Problems',
    description: 'Solved 200+ data structures & algorithms problems across LeetCode, CodeChef, and other competitive programming platforms.',
    tag: 'Competitive Programming',
    color: 'from-cyan-500/10 to-blue-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: '🏆',
    title: 'Smart India Hackathon 2024',
    description: 'Participated in SIH 2024, one of India\'s largest hackathons. Collaborated with a team to build innovative solutions under tight deadlines.',
    tag: 'Hackathon',
    color: 'from-yellow-500/10 to-orange-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: '🚦',
    title: 'ML Traffic Control System',
    description: 'Built a machine learning-based adaptive traffic control system that reduced road congestion by 20% through intelligent signal optimization.',
    tag: 'Machine Learning',
    color: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: '🎓',
    title: 'Python for Data Science',
    description: 'Completed a professional certification in Python for Data Science, covering pandas, NumPy, matplotlib, and machine learning fundamentals.',
    tag: 'Certification',
    color: 'from-violet-500/10 to-purple-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: '☕',
    title: 'OOP in Java Certification',
    description: 'Earned a certification in Object-Oriented Programming using Java, deepening expertise in design patterns and software architecture.',
    tag: 'Certification',
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest uppercase">// achievements</p>
          <h2 className="section-heading">
            Milestones & <span className="gradient-text">Wins</span>
          </h2>
          <p className="text-slate-500 font-body max-w-md mx-auto mt-2">
            Highlights from my journey as a developer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item) => (
            <div
              key={item.title}
              className={`glass glass-hover rounded-2xl p-6 border ${item.border} bg-gradient-to-br ${item.color} transition-all duration-300 group cursor-default`}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-display font-700 text-white text-base mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
