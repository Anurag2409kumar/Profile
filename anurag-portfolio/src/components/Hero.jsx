import { useState, useEffect } from 'react'
import { Github, Linkedin, ExternalLink, ArrowDown, Download } from 'lucide-react'

const TYPING_STRINGS = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'AI Enthusiast',
  'Problem Solver',
]

function useTypingEffect(strings, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [strIndex, setStrIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setStrIndex((i) => (i + 1) % strings.length)
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, strIndex, strings, speed, pause])

  return displayed
}

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Anurag2409kumar' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/anurag-kumar-23a614273' },
  {
    icon: ExternalLink,
    label: 'Codolio',
    href: 'https://codolio.com/profile/anurag24',
  },
]

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Top badge */}
      <div
        className="mb-8 flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-mono text-cyan-400 border-cyan-500/20"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Available for opportunities
      </div>

      {/* Main heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-display font-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-4">
          Anurag
          <br />
          <span className="gradient-text">Kumar</span>
        </h1>

        <div className="h-10 flex items-center justify-center mt-4 mb-6">
          <span className="font-mono text-lg sm:text-xl text-slate-300">
            {typed}
            <span className="typing-cursor" />
          </span>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-body leading-relaxed mb-10">
          Building scalable web applications & intelligent systems.
          Currently pursuing B.Tech CSE at NIET, Greater Noida.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects" className="btn-primary flex items-center gap-2">
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-outline flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-11 h-11 glass glass-hover rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/3 right-8 w-px h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
      </div>
    </section>
  )
}
