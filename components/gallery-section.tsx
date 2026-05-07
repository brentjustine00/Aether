import Image from "next/image";

const photos = [
  {
    src: "/gallery-1.svg",
    alt: "Fine dining plated dish",
  },
  {
    src: "/gallery-2.svg",
    alt: "Chef plating in a professional kitchen",
  },
  {
    src: "/gallery-3.svg",
    alt: "Elegant restaurant table setting",
  },
  {
    src: "/gallery-4.svg",
    alt: "Wine pairing glasses and bottle",
  },
] as const;

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative w-full py-24 px-4 md:px-8 bg-[#0B0B0B]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="gold-divider w-24 mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#F5F1E8]">
            Atmosphere & Craft
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide">
            A glimpse into the experience—plating, the room, and the quiet
            details that make an evening feel inevitable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((p, idx) => (
            <div
              key={p.src}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={idx === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-[0.2em] text-[#F5F1E8]/50">
          Gallery visuals are bundled with the site.
        </p>
      </div>
    </section>
  );
}
