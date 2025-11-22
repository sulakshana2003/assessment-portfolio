import React from "react";

// Importing the topic image for the section
import ProposalImage from "../../assets/ch6/project_proposal.jpg"; // Adjust the path as necessary

const chips = [
  "External vs Internal",
  "Executive summary",
  "Problem → Objectives",
  "Methods & timeline",
  "Activity & Resource plan",
  "Budget & M&E",
  "Evaluation report",
  "Lessons & Next steps",
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

export default function Chapter6Section() {
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
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 06</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Project Proposal Writing & Evaluation</h1>
              <p className="mt-2 text-slate-600">Write a clear proposal (problem → objectives → activities → budget → results) and evaluate your project after it ends.</p>
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
                  src={ProposalImage} // Imported proposal image
                  alt="Proposal Image"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </header>

          {/* What is a project & proposal */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SectionCard tone="cyan" title="What is a project?">
              <p>A project is a set of activities with a goal, a timeline, a team, and resources. It moves through a cycle: idea → design → finance → implement → evaluate.</p>
            </SectionCard>
            <SectionCard tone="emerald" title="What is a proposal?">
              <p>The proposal is the written plan of the project. It explains the problem, your solution, who benefits, the work plan, team, budget, and how you will measure success.</p>
            </SectionCard>
          </div>

          {/* Types of proposals */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <SectionCard tone="amber" title="External vs Internal proposals">
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">External</span> – bids for contracts/grants. Usual parts: Executive summary, Management, Financials.</li>
                <li><span className="font-semibold">Internal</span> – convince your organisation to accept an idea. Focus on audience, visuals, and the 4Qs: What’s the problem? Solution? Can/Should we implement?</li>
              </ul>
            </SectionCard>
            <SectionCard tone="slate" title="Before writing (prep)">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Talk to beneficiaries; review past proposals/evaluations.</li>
                <li>Check data; consult experts; run a quick survey/focus group.</li>
                <li>Define indicators (what will prove success?).</li>
              </ul>
            </SectionCard>
          </div>

          {/* Proposal structure */}
          <SectionCard tone="emerald" title="Proposal structure (simple template)">
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-semibold">Title & Abstract</span> – problem, objectives, activities, budget snapshot.</li>
              <li><span className="font-semibold">Context & Justification</span> – data and why it matters.</li>
              <li><span className="font-semibold">Problem → Objectives</span> – goal (one), objectives (measurable), target group.</li>
              <li><span className="font-semibold">Methods & Activities</span> – what you will do.</li>
              <li><span className="font-semibold">Implementation plan</span> – timeline, responsibilities, milestones.</li>
              <li><span className="font-semibold">Resource plan & Budget</span> – direct vs operational costs; income if any.</li>
              <li><span className="font-semibold">Management & Team</span> – roles, partners, capacity.</li>
              <li><span className="font-semibold">Monitoring & Evaluation (M&E)</span> – indicators, data, reporting.</li>
              <li><span className="font-semibold">Annexes</span> – CVs, data tables, charts, forms.</li>
            </ol>
          </SectionCard>

          {/* Activity & Resource plan */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard tone="cyan" title="Activity plan (mini table)">
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-slate-200 rounded-lg text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-2">Activity</th>
                      <th className="p-2">Start</th>
                      <th className="p-2">End</th>
                      <th className="p-2">Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><td className="p-2">Needs assessment & data</td><td className="p-2">Week 1</td><td className="p-2">Week 2</td><td className="p-2">Coordinator</td></tr>
                    <tr className="border-t"><td className="p-2">Design solution & partners</td><td className="p-2">Week 2</td><td className="p-2">Week 3</td><td className="p-2">Team</td></tr>
                    <tr className="border-t"><td className="p-2">Implementation sprint 1</td><td className="p-2">Week 4</td><td className="p-2">Week 6</td><td className="p-2">Leads</td></tr>
                    <tr className="border-t"><td className="p-2">Monitoring & mid review</td><td className="p-2">Week 6</td><td className="p-2">Week 6</td><td className="p-2">M&E</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2">Tip: A Gantt chart can show overlaps and dependencies.</p>
            </SectionCard>
            <SectionCard tone="amber" title="Resource plan (cost sketch)">
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-slate-200 rounded-lg text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-2">Item</th>
                      <th className="p-2">Unit</th>
                      <th className="p-2">Qty</th>
                      <th className="p-2">Unit cost</th>
                      <th className="p-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t"><td className="p-2">Venue / Logistics</td><td className="p-2">day</td><td className="p-2">1</td><td className="p-2">—</td><td className="p-2">—</td></tr>
                    <tr className="border-t"><td className="p-2">Materials / Printing</td><td className="p-2">lot</td><td className="p-2">1</td><td className="p-2">—</td><td className="p-2">—</td></tr>
                    <tr className="border-t"><td className="p-2">Team time (allowances)</td><td className="p-2">hours</td><td className="p-2">—</td><td className="p-2">—</td><td className="p-2">—</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-2">Include both direct costs (linked to activities) and operational costs (overheads).</p>
            </SectionCard>
          </div>

          {/* Indicators & M&E */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="Indicators (make them specific)" tone="slate">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Quality (what changes), Target group (who), Place (where), Quantity (how much), Time (by when).</li>
                <li>Example: “Ticket sales reach 500 by 18 Oct; satisfaction score ≥ 4/5.”</li>
              </ul>
            </SectionCard>
            <SectionCard title="Monitoring & reporting" tone="emerald">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Track progress vs. timeline and budget monthly.</li>
                <li>Collect data: counts, surveys, photos, receipts.</li>
                <li>Report schedule: mid‑term review, final report, annexes.</li>
              </ul>
            </SectionCard>
          </div>

          {/* Evaluation report (after the event) */}
          <SectionCard tone="cyan" title="Evaluation report (Food‑fest style)">
            <ol className="list-decimal pl-5 space-y-1">
              <li><span className="font-semibold">Executive summary</span> – objectives, results, key takeaways.</li>
              <li><span className="font-semibold">Objectives & goals</span> – what you aimed to achieve.</li>
              <li><span className="font-semibold">Planning process</span> – roles, timeline, prep.</li>
              <li><span className="font-semibold">Execution</span> – what happened, challenges.</li>
              <li><span className="font-semibold">Budget</span> – estimated vs actual, revenue, profit/loss.</li>
              <li><span className="font-semibold">Lessons learned</span> – what to change next time.</li>
              <li><span className="font-semibold">Recommendations</span> – practical improvements.</li>
              <li><span className="font-semibold">Conclusion</span> – overall success and impact.</li>
            </ol>
          </SectionCard>

          {/* Mini templates */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <SectionCard title="One‑page proposal (mini)" tone="slate">
              <p className="mb-2 text-sm">Copy this structure for small projects:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Title & 3‑line abstract</li>
                <li>Problem & target group</li>
                <li>Objectives (2–3, measurable)</li>
                <li>Activities & timeline (table)</li>
                <li>Budget (summary)</li>
                <li>Indicators & risks</li>
              </ul>
            </SectionCard>
            <SectionCard title="Budget totals (quick)" tone="amber">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Total expenses: ______</li>
                <li>Total revenue/income: ______</li>
                <li>Profit/Loss: revenue − expenses = ______</li>
              </ul>
            </SectionCard>
          </div>

          {/* Self‑Reflection */}
          <SectionCard tone="emerald" title="My Self‑Reflection (Chapter 06)">
            <p>I learned to connect problem → objectives → activities → budget, and to measure results with clear indicators. For the next project, I will write a one‑page proposal first, build an activity/resource plan, and keep all receipts and survey data for a strong evaluation report. I will compare estimated vs actual budget and list 3 lessons learned with actions for improvement.</p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
