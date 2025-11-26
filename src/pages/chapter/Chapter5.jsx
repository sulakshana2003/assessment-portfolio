import React from "react";

// Header image (replace with your chapter header image if you want)
import MeetingImage from "../../assets/ch5/rp.jpg";

// Images from your uploaded screenshots
import ProcessImg from "../../assets/ch5/rpwriting.jpg";
import ExamplesImg from "../../assets/ch5/ex.jpg";
import ComponentsImg from "../../assets/ch5/keyComp.jpg";
import StepsImg from "../../assets/ch5/steps.jpg";
import GuidelinesImg from "../../assets/ch5/successfull.jpg";

// Pastel chip colors — all different
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

const chips = [
  "Overview",
  "Mastering Research",
  "Research Process",
  "Real-Life Research",
  "Paper Components",
  "8-Step Method",
  "Guidelines",
  "Reflection",
];

function Chip({ label, index }) {
  const color = chipColors[index % chipColors.length];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium border ${color}
      shadow-[4px_4px_8px_rgba(0,0,0,0.12),-4px_-4px_8px_rgba(255,255,255,0.9)]
      hover:shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,1)]
      transition-all`}
    >
      <span className="h-2 w-2 rounded-full bg-current shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.9)]" />
      {label}
    </span>
  );
}

function SectionCard({ title, children }) {
  return (
    <div
      className="
      my-5 p-6 rounded-3xl
      bg-[#f6f8fa]
      border border-white/60
      shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_#ffffff]
      hover:-translate-y-1 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.15),-10px_-10px_20px_#ffffff]
      transition-all duration-300
    "
    >
      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">
        {title}
      </h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter5Section() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">
        {/* Pastel blobs */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main card */}
        <div className="relative bg-white/95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">
          {/* Header */}
          <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Chapter 05
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Research Paper Writing
              </h1>

              <p className="mt-2 text-slate-600">
                Learn the academic research process, structure, key components,
                and systematic methods to write a strong research paper.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {chips.map((c, i) => (
                  <Chip key={i} label={c} index={i} />
                ))}
              </div>
            </div>

            {/* Round header image (placeholder) */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative h-28 w-28 md:h-36 md:w-36
                rounded-full shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,1)]
                hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(255,255,255,1)]
                transition"
              >
                <img
                  src={MeetingImage}
                  alt="Research"
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>
          </header>

          {/* Overview */}
          <SectionCard title="Overview">
            <p>
              This session was conducted by{" "}
              <strong>Ms. Ishadi Nilawerese</strong>, focusing on the
              fundamentals of research writing. The lecture covered research
              structure, academic writing principles, and techniques for
              presenting findings clearly and professionally.
            </p>
          </SectionCard>

          {/* Mastering Research Writing */}
          <SectionCard title="Mastering Research Writing">
            <p>
              Research writing is essential for academic and professional
              success. It involves analyzing information, conducting thorough
              research, and presenting findings in a structured, credible, and
              academically rigorous manner.
            </p>
          </SectionCard>

          {/* Research Process + Image */}
          <SectionCard title="Research Writing Process">
            <img src={ProcessImg} className="rounded-xl w-full mb-3 shadow" />
            <ul className="list-disc pl-5 space-y-1">
              <li>Topic Selection</li>
              <li>Literature Review</li>
              <li>Methodology</li>
              <li>Data Collection</li>
              <li>Analysis</li>
              <li>Writing & Presentation</li>
            </ul>
          </SectionCard>

          {/* Real-Life Examples */}
          <SectionCard title="Real-Life Examples of Research">
            <img src={ExamplesImg} className="rounded-xl w-full mb-3 shadow" />
            <ul className="list-disc pl-5 space-y-1">
              <li>Comparing smartphones before purchasing</li>
              <li>Testing algorithms in software development</li>
              <li>Observing customer behavior in shops</li>
              <li>Measuring student preferences for food or services</li>
            </ul>
          </SectionCard>

          {/* Key Components */}
          <SectionCard title="Key Components of a Research Paper">
            <img
              src={ComponentsImg}
              className="rounded-xl w-full mb-3 shadow"
            />
            <ul className="list-disc pl-5 space-y-1">
              <li>Title</li>
              <li>Author information</li>
              <li>Table of Contents</li>
              <li>Declaration</li>
              <li>Acknowledgments</li>
              <li>Abstract</li>
              <li>Introduction</li>
              <li>Literature Review</li>
              <li>Methodology</li>
              <li>Results & Discussion</li>
              <li>Conclusion</li>
              <li>References</li>
            </ul>
          </SectionCard>

          {/* 8 Steps */}
          <SectionCard title="8 Steps to Write a Research Paper">
            <img src={StepsImg} className="rounded-xl w-full mb-3 shadow" />
            <ul className="list-disc pl-5 space-y-1">
              <li>Carry out Research</li>
              <li>Choose a Good Topic</li>
              <li>Write Down Notes</li>
              <li>Brainstorm the Outline</li>
              <li>Write Prospectus & Outline</li>
              <li>Write Good Introduction</li>
              <li>Write Proper Body</li>
              <li>Give Good Conclusion</li>
            </ul>
          </SectionCard>

          {/* Guidelines */}
          <SectionCard title="Guidelines for Writing a Successful Research Paper">
            <img
              src={GuidelinesImg}
              className="rounded-xl w-full mb-3 shadow"
            />
            <ul className="list-disc pl-5 space-y-1">
              <li>Use a unique, clear writing style.</li>
              <li>Avoid unnecessary jargon.</li>
              <li>Explain scientific terms clearly.</li>
              <li>Use evidence-based arguments.</li>
              <li>Follow all publication rules.</li>
              <li>Proofread from top to bottom.</li>
            </ul>
          </SectionCard>

          {/* Reflection */}
          <SectionCard title="Reflection">
            <p>
              I completed a research project on{" "}
              <strong>
                “The Impact of Emotional Intelligence on Team Performance”
              </strong>
              . This experience improved my ability to conduct proper academic
              research and present my findings in a structured, professional
              way.
            </p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
