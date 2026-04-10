import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-24 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl flicker-entry"
        >
          <h1 className="text-7xl md:text-9xl font-headline font-black tracking-tighter text-white uppercase leading-none mb-6">
            THE FUTURE <br /> HAS A <span className="text-primary-fixed glow-text-cyan">PULSE</span>
          </h1>
          <p className="text-on-surface-variant font-body text-xl max-w-lg mb-10 leading-relaxed">
            Orchestrating the next evolution of labor with the world's first autonomous humanoid OS. Precision-engineered for high-stakes environments.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-primary-container text-on-primary font-headline font-bold uppercase tracking-widest hover:scale-105 transition-transform glow-cyan">
              Get a Demo
            </button>
            <button className="px-8 py-4 border border-outline/20 glass-panel text-white font-headline font-bold uppercase tracking-widest hover:bg-surface-variant/30 transition-all">
              Watch the Launch
            </button>
          </div>
          <div className="mt-16 flex gap-8 items-center border-l-2 border-primary-fixed/30 pl-6">
            <div>
              <span className="block font-label text-primary-fixed text-2xl font-bold">4.2 MS</span>
              <span className="text-xs font-label uppercase text-on-surface-variant">Latency Response</span>
            </div>
            <div>
              <span className="block font-label text-primary-fixed text-2xl font-bold">12.8 EB</span>
              <span className="text-xs font-label uppercase text-on-surface-variant">Cloud Processing</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-end items-center relative h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary-fixed/10 to-transparent blur-3xl rounded-full"></div>
          <img 
            alt="Aether Dynamics Humanoid" 
            className="h-[80vh] object-contain grayscale brightness-75 contrast-125 z-10"
            src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
