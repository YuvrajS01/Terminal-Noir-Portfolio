import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '0xLUM1',
    title: 'Lumina',
    tags: ['React', 'Node.js', 'MongoDB'],
    desc: 'A high-performance web application focusing on seamless user experience and real-time data processing.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp3JBDbD5i-zrvkwUGl0W1OunFK-kOFwSauxqi-KNQ7y0akiiXBlmfzItSdsIPIfwSGNoyWH-mXK2VhaX3IfVuzj2SuwlqR6j6Bevtr3B58joqSOQA-rh5HO_DyLKXCU8rWPPMH12RxgQqFL0l9-lXZvCELRA6BwjpAFe_4J7Pw_aLRuNFC2xhM0Q_L2X5Nkvk38uXWKrizbtPF5Fqoipk7Fok3mFY1T_oMrpxQgBRqPnq9_f4adWM7t5tTa99SYeel8ZL41pc9KA'
  },
  {
    id: '0xNOV2',
    title: 'Nova-Campus',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    desc: 'Comprehensive campus management system streamlining administrative workflows and student interactions.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7CycLM1k_qwdiwhyzjlikrcLSPqqCtQBHaCQO1ivJOmbttabkiJ1GSqsAMy5GUVVIUBwSWRnVCYDrZqpGxK7sMeaJO8WEi4rwFxoWgR0ZcVlUkJdX9E_tQ1NYJLO4B_T-GJ803dnpbAe0PGSTrKQPvfltYyY-sWlSxardisMcD1OaQyd7hROHoRIV3-7a27waDWHD6UbfZyrfazWGYUX8Gs4CagFWLcv6XnpLzCkOBg1YbauHu9BjffF9402V63IH-YwZMso-YCg'
  },
  {
    id: '0xQRV3',
    title: 'Qrave',
    tags: ['React Native', 'Firebase', 'Express'],
    desc: 'Mobile-first platform designed to revolutionize local food discovery and ordering experiences.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxuGQRde9036eM66sDu2etnc47Tki5gvsv4Fr6Ch4sw5hDjELsTGTZGcKnLNpr_yGWXcsB9og2DUzGnuv-czmyeMM_sFcrcOQ3qLJlwMNXkq6DKgAqn4OqKyk9EFJ7E7BkS86GwVQICZC85wShPuw3SXvGHbdXFxO6X4MB-kmq2pYBYh8HvxRDQblsxMo0K3ifD274UDrJoM-b00R_z-oL8x6mIi4wgAjGvrLbkeoLpSqBlppg5dY5NFqsqiCrR075sMPLzhoeDJA'
  },
  {
    id: '0xUPC4',
    title: 'Project Stealth',
    tags: ['TBA', 'Web3', 'Rust'],
    desc: '[ENCRYPTED] Upcoming decentralized infrastructure project. Currently in stealth mode.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5N-jm9msZLuWt1pO_Icn21Klstr9UeZi9nfy1UgSJXYrV_2p4uDycL2PmOAy2nF8FW47RjpFuYUaHCIEVair6YS2A01sdAmIl1X1J7LZXeBzdFGAVp07DwH9zbIL4PH10xV7WSUFB0c__XBmFQiv2ctyZQFGEdlG-6aXk130Fr5FCacjpcHoo5q5Ofk9TAd67BFSqyMPcijYcIxL9gFQCgEzagk0iZ2JZx7fZYOFZMK-FcmdtIDhi2HJ5UF1aIgX8OapgdYMPmBI'
  },
  {
    id: '0xUPC5',
    title: 'Nexus Core',
    tags: ['AI', 'Python', 'Vector DB'],
    desc: '[IN DEVELOPMENT] Next-generation AI agent orchestration framework for enterprise automation.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzuWOq6pjbBHpwsDHoIo6djhBpJYAz9-B9S89E03JsvrK0HkT-62oislSUZupsKGGSMfig3fUs9wLzudkhTv2jTFUndvVuzV7_bm4kEV0LlBiaVcYg6GfdfGsvIEHD-kgeT1gEUzL2TDwFBfF4U5WEuJxEsp9vcNVb0-ylqHpGeq5YtwUDfItt9F8beGY-cdEHhshAt7nW6p-N8KL-Ok6bEkynDiTelcQH-8zcVnkoToMD5AKeFbwvofohe3AKLdi7pUJ7de3mmNE'
  }
];

export default function Projects(props: { key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-1 px-6 py-12 md:px-16 max-w-[1440px] mx-auto w-full"
    >
      <div className="mb-16 border-l-4 border-primary pl-6">
        <h1 className="text-slate-100 text-5xl md:text-7xl font-bold font-serif leading-tight uppercase">Selected Works</h1>
        <p className="text-primary/60 font-mono mt-4 text-sm tracking-widest">ARCHIVE_FILE: 2024_PROD_DEPLOYMENTS</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative border border-primary/20 bg-bg-card p-6 flex flex-col justify-between aspect-[4/5] hover:border-primary transition-colors cursor-pointer overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-primary/50 font-mono text-xs tracking-widest">ID: {project.id}</span>
                <ArrowUpRight className="text-primary group-hover:scale-125 transition-transform" size={20} />
              </div>
              
              <div className="w-full h-48 mb-6 bg-bg-dark/50 border border-primary/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-3xl font-serif text-slate-100 mb-4 italic">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-primary/5 text-primary border border-primary/20 px-2 py-1 text-[10px] font-mono uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-slate-400 text-sm leading-relaxed font-display">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
