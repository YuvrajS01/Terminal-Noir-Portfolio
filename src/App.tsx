import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;

      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      const isAtTop = window.scrollY <= 50;

      const TABS = ['home', 'projects', 'experience', 'about'];
      const currentIndex = TABS.indexOf(activeTab);

      if (e.deltaY > 50 && isAtBottom) {
        if (currentIndex < TABS.length - 1) {
          isTransitioning.current = true;
          setActiveTab(TABS[currentIndex + 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      } else if (e.deltaY < -50 && isAtTop) {
        if (currentIndex > 0) {
          isTransitioning.current = true;
          setActiveTab(TABS[currentIndex - 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      }
    };

    let touchStartY = 0;
  
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      const isAtTop = window.scrollY <= 50;

      const TABS = ['home', 'projects', 'experience', 'about'];
      const currentIndex = TABS.indexOf(activeTab);

      if (deltaY > 50 && isAtBottom) {
        if (currentIndex < TABS.length - 1) {
          isTransitioning.current = true;
          setActiveTab(TABS[currentIndex + 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      } else if (deltaY < -50 && isAtTop) {
        if (currentIndex > 0) {
          isTransitioning.current = true;
          setActiveTab(TABS[currentIndex - 1]);
          setTimeout(() => { isTransitioning.current = false; }, 1000);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [activeTab]);

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden bg-bg-dark text-slate-100 selection:bg-primary selection:text-bg-dark">
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="fixed inset-0 scanline pointer-events-none z-0"></div>
      <div className="fixed inset-0 noise-overlay z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 flex flex-col">
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
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
