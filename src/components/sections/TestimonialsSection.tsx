"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "Senior Designer at Stripe",
    gradient: "from-violet-500 to-fuchsia-500",
    quote:
      "The research hub alone saves me 8 hours a week. I used to spend entire mornings gathering competitor screenshots and writing heuristic notes — now it's done before my first coffee.",
  },
  {
    initials: "MR",
    name: "Marcus Rivera",
    role: "Lead Designer at Linear",
    gradient: "from-emerald-500 to-teal-500",
    quote:
      "The board view is what Jira wishes it was — built for designers, not engineers. I can finally manage my own workflow without fighting a tool that wasn't made for me.",
  },
  {
    initials: "AL",
    name: "Aya Levine",
    role: "Staff Designer at Figma",
    gradient: "from-sky-500 to-blue-500",
    quote:
      "The AI competitor analysis is shockingly thorough. It caught UX patterns across six competitors I wouldn't have found on my own.",
  },
  {
    initials: "DT",
    name: "David Thornton",
    role: "Design Director at Shopify",
    gradient: "from-amber-500 to-orange-500",
    colSpan: "md:col-span-2 lg:col-span-2",
    quote:
      "We cut our tool stack from five apps to one. Research, planning, task management, and handoff all live in ProductBrainBox now. Our team onboarding went from two weeks to two days, and the quality of our design rationale has never been higher.",
  },
  {
    initials: "JW",
    name: "Jenna Walsh",
    role: "Freelance Product Designer",
    gradient: "from-fuchsia-500 to-pink-500",
    quote:
      "As a freelancer, this makes me look incredibly professional. Clients get a single handoff link with every decision documented — they love it.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill="currentColor"
          className="text-amber-400"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-400">
            From beta testers
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Designers who got early access
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Here's what they had to say after using ProductBrainBox on real projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`border-gradient-card p-6 ${t.colSpan ?? ""}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-xs font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4">
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
