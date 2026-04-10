import { motion } from "motion/react";

export default function FleetDashboard() {
  return (
    <section className="py-24 px-8 md:px-24 bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 glass-panel p-1 border-outline/20 relative overflow-hidden h-[600px]">
          <div className="absolute top-4 left-4 z-20 flex items-center gap-4">
            <div className="bg-surface-container-lowest px-4 py-2 border border-outline/20 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-white">LIVE_FLEET_OPERATIONS</span>
            </div>
          </div>
          
          {/* Mock Map Background */}
          <div className="w-full h-full grayscale opacity-40 bg-cover bg-center relative" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 blueprint-grid opacity-30"></div>
            
            {/* Map Markers */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary-fixed rounded-full shadow-[0_0_10px_#00fbfb]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-fixed rounded-full shadow-[0_0_10px_#00fbfb]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-2/3 left-1/4 w-4 h-4 bg-primary-fixed rounded-full shadow-[0_0_10px_#00fbfb]"
            />
          </div>

          {/* UI Elements Over Map */}
          <div className="absolute bottom-8 right-8 space-y-4 z-20">
            <div className="glass-panel p-6 w-64">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label text-[10px] text-on-surface-variant uppercase">Current Status</span>
                <span className="text-primary-fixed font-bold text-xs">OPTIMAL</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white">UNIT_A4-77</span>
                  <span className="text-[10px] text-primary-fixed">94% PWR</span>
                </div>
                <div className="w-full h-1 bg-outline-variant">
                  <div className="w-[94%] h-full bg-primary-fixed"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white">UNIT_B1-20</span>
                  <span className="text-[10px] text-error">12% PWR</span>
                </div>
                <div className="w-full h-1 bg-outline-variant">
                  <div className="w-[12%] h-full bg-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 flex-1 h-full flex flex-col justify-between">
            <h4 className="font-headline font-bold text-white uppercase text-xl">TELEMETRY</h4>
            <div className="py-8 space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Packet Loss</span>
                <span className="text-3xl font-label text-white">0.002%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Active Clusters</span>
                <span className="text-3xl font-label text-white">1,402</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Global Load</span>
                <span className="text-3xl font-label text-primary-fixed">42%</span>
              </div>
            </div>
            <button className="w-full py-4 border border-outline/20 font-label text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              Download Logs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
