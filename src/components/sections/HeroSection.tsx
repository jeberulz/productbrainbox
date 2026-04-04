"use client";

import {
  Package,
  ArrowRight,
  PlayCircle,
  Lock,
  ChevronDown,
  LayoutDashboard,
  CheckSquare,
  LayoutGrid,
  TrendingUp,
  Package as Delivery,
  Search,
  Calendar,
  Settings,
  Sun,
  Share2,
  Bell,
  FileText,
  MessageCircle,
  Clock,
} from "lucide-react";

/* ── Sidebar nav items ── */
const sidebarNav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CheckSquare, label: "Tasks" },
  { icon: LayoutGrid, label: "Board" },
  { icon: TrendingUp, label: "Timeline" },
  { icon: Delivery, label: "Deliverables" },
  { icon: Search, label: "Research" },
  { icon: Calendar, label: "Schedule" },
];

/* ── Stat cards ── */
const stats = [
  { label: "Total Tasks", value: "52" },
  { label: "In Progress", value: "0" },
  { label: "Deliverables", value: "52" },
  { label: "Hours", value: "106.5" },
];

/* ── Phase progress ── */
const phases = [
  { name: "Discovery", pct: 100, color: "bg-violet-500" },
  { name: "Research", pct: 85, color: "bg-fuchsia-500" },
  { name: "Ideation", pct: 60, color: "bg-pink-500" },
  { name: "Design", pct: 45, color: "bg-rose-500" },
  { name: "Testing", pct: 20, color: "bg-orange-500" },
  { name: "Handoff", pct: 10, color: "bg-amber-500" },
  { name: "Review", pct: 0, color: "bg-yellow-500" },
];

/* ── Recent activity ── */
const activities = [
  {
    icon: FileText,
    text: "Research report uploaded",
    time: "2 hours ago",
  },
  {
    icon: MessageCircle,
    text: "New comment on user flow",
    time: "4 hours ago",
  },
  {
    icon: CheckSquare,
    text: "Task 'Wireframe v2' completed",
    time: "5 hours ago",
  },
  {
    icon: Clock,
    text: "Sprint review scheduled",
    time: "Yesterday",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/328eb882-6e12-4e06-9851-229ebffa8b38_3840w.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.5)",
          maskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      {/* Ambient glow orb */}
      <div className="glow-orb fixed top-1/4 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-violet-500/[0.07] blur-3xl pointer-events-none" />

      {/* ── Hero content ── */}
      <div className="pt-40 pb-24 px-6 mx-auto max-w-4xl text-center">
        {/* Beta pill */}
        <div className="flex justify-center mb-8">
          <span className="border-gradient-btn inline-flex items-center gap-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Now in private beta — 847 designers on the waitlist
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08]">
          The workspace
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
            product designers
          </span>
          <br />
          actually deserve
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Plan research. Map journeys. Manage sprints. Deliver pixels. One
          workspace that understands how senior designers actually think and
          work.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="pill-beam-btn inline-flex items-center gap-2 bg-white text-zinc-950 font-medium text-sm px-6 py-3 rounded-full hover:bg-zinc-100 transition-colors">
            Start designing smarter
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="border-gradient-btn inline-flex items-center gap-2 text-sm">
            <PlayCircle className="h-4 w-4 text-violet-400" />
            Watch 2-min demo
          </button>
        </div>

        {/* ── App mockup ── */}
        <div className="mt-20 border-gradient-card rounded-2xl overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 bg-zinc-900/80 border-b border-white/5 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 rounded-md bg-zinc-800 px-3 py-1 text-xs text-zinc-500">
                <Lock className="h-3 w-3" />
                app.productbrainbox.com
              </div>
            </div>
          </div>

          {/* App body */}
          <div className="relative flex bg-zinc-950/90 min-h-[420px]">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-52 shrink-0 border-r border-white/5 bg-zinc-950/60 p-3 text-left">
              {/* Project switcher */}
              <button className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-white hover:bg-white/5 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <Package className="h-3 w-3 text-white" />
                </div>
                <span className="truncate">BrainBox</span>
                <ChevronDown className="ml-auto h-3.5 w-3.5 text-zinc-500" />
              </button>

              {/* Nav */}
              <nav className="flex flex-col gap-0.5 flex-1">
                {sidebarNav.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                      item.active
                        ? "bg-white/10 text-white font-medium"
                        : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Bottom */}
              <div className="mt-auto flex flex-col gap-0.5 pt-4 border-t border-white/5">
                <a
                  href="#"
                  className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </a>
                <div className="flex items-center gap-2.5 px-2 py-1.5">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
                  <span className="text-xs text-zinc-400 truncate">
                    John Iseghohi
                  </span>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-6 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Dashboard</h2>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <Sun className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/5">
                    <Bell className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/[0.04] border border-white/5 p-4"
                  >
                    <p className="text-xs text-zinc-500 mb-1">{s.label}</p>
                    <p className="text-xl font-semibold text-white">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Two-col panels */}
              <div className="grid md:grid-cols-2 gap-3">
                {/* Phase Progress */}
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                  <h3 className="text-sm font-medium text-white mb-4">
                    Phase Progress
                  </h3>
                  <div className="space-y-3">
                    {phases.map((p) => (
                      <div key={p.name}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-zinc-400">{p.name}</span>
                          <span className="text-zinc-500">{p.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${p.color}`}
                            style={{ width: `${p.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-xl bg-white/[0.04] border border-white/5 p-4">
                  <h3 className="text-sm font-medium text-white mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {activities.map((a, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5">
                          <a.icon className="h-3.5 w-3.5 text-zinc-400" />
                        </div>
                        <div>
                          <p className="text-sm text-zinc-300">{a.text}</p>
                          <p className="text-xs text-zinc-600">{a.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
