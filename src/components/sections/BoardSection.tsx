"use client";

import {
  Layers,
  Tag,
  PlusCircle,
  ArrowRight,
  Package,
  Search,
  LayoutDashboard,
  Map,
  PenTool,
  GitBranch,
  FileText,
  Settings,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    label: "Organize tasks across customizable statuses and phases",
  },
  {
    icon: Tag,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    label: "Tag and filter by priority, phase, or assignee",
  },
  {
    icon: PlusCircle,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    label: "Create tasks from research findings in one click",
  },
];

const stats = [
  { label: "Backlog", value: "48" },
  { label: "Todo", value: "2" },
  { label: "In Progress", value: "1" },
  { label: "In Review", value: "0" },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Search, label: "Research" },
  { icon: Map, label: "Journey Map" },
  { icon: PenTool, label: "Design" },
  { icon: GitBranch, label: "Board", active: true },
  { icon: FileText, label: "Handoff" },
  { icon: Settings, label: "Settings" },
];

const velocityBars = [
  { height: "h-8", color: "bg-sky-500/40" },
  { height: "h-14", color: "bg-sky-500/50" },
  { height: "h-10", color: "bg-sky-500/45" },
  { height: "h-20", color: "bg-sky-500/60" },
  { height: "h-16", color: "bg-sky-500/55" },
  { height: "h-24", color: "bg-sky-400/70" },
  { height: "h-28", color: "bg-sky-400" },
];

const backlogCards = [
  {
    id: "AC-5",
    title: "Define brand color palette",
    phase: "Brand Foundation",
    phaseColor: "bg-fuchsia-500/20 text-fuchsia-300",
    priority: "Medium",
    priorityColor: "bg-amber-500/20 text-amber-300",
  },
  {
    id: "AC-6",
    title: "Create typography scale",
    phase: "Brand Foundation",
    phaseColor: "bg-fuchsia-500/20 text-fuchsia-300",
    priority: "Low",
    priorityColor: "bg-zinc-500/20 text-zinc-400",
  },
  {
    id: "AC-7",
    title: "Design logo variations",
    phase: "Visual Identity",
    phaseColor: "bg-red-500/20 text-red-300",
    priority: "Medium",
    priorityColor: "bg-amber-500/20 text-amber-300",
  },
  {
    id: "AC-8",
    title: "Build icon library",
    phase: "Visual Identity",
    phaseColor: "bg-red-500/20 text-red-300",
    priority: "Low",
    priorityColor: "bg-zinc-500/20 text-zinc-400",
  },
];

const todoCards = [
  {
    id: "AC-2",
    title: "Audit current AutoCrew site",
    priority: "High",
    priorityColor: "bg-orange-500/20 text-orange-300",
  },
  {
    id: "AC-3",
    title: "Analyze top 5 competitors",
    priority: "Urgent",
    priorityColor: "bg-red-500/20 text-red-300",
  },
];

