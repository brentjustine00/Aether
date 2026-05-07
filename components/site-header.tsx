import { Menu } from "lucide-react";

const navItems = [
  { label: "Experience", href: "#top" },
  { label: "Appetizers", href: "#appetizers" },
  { label: "Chef", href: "#chef" },
  { label: "Signature", href: "#signature" },
  { label: "Menu", href: "#menu" },
  { label: "À la Carte", href: "#alacarte" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reserve" },
] as const;

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-4">
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a
              href="#top"
              className="font-serif text-lg tracking-wide text-[#F5F1E8]"
            >
              Aether
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.slice(0, 5).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-widest text-[#F5F1E8]/80 hover:text-[#F5F1E8] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#reserve"
                className="hidden sm:inline-flex btn-luxury px-4 py-2 text-sm"
              >
                Reserve
              </a>

              <details className="md:hidden relative">
                <summary className="list-none cursor-pointer rounded-xl border border-white/10 p-2 text-[#F5F1E8]/90 hover:text-[#F5F1E8] hover:border-white/20 transition-colors">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Open menu</span>
                </summary>
                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-2 shadow-2xl">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm tracking-widest text-[#F5F1E8]/85 hover:text-[#F5F1E8] hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#reserve"
        className="sm:hidden fixed right-4 bottom-4 z-50 btn-luxury px-5 py-3 shadow-2xl"
      >
        Reserve
      </a>
    </header>
  );
}
