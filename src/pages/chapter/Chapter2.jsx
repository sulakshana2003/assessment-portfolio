import React from "react";

// Importing Images
import CV_Cover_Letter_Image from "../../assets/ch2/CV_Cover_Letter_Writing.jpg";
import CV_Structure_Image from "../../assets/ch2/CV_Structure.jpg";
import Cover_Letter_Image from "../../assets/ch2/Cover_Letter.jpg";

// Chips Labels
const chips = [
  "CV purpose",
  "Resume vs CV",
  "Structure",
  "ATS keywords",
  "Tailoring",
  "Achievements",
  "Cover letter",
  "Do & Don't",
];

// Chip Styles Mapping
const chipStyles = {
  "CV purpose": "border-emerald-200 bg-emerald-50 text-emerald-900",
  "Resume vs CV": "border-cyan-200 bg-cyan-50 text-cyan-900",
  Structure: "border-amber-200 bg-amber-50 text-amber-900",
  "ATS keywords": "border-indigo-200 bg-indigo-50 text-indigo-900",
  Tailoring: "border-rose-200 bg-rose-50 text-rose-900",
  Achievements: "border-violet-200 bg-violet-50 text-violet-900",
  "Cover letter": "border-sky-200 bg-sky-50 text-sky-900",
  "Do & Don't": "border-teal-200 bg-teal-50 text-teal-900",
};

