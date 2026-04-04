"use client";

const steps = [
  {
    number: "1",
    colorClass: "bg-violet-500/10 text-violet-400",
    title: "Define your project scope",
    description:
      "Describe what you're building and the AI generates a full project plan — phases, milestones, and deliverables mapped out automatically.",
    tags: ["Auto-generated phases", "Smart time estimates", "Deliverable tracking"],
  },
  {
    number: "2",
    colorClass: "bg-emerald-500/10 text-emerald-400",
    title: "Research & discover automatically",
    description:
      "Your Research Hub populates with competitor analyses, heuristic evaluations, and user persona insights — all before you open a design tool.",
    tags: ["6+ competitors analyzed", "10 heuristic criteria", "AI personas"],
  },
  {
    number: "3",
    colorClass: "bg-amber-500/10 text-amber-400",
    title: "Design & iterate with context",
    description:
      "Move to your Board with full context at your fingertips. Every task links back to research findings so decisions stay grounded.",
    tags: ["Kanban board", "Timeline view", "Connected research"],
  },
  {
    number: "4",
    colorClass: "bg-fuchsia-500/10 text-fuchsia-400",
    title: "Hand off with the full story",
    description:
      "Generate smart handoff links that bundle deliverables, design rationale, and token references into a single shareable page.",
    tags: ["One-link handoff", "Design rationale", "Token references"],
  },
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px] translate-x-24" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            How it works
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From idea to handoff in 4 steps
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            ProductBrainBox guides your entire product design workflow so nothing falls through the cracks.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-gradient-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Number */}
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ${step.colorClass}`}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
