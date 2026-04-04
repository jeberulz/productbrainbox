"use client";

import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    features: [
      "1 active project",
      "Basic research hub",
      "Board & task views",
      "Community support",
    ],
    cta: "Get started free",
    ctaClass: "border-gradient-btn",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Unlimited projects",
      "Full AI research hub",
      "Smart handoff links",
      "Timeline & schedule views",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    ctaClass: "pill-beam-btn",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/seat/month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Client sharing portals",
      "Advanced analytics",
      "Dedicated support",
    ],
    cta: "Contact sales",
    ctaClass: "border-gradient-btn",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute h-[300px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple, honest pricing
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400">
            Start free. Upgrade when your projects demand more power.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-gradient-card relative flex flex-col p-6 ${
                plan.popular ? "bg-[rgba(167,139,250,0.03)]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-400">{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle
                      className={`h-4 w-4 shrink-0 ${
                        plan.popular ? "text-violet-400" : "text-zinc-500"
                      }`}
                    />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-xl px-6 py-3 text-sm font-medium transition ${
                  plan.ctaClass
                } ${plan.popular ? "bg-white text-zinc-900" : ""}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
