import profilePic from '../../assets/Pfp.jpeg'

export default function AboutApp() {
  return (
    <div className="flex flex-col gap-8 p-1">
      {/* Header */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-white/10 flex-shrink-0 shadow-lg relative">
          <img src={profilePic} alt="Alan" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 ring-inset ring-1 ring-white/10" />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight">
            Alan Yusuke Sassano Vilares
          </h2>
          <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Software Developer · UI/UX Designer</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {['Leme, SP - Brazil', 'EN & PT & JP'].map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />

      {/* Bio */}
      <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
        <p>
          Hi! I'm Alan, a Software Developer and UI/UX Designer passionate about creating intuitive, visually appealing web experiences that balance form and function.
        </p>
        <p>
          Currently, I'm building hands-on development experience while serving as the sole IT intern at{' '}
          <span className="text-zinc-900 dark:text-white font-semibold">Omnia Brasil</span>, where I handle network infrastructure, process automation, and technical training. 
          I also bring experience from the public sector at{' '}
          <span className="text-zinc-900 dark:text-white font-semibold">Leme City Hall</span>, supporting critical systems and IT assets.
        </p>
        <p>
          I'm in my third year of a Bachelor's in Information Systems at{' '}
          <span className="text-zinc-900 dark:text-white font-semibold">FHO (Uniararas)</span>.
          I speak fluent English and basic Japanese, always looking for opportunities to grow in modern frontend environments.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Education', value: 'B.S. Information Systems', sub: 'FHO · 3rd year' },
          { label: 'Experience', value: 'IT Intern', sub: 'Omnia Brasil' },
          { label: 'Languages', value: 'EN / PT / JP', sub: 'Fluent · Native · Basic' },
          { label: 'Focus', value: 'Frontend & UI/UX', sub: 'React · Framer · Figma' },
        ].map(item => (
          <div key={item.label} className="group rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 p-4 border border-zinc-200 dark:border-zinc-800 transition-all hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-bold mb-1">{item.label}</p>
            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.value}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
