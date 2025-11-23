import React from "react";

// Importing the job image for the topic
import PortfolioImage from "../../assets/ch4/portfolio.jpg"; // Adjust the path as necessary

// Each chip has unique colors now
const chips = [
  { label: "Portfolio types", wrap: "border-emerald-200 bg-emerald-50 text-emerald-900", dot: "bg-emerald-500" },
  { label: "PEAKS", wrap: "border-cyan-200 bg-cyan-50 text-cyan-900", dot: "bg-cyan-500" },
  { label: "Master vs Targeted", wrap: "border-amber-200 bg-amber-50 text-amber-900", dot: "bg-amber-500" },
  { label: "Organization", wrap: "border-rose-200 bg-rose-50 text-rose-900", dot: "bg-rose-500" },
  { label: "Assessment portfolio", wrap: "border-violet-200 bg-violet-50 text-violet-900", dot: "bg-violet-500" },
  { label: "Reflection (WSN)", wrap: "border-indigo-200 bg-indigo-50 text-indigo-900", dot: "bg-indigo-500" },
  { label: "Platforms", wrap: "border-lime-200 bg-lime-50 text-lime-900", dot: "bg-lime-500" },
];

function Chip({ label, wrap, dot }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium 
      ${wrap} transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}

// SectionCard with spacing + 3D hover
function SectionCard({ title, tone = "emerald", children }) {
  const tones = {
    emerald: { wrap: "border-emerald-200 bg-emerald-50/70", title: "text-emerald-900" },
    cyan: { wrap: "border-cyan-200 bg-cyan-50/70", title: "text-cyan-900" },
    amber: { wrap: "border-amber-200 bg-amber-50/70", title: "text-amber-900" },
    slate: { wrap: "border-slate-200 bg-white", title: "text-slate-900" },
    violet: { wrap: "border-violet-200 bg-violet-50/70", title: "text-violet-900" },
  };

  const t = tones[tone] || tones.slate;

  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-6 
      shadow-[0_8px_20px_rgba(0,0,0,0.05)] 
      transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
    >
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter4Section() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full 
          bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm"></div>

        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full 
          bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm"></div>

        {/* Main content card */}
        <div
          className="relative bg-white bg-opacity-95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10
            backdrop-blur-[3px] border border-white/60"
        >
          {/* Header */}
          <header className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 04</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Portfolio Management
              </h1>
              <p className="mt-2 text-slate-600">
                Build a portfolio that presents the real you, organized clearly, and tailored to your goals.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Chip key={c.label} label={c.label} wrap={c.wrap} dot={c.dot} />
                ))}
              </div>
            </div>

            {/* Round Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-28 w-28 md:h-36 md:w-36 group">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200 via-sky-200 to-cyan-300 
                shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <img
                  src={PortfolioImage}
                  alt="Portfolio Image"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl 
                  transform transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                />
              </div>
            </div>
          </header>

          {/* CONTENT (unchanged text, only spacing added around cards) */}

          <div className="space-y-10">
            {/* What is a portfolio + Why keep one */}
            <div className="grid md:grid-cols-2 gap-8">
              <SectionCard tone="cyan" title="What is a portfolio?">
                <p>
                  It is a presentation of yourself — a place to organize who you are, what you can do, and
                  what you have achieved. It should reflect the <span className="font-semibold">real you</span>.
                </p>
              </SectionCard>

              <SectionCard tone="emerald" title="Why keep one?">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Draw attention and add credibility with proof.</li>
                  <li>Make intangibles (like teamwork or leadership) visible.</li>
                  <li>Build confidence and open links to opportunities.</li>
                </ul>
              </SectionCard>
            </div>

            {/* Types & PEAKS */}
            <div className="grid md:grid-cols-2 gap-8">
              <SectionCard tone="amber" title="Types of portfolios">
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-semibold">Personal</span> – creative work, interests, style.</li>
                  <li><span className="font-semibold">Career/Dossier</span> – CV, letters, achievements.</li>
                  <li><span className="font-semibold">Employment</span> – work samples, evaluations, training.</li>
                  <li><span className="font-semibold">Assessment</span> – growth over time for study.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="emerald" title="PEAKS checklist">
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-semibold">P</span>ersonal characteristics</li>
                  <li><span className="font-semibold">E</span>xperience</li>
                  <li><span className="font-semibold">A</span>ccomplishments</li>
                  <li><span className="font-semibold">K</span>nowledge</li>
                  <li><span className="font-semibold">S</span>kills</li>
                </ul>
                <p className="mt-2 text-sm">Keep PEAKS in mind when you collect and select items.</p>
              </SectionCard>
            </div>

            {/* Master vs Targeted */}
            <div className="grid md:grid-cols-2 gap-8">
              <SectionCard tone="slate" title="Master portfolio (your archive)">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Big collection of useful documents (PEAKS-based).</li>
                  <li>Include bio data, people skills, learning skills, self-management, tasks, community service.</li>
                  <li>Recent documents are powerful; note missing items to add later.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="slate" title="Targeted portfolio (for a role)">
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Describe the opportunity realistically.</li>
                  <li>Identify PEAKS the interviewer wants.</li>
                  <li>Select only items that prove you have those PEAKS.</li>
                </ul>
              </SectionCard>
            </div>

            {/* Organization & After */}
            <div className="grid md:grid-cols-2 gap-8">
              <SectionCard tone="violet" title="Organizing your portfolio">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cover page (name, date, professional photo, address).</li>
                  <li>Table of contents and clear divisions.</li>
                  <li>Keep it neat, precise, and professional.</li>
                  <li>Decorate only after content is organized.</li>
                </ul>
              </SectionCard>

              <SectionCard tone="emerald" title="After you build it">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Look back and reflect: what improved, what’s missing?</li>
                  <li>Update regularly; keep a carrying case/binder if physical.</li>
                  <li>Share evaluation criteria when used for assessment.</li>
                </ul>
              </SectionCard>
            </div>

            <SectionCard tone="amber" title="Assessment portfolio: purpose & advantages">
              <ul className="list-disc pl-5 space-y-1">
                <li>Shows real performance, progress, and responsibility.</li>
                <li>Supports reflective and creative learning.</li>
                <li>Clear evidence for teacher–student collaboration.</li>
                <li>Advantages: shows progress, different learning styles, motivation, meta-cognition, individual differences, and clear communication.</li>
                <li>Challenges: time-consuming; high student involvement.</li>
              </ul>
            </SectionCard>

            <SectionCard tone="cyan" title="Reflection model – What? So what? Now what?">
              <ol className="list-decimal pl-5 space-y-1">
                <li><span className="font-semibold">What?</span> Facts: what happened?</li>
                <li><span className="font-semibold">So what?</span> Meaning and feelings: what was learned?</li>
                <li><span className="font-semibold">Now what?</span> Next steps: apply lessons; plan action.</li>
              </ol>
            </SectionCard>

            <SectionCard tone="slate" title="Popular platforms for digital portfolios">
              <p className="mb-2">Pick one format and keep it updated.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>LinkedIn, GitHub Pages (for developers), WordPress, Google Sites</li>
                <li>Behance, Adobe Portfolio (creatives), Wix, Squarespace</li>
                <li>Blogs/websites, PPT/PDF for simple sharing</li>
              </ul>
            </SectionCard>

            <SectionCard tone="emerald" title="My Self-Reflection (Chapter 04)">
              <p>
                Building my portfolio helps me see my growth and strengths. I will keep a master archive and create a targeted version for each job. Using the What–So what–Now what model, I will update items after each project and write a short reflection. My next actions: add recent projects, map each to PEAKS, and prepare a clean cover page and contents.
              </p>
            </SectionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
