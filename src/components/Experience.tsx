import { motion } from 'motion/react';
import { Database, Layers, Code2 } from 'lucide-react';

const experiences = [
  {
    year: 'Present',
    title: 'Founder & Lead Engineer',
    company: '@RAYAVRITI',
    icon: <Database size={16} />,
    desc: [
      '> Spearheading the architectural vision and technical execution of Rayavriti.',
      '> Building scalable, high-performance digital solutions and driving product innovation.'
    ],
    tags: ['ENTREPRENEURSHIP', 'FULLSTACK', 'SYSTEM DESIGN']
  },
  {
    year: '2022',
    title: 'Senior Fullstack Engineer',
    company: '@TECH_INNOVATORS',
    icon: <Layers size={16} />,
    desc: [
      '> Architected and deployed robust microservices, scaling applications to handle thousands of concurrent users.',
      '> Optimized database queries and front-end rendering, reducing load times by 40%.'
    ],
    tags: ['TYPESCRIPT', 'REACT', 'NODE.JS']
  },
  {
    year: '2020',
    title: 'Software Engineer',
    company: '@STARTUP_HUB',
    icon: <Code2 size={16} />,
    desc: [
      '> Developed core features for enterprise SaaS products from scratch.',
      '> Implemented CI/CD pipelines and automated testing, improving deployment reliability.'
    ],
    tags: ['JAVASCRIPT', 'EXPRESS', 'MONGODB']
  }
];

export default function Experience(props: { key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-1 max-w-5xl mx-auto w-full px-6 py-16"
    >
      <div className="mb-20">
        <div className="inline-block px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6 tracking-widest">
          RUN: fetch_experience_history.sh
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-100 tracking-tighter mb-6 uppercase">
          Chrono<span className="text-primary">log</span>
        </h1>
        <p className="text-slate-400 font-mono text-lg max-w-2xl leading-relaxed">
          A retrospective analysis of architectural milestones and professional evolution within the digital void.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_15px_rgba(191,255,0,0.4)]"></div>
        
        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-16 group"
            >
              {/* Node Icon */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-bg-dark border-2 border-primary rounded-full flex items-center justify-center z-20 shadow-[0_0_10px_rgba(191,255,0,0.3)] text-primary">
                {exp.icon}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/4 pt-2">
                  <h2 className="font-serif italic text-6xl md:text-7xl text-primary/20 group-hover:text-primary/60 transition-colors leading-none">
                    {exp.year}
                  </h2>
                </div>
                
                <div className="md:w-3/4 bg-bg-card/60 border border-primary/10 p-8 rounded-xl backdrop-blur-sm group-hover:border-primary/30 transition-all">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-100 uppercase tracking-tight">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm mt-2 tracking-widest">{exp.company}</p>
                  </div>
                  
                  <div className="font-mono text-slate-400 space-y-4 leading-relaxed text-sm">
                    {exp.desc.map((d, j) => (
                      <p key={j}>{d}</p>
                    ))}
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] bg-primary/5 text-primary border border-primary/20 rounded tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-bg-card border border-primary/10 p-8 rounded-xl flex flex-col items-center text-center">
          <span className="text-primary/50 font-mono text-xs uppercase tracking-widest mb-4">Total Deployments</span>
          <span className="text-5xl font-black text-slate-100 font-mono">1,402</span>
          <div className="mt-4 text-[10px] text-primary/60 font-mono uppercase tracking-widest">System: Stable</div>
        </div>
        <div className="bg-bg-card border border-primary/10 p-8 rounded-xl flex flex-col items-center text-center">
          <span className="text-primary/50 font-mono text-xs uppercase tracking-widest mb-4">Uptime Reliability</span>
          <span className="text-5xl font-black text-slate-100 font-mono">99.98<span className="text-primary">%</span></span>
          <div className="mt-4 text-[10px] text-primary/60 font-mono uppercase tracking-widest">Zone: Global</div>
        </div>
        <div className="bg-bg-card border border-primary/10 p-8 rounded-xl flex flex-col items-center text-center">
          <span className="text-primary/50 font-mono text-xs uppercase tracking-widest mb-4">Lines of Code</span>
          <span className="text-5xl font-black text-slate-100 font-mono">0.8<span className="text-primary">M</span></span>
          <div className="mt-4 text-[10px] text-primary/60 font-mono uppercase tracking-widest">Status: Refined</div>
        </div>
      </div>
    </motion.div>
  );
}
