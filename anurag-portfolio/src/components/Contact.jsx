import { useState } from 'react'
import { Mail, Github, Linkedin, ExternalLink, Send, CheckCircle } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anuragkumar24092003@gmail.com',
    href: 'mailto:anuragkumar24092003@gmail.com',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Anurag2409kumar',
    href: 'https://github.com/Anurag2409kumar',
    color: 'text-slate-300',
    border: 'border-slate-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'anurag-kumar-23a614273',
    href: 'https://linkedin.com/in/anurag-kumar-23a614273',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: ExternalLink,
    label: 'Codolio',
    value: 'anurag24',
    href: 'https://codolio.com/profile/anurag24',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens mail client with pre-filled values
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:anuragkumar24092003@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest uppercase">// contact</p>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-500 font-body max-w-md mx-auto mt-2">
            Open to internships, collaborations, and full-time opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="space-y-4">
            {contacts.map(({ icon: Icon, label, value, href, color, border }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 glass glass-hover rounded-xl p-4 border ${border} group transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{label}</p>
                  <p className={`text-sm font-body font-medium ${color}`}>{value}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 border border-white/10 space-y-4">
            <h3 className="font-display font-700 text-white text-lg mb-2">Send a Message</h3>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 font-body
                           focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 font-body
                           focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Let's work together..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 font-body
                           focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${
                sent
                  ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                  : 'btn-primary'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
