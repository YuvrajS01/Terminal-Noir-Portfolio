import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Zap } from 'lucide-react';

export default function About(props: { key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex flex-col md:flex-row"
    >
      {/* Left Side: Bio */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary/10">
        <div className="max-w-xl">
          <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-8 block">01 // The Architect</span>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9] mb-12 text-slate-100">
            I am <span className="text-primary">Yuvraj Singh</span>, crafting systems with minimalist logic.
          </h1>
          <div className="space-y-8 text-lg md:text-xl text-slate-400 font-serif leading-relaxed">
            <p>
              As a Fullstack Engineer based in India with over 4 years of experience, I specialize in building digital infrastructure that balances extreme machine efficiency with intuitive human-centered design.
            </p>
            <p>
              My journey involves founding <strong>Rayavriti</strong>, where I push the boundaries of scalable architectures. I believe that code should be as elegant as it is functional, rooted in a philosophy where clarity meets complexity.
            </p>
            <p>
              When I'm not architecting distributed systems or deploying high-performance UIs, I'm exploring the bleeding edge of web technologies and building products that solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact/Social */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between bg-primary/5">
        <div className="space-y-16">
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-[0.3em] mb-10 block">02 // Connectivity</span>
            <div className="flex flex-col gap-8">
              <a href="https://github.com/YuvrajS01" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-primary/20 pb-6 hover:border-primary transition-colors">
                <span className="text-3xl md:text-4xl font-mono uppercase tracking-tighter group-hover:translate-x-2 transition-transform">GitHub</span>
                <ArrowUpRight className="text-primary group-hover:rotate-45 transition-transform" size={32} />
              </a>
              <a href="https://www.linkedin.com/in/yuvrajs01/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-primary/20 pb-6 hover:border-primary transition-colors">
                <span className="text-3xl md:text-4xl font-mono uppercase tracking-tighter group-hover:translate-x-2 transition-transform">LinkedIn</span>
                <ArrowUpRight className="text-primary group-hover:rotate-45 transition-transform" size={32} />
              </a>
              <a href="mailto:Yuvi.123.777@gmail.com" className="group flex items-center justify-between border-b border-primary/20 pb-6 hover:border-primary transition-colors">
                <span className="text-3xl md:text-4xl font-mono uppercase tracking-tighter group-hover:translate-x-2 transition-transform">Email</span>
                <Mail className="text-primary group-hover:scale-110 transition-transform" size={32} />
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="font-mono text-sm text-slate-500 mb-6 tracking-widest">_system.status: Open for collaboration</p>
            <button className="w-full bg-primary py-8 px-8 text-bg-dark font-mono font-black text-2xl md:text-4xl uppercase tracking-tighter rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(191,255,0,0.2)] flex items-center justify-between group cursor-pointer">
              <span>Let's Collaborate</span>
              <Zap className="text-bg-dark group-hover:translate-x-2 transition-transform" size={40} fill="currentColor" />
            </button>
          </div>
        </div>

        {/* Subtle Map/Location Context */}
        <div className="mt-24 flex items-center gap-6 grayscale opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFmzSxN4fJvNMBqkd2BzfRi6dcCeEfwtRH3LIqyUUy8PWG3RyCCo2kgREXW44J6UXVzMGhf6kVb7-uh6Up0ZNRC2bjdFrkR1ik10dYbLXxZLJ0Nto5ftn4JLK0LvSpMzCDl2-J8ms2NAm-SncmpwblHGYw6k96q8VI5npvcVZVYGKheZ-23aWKr-QVKYhd-hg2n2MKDXGPmkGuI0vy4cOmKpyv47Or9H5zWABhztCYZKWrp_J2k0C45PcMk9VMg764pTnyTMfpQkM" 
              alt="Location Map"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">Location_Node</p>
            <p className="font-mono text-xs tracking-widest text-slate-400">INDIA [20.5937° N, 78.9629° E]</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
