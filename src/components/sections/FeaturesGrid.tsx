"use client";

import {
  Map,
  Users,
  CheckSquare,
  LayoutGrid,
  Package,
  Link,
  Check,
} from "lucide-react";

const journeyPhases = [
  { label: "Discovery", color: "bg-violet-500/20 text-violet-300" },
  { label: "Research", color: "bg-emerald-500/20 text-emerald-300" },
  { label: "Synthesis", color: "bg-amber-500/20 text-amber-300" },
  { label: "Mapping", color: "bg-sky-500/20 text-sky-300" },
  { label: "Insights", color: "bg-fuchsia-500/20 text-fuchsia-300" },
];

const researchChecks = [
  "Auto-transcription",
  "Affinity mapping",
  "Insight clusters",
];

const trackerSquares = [
  "bg-violet-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-sky-500",
  "bg-pink-500",
  "bg-fuchsia-500",
  "bg-blue-500",
  "bg-red-500",
];

const features = [
  {
    title: "Journey Intelligence",
    description:
      "Map every user journey from discovery through delivery. AI-powered insights connect research to design decisions automatically.",
    icon: Map,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/15",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Research Hub",
    description:
      "Centralize user interviews, surveys, and usability tests. Surface patterns across all your qualitative data.",
    icon: Users,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    colSpan: "",
  },
  {
    title: "Design Sprints",
    description:
      "Run structured design sprints with built-in timers, voting, and async collaboration across time zones.",
    icon: CheckSquare,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/15",
    colSpan: "",
  },
  {
    title: "Component Tracker",
    description:
      "Track design system adoption across every project. Know which components are used, outdated, or missing.",
    icon: LayoutGrid,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/15",
    colSpan: "",
  },
  {
    title: "Smart Handoff",
    description:
      "Generate developer handoffs that include the research context, journey stage, and design rationale — not just specs.",
    icon: Package,
    iconColor: "text-fuchsia-400",
    iconBg: "bg-fuchsia-500/15",
    colSpan: "lg:col-span-1",
  },
] as const;

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            One workspace. Every phase.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From initial research to final handoff, ProductBrainBox keeps every
            decision, artifact, and insight connected.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`border-gradient-card p-6 min-h-[280px] flex flex-col ${feature.colSpan}`}
            >
              {/* Icon */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconBg} mb-4`}
              >
                <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
              </div>

              {/* Title & description */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-auto">
                {feature.description}
              </p>

              {/* Custom bottom content per card */}
              {feature.title === "Journey Intelligence" && (
                <div className="relative mt-6">
                  <div className="mask-fade-x flex items-center gap-2 overflow-hidden">
                    {journeyPhases.map((phase) => (
                      <span
                        key={phase.label}
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${phase.color}`}
                      >
                        {phase.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {feature.title === "Research Hub" && (
                <div className="mt-6 space-y-2.5">
                  {researchChecks.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="text-xs text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {feature.title === "Design Sprints" && (
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "bg-violet-500",
                      "bg-emerald-500",
                      "bg-amber-500",
                    ].map((bg, i) => (
                      <div
                        key={i}
                        className={`h-7 w-7 rounded-full ${bg} border-2 border-neutral-900`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400">
                    3 designers active
                  </span>
                </div>
              )}

              {feature.title === "Component Tracker" && (
                <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-1.5">
                  {trackerSquares.map((bg, i) => (
                    <div
                      key={i}
                      className={`h-6 w-full rounded ${bg} opacity-60`}
                    />
                  ))}
                </div>
              )}

              {feature.title === "Smart Handoff" && (
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 px-3 py-1.5 text-xs text-fuchsia-300 font-medium">
                    <Link className="h-3 w-3" />
                    Handoff ready
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
