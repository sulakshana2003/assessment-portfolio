// src/pages/chapter/Chapter1.jsx
// Tailwind 2.x friendly – no arbitrary color/opacity values.

import React from "react";

// ---- Image imports ----
import PsIntroImg from "../../assets/ch1/ps-intoduction.jpg";
import JohariImg from "../../assets/ch1/johari-window-model.jpg";
import ValuesBeliefsBg from "../../assets/ch1/values_and_believes.png";
import ValuesImg from "../../assets/ch1/vlaues.jpg";
import BeliefsImg from "../../assets/ch1/bilieves.jpg";
import AttitudesImg from "../../assets/ch1/attitude.jpg";
import CharacterImg from "../../assets/ch1/character.jpg";

// If you already use ChapterLayout, uncomment the next line and wrap <Chapter1Section /> below with it.
// import ChapterLayout from "../../layouts/ChapterLayout.jsx";

const chips = [
  "Professional skills",
  "Employability",
  "Communication",
  "Teamwork",
  "Problem-solving",
  "Adaptability",
  "Time management",
  "Leadership",
  "Values",
  "Beliefs",
  "Attitudes",
  "Character",
  "Johari Window",
];

const chipStyles = {
  "Professional skills": {
    wrapper: "border-emerald-200 bg-emerald-50 text-emerald-900",
    dot: "bg-emerald-500",
  },
  Employability: {
    wrapper: "border-cyan-200 bg-cyan-50 text-cyan-900",
    dot: "bg-cyan-500",
  },
  Communication: {
    wrapper: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
  Teamwork: {
    wrapper: "border-indigo-200 bg-indigo-50 text-indigo-900",
    dot: "bg-indigo-500",
  },
  "Problem-solving": {
    wrapper: "border-rose-200 bg-rose-50 text-rose-900",
    dot: "bg-rose-500",
  },
  Adaptability: {
    wrapper: "border-violet-200 bg-violet-50 text-violet-900",
    dot: "bg-violet-500",
  },
  "Time management": {
    wrapper: "border-sky-200 bg-sky-50 text-sky-900",
    dot: "bg-sky-500",
  },
  Leadership: {
    wrapper: "border-teal-200 bg-teal-50 text-teal-900",
    dot: "bg-teal-500",
  },
  Values: {
    wrapper: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-900",
    dot: "bg-fuchsia-500",
  },
  Beliefs: {
    wrapper: "border-lime-200 bg-lime-50 text-lime-900",
    dot: "bg-lime-500",
  },
  Attitudes: {
    wrapper: "border-pink-200 bg-pink-50 text-pink-900",
    dot: "bg-pink-500",
  },
  Character: {
    wrapper: "border-slate-200 bg-slate-50 text-slate-900",
    dot: "bg-slate-500",
  },
  "Johari Window": {
    wrapper: "border-amber-200 bg-amber-50 text-amber-900",
    dot: "bg-amber-500",
  },
};

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
      {/* Optional soft background image */}
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

export default function Chapter1Section() {
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
                Chapter 01
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Introduction to Professional Skills
              </h1>
              <p className="mt-2 text-slate-600 max-w-xl">
                Simple overview, key bullet points, and a short self-reflection about
                how these skills connect with my personal values and behaviour.
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Chip key={c} label={c} />
                ))}
              </div>
            </div>

            {/* Round topic image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-28 w-28 md:h-36 md:w-36 transform hover:-translate-y-1 hover:rotate-1 transition duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200 via-sky-200 to-cyan-300 shadow-lg" />
                <img
                  src={PsIntroImg}
                  alt="Professional skills introduction"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </header>

          {/* Assessment Weights */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* <SectionCard tone="amber" title="Continuous Assessment (100%)">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold">Assignment 1 (30%)</span> — CV,
                  Cover Letter, Mock Interview
                </li>
                <li>
                  <span className="font-semibold">Assignment 2 (20%)</span> — Food
                  Festival &amp; Report
                </li>
                <li>
                  <span className="font-semibold">Assignment 3 (50%)</span> — Self-
                  Reflective Portfolio &amp; Presentation
                </li>
              </ul>
              <p className="mt-2 text-xs md:text-sm">
                <span className="font-medium">Attendance:</span> Compulsory •{" "}
                <span className="font-medium">Enrolment key:</span> PS25M#
              </p>
            </SectionCard> */}

            <SectionCard
              tone="cyan"
              title="What are Professional / Employability Skills?"
            >
              <p>
                Non-technical, people-focused skills that help us succeed at work.
                They are <span className="font-semibold">transferable</span> across
                roles and industries.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Communication</li>
                <li>Teamwork &amp; collaboration</li>
                <li>Problem-solving &amp; critical thinking</li>
                <li>Adaptability &amp; flexibility</li>
                <li>Time management</li>
                <li>Leadership</li>
              </ul>
            </SectionCard>

            <SectionCard tone="emerald" title="Classifying Workplace Skills">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <span className="font-semibold">Technical skills:</span> job-specific
                  tools &amp; methods.
                </li>
                <li>
                  <span className="font-semibold">Soft skills:</span> communication,
                  teamwork, ethics.
                </li>
                <li>
                  <span className="font-semibold">Transferable skills:</span> useful
                  anywhere (e.g., problem-solving).
                </li>
              </ul>
            </SectionCard>
          </div>

          {/* Values, Beliefs, Attitudes, Character */}
          <div className="space-y-5 mb-8">
            <SectionCard
              title="Values, Beliefs, Attitudes, and Character"
              backgroundImage={ValuesBeliefsBg}
            >
              <p className="mb-3">
                These ideas explain <em>why</em> we act the way we do at study and
                work. They quietly guide our decisions, reactions, and relationships.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Values */}
                <div className="flex items-start gap-3 rounded-xl bg-white bg-opacity-90 p-3 md:p-4 shadow-sm">
                  <img
                    src={ValuesImg}
                    alt="Values"
                    className="mt-1 h-10 w-10 rounded-full object-cover border border-emerald-100 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Values</h4>
                    <p className="mb-2 text-sm">
                      Core principles that guide our choices. They act like a personal
                      moral compass.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                      <li>Honesty, Integrity, Respect</li>
                      <li>Responsibility, Compassion, Fairness</li>
                      <li>Courage, Excellence</li>
                    </ul>
                  </div>
                </div>

                {/* Beliefs */}
                <div className="flex items-start gap-3 rounded-xl bg-white bg-opacity-90 p-3 md:p-4 shadow-sm">
                  <img
                    src={BeliefsImg}
                    alt="Beliefs"
                    className="mt-1 h-10 w-10 rounded-full object-cover border border-lime-100 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Beliefs</h4>
                    <p className="mb-2 text-sm">
                      What we think is true about ourselves and the world.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                      <li>Self-efficacy, Growth mindset, Optimism</li>
                      <li>Locus of control, Self-worth</li>
                      <li>Prejudices, Fatalism (to be challenged)</li>
                    </ul>
                  </div>
                </div>

                {/* Attitudes */}
                <div className="flex items-start gap-3 rounded-xl bg-white bg-opacity-90 p-3 md:p-4 shadow-sm">
                  <img
                    src={AttitudesImg}
                    alt="Attitudes"
                    className="mt-1 h-10 w-10 rounded-full object-cover border border-pink-100 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Attitudes</h4>
                    <p className="mb-2 text-sm">
                      Positive or negative leanings that shape our behaviour.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                      <li>Positive attitude, Open-mindedness, Tolerance</li>
                      <li>Confidence, Empathy</li>
                      <li>Avoid: prejudice, cynicism</li>
                    </ul>
                  </div>
                </div>

                {/* Character */}
                <div className="flex items-start gap-3 rounded-xl bg-white bg-opacity-90 p-3 md:p-4 shadow-sm">
                  <img
                    src={CharacterImg}
                    alt="Character"
                    className="mt-1 h-10 w-10 rounded-full object-cover border border-slate-100 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold mb-1">Character</h4>
                    <p className="mb-2 text-sm">
                      Consistent moral and ethical behaviour over time.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm">
                      <li>Trustworthiness, Respectfulness</li>
                      <li>Responsibility, Caring, Citizenship</li>
                      <li>Fairness, Courage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Johari Window */}
            <SectionCard tone="violet" title="Johari Window (1955)">
              <div className="grid md:grid-cols-2 gap-4 md:items-center">
                <div>
                  <p className="mb-2">
                    A simple model to understand self-awareness in relationships.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                      <span className="font-semibold">Open</span> — known to self
                      &amp; others
                    </li>
                    <li>
                      <span className="font-semibold">Blind</span> — others see, I do
                      not
                    </li>
                    <li>
                      <span className="font-semibold">Hidden</span> — I know, others
                      don&apos;t
                    </li>
                    <li>
                      <span className="font-semibold">Unknown</span> — no one knows
                      yet
                    </li>
                  </ul>
                  <p className="mt-2 text-sm">
                    Goal: grow the <span className="font-semibold">Open</span> area by
                    sharing honestly and asking for feedback.
                  </p>
                </div>

                {/* Johari image */}
                <div className="flex justify-center md:justify-end">
                  <div className="rounded-2xl border border-violet-100 bg-white shadow-sm p-2 md:p-3">
                    <img
                      src={JohariImg}
                      alt="Johari Window model"
                      className="h-40 w-full md:h-44 object-contain"
                    />
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Tips card */}
            <SectionCard tone="slate" title="Tips to Develop Professional Skills">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <span className="font-semibold">Continuous learning:</span> short
                  courses, workshops, reading.
                </li>
                <li>
                  <span className="font-semibold">Practice:</span> apply skills in
                  projects, clubs, part-time work.
                </li>
                <li>
                  <span className="font-semibold">Feedback:</span> ask mentors/peers
                  and act on suggestions.
                </li>
                <li>
                  <span className="font-semibold">Embrace challenges:</span> try new
                  tasks and reflect after.
                </li>
              </ul>
            </SectionCard>
          </div>

          {/* Self-Reflection */}
          <SectionCard tone="emerald" title="My Self-Reflection (Chapter 01)">
            <p className="text-sm md:text-base">
              I realised that professional skills are as important as technical
              knowledge. Good communication, teamwork, and time management make my
              group work and projects smoother. When I think about my own values and
              attitudes, I can see some blind spots, especially how I react when I am
              stressed. My next steps are to practise clear writing, join more group
              activities to build collaboration, and ask for feedback so I can grow the
              open area in my Johari Window.
            </p>
          </SectionCard>

          {/* References */}
          <div className="mt-6">
            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">
              References
            </h3>
            <ul className="list-disc pl-5 text-slate-700 text-xs md:text-sm space-y-1">
              <li>Peterson &amp; Seligman (2004) — Character Strengths and Virtues.</li>
              <li>Rokeach (1973) — The Nature of Human Values.</li>
              <li>Schwartz (1992) — Universals in Values (AESP, Vol. 25).</li>
              <li>Ajzen &amp; Fishbein (1980) — Attitudes &amp; Behaviour.</li>
              <li>Eagly &amp; Chaiken (1993) — The Psychology of Attitudes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
