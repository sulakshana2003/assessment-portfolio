import React from "react";

// Main round header image
import MeetingImage from "../../assets/ch5/meetings.jpg";

// Newly added images from your uploads
import MeetingTerminologyImg from "../../assets/ch5/meeting_term.jpg";
import MeetingTypesImg from "../../assets/ch5/Types_of_meetings.png";
import FacilitationImg from "../../assets/ch5/Facilitation.jpg";
import SpeakingImg from "../../assets/ch5/speecking.jpg";

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
  "Meeting types",
  "Terminology",
  "Preparation checklist",
  "Agenda & roles",
  "Facilitation",
  "Participation",
  "Challenges",
  "Evaluation",
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

// eslint-disable-next-line no-unused-vars
function SectionCard({ title, tone = "emerald", children }) {
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
      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

export default function Chapter5Section() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">

        {/* Blobs */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main content card */}
        <div className="relative bg-white/95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">

          {/* Header */}
          <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 05</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Meetings & Speaking Skills
              </h1>
              <p className="mt-2 text-slate-600">
                Plan, run, and participate in meetings with clear language, good roles, and focused agendas.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {chips.map((c, i) => (
                  <Chip key={i} label={c} index={i} />
                ))}
              </div>
            </div>

            {/* Round header image */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative h-28 w-28 md:h-36 md:w-36
                rounded-full shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,1)]
                hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2),-10px_-10px_20px_rgba(255,255,255,1)]
                transition"
              >
                <img
                  src={MeetingImage}
                  alt="Meeting Image"
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
              </div>
            </div>
          </header>

          {/* Terminology + Types */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Meeting terminology (quick)">
              <img src={MeetingTerminologyImg} className="rounded-xl w-full mb-3 shadow" />
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Agenda</span> – list of topics and timing.</li>
                <li><span className="font-semibold">Minutes</span> – record of decisions and actions.</li>
                <li><span className="font-semibold">Action item</span> – task with owner + due date.</li>
                <li><span className="font-semibold">Quorum</span> – minimum people needed to decide.</li>
              </ul>
            </SectionCard>

            <SectionCard title="Types of meetings (examples)">
              <img src={MeetingTypesImg} className="rounded-xl w-full mb-3 shadow" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Stand-up / progress update</li>
                <li>Planning / strategy</li>
                <li>Problem-solving / retrospective</li>
                <li>Training / briefing</li>
              </ul>
            </SectionCard>
          </div>

          {/* Preparation */}
          <SectionCard title="Meeting preparation checklist">
            <ul className="list-disc pl-5 space-y-1">
              <li>Purpose and desired outcome (decision? info? brainstorm?).</li>
              <li>Who should attend (stakeholders/roles)?</li>
              <li>Date, time, location/online link; facilities needed.</li>
              <li>Format + length: formal or informal.</li>
              <li>Documents: invitation, agenda, minutes, working papers.</li>
              <li>Risks/problems that may occur + prevention.</li>
            </ul>
          </SectionCard>

          {/* Roles + Agenda */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Common roles in a meeting">
              <ul className="list-disc pl-5 space-y-1">
                <li>Chair/Facilitator – keeps focus, manages time, invites voices.</li>
                <li>Secretary/Minute-taker – records decisions + actions.</li>
                <li>Timekeeper – tracks agenda timings.</li>
                <li>Participants – contribute ideas and stay on topic.</li>
                <li>Observer – optional feedback role.</li>
              </ul>
            </SectionCard>

            <SectionCard title="Sample agenda: project progress">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Welcome & objectives (2 min)</li>
                <li>Last meeting: actions closed/open (5 min)</li>
                <li>Team updates (10 min)</li>
                <li>Risks & blockers (5 min)</li>
                <li>Decisions & new actions (5 min)</li>
                <li>Next steps & date (3 min)</li>
              </ol>
            </SectionCard>
          </div>

          {/* Facilitation + Speaking */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Facilitation – keep people engaged">
              <img src={FacilitationImg} className="rounded-xl w-full mb-3 shadow" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Set clear objective + timeboxes; park off-topic ideas.</li>
                <li>Invite quieter members; rotate speakers.</li>
                <li>Summarize often; confirm decisions & owners.</li>
              </ul>
            </SectionCard>

            <SectionCard title="Speaking skills in meetings">
              <img src={SpeakingImg} className="rounded-xl w-full mb-3 shadow" />
              <ul className="list-disc pl-5 space-y-1">
                <li>Be clear + concise; use polite phrases (“Could I add…?”).</li>
                <li>Active listening: paraphrase, clarify, avoid interrupting.</li>
                <li>Use neutral professional tone; stay respectful.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Challenges */}
          <SectionCard title="Common challenges → fixes">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Low participation</span> → gentle invites + round-robin.</li>
              <li><span className="font-semibold">Time overruns</span> → strict timekeeper + parking lot.</li>
              <li><span className="font-semibold">Off-topic debates</span> → restate objective + move on.</li>
            </ul>
          </SectionCard>

          {/* Evaluation */}
          <SectionCard title="Evaluate the meeting (simple form)">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Objectives met? (1–5)</li>
              <li>Everyone had chance to speak? (Yes/No)</li>
              <li>Next steps & owners clear? (Yes/No)</li>
              <li>Improvements for next time?</li>
            </ul>
          </SectionCard>

          {/* Activities */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Group activity – roles & agenda">
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>List 3–4 meeting types + objectives.</li>
                <li>Assign group roles + responsibilities.</li>
                <li>Create a 6-item progress meeting agenda.</li>
              </ol>
            </SectionCard>

            <SectionCard title="Facilitation & challenges">
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Write 3 ways to increase participation.</li>
                <li>Explain importance of time management.</li>
                <li>Give 3 challenges + fixes.</li>
              </ol>
            </SectionCard>
          </div>

          {/* Reflection */}
          <SectionCard title="My Self-Reflection (Chapter 05)">
            <p>
              I practiced how to plan a meeting and speak clearly. Next time I will prepare a short agenda,
              invite quieter members, and end with actions and owners. I will use an evaluation form to
              improve our meetings.
            </p>
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
