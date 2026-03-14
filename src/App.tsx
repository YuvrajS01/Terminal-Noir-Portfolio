import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-bg-dark text-slate-100 selection:bg-primary selection:text-bg-dark">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0"></div>
      <div className="fixed inset-0 noise-overlay z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && <Hero key="home" setActiveTab={setActiveTab} />}
            {activeTab === 'projects' && <Projects key="projects" />}
            {activeTab === 'experience' && <Experience key="experience" />}
            {activeTab === 'about' && <About key="about" />}
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
