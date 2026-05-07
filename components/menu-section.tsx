import { Sparkles, Wine } from "lucide-react";

const courses = [
  {
    title: "Signature Tasting",
    subtitle: "12 courses · 3h",
    price: "€340",
    items: [
      "Amuse-bouche trilogy",
      "White asparagus, beurre blanc, citrus zest",
      "Dover sole, champagne sabayon, micro herbs",
      "Aged duck, black garlic, lacquered jus",
      "Garden peas, smoked dashi, mint oil",
      "Pre-dessert citrus palate cleanser",
      "Single-origin chocolate, burnt honey, sea salt",
      "Mignardises: madeleine, pâte de fruit, cacao nib",
    ],
  },
  {
    title: "Chef’s Seasonal",
    subtitle: "8 courses · 2h",
    price: "€260",
    items: [
      "Market produce selection",
      "Hand-dived scallop, yuzu",
      "Charcoal leek, hazelnut",
      "Wagyu, smoked onion jus",
      "Roasted langoustine, saffron emulsion",
      "Cheese moment: aged comté, quince",
      "Chocolate, burnt honey",
    ],
  },
] as const;

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="relative w-full py-28 px-4 md:px-8 bg-[#0B0B0B] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="gold-divider w-24 mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#F5F1E8]">
            Tasting Menus
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide">
            Aether is an orchestration of seasonality, terroir, and restraint.
            The menu evolves weekly with the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-light text-[#F5F1E8]">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm tracking-widest text-[#D4AF37]">
                    {course.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg md:text-xl text-[#F5F1E8] font-sans font-light">
                    {course.price}
                  </p>
                  <p className="mt-1 text-xs text-[#F5F1E8]/60 tracking-wider">
                    per guest
                  </p>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {course.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm md:text-base text-[#F5F1E8]/85 font-sans font-light leading-relaxed"
                  >
                    <Sparkles className="mt-0.5 h-4 w-4 text-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a href="#reserve" className="btn-luxury w-full sm:w-auto px-5 py-3">
                  Reserve a Table
                </a>
                <a
                  href="#reserve"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm tracking-widest text-[#F5F1E8]/80 hover:text-[#F5F1E8] hover:border-white/25 transition-colors"
                >
                  <Wine className="h-4 w-4 text-[#D4AF37]" />
                  Wine Pairing
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.2em] text-[#F5F1E8]/50">
          Please inform us of allergies at least 48 hours in advance.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Wine Pairing",
              text: "Sommelier-led pairings focused on precision and lift. Available classic or low-ABV.",
            },
            {
              title: "Non‑Alcoholic",
              text: "Ferments, distillates, and infusions built course-by-course for full narrative coherence.",
            },
            {
              title: "Private Dining",
              text: "An intimate salon experience for 6–12 guests. Request details in the reservation notes.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm tracking-widest text-[#D4AF37]">
                {card.title}
              </p>
              <p className="mt-3 text-sm md:text-base text-[#F5F1E8]/75 font-sans font-light leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
