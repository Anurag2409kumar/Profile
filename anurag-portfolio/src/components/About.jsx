import { GraduationCap, MapPin, Mail, Cpu } from 'lucide-react'

const highlights = [
  { icon: GraduationCap, label: 'B.Tech CSE', value: 'NIET, 2022–2026 · SGPA 7.7' },
  { icon: MapPin, label: 'Location', value: 'Greater Noida, India' },
  { icon: Mail, label: 'Email', value: 'anuragkumar24092003@gmail.com' },
  { icon: Cpu, label: 'Focus', value: 'Full-Stack Dev + AI/ML' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest uppercase">
              // about me
            </p>
            <h2 className="section-heading mb-6">
              Crafting digital{' '}
              <span className="gradient-text">experiences</span>
            </h2>
            <div className="space-y-4 text-slate-400 font-body leading-relaxed">
              <p>
                I'm a Full-Stack Developer passionate about building products that live on the internet.
                I specialize in the <span className="text-cyan-400 font-medium">MERN stack</span> — creating
                performant, user-centric web applications with clean code and thoughtful architecture.
              </p>
              <p>
                Beyond web dev, I'm drawn to the intersection of software and AI — exploring how
                machine learning can solve real-world problems. I've built an ML-based traffic control
                system and actively participate in hackathons like{' '}
                <span className="text-white font-medium">SIH 2024</span>.
              </p>
              <p>
                When I'm not coding, I'm grinding DSA problems, learning new technologies, or
                contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass glass-hover rounded-2xl p-5 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-slate-200 font-body font-medium leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
