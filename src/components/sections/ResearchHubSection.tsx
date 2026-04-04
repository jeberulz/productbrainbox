"use client";

import {
  Search,
  ClipboardList,
  Bookmark,
  ArrowRight,
  Package,
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
    icon: Search,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    label: "Auto-research competitors, trends, and best practices",
  },
  {
    icon: ClipboardList,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    label: "Generate heuristic evaluations in seconds",
  },
  {
    icon: Bookmark,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    label: "Save and organize references with AI tagging",
  },
];

const stats = [
  { label: "Competitors", value: "6" },
  { label: "Heuristics", value: "10" },
  { label: "Personas", value: "3" },
  { label: "References", value: "22" },
];

const tabs = [
  { label: "Competitors", count: 6, active: true },
  { label: "Heuristics", count: 10, active: false },
  { label: "Personas", count: 3, active: false },
  { label: "References", count: 22, active: false },
];

const competitorCards = [
  {
    name: "Intercom",
    desc: "AI-first customer service platform with chatbots, help desk, and proactive support.",
    tags: [
      { label: "Chat", color: "bg-sky-500/20 text-sky-300" },
      { label: "AI", color: "bg-violet-500/20 text-violet-300" },
    ],
  },
  {
    name: "Drift",
    desc: "Conversational marketing and sales platform focused on revenue acceleration.",
    tags: [
      { label: "Sales", color: "bg-amber-500/20 text-amber-300" },
      { label: "Chat", color: "bg-sky-500/20 text-sky-300" },
    ],
  },
  {
    name: "Tidio",
    desc: "Live chat and chatbot combo for small-to-mid e-commerce businesses.",
    tags: [
      { label: "E-commerce", color: "bg-emerald-500/20 text-emerald-300" },
      { label: "Chat", color: "bg-sky-500/20 text-sky-300" },
    ],
  },
  {
    name: "Crisp",
    desc: "All-in-one messaging platform with shared inbox and knowledge base.",
    tags: [
      { label: "Inbox", color: "bg-pink-500/20 text-pink-300" },
      { label: "Knowledge", color: "bg-teal-500/20 text-teal-300" },
    ],
  },
  {
    name: "Botpress",
    desc: "Open-source chatbot builder with visual flow editor and NLU engine.",
    tags: [
      { label: "Open Source", color: "bg-orange-500/20 text-orange-300" },
      { label: "NLU", color: "bg-violet-500/20 text-violet-300" },
    ],
  },
  {
    name: "Voiceflow",
    desc: "Collaborative platform for designing and shipping voice and chat assistants.",
    tags: [
      { label: "Voice", color: "bg-fuchsia-500/20 text-fuchsia-300" },
      { label: "Design", color: "bg-rose-500/20 text-rose-300" },
    ],
  },
];

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Search, label: "Research", active: true },
  { icon: Map, label: "Journey Map" },
  { icon: PenTool, label: "Design" },
  { icon: GitBranch, label: "Board" },
  { icon: FileText, label: "Handoff" },
  { icon: Settings, label: "Settings" },
];

export default function ResearchHubSection() {
  return (
    <section id="research-hub" className="overflow-hidden pt-24 px-6 pb-24">
      <div className="relative max-w-6xl mx-auto">
        {/* Background glow orb */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Two-column intro */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              AI Research Hub
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
              <span className="text-white">Research that builds</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                itself as you design.
              </span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Stop spending hours gathering insights manually.
              ProductBrainBox&apos;s AI research engine continuously discovers
              competitors, evaluates heuristics, and organizes references — so
              you can focus on designing.
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

            {/* Research entries card */}
            <div className="border-gradient-card p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-3xl font-bold text-white">41</p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Research entries
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  AI-generated
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
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
                    app.productbrainbox.com/research
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
                          ? "bg-white/[0.06] text-emerald-400"
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
                <div className="board-mask-bottom">
                  {/* Breadcrumb + header */}
                  <div className="px-5 pt-4">
                    <p className="text-[10px] text-zinc-500 mb-2">
                      AutoCrew{" "}
                      <span className="text-zinc-600 mx-1">&gt;</span>{" "}
                      Research
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          Research Hub
                        </h3>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          41 entries
                        </p>
                      </div>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/30 transition-colors">
                        <Plus className="h-3 w-3" />
                        Add Research
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 border-b border-white/5">
                      {tabs.map((tab) => (
                        <button
                          key={tab.label}
                          className={`pb-2.5 text-xs font-medium transition-colors ${
                            tab.active
                              ? "text-emerald-400 border-b-2 border-emerald-400"
                              : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          {tab.label}
                          <span className="ml-1.5 text-[10px] text-zinc-600">
                            {tab.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Competitor cards grid */}
                  <div className="px-5 pt-4 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {competitorCards.map((card) => (
                        <div
                          key={card.name}
                          className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-white/10 transition-colors"
                        >
                          <h4 className="text-sm font-semibold text-white mb-1.5">
                            {card.name}
                          </h4>
                          <p className="text-[11px] text-zinc-500 leading-relaxed mb-3">
                            {card.desc}
                          </p>
                          <div className="flex gap-1.5 flex-wrap">
                            {card.tags.map((tag) => (
                              <span
                                key={tag.label}
                                className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${tag.color}`}
                              >
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
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
            Research that works while you sleep.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Explore the Research Hub
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
