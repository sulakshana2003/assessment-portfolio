import React from "react";

// Importing the job image for the topic
import MeetingImage from "../../assets/ch5/meetings.jpg"; // Adjust the path as necessary

const chips = [
  "Meeting types",
  "Terminology",
  "Preparation checklist",
  "Agenda & roles",
  "Facilitation",
  "Participation",
  "Challenges",
  "Evaluation",
];

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-200 bg-emerald-50 text-emerald-900">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      {label}
    </span>
  );
}

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
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.title}`}>{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter5Section() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">
        {/* Decorative 3D blobs behind card */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main content card */}
        <div className="relative bg-white bg-opacity-95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">
          {/* Header */}
          <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 05</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Meetings & Speaking Skills</h1>
              <p className="mt-2 text-slate-600">Plan, run, and participate in meetings with clear language, good roles, and focused agendas.</p>
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
                  src={MeetingImage} // Imported meeting image
                  alt="Meeting Image"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </header>

          {/* Terminology + Types */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SectionCard tone="cyan" title="Meeting terminology (quick)">
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Agenda</span> – list of topics and timing.</li>
                <li><span className="font-semibold">Minutes</span> – written record of decisions and actions.</li>
                <li><span className="font-semibold">Action item</span> – task with owner and due date.</li>
                <li><span className="font-semibold">Quorum</span> – minimum people needed to make decisions.</li>
              </ul>
            </SectionCard>
            <SectionCard tone="emerald" title="Types of meetings (examples)">
              <ul className="list-disc pl-5 space-y-1">
                <li>Stand‑up / progress update</li>
                <li>Planning / strategy</li>
                <li>Problem‑solving / retrospective</li>
                <li>Training / briefing</li>
              </ul>
            </SectionCard>
          </div>

          {/* Preparation */}
          <SectionCard tone="amber" title="Meeting preparation checklist">
            <ul className="list-disc pl-5 space-y-1">
              <li>Purpose and desired outcome (decision? info? brainstorm?).</li>
              <li>Who should attend (stakeholders/roles)?</li>
              <li>Date, time, location/online link; facilities needed.</li>
              <li>Length and format: formal or informal.</li>
              <li>Papers to prepare: invitation, agenda, previous minutes, working docs.</li>
              <li>Risks/problems that could occur; how to prevent them.</li>
            </ul>
          </SectionCard>

          {/* Roles & Agenda */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Common roles in a meeting" tone="slate">
              <ul className="list-disc pl-5 space-y-1">
                <li>Chair/Facilitator – keeps focus, manages time, invites voices.</li>
                <li>Secretary/Minute‑taker – records decisions and actions.</li>
                <li>Timekeeper – tracks timings on the agenda.</li>
                <li>Participants – contribute ideas, stay on topic, own actions.</li>
                <li>Observer (optional) – gives feedback on process.</li>
              </ul>
            </SectionCard>
            <SectionCard title="Sample agenda: project progress" tone="emerald">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Welcome & objectives (2 min)</li>
                <li>Since last meeting: actions closed/open (5 min)</li>
                <li>Team updates: Dev · QA · Design (10 min)</li>
                <li>Risks & blockers (5 min)</li>
                <li>Decisions & new actions (5 min)</li>
                <li>Next steps & date (3 min)</li>
              </ol>
            </SectionCard>
          </div>

          {/* Facilitation & Participation */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Facilitation – keep people engaged" tone="violet">
              <ul className="list-disc pl-5 space-y-1">
                <li>Set clear objective and timeboxes; park off‑topic items.</li>
                <li>Invite quieter members; rotate who speaks.</li>
                <li>Summarize often; confirm decisions and owners.</li>
              </ul>
            </SectionCard>
            <SectionCard title="Speaking skills in meetings" tone="emerald">
              <ul className="list-disc pl-5 space-y-1">
                <li>Be clear and concise; use polite phrases ("Could I add…", "I agree because…").</li>
                <li>Active listening: pay attention, paraphrase, ask clarifying questions.</li>
                <li>Use neutral, professional tone; avoid interrupting.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Challenges & fixes */}
          <SectionCard tone="cyan" title="Common challenges → fixes">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Low participation</span> → round‑robin sharing; direct gentle invites.</li>
              <li><span className="font-semibold">Time overruns</span> → strict timekeeper; parking lot for later.</li>
              <li><span className="font-semibold">Off‑topic debates</span> → restate objective; summarize and move.</li>
            </ul>
          </SectionCard>

          {/* Evaluation */}
          <SectionCard tone="slate" title="Evaluate the meeting (simple form)">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Objectives met? (1–5)</li>
              <li>Everyone had chance to speak? (Yes/No)</li>
              <li>Next steps and owners clear? (Yes/No)</li>
              <li>What to improve next time?</li>
            </ul>
          </SectionCard>

          {/* Class / Group activities */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Group activity – roles & agenda" tone="amber">
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>List 3–4 meeting types and 2 objectives for each.</li>
                <li>Pick roles for your group and write responsibilities.</li>
                <li>Create a 6‑item agenda for a progress meeting.</li>
              </ol>
            </SectionCard>
            <SectionCard title="Facilitation & challenges" tone="amber">
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Write 3 strategies to increase participation.</li>
                <li>Explain why time management matters; give an example.</li>
                <li>List 3 common challenges and give a fix for each.</li>
              </ol>
            </SectionCard>
          </div>

          {/* Self‑Reflection */}
          <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 05)">
            <p>I practiced how to plan a meeting and speak clearly. Next time I will prepare a short agenda, invite quieter members, and end with actions and owners. I will also use a quick evaluation form to improve our meetings.</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