// Chip Component for individual labels
function Chip({ label }) {
  const style = chipStyles[label] || "border-gray-200 bg-gray-50 text-gray-900";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 ${style}`}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {label}
    </span>
  );
}

// SectionCard Component for each content block
function SectionCard({ tone = "emerald", title, children, backgroundImage }) {
  const toneStyles = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-900",
    cyan: "border-cyan-200 bg-cyan-50 text-cyan-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
    violet: "border-violet-200 bg-violet-50 text-violet-900",
    slate: "border-slate-200 bg-white text-slate-900",
  };

  return (
    <div className="relative">
      {backgroundImage && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div
        className={`relative rounded-2xl border p-5 md:p-6 shadow-md hover:shadow-xl transition duration-300 ${toneStyles[tone]}`}
      >
        <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
        <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
}

// Main Chapter2Section Component
export default function Chapter2Section() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main Content Card */}
        <div className="relative bg-white bg-opacity-95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">
          {/* Header */}
          <header className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 02</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                CV & Cover Letter Writing
              </h1>
              <p className="mt-2 text-slate-600 max-w-xl">
                Learn what a CV is, how it differs from a resume, how to structure and tailor it, and how to write an effective cover letter.
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <Chip key={chip} label={chip} />
                ))}
              </div>
            </div>

            {/* Round Topic Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-28 w-28 md:h-36 md:w-36 transform hover:-translate-y-1 hover:rotate-1 transition duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200 via-sky-200 to-cyan-300 shadow-lg" />
                <img
                  src={CV_Cover_Letter_Image}
                  alt="CV & Cover Letter Writing"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </header>

          {/* CV Overview Section */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <SectionCard tone="cyan" title="What is a CV?" backgroundImage={CV_Structure_Image}>
              <p>A CV (Curriculum Vitae) is a formal 1–2 page document showing education, experience, skills, and achievements. It helps recruiters see your fit quickly. A resume is usually shorter and more condensed; some countries use the terms differently.</p>
            </SectionCard>
            <SectionCard tone="emerald" title="Purpose" backgroundImage={Cover_Letter_Image}>
              <ul className="list-disc pl-5 space-y-1">
                <li>Make a strong first impression with clear, error‑free writing.</li>
                <li>Show relevant proof of impact (numbers, outcomes).</li>
                <li>Pass ATS by using keywords from the job description.</li>
              </ul>
            </SectionCard>
          </div>

          {/* CV Structure Section */}
          <SectionCard tone="amber" title="CV Structure (Common Order)">
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-semibold">Header:</span> name, phone, email, city; optional LinkedIn/GitHub/portfolio.</li>
              <li><span className="font-semibold">Profile / Summary:</span> 2–3 lines on strengths and goals tailored to the role.</li>
              <li><span className="font-semibold">Experience:</span> reverse‑chronological. Title · Company · Dates · Impact bullets.</li>
              <li><span className="font-semibold">Education:</span> degree, institute, year, key coursework (optional).</li>
              <li><span className="font-semibold">Skills:</span> technical + soft skills; be honest on levels.</li>
              <li><span className="font-semibold">Projects / Achievements:</span> brief bullets with outcomes/metrics.</li>
              <li><span className="font-semibold">Extras:</span> certifications, extracurriculars, languages, referees (optional/on request).</li>
            </ol>
          </SectionCard>

          {/* Dos & Don'ts Section */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="CV – Do This" tone="emerald">
              <ul className="list-disc pl-5 space-y-1">
                <li>Use action verbs + metrics (e.g., “Improved load time by 35%”).</li>
                <li>Keep layout clean, consistent fonts, adequate white space.</li>
                <li>Tailor for each job; mirror keywords naturally.</li>
                <li>Limit to 1–2 pages; prioritize relevance.</li>
              </ul>
            </SectionCard>
            <SectionCard title="CV – Avoid" tone="slate">
              <ul className="list-disc pl-5 space-y-1">
                <li>Spelling/grammar errors, long paragraphs, tiny fonts.</li>
                <li>Irrelevant personal data (NIC, marital status, photo) unless asked.</li>
                <li>Responsibilities without results; vague claims without proof.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Cover Letter Section */}
          <SectionCard tone="cyan" title="Cover Letter: Purpose & Structure">
            <p>A cover letter introduces your CV and shows why you fit this specific role. Keep to one page.</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li><span className="font-semibold">Header:</span> your details + date + employer details.</li>
              <li><span className="font-semibold">Opening:</span> role you’re applying for + where you saw it + a focused hook.</li>
              <li><span className="font-semibold">Fit paragraph:</span> 1–2 achievements that match the job’s needs.</li>
              <li><span className="font-semibold">Why them:</span> show research; align with their goals/products.</li>
              <li><span className="font-semibold">Close:</span> call‑to‑action, availability, polite sign‑off.</li>
            </ol>
          </SectionCard>

          {/* Mini Examples Section */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Impact Bullet Examples" tone="amber">
              <ul className="list-disc pl-5 space-y-1">
                <li>Developed React feature that reduced user drop‑off by 18%.</li>
                <li>Automated test suite with Selenium; cut manual QA time by 40%.</li>
                <li>Led 4‑member team to deliver e‑commerce MVP in 3 weeks.</li>
              </ul>
            </SectionCard>
            <SectionCard title="Keywords (ATS) – Example: Frontend" tone="emerald">
              <p>React, JavaScript/TypeScript, Tailwind CSS, REST/JSON, Git, CI/CD, Jest, Accessibility, Responsive design, API integration.</p>
            </SectionCard>
          </div>

          {/* Activities Section */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Activity – Career Ambitions" tone="slate">
              <p className="mb-2">Write 3 roles you like and 3 you don’t, and explain briefly why.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>I like to be: ____________</li>
                <li>I don’t like to be: ____________</li>
              </ul>
            </SectionCard>
            <SectionCard title="Activity – Cover Letter (Gap‑fill)" tone="slate">
              <p className="mb-2">Practice with words like: advertised, candidate, contribute, apply, enclosed, opportunity.</p>
              <p className="text-sm">Example prompt included in class handout.</p>
            </SectionCard>
          </div>

          {/* Self-Reflection Section */}
          <SectionCard tone="emerald" title="My Self-Reflection (Chapter 02)">
            <p>Now I understand how to present my skills clearly and prove impact with numbers. I will tailor my CV for each job and keep a simple design. For cover letters, I will mention the role, show 1–2 strong matches, and explain why I want that company. My next step is to update my CV with recent projects and ask a friend to review it.</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
