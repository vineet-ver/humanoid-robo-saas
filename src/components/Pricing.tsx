import { motion } from "motion/react";

export default function Pricing() {
  return (
    <section className="py-24 px-8 md:px-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-headline font-bold text-white uppercase tracking-tight mb-4">DEPLOYMENT TIERS</h2>
        <div className="w-24 h-1 bg-secondary-container mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic */}
        <motion.div 
          whileHover={{ borderColor: "rgba(0, 251, 251, 0.5)" }}
          className="glass-panel p-10 flex flex-col items-center text-center border-outline/10 transition-all duration-500 group"
        >
          <span className="font-label text-xs uppercase text-on-surface-variant tracking-[0.3em] mb-6">Prototype</span>
          <h3 className="text-2xl font-headline font-bold text-white mb-2">Basic Core</h3>
          <div className="text-5xl font-label text-white my-8">$4,900<span className="text-sm text-on-surface-variant">/mo</span></div>
          <ul className="space-y-4 text-sm text-on-surface-variant mb-12 font-body">
            <li>5 Unit Maximum Fleet</li>
            <li>Standard Logic Core</li>
            <li>12/7 Technical Support</li>
            <li>Cloud Integration</li>
          </ul>
          <button className="w-full py-4 border border-outline/20 font-headline font-bold uppercase tracking-widest hover:bg-white hover:text-background transition-all">
            Initialize
          </button>
        </motion.div>

        {/* Pro */}
        <motion.div 
          className="glass-panel p-10 flex flex-col items-center text-center border-primary-fixed/30 bg-primary-fixed/5 relative group scale-105 z-20 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-2 bg-primary-fixed text-on-primary font-label text-[8px] font-bold uppercase tracking-tighter">
            RECOMMENDED_SYSTEM
          </div>
          <span className="font-label text-xs uppercase text-primary-fixed tracking-[0.3em] mb-6">Production</span>
          <h3 className="text-2xl font-headline font-bold text-white mb-2">Enterprise Pro</h3>
          <div className="text-5xl font-label text-white my-8">$12,500<span className="text-sm text-on-surface-variant">/mo</span></div>
          <ul className="space-y-4 text-sm text-on-surface-variant mb-12 font-body">
            <li>50 Unit Maximum Fleet</li>
            <li>High-Bandwidth Neural Core</li>
            <li>24/7 Priority Uplink</li>
            <li>Satellite Fallback</li>
          </ul>
          <button className="w-full py-4 bg-primary-container text-on-primary font-headline font-bold uppercase tracking-widest glow-cyan">
            Scale Up
          </button>
        </motion.div>

        {/* Enterprise */}
        <motion.div 
          whileHover={{ borderColor: "rgba(143, 3, 255, 0.5)" }}
          className="glass-panel p-10 flex flex-col items-center text-center border-outline/10 transition-all duration-500 group"
        >
          <span className="font-label text-xs uppercase text-on-surface-variant tracking-[0.3em] mb-6">Global</span>
          <h3 className="text-2xl font-headline font-bold text-white mb-2">Custom Apex</h3>
          <div className="text-5xl font-label text-white my-8">Contact</div>
          <ul className="space-y-4 text-sm text-on-surface-variant mb-12 font-body">
            <li>Unlimited Fleet Units</li>
            <li>Custom Neural Training</li>
            <li>On-Site Engineering</li>
            <li>Full Ethics Governance</li>
          </ul>
          <button className="w-full py-4 border border-outline/20 font-headline font-bold uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary transition-all">
            Request Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
