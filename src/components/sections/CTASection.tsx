"use client";

import { Package, ArrowRight, PlayCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[500px] rounded-full bg-violet-600/10 blur-[80px]" />
        <div className="absolute h-[200px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <Package className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to design
          <br />
          without the chaos?
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-lg text-lg text-zinc-400">
          Join 847 designers already on the waitlist and be the first to
          experience the future of product design.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="pill-beam-btn inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition">
            Get early access
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="border-gradient-btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition">
            <PlayCircle className="h-4 w-4 text-violet-400" />
            Watch demo
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-sm text-zinc-600">
          Free to start · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
