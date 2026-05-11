import { GitBranch, Link2, Mail, ExternalLink } from "lucide-react"

const socials = [
  { label: 'LinkedIn', icon: Link2,   href: 'https://www.linkedin.com/in/yusukesassano/', color: 'text-blue-500' },
  { label: 'GitHub',   icon: GitBranch, href: 'https://github.com/Sayusk/', color: 'text-zinc-500 dark:text-zinc-300' },
  { label: 'Instagram', icon: ExternalLink, href: 'https://www.instagram.com/sayusk_/', color: 'text-pink-500' },
]

export default function ContactApp() {
  return (
    <div className="flex flex-col items-center gap-6 py-2">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">Get in touch</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">I'm always open to new opportunities and conversations.</p>
      </div>

      <div className="w-full rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 p-5 flex flex-col items-center gap-3">
        <Mail className="w-8 h-8 text-purple-400" />
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Primary email</p>
        <a
          href="mailto:alanyusuke@gmail.com"
          className="font-medium text-purple-400 dark:text-purple-300 hover:underline text-sm"
        >
          alanyusuke@gmail.com
        </a>
        <a
          href="mailto:alanyusuke@gmail.com"
          className="mt-1 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium transition-colors"
        >
          Send email <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="w-full">
        <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center mb-3 uppercase tracking-wider">Socials</p>
        <div className="grid grid-cols-3 gap-3">
          {socials.map(({ label, icon: Icon, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50 hover:border-purple-400/50 hover:bg-zinc-200/60 dark:hover:bg-zinc-700/60 transition-all group"
            >
              <Icon className={`w-6 h-6 ${color} group-hover:scale-110 transition-transform`} />
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
