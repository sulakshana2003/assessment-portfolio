import React from "react";

// Importing Job Image
import JobImage from "../../assets/ch3/job.jpg"; // Adjust the path as necessary

// Chips
const chips = [
  "Job search",
  "Company research",
  "Interview basics",
  "Non‑verbal",
  "Active listening",
  "6/7 Cs",
  "STAR answers",
  "Mock interview",
];

const chipStyles = {
  "Job search": {
    wrapper: "border-emerald-200 bg-emerald-50 text-emerald-900",
    dot: "bg-emerald-500",
  },
  "Company research": {
    wrapper: "border-cyan-200 bg-cyan-50 text-cyan-900",
    dot: "bg-cyan-500",
  },
  "Interview basics": {
    wrapper: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
  "Non‑verbal": {
    wrapper: "border-teal-200 bg-teal-50 text-teal-900",
    dot: "bg-teal-500",
  },
  "Active listening": {
    wrapper: "border-violet-200 bg-violet-50 text-violet-900",
    dot: "bg-violet-500",
  },
  "6/7 Cs": {
    wrapper: "border-indigo-200 bg-indigo-50 text-indigo-900",
    dot: "bg-indigo-500",
  },
  "STAR answers": {
    wrapper: "border-rose-200 bg-rose-50 text-rose-900",
    dot: "bg-rose-500",
  },
  "Mock interview": {
    wrapper: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900",
    dot: "bg-fuchsia-500",
  },
};

// Chip Component for individual labels
function Chip({ label }) {
  const s =
    chipStyles[label] || {
      wrapper: "border-gray-200 bg-gray-50 text-gray-900",
      dot: "bg-gray-400",
    };
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 " +
        s.wrapper
      }
    >
      <span className={"h-2 w-2 rounded-full " + s.dot} />
      {label}
    </span>
  );
}

// SectionCard component, styled with background images and shadows
function SectionCard({ tone = "emerald", title, children, backgroundImage }) {
  const tones = {
    emerald: { wrap: "border-emerald-200 bg-emerald-50", title: "text-emerald-900" },
    cyan: { wrap: "border-cyan-200 bg-cyan-50", title: "text-cyan-900" },
    amber: { wrap: "border-amber-200 bg-amber-50", title: "text-amber-900" },
    violet: { wrap: "border-violet-200 bg-violet-50", title: "text-violet-900" },
    slate: { wrap: "border-slate-200 bg-white", title: "text-slate-900" },
  };
  const t = tones[tone] || tones.slate;

  return (
    <div className="relative">
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
        </div>
      )}

      <div
        className={ 
          "relative rounded-2xl border " + 
          t.wrap + 
          " p-5 md:p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:-translate-x-0.5 transition duration-300"
        }
      >
        <h3 className={"text-lg md:text-xl font-bold mb-3 " + t.title}>{title}</h3>
        <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
}

export default function Chapter3Section() {
  return (
    // Page background – light, modern, soft gradient
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">
        {/* Decorative 3D blobs behind card */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main content card */}
        <div className="relative bg-white bg-opacity-95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">
          {/* Header */}
          <header className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Chapter 03
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Job Hunting & Interview Skills
              </h1>
              <p className="mt-2 text-slate-600 max-w-xl">
                Find roles that fit you, research companies, and face interviews with confident communication and clear examples.
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Chip key={c} label={c} />
                ))}
              </div>
            </div>

            {/* Round Topic Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-28 w-28 md:h-36 md:w-36 transform hover:-translate-y-1 hover:rotate-1 transition duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200 via-sky-200 to-cyan-300 shadow-lg" />
                <img
                  src={JobImage} // Imported job image
                  alt="Job Image"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </header>

          {/* Job search & Company research */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SectionCard tone="cyan" title="What’s out there? (Job search)">
              <ul className="list-disc pl-5 space-y-1">
                <li>Use multiple sources: company sites, LinkedIn, job boards, referrals, career fairs.</li>
                <li>Track roles in a simple table: role, company, link, deadline, status.</li>
                <li>Match your CV to the role. Use keywords from the job post naturally.</li>
              </ul>
            </SectionCard>
            <SectionCard tone="emerald" title="Research the company">
              <ul className="list-disc pl-5 space-y-1">
                <li>Products/services, mission, culture, recent news.</li>
                <li>Team/tech stack (for IT roles), clients/markets.</li>
                <li>Prepare 1–2 questions that show this research.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Interview basics */}
          <SectionCard tone="amber" title="Job interview basics">
            <p className="mb-2">An interview is a two‑way conversation to check fit. You show evidence of skills; they show the role and environment.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Plan your message: what you want them to remember about you.</li>
              <li>Minimize weaknesses: choose honest, brief examples + how you improved.</li>
              <li>Prepare examples using <span className="font-semibold">STAR</span> (Situation, Task, Action, Result).</li>
            </ul>
          </SectionCard>

          {/* Non-verbal & Verbal Communication */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Non‑verbal & verbal communication" tone="emerald">
              <ul className="list-disc pl-5 space-y-1">
                <li>Greet, smile, comfortable eye contact, open posture, steady pace.</li>
                <li>Pick up interviewer’s cues; show enthusiasm and professionalism.</li>
                <li>Practice active listening: pay attention, show you’re listening, clarify if needed, avoid rushing to judge, respond appropriately.</li>
              </ul>
            </SectionCard>
            <SectionCard title="6/7 Cs for answers" tone="slate">
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Clear</span> & <span className="font-semibold">Concise</span>: get to the point.</li>
                <li><span className="font-semibold">Correct</span> & <span className="font-semibold">Complete</span>: facts + needed details.</li>
                <li><span className="font-semibold">Concrete</span>: examples, outcomes, numbers.</li>
                <li><span className="font-semibold">Courteous/Confident</span>: polite tone, positive attitude.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Successful vs unsuccessful cues */}
          <SectionCard tone="cyan" title="What successful candidates do">
            <ul className="list-disc pl-5 space-y-1">
              <li>Are specific about the position; use the company name naturally.</li>
              <li>Show research; accept topic shifts; use relevant jargon appropriately.</li>
              <li>Answer with specifics and support claims; ask good questions; speak more than interviewer(s) without rambling.</li>
            </ul>
          </SectionCard>

          {/* Activities */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Activity – Mock interview (pair/group)" tone="cyan">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Use your own CV; rotate roles: interviewer/interviewee/observer.</li>
                <li>Rate 1–5 on non‑verbal (eye contact, posture, tone) and verbal (clarity, examples).</li>
                <li>Write 2 strengths and 2 improvements after feedback.</li>
              </ul>
            </SectionCard>
            <SectionCard title="Activity – Q lists" tone="cyan">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Make two lists: (1) possible interviewer questions, (2) questions you will ask the interviewer.</li>
                <li>Practice speaking answers aloud with a timer (1–2 mins each).</li>
              </ul>
            </SectionCard>
          </div>

          {/* Self‑Reflection */}
          <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 03)">
            <p>I learned how to prepare focused answers with STAR and how non‑verbal cues affect first impressions. I will research each company, prepare 3 example stories, and practice active listening. In the next mock interview, I will slow down, keep eye contact, and ask 2 thoughtful questions at the end.</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
