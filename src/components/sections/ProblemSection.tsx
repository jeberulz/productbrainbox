"use client";

import {
  AlertTriangle,
  Clock,
  X,
  FileText,
  Check,
  ArrowRight,
  Search,
  GitBranch,
  PenTool,
  MessageSquare,
  Mail,
  Send,
  Unlink,
} from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    label: "40% of your week is tool-switching",
  },
  {
    icon: X,
    color: "text-red-400",
    bg: "bg-red-400/10",
    label: "Research insights die in documents",
  },
  {
    icon: FileText,
    color: "text-zinc-400",
    bg: "bg-zinc-400/10",
    label: "Handoffs lack the 'why'",
  },
];

const toolCards = [
  { label: "Research", icon: Search, color: "bg-violet-500/20", text: "text-violet-400" },
  { label: "Planning", icon: GitBranch, color: "bg-blue-500/20", text: "text-blue-400" },
  { label: "Design", icon: PenTool, color: "bg-pink-500/20", text: "text-pink-400" },
  { label: "Feedback", icon: MessageSquare, color: "bg-amber-500/20", text: "text-amber-400" },
  { label: "Comms", icon: Mail, color: "bg-emerald-500/20", text: "text-emerald-400" },
  { label: "Handoff", icon: Send, color: "bg-sky-500/20", text: "text-sky-400" },
];

export default function ProblemSection() {
  return (
    <section className="max-w-7xl mx-auto sm:p-8 p-6 mt-32 mb-20 border border-white/10 rounded-3xl backdrop-blur-md bg-neutral-900/60 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="flex flex-col justify-between min-h-full gap-8">
          {/* Warning badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
              <AlertTriangle className="h-3.5 w-3.5" />
              The problem
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[1.1]">
              Your design process lives in 7&nbsp;different tabs.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Research in Notion. Journeys in Miro. Designs in Figma. Feedback
              in Slack. Nothing connects, and context gets lost at every
              handoff.
            </p>
          </div>

          {/* Pain points */}
          <div className="space-y-3">
            {painPoints.map((point) => (
              <div
                key={point.label}
                className="flex items-center gap-3"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${point.bg}`}
                >
                  <point.icon className={`h-4 w-4 ${point.color}`} />
                </div>
                <span className="text-sm text-zinc-300">{point.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom card */}
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                <Check className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  There&apos;s a better way
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  One workspace that unifies research, mapping, design, and
                  handoff — so your team never loses context again.
                </p>
                <a
                  href="#features"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  See how it works
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {/* Image card */}
          <div className="relative rounded-2xl overflow-hidden h-[320px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80"
              alt="Cluttered design workspace"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.6) saturate(0.8)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                The average design team uses{" "}
                <span className="text-amber-400">6.4 tools</span> per project
              </p>
            </div>
          </div>

          {/* Tool grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            {toolCards.map((tool) => (
              <div
                key={tool.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${tool.color}`}
                >
                  <tool.icon className={`h-4 w-4 ${tool.text}`} />
                </div>
                <span className="text-xs text-zinc-400">{tool.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom dashed card */}
          <div className="flex items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
              <Unlink className="h-4 w-4 text-zinc-500" />
            </div>
            <p className="text-sm text-zinc-500">
              None of these tools talk to each other
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
