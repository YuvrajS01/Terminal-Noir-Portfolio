import { Terminal } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const navItems = [
    { id: 'home', label: './home' },
    { id: 'projects', label: './projects' },
    { id: 'experience', label: './experience' },
    { id: 'about', label: './about' },
  ];

  return (
    <header className="flex items-center justify-between border-b border-primary/20 px-6 py-4 md:px-12 backdrop-blur-sm sticky top-0 z-50 bg-bg-dark/80">
      <div 
        className="flex items-center gap-4 cursor-pointer group"
        onClick={() => setActiveTab('home')}
      >
        <div className="text-primary border border-primary/30 p-1 rounded group-hover:bg-primary/10 transition-colors">
          <Terminal size={24} />
        </div>
        <h2 className="text-slate-100 text-lg md:text-xl font-bold tracking-tighter font-mono uppercase">
          SYSTEM.ROOT.YUV_V7
        </h2>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`text-sm font-mono uppercase tracking-widest transition-colors ${
              activeTab === item.id ? 'text-primary' : 'text-slate-400 hover:text-primary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      
      <button 
        onClick={() => setActiveTab('about')}
        className="flex items-center justify-center h-10 bg-primary/10 border border-primary/40 text-primary px-4 hover:bg-primary hover:text-bg-dark transition-all rounded cursor-pointer"
      >
        <span className="text-xs font-bold uppercase tracking-widest font-mono">Contact</span>
      </button>
    </header>
  );
}
