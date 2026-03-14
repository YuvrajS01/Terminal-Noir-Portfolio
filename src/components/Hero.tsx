import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: string) => void;
  key?: string;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-1 flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto w-full py-20"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-primary font-mono text-xs uppercase tracking-widest">Available for new projects</span>
        </div>
      </div>
      
      <div className="max-w-5xl">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase">
          Building Systems.<br/>
          <span className="text-primary">Scaling Ideas.</span>
        </h1>
        <p className="mt-10 font-mono text-slate-400 text-sm md:text-lg border-l-2 border-primary pl-6 py-2 max-w-2xl leading-relaxed">
          // Fullstack Engineer based in Gaya, India <br/>
          // Specialized in distributed architectures & high-performance UI
        </p>
      </div>
      
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
        <div className="group border border-slate-800 p-8 rounded-lg hover:border-primary/50 transition-colors bg-bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-mono text-slate-500 uppercase mb-2">Experience</p>
          <p className="text-4xl font-bold">4+ <span className="text-primary text-base font-normal">Years</span></p>
        </div>
        <div className="group border border-slate-800 p-8 rounded-lg hover:border-primary/50 transition-colors bg-bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-mono text-slate-500 uppercase mb-2">Shipments</p>
          <p className="text-4xl font-bold">10+ <span className="text-primary text-base font-normal">Live</span></p>
        </div>
        <div className="group border border-slate-800 p-8 rounded-lg hover:border-primary/50 transition-colors bg-bg-card/50 backdrop-blur-sm">
          <p className="text-xs font-mono text-slate-500 uppercase mb-2">Architecture</p>
          <p className="text-2xl font-bold font-mono pt-2 uppercase text-primary">Full Stack</p>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setActiveTab('projects')}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 rotate-180" style={{ writingMode: 'vertical-lr' }}>Scroll to explore</span>
        <button className="p-3 border border-slate-800 rounded-full hover:border-primary transition-colors group">
          <ChevronDown className="text-primary group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>
    </motion.div>
  );
}
