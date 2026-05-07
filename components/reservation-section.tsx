"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function minDateLocalISO() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = pad2(now.getMonth() + 1);
  const dd = pad2(now.getDate());
  return `${yyyy}-${mm}-${dd}`;
}

export default function ReservationSection() {
  // Compute client-side to avoid locale/timezone hydration mismatches.
  const minDate = useMemo(() => minDateLocalISO(), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(minDate);
  const [time, setTime] = useState("19:30");
  const [partySize, setPartySize] = useState(2);
  const [notes, setNotes] = useState("");

  return (
    <section
      id="reserve"
      className="relative w-full py-28 px-4 md:px-8 bg-[#0B0B0B] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="gold-divider w-24 mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#F5F1E8]">
            Reserve Your Table
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg text-[#F5F1E8]/80 font-sans font-light leading-relaxed tracking-wide">
            Aether offers one seating per evening. Reservations open 30 days in
            advance. For private dining, include a note and we’ll reach out.
          </p>
          <p className="mt-5 max-w-xl text-base md:text-lg text-[#F5F1E8]/70 font-sans font-light leading-relaxed tracking-wide">
            You’ll receive a confirmation email within minutes. For same‑day
            requests, we recommend calling the host directly.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
            <p className="text-sm tracking-widest text-[#D4AF37] mb-3">
              HOUSE DETAILS
            </p>
            <ul className="space-y-2 text-sm md:text-base text-[#F5F1E8]/80 font-sans font-light">
              <li>18 Rue de la Paix, 75002 Paris</li>
              <li>Tuesday–Saturday · 19:00–23:00</li>
              <li>Dress code: elegant</li>
              <li>Phone: +33 1 44 55 56 55</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-4">
              <p className="text-xs tracking-widest text-[#D4AF37] mb-1">
                LIMITED SEATING
              </p>
              <p className="text-sm text-[#F5F1E8]/80 font-sans font-light leading-relaxed">
                One seating per evening. Early reservations get the best table
                times.
              </p>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Reservation request received", {
              description: `For ${partySize} on ${date} at ${time}. We’ll email ${email} shortly.`,
            });
            setNotes("");
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                NAME
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 outline-none focus:border-[#D4AF37]/60"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                EMAIL
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 outline-none focus:border-[#D4AF37]/60"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                DATE
              </span>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                min={minDate}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] outline-none focus:border-[#D4AF37]/60"
              />
            </label>

            <label className="block">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                TIME
              </span>
              <input
                value={time}
                onChange={(e) => setTime(e.target.value)}
                type="time"
                step={900}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] outline-none focus:border-[#D4AF37]/60"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                PARTY SIZE
              </span>
              <input
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                type="number"
                min={1}
                max={12}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] outline-none focus:border-[#D4AF37]/60"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="block text-xs tracking-widest text-[#F5F1E8]/70 mb-2">
                NOTES (OPTIONAL)
              </span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 outline-none focus:border-[#D4AF37]/60"
                placeholder="Allergies, celebrations, private dining…"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button type="submit" className="btn-luxury px-6 py-3">
              Request Reservation
            </button>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm tracking-widest text-[#F5F1E8]/80 hover:text-[#F5F1E8] hover:border-white/25 transition-colors"
            >
              Browse Menus
            </a>
          </div>

          <p className="mt-6 text-xs tracking-wider text-[#F5F1E8]/55">
            This is a demo form. Wire it to your booking system when ready.
          </p>
        </form>
      </div>
    </section>
  );
}
