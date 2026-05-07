const starters = [
  { name: "Gillardeau Oysters", desc: "Seaweed mignonette, yuzu zest", price: "€38" },
  { name: "Langoustine", desc: "Saffron beurre monté, citrus oil", price: "€54" },
  { name: "White Asparagus", desc: "Beurre blanc, trout roe", price: "€42" },
  { name: "Heirloom Tomato", desc: "Basil distillate, aged vinegar", price: "€28" },
] as const;

const mains = [
  { name: "Dover Sole", desc: "Champagne sabayon, micro herbs", price: "€76" },
  { name: "Aged Duck", desc: "Black garlic lacquer, smoked jus", price: "€68" },
  { name: "Wagyu", desc: "Charred allium, pepperleaf", price: "€98" },
  { name: "Seasonal Vegetable Plate", desc: "Garden textures, herb emulsion", price: "€52" },
] as const;

const desserts = [
  { name: "Single-Origin Chocolate", desc: "Burnt honey, sea salt", price: "€22" },
  { name: "Citrus & Verbena", desc: "Sorbet, candied peel, crème légère", price: "€20" },
  { name: "Vanilla Mille-Feuille", desc: "Caramelized puff pastry, cream", price: "€24" },
  { name: "Cheese Moment", desc: "Aged comté, quince, walnut", price: "€26" },
] as const;

function MenuList({
  title,
  items,
}: {
  title: string;
  items: readonly { name: string; desc: string; price: string }[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
      <p className="text-sm tracking-widest text-[#D4AF37]">{title}</p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-6">
            <div>
              <p className="text-base md:text-lg text-[#F5F1E8] font-serif font-light">
                {item.name}
              </p>
              <p className="mt-1 text-sm text-[#F5F1E8]/70 font-sans font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
            <p className="text-sm md:text-base text-[#F5F1E8]/80 tracking-widest">
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AlaCarteSection() {
  return (
    <section
      id="alacarte"
      className="relative w-full py-28 px-4 md:px-8 bg-[#0B0B0B] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="gold-divider w-24 mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#F5F1E8]">
            À la Carte
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide">
            Prefer to build your own arc? Our à la carte selections keep the
            same precision—clean flavors, calibrated sauces, and disciplined
            portioning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MenuList title="STARTERS" items={starters} />
          <MenuList title="MAINS" items={mains} />
          <MenuList title="DESSERTS" items={desserts} />
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.2em] text-[#F5F1E8]/50">
          Menu items may change with the market.
        </p>
      </div>
    </section>
  );
}