export default function BoardSection() {
  return (
    <section id="board" className="overflow-hidden pt-24 px-6 pb-24">
      <div className="relative max-w-6xl mx-auto">
        {/* Background glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-amber-500/20 via-zinc-500/10 to-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Two-column intro */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              Visual board
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-white">See every task.</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-300 bg-clip-text text-transparent">
                Move with intention.
              </span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Your kanban board connects directly to your research and design
              phases. Drag tasks between statuses, track sprint velocity, and
              keep every deliverable aligned with the bigger picture.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${f.bg}`}
                  >
                    <f.icon className={`h-4 w-4 ${f.color}`} />
                  </div>
                  <span className="text-sm text-zinc-300">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="border-gradient-card p-4">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-zinc-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Sprint velocity chart card */}
            <div className="border-gradient-card p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sprint Velocity
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">Last 7 sprints</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  23% faster
                </span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {velocityBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${bar.height} ${bar.color} rounded-t-md transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full app mockup */}
        <div className="relative border-gradient-card">
          <div className="bg-[#0f0f13] rounded-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 max-w-md mx-auto">
                <div className="h-6 rounded-md bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] text-zinc-500">
                    app.productbrainbox.com/board
                  </span>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="hidden lg:flex flex-col w-52 border-r border-white/5 p-3 shrink-0">
                <div className="flex items-center gap-2 px-2 mb-6">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                    <Package className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-white">
                    ProductBrainBox
                  </span>
                </div>

                <div className="space-y-0.5">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-colors ${
                        item.active
                          ? "bg-white/[0.06] text-amber-400"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="board-mask-bottom board-mask-right">
                  {/* Breadcrumb + header */}
                  <div className="px-5 pt-4">
                    <p className="text-[10px] text-zinc-500 mb-2">
                      AutoCrew{" "}
                      <span className="text-zinc-600 mx-1">&gt;</span> Board
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          Board
                        </h3>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          52 tasks across 4 statuses
                        </p>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 text-xs font-medium hover:bg-amber-500/30 transition-colors">
                        <Plus className="h-3 w-3" />
                        New Task
                      </button>
                    </div>
                  </div>

                  {/* Kanban columns */}
                  <div className="px-5 pb-8">
                    <div className="flex gap-3 overflow-x-auto">
                      {/* Backlog column */}
                      <div className="shrink-0 w-56 sm:w-64">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-zinc-500" />
                            <span className="text-xs font-medium text-zinc-300">
                              Backlog
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-600">48</span>
                        </div>
                        <div className="space-y-2">
                          {backlogCards.map((card) => (
                            <div
                              key={card.id}
                              className="rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:border-white/10 transition-colors"
                            >
                              <p className="text-[10px] text-zinc-600 mb-1">
                                {card.id}
                              </p>
                              <p className="text-xs font-medium text-white mb-2">
                                {card.title}
                              </p>
                              <div className="flex gap-1.5 flex-wrap">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${card.phaseColor}`}
                                >
                                  {card.phase}
                                </span>
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${card.priorityColor}`}
                                >
                                  {card.priority}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Todo column */}
                      <div className="shrink-0 w-56 sm:w-64">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                            <span className="text-xs font-medium text-zinc-300">
                              Todo
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-600">2</span>
                        </div>
                        <div className="space-y-2">
                          {todoCards.map((card) => (
                            <div
                              key={card.id}
                              className="rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:border-white/10 transition-colors"
                            >
                              <p className="text-[10px] text-zinc-600 mb-1">
                                {card.id}
                              </p>
                              <p className="text-xs font-medium text-white mb-2">
                                {card.title}
                              </p>
                              <div className="flex gap-1.5">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${card.priorityColor}`}
                                >
                                  {card.priority}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* In Progress column */}
                      <div className="shrink-0 w-56 sm:w-64">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sky-500" />
                            <span className="text-xs font-medium text-zinc-300">
                              In Progress
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-600">1</span>
                        </div>
                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:border-white/10 transition-colors">
                            <p className="text-[10px] text-zinc-600 mb-1">
                              AC-1
                            </p>
                            <p className="text-xs font-medium text-white mb-2">
                              Interview 3 existing users
                            </p>
                            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-1.5">
                              <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-sky-500 to-sky-400" />
                            </div>
                            <p className="text-[10px] text-zinc-500">
                              60% complete
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* In Review column */}
                      <div className="shrink-0 w-56 sm:w-64">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-violet-500" />
                            <span className="text-xs font-medium text-zinc-300">
                              In Review
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-600">1</span>
                        </div>
                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 hover:border-white/10 transition-colors">
                            <p className="text-[10px] text-zinc-600 mb-1">
                              AC-4
                            </p>
                            <p className="text-xs font-medium text-white mb-2">
                              Compile research findings report
                            </p>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] text-zinc-500">
                                3 comments
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none rounded-b-xl" />
        </div>

        {/* Bottom callout */}
        <div className="text-center mt-12">
          <p className="text-zinc-400 text-sm mb-3">
            Every task, every status, every priority — at a glance.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            See the board in action
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
