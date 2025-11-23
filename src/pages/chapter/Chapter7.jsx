import React, { useState } from "react";

// ---- import your photos ----
import F1 from "../../assets/F1.jpeg";
import F2 from "../../assets/F2.jpeg";
import F3 from "../../assets/F3.jpeg";
import F4 from "../../assets/F4.jpeg";
import F5 from "../../assets/F5.jpeg";
import F6 from "../../assets/F6.jpeg";
import F7 from "../../assets/F7.jpeg";
import F10 from "../../assets/F10.jpeg";
import F11 from "../../assets/F11.jpeg";

// Topic image (round)
import FoodFestImage from "../../assets/ch7/food_fest.jpg";

// -------------------------------------------------------
// 3D NEUMORPHIC MULTI-COLOUR CHIPS
// -------------------------------------------------------
const chipColors = [
  "bg-rose-50 text-rose-900 border-rose-200",
  "bg-emerald-50 text-emerald-900 border-emerald-200",
  "bg-cyan-50 text-cyan-900 border-cyan-200",
  "bg-amber-50 text-amber-900 border-amber-200",
  "bg-indigo-50 text-indigo-900 border-indigo-200",
  "bg-lime-50 text-lime-900 border-lime-200",
  "bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200",
  "bg-violet-50 text-violet-900 border-violet-200",
];

function Chip({ label, index }) {
  const color = chipColors[index % chipColors.length];

  return (
    <span
      className={`
        inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border ${color}
        shadow-[4px_4px_8px_rgba(0,0,0,0.12),-4px_-4px_8px_rgba(255,255,255,0.9)]
        hover:shadow-[6px_6px_12px_rgba(0,0,0,0.17),-6px_-6px_12px_rgba(255,255,255,1)]
        transition-all
      `}
    >
      <span className="h-2 w-2 rounded-full bg-current shadow-[2px_2px_4px_rgba(0,0,0,0.25),-2px_-2px_4px_rgba(255,255,255,1)]" />
      {label}
    </span>
  );
}

// -------------------------------------------------------
// SECTION CARD — Style-B + hover effect added
// -------------------------------------------------------
function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: "border-emerald-200 bg-emerald-50/60 text-emerald-900",
    cyan: "border-cyan-200 bg-cyan-50/60 text-cyan-900",
    amber: "border-amber-200 bg-amber-50/60 text-amber-900",
    slate: "border-slate-200 bg-white text-slate-900",
  };

  return (
    <div
      className={`
        rounded-2xl border p-5 md:p-6 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        ${tones[tone]}
      `}
    >
      <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

// -------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------
export default function Chapter7Section() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const photos = [
    { src: F1, alt: "Ralahami Kade stall front" },
    { src: F2, alt: "Team preparing the stall" },
    { src: F3, alt: "Group selfie at the stall" },
    { src: F4, alt: "Serving customers" },
    { src: F5, alt: "Crowd around the stall" },
    { src: F6, alt: "Team with flyers and cash" },
    { src: F11, alt: "Team group photo" },
    { src: F7, alt: "Busy time at counter" },
    { src: F10, alt: "Ralahami Kade table close-up" },
  ];

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">

        {/* SOFT BLOBS */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full
          bg-gradient-to-br from-emerald-200 to-sky-200 opacity-50 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full
          bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-50 blur-sm" />

        <div className="relative bg-white bg-opacity-95 rounded-3xl shadow-xl px-4 py-8 md:px-8 md:py-10">

          {/* HEADER */}
          <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 07</p>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Food Festival – Ralahami Kadé
              </h1>

              <p className="mt-2 text-slate-600">
                Our team planned and ran a food stall featuring hot dogs, sandwiches, and drinks.
                We practiced event planning, teamwork, customer handling, and money management.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Event planning",
                  "Menu & pricing",
                  "Roles",
                  "Crowd handling",
                  "Sales",
                  "Reflection",
                ].map((c, i) => (
                  <Chip key={c} label={c} index={i} />
                ))}
              </div>
            </div>

            {/* ROUND ICON */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full shadow-md">
                <img
                  src={FoodFestImage}
                  alt="Food Festival"
                  className="h-full w-full rounded-full object-cover border-4 border-white shadow"
                />
              </div>
            </div>
          </header>

          {/* OBJECTIVES + ROLES */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SectionCard tone="cyan" title="Objectives">
              <ul className="list-disc pl-5 space-y-1">
                <li>Plan and operate a food stall as a team.</li>
                <li>Practice budgeting, pricing, and cash handling.</li>
                <li>Serve customers efficiently and politely.</li>
              </ul>
            </SectionCard>

            <SectionCard tone="emerald" title="Roles & tasks">
              <ul className="list-disc pl-5 space-y-1">
                <li>Lead & cash: pricing, money, record keeping.</li>
                <li>Food prep: sauces, buns, fillings, packaging.</li>
                <li>Front desk: greeting, taking orders, queue control.</li>
                <li>Logistics: stock, ice, cleaning, photos.</li>
              </ul>
            </SectionCard>
          </div>

          {/* GALLERY */}
          <SectionCard tone="slate" title="Photo Gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {photos.map((p, i) => (
                <button
                  key={i}
                  className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
                  onClick={() => openLightbox(i)}
                >
                  <img src={p.src} alt={p.alt} className="h-40 md:h-48 w-full object-cover" />
                  <span className="absolute inset-0 hidden group-hover:flex items-center justify-center 
                    bg-black/30 text-white text-sm">
                    Click to view
                  </span>
                </button>
              ))}
            </div>
          </SectionCard>

          {/* LIGHTBOX */}
          {open && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
              <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setOpen(false)}>×</button>
              <button className="absolute left-4 md:left-8 text-white text-2xl" onClick={prev}>‹</button>

              <img
                src={photos[index].src}
                alt={photos[index].alt}
                className="max-h-[80vh] max-w-full rounded-lg"
              />

              <button className="absolute right-4 md:right-8 text-white text-2xl" onClick={next}>›</button>
            </div>
          )}

          {/* RESULTS */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="What went well" tone="emerald">
              <ul className="list-disc pl-5 space-y-1">
                <li>Attractive branding & teamwork pulled a big crowd.</li>
                <li>Fast assembly line increased serving speed.</li>
                <li>Clear roles reduced confusion during busy hours.</li>
              </ul>
            </SectionCard>

            <SectionCard title="What to improve next time" tone="amber">
              <ul className="list-disc pl-5 space-y-1">
                <li>Prepare more change and pre-cut ingredients.</li>
                <li>Better queue management + printed menu with prices.</li>
                <li>Track sales & stock with a small digital sheet/app.</li>
              </ul>
            </SectionCard>
          </div>

          {/* SELF REFLECTION */}
          <SectionCard tone="emerald" title="My Self-Reflection (Chapter 07)">
            <p>
              This event taught me how to work under pressure, communicate with customers,
              manage sales, and adapt quickly. Next time I will use a checklist,
              assign clearer roles, and maintain a real-time tracker for stock and income.
            </p>
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
