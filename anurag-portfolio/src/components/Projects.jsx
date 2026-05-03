import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    featured: true,
    title: 'TaskFlow',
    subtitle: 'Full-Stack Task Management Application',
    description:
      'Enterprise-grade task management platform with role-based access control for Admins and Members. Features complete CRUD for tasks & projects, real-time status tracking, deadline management, and secure JWT authentication.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: 'https://taskmanagerea-production-0b5f.up.railway.app',
    github: 'https://github.com/Anurag2409kumar',
    gradient: 'from-cyan-500/10 to-blue-600/10',
    border: 'border-cyan-500/20',
    accentColor: 'text-cyan-400',
    emoji: '📋',
  },
  {
    featured: false,
    title: 'LappyMania',
    subtitle: 'Laptop E-Commerce Platform',
    description:
      'Feature-rich e-commerce platform for laptops with advanced product filtering, categorization, and a sleek dark mode UI. Built entirely with vanilla web technologies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://anurag2409kumar.github.io/LappyMania/',
    github: 'https://github.com/Anurag2409kumar',
    gradient: 'from-violet-500/10 to-purple-600/10',
    border: 'border-violet-500/20',
    accentColor: 'text-violet-400',
    emoji: '💻',
  },
  {
    featured: false,
    title: 'MERN Food Blog',
    subtitle: 'Recipe Sharing Platform',
    description:
      'Full-stack recipe sharing platform with user authentication, rich CRUD operations for recipes, and a community-driven content model. Built on the complete MERN stack.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    live: null,
    github: 'https://github.com/Anurag2409kumar',
    gradient: 'from-emerald-500/10 to-teal-600/10',
    border: 'border-emerald-500/20',
    accentColor: 'text-emerald-400',
    emoji: '🍽️',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest uppercase">// projects</p>
          <h2 className="section-heading">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-500 font-body max-w-md mx-auto mt-2">
            Real-world applications solving real problems
          </p>
        </div>

        <div className="space-y-6">
          {/* Featured project */}
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className={`project-card glass glass-hover rounded-2xl p-6 sm:p-8 border ${project.border} bg-gradient-to-br ${project.gradient} relative overflow-hidden transition-all duration-300`}
              >
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1 text-xs font-mono text-yellow-400 glass rounded-full px-3 py-1 border border-yellow-500/20">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-4xl mb-4">{project.emoji}</div>
                    <h3 className={`font-display font-800 text-2xl text-white mb-1`}>{project.title}</h3>
                    <p className={`text-sm font-mono ${project.accentColor} mb-4`}>{project.subtitle}</p>
                    <p className="text-slate-400 text-sm font-body leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-lg text-xs font-mono border border-white/10 bg-white/5 ${project.accentColor}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Preview mockup */}
                  <div className="hidden sm:block">
                    <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0a1628] shadow-2xl">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        <span className="font-mono text-xs text-slate-500 ml-2 truncate">
                          {project.live || 'localhost:5173'}
                        </span>
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="h-4 bg-cyan-500/10 rounded w-3/4" />
                        <div className="h-3 bg-white/5 rounded w-full" />
                        <div className="h-3 bg-white/5 rounded w-5/6" />
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          {[1,2,3,4,5,6].map(i => (
                            <div key={i} className="h-16 rounded-lg bg-white/5 border border-white/10" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other projects */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className={`project-card glass glass-hover rounded-2xl p-6 border ${project.border} bg-gradient-to-br ${project.gradient} transition-all duration-300`}
                >
                  <div className="text-3xl mb-4">{project.emoji}</div>
                  <h3 className="font-display font-800 text-xl text-white mb-1">{project.title}</h3>
                  <p className={`text-sm font-mono ${project.accentColor} mb-3`}>{project.subtitle}</p>
                  <p className="text-slate-400 text-sm font-body leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-mono border border-white/10 bg-white/5 ${project.accentColor}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5"
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
