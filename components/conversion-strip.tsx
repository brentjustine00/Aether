import { Award, Clock, ShieldCheck, Star } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "4.9 Guest Rating",
    text: "Consistent excellence across tasting seasons.",
  },
  {
    icon: Award,
    title: "3 Michelin Stars",
    text: "A benchmark for precision and craft.",
  },
  {
    icon: ShieldCheck,
    title: "Dietary Care",
    text: "Allergies handled with advance notice.",
  },
  {
    icon: Clock,
    title: "Fast Confirmation",
    text: "Email confirmation in minutes.",
  },
] as const;

export default function ConversionStrip() {
  return (
    <section
      aria-label="Trust and benefits"
      className="relative w-full bg-[#0B0B0B] px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <item.icon className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm tracking-widest text-[#F5F1E8]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[#F5F1E8]/65 font-sans font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

