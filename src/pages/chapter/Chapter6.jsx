import React from "react";

// ---------------- IMAGE IMPORTS ----------------
import ProposalImage from "../../assets/ch6/project_proposal.jpg";           // main round image
import ProjectImg from "../../assets/ch6/project.jpg";                      // What is a project?
import ProposalExplainImg from "../../assets/ch6/pp_proposal.jpg";          // What is a proposal?
import ProposalStructureImg from "../../assets/ch6/Proposal_structure.jpg"; // Proposal structure
import ActivityPlanImg from "../../assets/ch6/Activity_plan.jpg";           // Activity plan
import ResourcePlanImg from "../../assets/ch6/Resource_plan.png";           // Resource plan
import BudgetIcon from "../../assets/ch6/proposal.svg";                     // Budget totals card

// ---------------- CHIP COLORS ----------------
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
  "External vs Internal",
  "Executive summary",
  "Problem → Objectives",
  "Methods & timeline",
  "Activity & Resource plan",
  "Budget & M&E",
  "Evaluation report",
  "Lessons & Next steps",
];

// ---------------- 3D CHIP ----------------
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

// ---------------- PASTEL CARD BACKGROUNDS ----------------
const pastelCardColors = [
  "bg-[#E3FCEC]", // mint
  "bg-[#FEE7E7]", // rose
  "bg-[#EAF6FF]", // sky
  "bg-[#F5E8FF]", // lavender
  "bg-[#FFEEDF]", // peach
  "bg-[#FFF8D9]", // butter yellow
  "bg-[#E7F5FF]", // powder blue
  "bg-[#EDE8FF]", // soft lilac
];

// ---------------- SECTION CARD (NEUMORPHIC) ----------------
function SectionCard({ title, children, index }) {
  const bg = pastelCardColors[index % pastelCardColors.length];

  return (
    <div
      className={`
        my-5 p-6 rounded-3xl border border-white/60 ${bg}
        shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_#ffffff]
        hover:-translate-y-1 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.15),-10px_-10px_20px_#ffffff]
        transition-all duration-300
      `}
    >
      <h3 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <div className="text-slate-700 leading-7 text-sm md:text-base">{children}</div>
    </div>
  );
}

// ---------------- MAIN COMPONENT ----------------
export default function Chapter6Section() {
  let cardIndex = 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-8 md:py-10">
      <div className="relative max-w-5xl mx-auto">

        {/* Blobs */}
        <div className="pointer-events-none absolute -top-10 -left-6 h-32 w-32 rounded-full 
          bg-gradient-to-br from-emerald-200 to-sky-200 opacity-60 blur-sm" />
        <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full 
          bg-gradient-to-tr from-indigo-200 to-fuchsia-200 opacity-60 blur-sm" />

        {/* Main container */}
        <div className="relative bg-white/95 rounded-3xl shadow-2xl px-4 py-8 md:px-8 md:py-10">

          {/* HEADER */}
          <header className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Chapter 06</p>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Project Proposal Writing & Evaluation
              </h1>
              <p className="mt-2 text-slate-600">
                Write a clear proposal (problem → objectives → activities → budget → results) and evaluate your project after it ends.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {chips.map((c, i) => (
                  <Chip key={i} label={c} index={i} />
                ))}
              </div>
            </div>

            {/* Round image */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 
  rounded-full overflow-hidden 
  shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,1)]">

  <img
    src={ProposalImage}
    alt="Proposal Image"
    className="w-full h-full object-cover rounded-full"
  />
