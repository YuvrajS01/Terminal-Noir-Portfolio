import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Mail, Zap, X } from 'lucide-react';

export default function About(props: { key?: string }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Yuvi.123.777@gmail.com?subject=Collaboration inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
    setShowForm(false);
    setFormData({ name: '', email: '', message: '' });
  };

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
              As a Fullstack Engineer based in Gaya, India with over 4 years of experience, I specialize in building digital infrastructure that balances extreme machine efficiency with intuitive human-centered design.
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
            <button onClick={() => setShowForm(true)} className="w-full bg-primary py-8 px-8 text-bg-dark font-mono font-black text-2xl md:text-4xl uppercase tracking-tighter rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(191,255,0,0.2)] flex items-center justify-between group cursor-pointer">
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
            <p className="font-mono text-xs tracking-widest text-slate-400">GAYA, INDIA [24.7964° N, 84.9914° E]</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-bg-card border border-primary/20 p-8 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
              
              <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-slate-400 hover:text-primary transition-colors">
                <X size={24} />
              </button>
              
              <h2 className="text-3xl font-serif italic text-slate-100 mb-8 border-b border-primary/20 pb-4">
                Initiate <span className="text-primary">Sequence</span>
              </h2>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-primary/70 font-mono text-[10px] uppercase tracking-widest mb-2">Identifier</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg p-3 text-slate-100 focus:border-primary outline-none focus:ring-1 focus:ring-primary font-mono text-sm transition-all" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-primary/70 font-mono text-[10px] uppercase tracking-widest mb-2">Comlink</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg p-3 text-slate-100 focus:border-primary outline-none focus:ring-1 focus:ring-primary font-mono text-sm transition-all" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-primary/70 font-mono text-[10px] uppercase tracking-widest mb-2">Data Payload</label>
                  <textarea 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg p-3 text-slate-100 focus:border-primary outline-none focus:ring-1 focus:ring-primary font-mono text-sm resize-none transition-all" 
                    placeholder="Transmission contents..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary/10 border border-primary text-primary py-4 rounded-lg font-mono uppercase tracking-widest hover:bg-primary hover:text-bg-dark transition-all duration-300 shadow-[0_0_20px_rgba(191,255,0,0.1)] hover:shadow-[0_0_30px_rgba(191,255,0,0.3)] font-bold">
                    Transmit payload
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
