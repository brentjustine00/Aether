export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-lg tracking-wide text-[#F5F1E8]">
              Aether
            </p>
            <p className="mt-2 text-sm text-[#F5F1E8]/60 tracking-wider">
              Three Michelin Stars · Paris
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm tracking-widest text-[#F5F1E8]/70">
            <a href="#menu" className="hover:text-[#F5F1E8] transition-colors">
              Menu
            </a>
            <a
              href="#reserve"
              className="hover:text-[#F5F1E8] transition-colors"
            >
              Reservations
            </a>
            <a href="#chef" className="hover:text-[#F5F1E8] transition-colors">
              Chef
            </a>
            <a href="#top" className="hover:text-[#F5F1E8] transition-colors">
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 text-xs tracking-wider text-[#F5F1E8]/45">
          <p>© {new Date().getFullYear()} Aether. All rights reserved.</p>
          <p>Built with Next.js · Tailwind · GSAP</p>
        </div>
      </div>
    </footer>
  );
}