</div>

          </header>

          {/* WHAT IS PROJECT */}
          <SectionCard title="What is a project?" index={cardIndex++}>
            <img src={ProjectImg} className="rounded-xl mb-3 w-full" />
            <p>
              A project is a set of activities with a goal, a timeline, a team, and resources.
              It moves through a cycle: idea → design → finance → implement → evaluate.
            </p>
          </SectionCard>

          {/* WHAT IS PROPOSAL */}
          <SectionCard title="What is a proposal?" index={cardIndex++}>
            <img src={ProposalExplainImg} className="rounded-xl mb-3 w-full" />
            <p>
              The proposal is the written plan of the project. It explains the problem, your solution,
              who benefits, the work plan, team, budget, and how you will measure success.
            </p>
          </SectionCard>

          {/* TYPES */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="External vs Internal proposals" index={cardIndex++}>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">External</span> – bids for contracts/grants. Usual parts: Executive summary, Management, Financials.</li>
                <li><span className="font-semibold">Internal</span> – convince your organisation to accept an idea. Focus on audience, visuals, and the 4Qs: What’s the problem? Solution? Can/Should we implement?</li>
              </ul>
            </SectionCard>

            <SectionCard title="Before writing (prep)" index={cardIndex++}>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Talk to beneficiaries; review past proposals/evaluations.</li>
                <li>Check data; consult experts; run a quick survey/focus group.</li>
                <li>Define indicators (what will prove success?).</li>
              </ul>
            </SectionCard>
          </div>

          {/* PROPOSAL STRUCTURE */}
          <SectionCard title="Proposal structure (simple template)" index={cardIndex++}>
            <img src={ProposalStructureImg} className="rounded-xl mb-3 w-full" />
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

          {/* ACTIVITY & RESOURCE PLAN */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Activity plan (mini table)" index={cardIndex++}>
              <img src={ActivityPlanImg} className="rounded-xl mb-3 w-full" />

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

            <SectionCard title="Resource plan (cost sketch)" index={cardIndex++}>
              <img src={ResourcePlanImg} className="rounded-xl mb-3 w-full" />

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

          {/* INDICATORS + M&E */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="Indicators (make them specific)" index={cardIndex++}>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Quality (what changes), Target group (who), Place (where), Quantity (how much), Time (by when).</li>
                <li>Example: “Ticket sales reach 500 by 18 Oct; satisfaction score ≥ 4/5.”</li>
              </ul>
            </SectionCard>

            <SectionCard title="Monitoring & reporting" index={cardIndex++}>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Track progress vs. timeline and budget monthly.</li>
                <li>Collect data: counts, surveys, photos, receipts.</li>
                <li>Report schedule: mid-term review, final report, annexes.</li>
              </ul>
            </SectionCard>
          </div>

          {/* EVALUATION REPORT */}
          <SectionCard title="Evaluation report (Food-fest style)" index={cardIndex++}>
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

          {/* MINI TEMPLATES */}
          <div className="grid md:grid-cols-2 gap-6">
            <SectionCard title="One-page proposal (mini)" index={cardIndex++}>
              <p className="mb-2 text-sm">Copy this structure for small projects:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Title & 3-line abstract</li>
                <li>Problem & target group</li>
                <li>Objectives (2–3, measurable)</li>
                <li>Activities & timeline (table)</li>
                <li>Budget (summary)</li>
                <li>Indicators & risks</li>
              </ul>
            </SectionCard>

            {/* BUDGET TOTALS WITH SVG */}
            <SectionCard title="Budget totals (quick)" index={cardIndex++}>
              <img src={BudgetIcon} className="rounded-xl mb-3 w-1/2 mx-auto" />
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Total expenses: ______</li>
                <li>Total revenue/income: ______</li>
                <li>Profit/Loss: revenue − expenses = ______</li>
              </ul>
            </SectionCard>
          </div>

          {/* REFLECTION */}
          <SectionCard title="My Self-Reflection (Chapter 06)" index={cardIndex++}>
            <p>
              I learned to connect problem → objectives → activities → budget, and to measure results with clear indicators.
              For the next project, I will write a one-page proposal first, build an activity/resource plan,
              and keep all receipts and survey data for a strong evaluation report.
              I will compare estimated vs actual budget and list 3 lessons learned with actions for improvement.
            </p>
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
