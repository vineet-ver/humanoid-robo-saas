export default function Footer() {
  return (
    <footer className="bg-neutral-950 w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-12 py-10 z-20 relative">
      <div className="mb-8 md:mb-0">
        <div className="text-lg font-bold text-white font-headline uppercase tracking-widest mb-2">AETHER DYNAMICS</div>
        <p className="font-label text-xs uppercase tracking-widest text-neutral-600">© 2024 AETHER DYNAMICS. ALL SYSTEMS OPERATIONAL.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-xs text-white tracking-widest mb-2">CORE</h5>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">SYSTEM STATUS</a>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">API DOCS</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-xs text-white tracking-widest mb-2">SECURITY</h5>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">SECURITY PROTOCOLS</a>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">ETHICS & SAFETY</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-xs text-white tracking-widest mb-2">RESOURCES</h5>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">HARDWARE SPECS</a>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">FLEET CASE STUDIES</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-xs text-white tracking-widest mb-2">LEGAL</h5>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">LEGAL</a>
          <a className="font-label text-xs uppercase tracking-widest text-neutral-600 hover:text-secondary-fixed transition-colors" href="#">PRIVACY</a>
        </div>
      </div>
    </footer>
  );
}
