import { Cpu, Zap, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Specs() {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-headline font-bold text-white uppercase tracking-tight">ENGINEERING SPECS</h2>
          <p className="text-on-surface-variant font-label mt-2 uppercase tracking-widest text-sm">System: AETHER_OS_v5.04</p>
        </div>
        <div className="text-right">
          <Cpu className="text-primary-fixed w-10 h-10" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {/* Bento Card 1 */}
        <motion.div 
          whileHover={{ backgroundColor: "rgba(53, 53, 52, 0.2)" }}
          className="glass-panel p-8 min-h-[400px] flex flex-col justify-between transition-all group"
        >
          <div className="space-y-4">
            <span className="text-xs font-label text-primary-fixed border border-primary-fixed/30 px-2 py-1 uppercase tracking-widest">Processing</span>
            <h3 className="text-3xl font-headline font-bold text-white leading-tight">Neural Link 5.0</h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed">
              Real-time AI processing with local inference. Capable of 400 trillion operations per second without cloud dependency.
            </p>
          </div>
          <div className="w-full h-32 bg-surface-container-high relative overflow-hidden mt-8">
            <div className="absolute inset-0 blueprint-grid opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="w-16 h-16 text-primary-fixed opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
        </motion.div>

        {/* Bento Card 2 */}
        <motion.div 
          whileHover={{ backgroundColor: "rgba(53, 53, 52, 0.2)" }}
          className="glass-panel p-8 min-h-[400px] flex flex-col justify-between transition-all group border-x-0 md:border-x border-outline/10"
        >
          <div className="space-y-4">
            <span className="text-xs font-label text-primary-fixed border border-primary-fixed/30 px-2 py-1 uppercase tracking-widest">Actuation</span>
            <h3 className="text-3xl font-headline font-bold text-white leading-tight">Bionic Precision</h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed">
              Sub-millimeter motor control via carbon-fiber synthetic tendons. Achieves fluid motion indistinguishable from human biology.
            </p>
          </div>
          <div className="mt-8 bg-surface-container-high p-4 border-l-4 border-secondary-container">
            <span className="text-[10px] font-label text-on-surface-variant uppercase">Stress Test Sequence</span>
            <div className="h-1 bg-outline-variant mt-2 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-secondary-container"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bento Card 3 */}
        <motion.div 
          whileHover={{ backgroundColor: "rgba(53, 53, 52, 0.2)" }}
          className="glass-panel p-8 min-h-[400px] flex flex-col justify-between transition-all group"
        >
          <div className="space-y-4">
            <span className="text-xs font-label text-primary-fixed border border-primary-fixed/30 px-2 py-1 uppercase tracking-widest">Network</span>
            <h3 className="text-3xl font-headline font-bold text-white leading-tight">Infinite Scale</h3>
            <p className="text-on-surface-variant text-sm font-body leading-relaxed">
              Cloud-synced fleet management. Deploy thousand-unit clusters with unified neural updates across encrypted satellites.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-8">
            <div className="h-12 border border-outline/10 flex items-center justify-center font-label text-[10px] text-on-surface-variant">NODE_01</div>
            <div className="h-12 border border-outline/10 flex items-center justify-center font-label text-[10px] text-on-surface-variant">NODE_02</div>
            <div className="h-12 border border-outline/10 flex items-center justify-center font-label text-[10px] text-on-surface-variant">NODE_03</div>
            <div className="h-12 border border-primary-fixed/50 bg-primary-fixed/5 flex items-center justify-center font-label text-[10px] text-primary-fixed">NODE_ACTIVE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
