import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/Anurag2409kumar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/anurag-kumar-23a614273', label: 'LinkedIn' },
  { icon: ExternalLink, href: 'https://codolio.com/profile/anurag24', label: 'Codolio' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-slate-500 text-sm font-body">
          <span>© {new Date().getFullYear()}</span>
          <span className="gradient-text font-display font-700">Anurag Kumar</span>
          <span>· Built with</span>
          <Heart size={12} className="text-red-500 fill-red-500 mx-0.5" />
          <span>in India</span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
