"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Package } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Research Hub", href: "#research-hub" },
  { label: "Board", href: "#board" },
  { label: "Workflow", href: "#workflow" },
  { label: "Designers", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10" : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: "rgba(9,9,11,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
            <Package className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">
            ProductBrainBox
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden sm:inline-block text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a href="#" className="border-gradient-btn text-sm">
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
