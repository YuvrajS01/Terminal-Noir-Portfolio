export default function Footer() {
  return (
    <footer className="border-t border-primary/10 px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-bg-dark/90 backdrop-blur-sm z-20">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">System_Online</p>
        <span className="font-mono text-[10px] text-slate-600 ml-4">LATENCY: 14ms</span>
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
        © 2026 DEV_PORTFOLIO BUILT BY YUVRAJ
      </p>

      <div className="flex gap-6">
        <span className="font-mono text-[10px] text-primary/40 uppercase tracking-widest">V7.7.7 STABLE</span>
      </div>
    </footer>
  );
}
