"use client";

import { Globe, Link2, MessageCircle, Mail } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Research Hub", href: "#research-hub" },
  { label: "Board", href: "#board" },
  { label: "Pricing", href: "#pricing" },
  { label: "Changelog", href: "#changelog" },
];

const resourceLinks = [
  { label: "Documentation", href: "#docs" },
  { label: "Blog", href: "#blog" },
  { label: "Community", href: "#community" },
  { label: "Templates", href: "#templates" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const socialIcons = [
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-lg font-bold text-white">
              ProductBrainBox
            </a>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              The 360&deg; workspace for product designers who refuse to
              compromise.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">
              Product
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-zinc-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; 2024 ProductBrainBox. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] text-zinc-500 transition hover:text-zinc-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
