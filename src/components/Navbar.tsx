import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/15 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.05)] flex justify-between items-center px-8 py-4 transition-all duration-500">
      <div className="text-2xl font-black tracking-widest text-white uppercase font-headline">
        AETHER DYNAMICS
      </div>
      <div className="hidden md:flex gap-10">
        <a className="font-headline tracking-tighter uppercase text-white border-b-2 border-primary-fixed pb-1" href="#">FLEET</a>
        <a className="font-headline tracking-tighter uppercase text-neutral-500 hover:text-primary-fixed transition-colors" href="#">SPECS</a>
        <a className="font-headline tracking-tighter uppercase text-neutral-500 hover:text-primary-fixed transition-colors" href="#">NETWORK</a>
        <a className="font-headline tracking-tighter uppercase text-neutral-500 hover:text-primary-fixed transition-colors" href="#">PRICING</a>
      </div>
      <div className="flex gap-4 items-center">
        <button className="font-label text-xs tracking-widest text-neutral-400 hover:text-white transition-all uppercase px-4 py-2 border border-white/10 hover:bg-white/5">
          TERMINAL ACCESS
        </button>
        <button className="bg-primary-container text-on-primary font-headline font-bold tracking-widest uppercase px-6 py-2 hover:bg-white transition-all">
          DEPLOY UNIT
        </button>
      </div>
    </nav>
  );
}
